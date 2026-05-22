"use client";

import { useMemo, useState } from "react";
import { Plus, Search } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import { PageHeader } from "@/components/shared/Page";
import { usePatients } from "@/features/patients/queries";

const genderLabel = { MALE: "Nam", FEMALE: "Nữ", OTHER: "Khác" } as const;

export default function PatientsPage() {
  const [keyword, setKeyword] = useState("");
  const { data, isLoading, error } = usePatients();
  const patients = useMemo(() => (data?.items ?? []).filter((p) => p.fullName.toLowerCase().includes(keyword.toLowerCase()) || p.code.toLowerCase().includes(keyword.toLowerCase())), [data, keyword]);
  return <><PageHeader title="Quản lý bệnh nhân" description="Danh sách, tìm kiếm và chuẩn bị CRUD bệnh nhân." action={<Button><Plus className="h-4 w-4" />Thêm bệnh nhân</Button>} /><Card><CardContent><div className="mb-4 flex items-center gap-2"><Search className="h-4 w-4 text-slate-400" /><Input placeholder="Tìm theo mã hoặc họ tên..." value={keyword} onChange={(e) => setKeyword(e.target.value)} /></div>{isLoading ? <p>Đang tải...</p> : error ? <p className="text-red-600">Không tải được dữ liệu.</p> : <div className="overflow-x-auto"><table className="w-full text-left text-sm"><thead className="bg-slate-50 text-slate-500"><tr><th className="p-3">Mã BN</th><th className="p-3">Họ tên</th><th className="p-3">Giới tính</th><th className="p-3">Ngày sinh</th><th className="p-3">Điện thoại</th><th className="p-3">BHYT</th></tr></thead><tbody>{patients.map((p) => <tr key={p.id} className="border-t border-slate-100"><td className="p-3 font-medium">{p.code}</td><td className="p-3">{p.fullName}</td><td className="p-3"><Badge>{genderLabel[p.gender]}</Badge></td><td className="p-3">{p.dateOfBirth}</td><td className="p-3">{p.phone}</td><td className="p-3">{p.insuranceNumber ?? "-"}</td></tr>)}</tbody></table>{patients.length === 0 && <p className="py-8 text-center text-slate-500">Không có dữ liệu phù hợp.</p>}</div>}</CardContent></Card></>;
}
