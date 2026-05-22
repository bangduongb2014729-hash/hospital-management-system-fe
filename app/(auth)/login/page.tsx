"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Hospital } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { loginSchema, type LoginInput } from "@/features/auth/schemas";
import { useAuthStore } from "@/stores/auth-store";

export default function LoginPage() {
  const router = useRouter();
  const login = useAuthStore((s) => s.login);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginInput>({ resolver: zodResolver(loginSchema), defaultValues: { email: "admin@hospital.local", password: "123456" } });
  function onSubmit(values: LoginInput) {
    login({ id: "demo-admin", name: "Admin Demo", email: values.email, role: "ADMIN" }, "demo-token");
    router.push("/dashboard");
  }
  return <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-teal-50 to-slate-100 p-4"><Card className="w-full max-w-md"><CardHeader className="text-center"><div className="mx-auto mb-3 rounded-xl bg-teal-700 p-3 text-white"><Hospital className="h-7 w-7" /></div><CardTitle>Đăng nhập hệ thống</CardTitle><p className="text-sm text-slate-500">Quản lý bệnh viện nội bộ</p></CardHeader><CardContent><form className="space-y-4" onSubmit={handleSubmit(onSubmit)}><div><label className="mb-1 block text-sm font-medium">Email</label><Input {...register("email")} />{errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}</div><div><label className="mb-1 block text-sm font-medium">Mật khẩu</label><Input type="password" {...register("password")} />{errors.password && <p className="mt-1 text-xs text-red-600">{errors.password.message}</p>}</div><Button className="w-full" disabled={isSubmitting}>Đăng nhập</Button></form></CardContent></Card></main>;
}
