"use client";

import { Activity, CalendarDays, CreditCard, Pill, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { PageHeader, StatCard } from "@/components/shared/Page";
import { Badge } from "@/components/ui/Badge";

export default function DashboardPage() {
  const tasks = ["5 lịch hẹn đang chờ xác nhận", "2 thuốc sắp hết tồn kho", "8 hóa đơn chưa thanh toán"];
  return <><PageHeader title="Dashboard tổng quan" description="Theo dõi nhanh vận hành bệnh viện trong ngày." /><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4"><StatCard title="Bệnh nhân hôm nay" value="128" icon={Users} /><StatCard title="Lịch hẹn" value="42" icon={CalendarDays} tone="blue" /><StatCard title="Doanh thu" value="86.5M" icon={CreditCard} tone="amber" /><StatCard title="Cảnh báo kho" value="2" icon={Pill} tone="red" /></div><div className="mt-6 grid gap-4 lg:grid-cols-2"><Card><CardHeader><CardTitle>Công việc cần xử lý</CardTitle></CardHeader><CardContent className="space-y-3">{tasks.map((task, i) => <div key={task} className="flex items-center justify-between rounded-lg border border-slate-100 p-3"><span className="text-sm">{task}</span><Badge tone={i === 1 ? "danger" : "warning"}>Cần xử lý</Badge></div>)}</CardContent></Card><Card><CardHeader><CardTitle>Luồng khám</CardTitle></CardHeader><CardContent><div className="flex items-center gap-3 text-sm text-slate-600"><Activity className="h-5 w-5 text-teal-700" />Tiếp nhận → Khám → Chỉ định/Đơn thuốc → Thanh toán → Hoàn tất</div></CardContent></Card></div></>;
}
