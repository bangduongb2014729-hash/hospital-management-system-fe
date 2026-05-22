import { Plus } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { PageHeader } from "@/components/shared/Page";

const items = ["Bác sĩ nội tổng quát", "Điều dưỡng", "Lễ tân"];

export default function Page() {
  return <><PageHeader title="Bác sĩ/Nhân viên" description="Quản lý hồ sơ nhân sự, chuyên khoa và lịch làm việc." action={<Button><Plus className="h-4 w-4" />Tạo mới</Button>} /><Card><CardHeader><CardTitle>Màn hình nghiệp vụ</CardTitle></CardHeader><CardContent><div className="grid gap-3 md:grid-cols-3">{items.map((item, index) => <div key={item} className="rounded-lg border border-slate-100 p-4"><Badge tone={index === 0 ? "info" : index === 1 ? "warning" : "neutral"}>{item}</Badge><p className="mt-3 text-sm text-slate-600">Khu vực này sẵn sàng tích hợp API và bảng/form chi tiết theo module.</p></div>)}</div></CardContent></Card></>;
}
