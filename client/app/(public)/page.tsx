"use client"
import { useSigninMutation } from '@/redux/api/auth.api'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import z from 'zod'

const Login = () => {
  const router = useRouter()
  const [singIn] = useSigninMutation()
  const loginschema = z.object({
    email: z.string().min(1),
    password: z.string().min(1),
  })
  type loginType = z.infer<typeof loginschema>

  const { reset, register, handleSubmit, formState: { errors } } = useForm<loginType>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginschema)
  })
  const handleLogin = async (data: loginType) => {
    try {
      await singIn(data).unwrap()
      toast.success("user login success")
      router.push("/admin")
      reset()
    } catch (error) {
      console.log(error)
      toast.error("unable to login ")
    }

  }
  return <>
    <form onSubmit={handleSubmit(handleLogin)}>
      <input type="text" {...register("email")} />
      <input type="text" {...register("password")} />
      <button type='submit'>login</button>
    </form>
  </>
}

export default Login