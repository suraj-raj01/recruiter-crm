'use client';

import { useEffect, useState } from "react";
import { api } from "@/services/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Users, Briefcase, UserCheck, TrendingUp, Star,
  Clock, MapPin, Building2, CalendarDays, Zap,
  Activity, Target, ArrowUpRight,
} from "lucide-react";

// ─── Types ───────────────────────────────────────────────────────────────────
import { Candidate, Job, Metrics, User } from "@/types/dashboard";
// ─── Badge ───────────────────────────────────────────────────────────────────
import { STAGE_BADGE, STAGE_BAR, SOURCE_COLOR, PRIORITY_BADGE, STAGE_DOT } from "@/services/constants";
import { getInitials } from "@/services/initials";
import { formatDate } from "@/services/formatdate";
import Link from "next/link";
import CandidateViewModal from "./components/CandidateViewModel";


function timeAgo(dateStr: string): string {
  const diffMs = Date.now() - new Date(dateStr).getTime();
  const diffH = Math.floor(diffMs / 36e5);
  const diffD = Math.floor(diffMs / 864e5);
  if (diffH < 1) return "just now";
  if (diffH < 24) return `${diffH}h ago`;
  if (diffD === 1) return "yesterday";
  return `${diffD}d ago`;
}

function isDuePast(dateStr: string): boolean {
  return new Date(dateStr) < new Date();
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${i <= rating
            ? "fill-amber-400 text-amber-400"
            : "fill-slate-100 text-slate-200"
            }`}
        />
      ))}
    </div>
  );
}

function StageBadge({ stage }: { stage: string }) {
  return (
    <span
      className={`inline-flex min-w-20 py-1 items-center gap-1 text-xs px-2 rounded-full font-medium ${STAGE_BADGE[stage] ?? "bg-slate-50 text-slate-600 border border-slate-100"
        }`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${STAGE_DOT[stage] ?? "bg-slate-400"}`} />
      {stage}
    </span>
  );
}

function MetricCard({
  icon: Icon,
  iconBg,
  iconColor,
  label,
  value,
  sub,
}: {
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
  label: string;
  value: string | number;
  sub?: string;
}) {
  return (
    <Card className="border-slate-200 shadow-none rounded-sm">
      <CardContent className="p-5">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">
              {label}
            </p>
            <p className="text-3xl font-bold text-slate-500 tabular-nums leading-none">
              {value}
            </p>
            {sub && (
              <p className="text-xs text-slate-400 mt-1.5">{sub}</p>
            )}
          </div>
          <div className={`w-10 h-10 rounded-md flex items-center justify-center ${iconBg}`}>
            <Icon className={`w-5 h-5 ${iconColor}`} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// ─── Dashboard ────────────────────────────────────────────────────────────────

export default function Dashboard() {
  const [profile, setProfile] = useState<User | null>(null);
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [metrics, setMetrics] = useState<Metrics | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedId, setSelectedId] = useState("");
  const [open, setOpen] = useState(false);

  const loadDashboard = async () => {
    try {
      setLoading(true);
      const [me, candidatesRes, jobsRes, metricsRes] = await Promise.all([
        api.me(),
        api.getCandidates(),
        api.getJobs(),
        api.getMetrics(),
      ]);

      // handle both wrapped {user}/{candidates}/{jobs}/{metrics} and direct responses
      setProfile(me?.user ?? me ?? null);
      setCandidates(candidatesRes?.candidates ?? candidatesRes ?? []);
      setJobs(jobsRes?.jobs ?? jobsRes ?? []);
      setMetrics(metricsRes?.metrics ?? metricsRes ?? null);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("ats_token");
    if (token) loadDashboard();
    else setLoading(false);
  }, []);

  // derived
  const maxStage = Math.max(...(metrics?.stageCounts.map((s) => s.count) ?? [1]), 1);
  const maxSource = Math.max(...Object.values(metrics?.sourceCounts ?? { _: 1 }), 1);
  const firstName = profile?.name?.split(" ")[0] ?? "there";
  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";

  // ── Loading ──
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-[3px] border-blue-500 border-t-transparent rounded-full animate-spin" />
          <p className="text-sm text-slate-400">Loading dashboard…</p>
        </div>
      </div>
    );
  }

  // ── Main ──
  return (
    <div className="min-h-screen p-6 space-y-6">
      <div className="max-w-7xl mx-auto space-y-6">

        {/* ── Header ── */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-600 tracking-tight">
              {greeting}, {firstName} 👋
            </h1>
            <p className="text-sm text-slate-400 mt-0.5">
              Here's your hiring pipeline at a glance.
            </p>
          </div>
        </div>

        {/* ── Metric Cards ── */}
        {metrics && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            <MetricCard
              icon={Users}
              iconBg="bg-blue-50"
              iconColor="text-blue-600"
              label="Total"
              value={metrics.totalCandidates}
              sub="All candidates"
            />
            <MetricCard
              icon={Zap}
              iconBg="bg-violet-50"
              iconColor="text-violet-600"
              label="Active"
              value={metrics.activeCandidates}
              sub="In pipeline"
            />
            <MetricCard
              icon={Briefcase}
              iconBg="bg-amber-50"
              iconColor="text-amber-600"
              label="Open Jobs"
              value={metrics.openJobs}
              sub="Positions"
            />
            <MetricCard
              icon={UserCheck}
              iconBg="bg-emerald-50"
              iconColor="text-emerald-600"
              label="Hired"
              value={metrics.hired}
              sub="This period"
            />
            <div className="col-span-2 sm:col-span-1">
              <MetricCard
                icon={Target}
                iconBg="bg-rose-50"
                iconColor="text-rose-500"
                label="Avg Rating"
                value={metrics.averageRating}
                sub={`${metrics.conversionRate}% conversion`}
              />
            </div>
          </div>
        )}

        {/* ── Pipeline + Sources ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Pipeline */}
          <Card className="border-slate-200 shadow-none rounded-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-semibold text-slate-500 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-blue-500" />
                Hiring Pipeline
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 pt-1">
              {metrics?.stageCounts.map(({ stage, count }) => (
                <div key={stage} className="flex items-center gap-3">
                  {/* label */}
                  <div className="w-19 shrink-0 flex justify-end">
                    <StageBadge stage={stage} />
                  </div>
                  {/* bar */}
                  <div className="flex-1 rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${STAGE_BAR[stage] ?? "bg-slate-400"}`}
                      style={{ width: `${(count / maxStage) * 100}%` }}
                    />
                  </div>
                  {/* count */}
                  <span className="w-5 text-right text-sm font-semibold text-slate-700 tabular-nums">
                    {count}
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Sources */}
          <Card className="border-slate-200 shadow-none rounded-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-semibold text-slate-500 flex items-center gap-2">
                <ArrowUpRight className="w-4 h-4 text-violet-500" />
                Candidate Sources
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 pt-1">
              {Object.entries(metrics?.sourceCounts ?? {}).map(([source, count]) => (
                <div key={source} className="flex items-center gap-3">
                  <Badge className={`min-w-19 shrink-0 rounded-full py-3 ${SOURCE_COLOR[source] ?? "bg-slate-400"
                    } text-right text-xs font-medium text-slate-100`}>
                    {source}
                  </Badge>
                  <div className="flex-1 bg-slate-100 rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${SOURCE_COLOR[source] ?? "bg-slate-400"
                        }`}
                      style={{ width: `${(count / maxSource) * 100}%` }}
                    />
                  </div>
                  <span className="w-5 text-right text-sm font-semibold text-slate-700 tabular-nums">
                    {count}
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* ── Due Soon + Activity ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Due Soon */}
          <Card className="border-slate-200 shadow-none rounded-sm">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-orange-500" />
                  Due Soon
                </CardTitle>
                {(metrics?.dueSoon.length ?? 0) > 0 && (
                  <Badge className="bg-orange-100 text-orange-700 border-0 hover:bg-orange-100 text-xs">
                    {metrics!.dueSoon.length} pending
                  </Badge>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-2 pt-1">
              {(metrics?.dueSoon.length ?? 0) === 0 ? (
                <div className="text-center py-8">
                  <p className="text-2xl mb-1">🎉</p>
                  <p className="text-sm text-slate-400">Nothing due — you're on top of it.</p>
                </div>
              ) : (
                metrics!.dueSoon.map((c: any) => {
                  const overdue = isDuePast(c.nextStepDueDate);
                  // console.log(c,'due')
                  return (
                    <div
                      key={c.id}
                      className="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-slate-200 hover:shadow-sm transition-all cursor-pointer"
                      onClick={() => {
                        setSelectedId(c.id);
                        setOpen(true);
                      }}
                    >
                      <Avatar className="h-9 w-9 shrink-0">
                        <AvatarFallback className="text-white text-xs font-bold bg-slate-500">
                          {getInitials(c.name)}
                        </AvatarFallback>
                      </Avatar>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2 mb-0.5">
                          <p className="text-sm font-semibold text-slate-500 truncate">{c.name}</p>
                          <StageBadge stage={c.stage} />
                        </div>
                        <p className="text-xs text-slate-500 truncate">{c.nextStep}</p>
                        <div className="flex items-center gap-1 mt-1.5">
                          <CalendarDays className={`w-3 h-3 ${overdue ? "text-red-400" : "text-orange-400"}`} />
                          <span className={`text-xs font-medium ${overdue ? "text-red-500" : "text-orange-500"}`}>
                            {overdue ? "Overdue · " : "Due "}
                            {formatDate(c.nextStepDueDate)}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="border-slate-200 shadow-none rounded-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-semibold text-slate-500 flex items-center gap-2">
                <Activity className="w-4 h-4 text-blue-500" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-1">
              <ul className="space-y-0 divide-y divide-slate-200 dark:divide-slate-700">
                {metrics?.recentActivity.map((item) => (
                  <li key={item._id} className="flex items-start gap-3 py-3">
                    {/* icon bubble */}
                    <div
                      className={`mt-0.5 w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${item.type === "stage"
                        ? "bg-blue-50"
                        : "bg-violet-50"
                        }`}
                    >
                      {item.type === "stage" ? (
                        <TrendingUp className="w-3.5 h-3.5 text-blue-500" />
                      ) : (
                        <Users className="w-3.5 h-3.5 text-violet-500" />
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-slate-500 leading-snug">
                        <span className="font-semibold">{item.candidateName}</span>
                        {" — "}
                        <span className="text-slate-500">{item.message}</span>
                      </p>
                      <p className="text-xs text-slate-400 mt-0.5">{timeAgo(item.createdAt)}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* ── Candidates Table ── */}
        <Card className="border-slate-200 shadow-none overflow-hidden rounded-sm">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-semibold text-slate-500 flex items-center justify-center gap-2">
                <Users className="w-4 h-4 text-blue-500" />
                All Candidates
                <span className="text-xs bg-orange-100/50 text-accent-foreground rounded-full h-5 w-5 flex items-center justify-center font-bold">{candidates.length}</span>
              </CardTitle>
              <Link href="/dashboard/candidate" className="text-sm text-slate-400">View all</Link>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 border-y border-slate-100">
                    <th className="text-left text-[11px] font-semibold text-slate-400 px-6 py-3 uppercase tracking-wider">
                      Candidate
                    </th>
                    <th className="text-left text-[11px] font-semibold text-slate-400 px-4 py-3 uppercase tracking-wider">
                      Stage
                    </th>
                    <th className="text-left text-[11px] font-semibold text-slate-400 px-4 py-3 uppercase tracking-wider hidden md:table-cell">
                      Role
                    </th>
                    <th className="text-left text-[11px] font-semibold text-slate-400 px-4 py-3 uppercase tracking-wider hidden lg:table-cell">
                      Location
                    </th>
                    <th className="text-left text-[11px] font-semibold text-slate-400 px-4 py-3 uppercase tracking-wider hidden lg:table-cell">
                      Rating
                    </th>
                    <th className="text-left text-[11px] font-semibold text-slate-400 px-4 py-3 uppercase tracking-wider hidden xl:table-cell">
                      Source
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {candidates.map((c: any) => (
                    <tr
                      key={c?.id}
                      onClick={() => {
                        setSelectedId(c?.id);
                        setOpen(true);
                      }}
                      className="hover:bg-slate-50/70 transition-colors cursor-pointer group"
                    >
                      {/* Candidate */}
                      <td className="px-6 py-3.5">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8 shrink-0">
                            <AvatarFallback className="text-white text-xs font-bold bg-slate-600">
                              {getInitials(c.name)}
                            </AvatarFallback>
                          </Avatar>
                          <div className="min-w-0">
                            <p className="font-semibold text-slate-800 text-sm leading-none mb-0.5">
                              {c.name}
                            </p>
                            <p className="text-xs text-slate-400 truncate max-w-50">
                              {c.headline}
                            </p>
                          </div>
                        </div>
                      </td>

                      {/* Stage */}
                      <td className="px-4 py-3.5">
                        <StageBadge stage={c.stage} />
                      </td>

                      {/* Role */}
                      <td className="px-4 py-3.5 hidden md:table-cell">
                        <p className="text-sm font-medium text-slate-700 leading-none mb-0.5">
                          {c.job?.title}
                        </p>
                        <p className="text-xs text-slate-400">{c.job?.department}</p>
                      </td>

                      {/* Location */}
                      <td className="px-4 py-3.5 hidden lg:table-cell">
                        <div className="flex items-center gap-1 text-slate-500">
                          <MapPin className="w-3 h-3 shrink-0" />
                          <span className="text-xs">{c.location}</span>
                        </div>
                      </td>

                      {/* Rating */}
                      <td className="px-4 py-3.5 hidden lg:table-cell">
                        <StarRating rating={c.rating} />
                      </td>

                      {/* Source */}
                      <td className="px-4 py-3.5 hidden xl:table-cell">
                        <span
                          className={`text-xs px-3 py-1.5 rounded-full font-medium ${SOURCE_COLOR[c.source]
                            ? "text-white " + SOURCE_COLOR[c.source]
                            : "bg-slate-100 text-slate-500"
                            }`}
                        >
                          {c.source}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* ── Open Jobs ── */}
        <div>
          <div className="flex items-center gap-2 mb-4 ">
            <Briefcase className="w-4 h-4 text-amber-500" />
            <h2 className="text-sm font-semibold text-slate-500">Open Positions</h2>
            <Badge className="bg-amber-50 text-amber-700 border-0 hover:bg-amber-50 text-xs ml-1">
              {jobs.length}
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {jobs.map((job: any) => (
              <Card
                key={job.id}
                className="border-slate-200 shadow-none hover:border-blue-200 hover:shadow-md transition-all cursor-pointer group rounded-sm"
              >
                <CardContent className="p-5">
                  {/* Top row */}
                  <div className="flex items-start justify-between gap-2 mb-4">
                    <div className="min-w-0">
                      <h3 className="font-semibold text-slate-500 text-sm leading-tight mb-0.5 group-hover:text-blue-600 transition-colors">
                        {job.title}
                      </h3>
                      <p className="text-xs text-slate-400">{job.department}</p>
                    </div>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full font-medium shrink-0 ${PRIORITY_BADGE[job.priority] ?? "bg-slate-50 text-slate-500 border border-slate-100"
                        }`}
                    >
                      {job.priority}
                    </span>
                  </div>

                  {/* Meta */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-1.5 text-slate-500">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      <span className="text-xs">{job.location}</span>
                      <span className="text-slate-200 mx-0.5">·</span>
                      <span className="text-xs">{job.employmentType}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-500">
                      <Building2 className="w-3.5 h-3.5 shrink-0" />
                      <span className="text-xs">{job.hiringManager}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span className="text-xs font-semibold text-emerald-600">{job.salaryRange}</span>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1.5">
                    {job.skills.slice(0, 3).map((skill: any) => (
                      <span
                        key={skill}
                        className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                    {job.skills.length > 3 && (
                      <span className="text-xs text-slate-400 px-1 py-0.5">
                        +{job.skills.length - 3} more
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        {/* candidate view model */}
        <CandidateViewModal
          id={selectedId}
          open={open}
          onOpenChange={setOpen}
        />
      </div>
    </div>
  );
}