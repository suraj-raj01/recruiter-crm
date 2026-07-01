'use client'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { api, setAuthToken } from "@/services/api"
import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import Link from "next/link"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {

  const [formData, setFormData] = React.useState({
    email: "suraj@talentdeck.dev",
    password: "suraj123",
  })
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = React.useState({
    email: "",
    password: "",
  })

  const navigate = useRouter();
  useEffect(()=>{
    const token = localStorage.getItem("ats_token");
    if(token) navigate.push("/dashboard")
  })

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      setLoading(true)
      if(formData.email === ""){
        setErrors({
          email: "Email is required",
          password: "",
        })
        return
      }
      if(formData.password === ""){
        setErrors({
          email: "",
          password: "Password is required",
        })
        return
      }
      const response = await api.login(formData)
      localStorage.setItem("ats_token", response?.token);
      localStorage.setItem("ats_user", JSON.stringify(response?.user))
      setAuthToken(response?.token)
      navigate.push("/dashboard")
      // console.log(response)
      toast.success("Login successful")
    } catch (error) {
      console.log(error)
    } finally{
      setLoading(false);
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="rounded-sm md:p-10">
        <CardHeader>
          <CardTitle className="text-xl">Login to your account</CardTitle>
          <CardDescription className="text-sm">
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  disabled={loading}
                  placeholder="m@example.com"
                  value={formData.email}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      email: event.target.value,
                    })
                  }
                  autoComplete="current-email"
                  className="rounded-md text-xl px-4 py-5"
                  // required
                />
              </Field>
              <Field>
                {errors.email && <p className="text-red-500">{errors.email}</p>}
              </Field>
              <Field className="-mt-5">
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <Link
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Input id="password"
                  type="password"
                  disabled={loading}
                  value={formData.password}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      password: event.target.value,
                    })
                  }
                  placeholder="••••••••"
                  autoComplete="current-password" 
                  className="rounded-md px-4 py-5 "
                  />
              </Field>
              <Field>
                {errors.password && <p className="text-red-500">{errors.password}</p>}
              </Field>
              <Field>
                <Button disabled={loading} type="submit" className="rounded-md bg-orange-600 hover:bg-orange-700 text-white cursor-pointer px-4 py-5 text-sm">
                  {loading?"Logging in...":"Login"}
                </Button>
                <Button variant="outline" type="button" className="rounded-md px-4 py-5 text-sm cursor-not-allowed">
                  Login with Google
                </Button>
                <FieldDescription className="text-center">
                  Don&apos;t have an account? <Link href="/auth/register" >Sign up</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
