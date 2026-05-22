"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Hospital, LogOut } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { APP_NAME, navItems } from "@/lib/constants/navigation";
import { cn } from "@/lib/utils/cn";
import { useAuthStore } from "@/stores/auth-store";

export function Sidebar() {
  const pathname = usePathname();
  const user = useAuthStore((s) => s.user);
  const visible = navItems.filter((item) => !user || item.roles.includes(user.role));
  return <aside className="hidden w-72 shrink-0 border-r border-slate-200 bg-white md:block"><div className="flex h-16 items-center gap-2 border-b border-slate-100 px-5"><div className="rounded-lg bg-teal-700 p-2 text-white"><Hospital className="h-5 w-5" /></div><div><p className="text-sm font-bold">{APP_NAME}</p><p className="text-xs text-slate-500">Hospital admin</p></div></div><nav className="space-y-1 p-4">{visible.map((item) => { const active = pathname === item.href; const Icon = item.icon; return <Link key={item.href} href={item.href} className={cn("flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100", active && "bg-teal-50 text-teal-700")}><Icon className="h-4 w-4" />{item.label}</Link>; })}</nav></aside>;
}

export function Header() {
  const router = useRouter();
  const { user, logout } = useAuthStore();
  return <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-slate-200 bg-white/95 px-6 backdrop-blur"><div><p className="text-sm text-slate-500">Xin chào</p><p className="font-semibold">{user?.name ?? "Khách"} <span className="text-xs text-slate-400">({user?.role ?? "NO_ROLE"})</span></p></div><div className="flex items-center gap-3"><input placeholder="Tìm kiếm nhanh..." className="hidden h-9 w-72 rounded-md border border-slate-300 px-3 text-sm outline-none focus:border-teal-600 lg:block" /><Button variant="outline" size="sm" onClick={() => { logout(); router.push("/login"); }}><LogOut className="h-4 w-4" />Đăng xuất</Button></div></header>;
}

export function Breadcrumb() {
  const pathname = usePathname();
  const label = navItems.find((item) => item.href === pathname)?.label ?? "Trang";
  return <div className="mb-4 text-sm text-slate-500">Trang chủ / <span className="text-slate-900">{label}</span></div>;
}
