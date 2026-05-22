import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

export default function ForgotPasswordPage() {
  return <main className="flex min-h-screen items-center justify-center p-6"><Card className="max-w-md"><CardHeader><CardTitle>Quên mật khẩu</CardTitle></CardHeader><CardContent><p className="text-sm text-slate-600">Vui lòng liên hệ Admin hệ thống để đặt lại mật khẩu.</p><Link className="mt-4 inline-block text-sm font-medium text-teal-700" href="/login">Quay lại đăng nhập</Link></CardContent></Card></main>;
}
