import { Card, CardContent } from "@/components/ui/Card";
import { cn } from "@/lib/utils/cn";

export function PageHeader({ title, description, action }: { title: string; description?: string; action?: React.ReactNode }) {
  return <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><div><h1 className="text-2xl font-bold tracking-tight">{title}</h1>{description ? <p className="mt-1 text-sm text-slate-500">{description}</p> : null}</div>{action}</div>;
}

export function StatCard({ title, value, icon: Icon, tone = "teal" }: { title: string; value: string; icon: React.ComponentType<{ className?: string }>; tone?: "teal" | "blue" | "amber" | "red" }) {
  const colors = { teal: "bg-teal-50 text-teal-700", blue: "bg-blue-50 text-blue-700", amber: "bg-amber-50 text-amber-700", red: "bg-red-50 text-red-700" };
  return <Card><CardContent className="flex items-center justify-between"><div><p className="text-sm text-slate-500">{title}</p><p className="mt-2 text-2xl font-bold">{value}</p></div><div className={cn("rounded-full p-3", colors[tone])}><Icon className="h-5 w-5" /></div></CardContent></Card>;
}
