import { Breadcrumb, Header, Sidebar } from "@/components/layout/DashboardShell";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <div className="flex min-h-screen"><Sidebar /><div className="min-w-0 flex-1"><Header /><main className="p-6"><Breadcrumb />{children}</main></div></div>;
}
