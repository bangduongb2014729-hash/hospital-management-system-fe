import type { UserRole } from "@/types";
import { Activity, CalendarDays, ClipboardList, CreditCard, FileText, LayoutDashboard, Pill, Settings, Users, Building2, UserCog } from "lucide-react";

export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME ?? "Hospital Management System";

export const navItems: Array<{ href: string; label: string; icon: typeof LayoutDashboard; roles: UserRole[] }> = [
  { href: "/dashboard", label: "Tổng quan", icon: LayoutDashboard, roles: ["ADMIN", "MANAGER", "RECEPTIONIST", "DOCTOR", "NURSE", "PHARMACIST", "CASHIER"] },
  { href: "/patients", label: "Bệnh nhân", icon: Users, roles: ["ADMIN", "RECEPTIONIST", "DOCTOR", "NURSE"] },
  { href: "/appointments", label: "Lịch hẹn", icon: CalendarDays, roles: ["ADMIN", "RECEPTIONIST", "DOCTOR", "NURSE"] },
  { href: "/doctors", label: "Bác sĩ/Nhân viên", icon: UserCog, roles: ["ADMIN", "MANAGER"] },
  { href: "/departments", label: "Khoa/phòng", icon: Building2, roles: ["ADMIN", "MANAGER"] },
  { href: "/medical-records", label: "Bệnh án", icon: ClipboardList, roles: ["ADMIN", "DOCTOR", "NURSE"] },
  { href: "/prescriptions", label: "Đơn thuốc", icon: FileText, roles: ["ADMIN", "DOCTOR", "PHARMACIST"] },
  { href: "/pharmacy", label: "Kho thuốc", icon: Pill, roles: ["ADMIN", "PHARMACIST"] },
  { href: "/billing", label: "Viện phí", icon: CreditCard, roles: ["ADMIN", "CASHIER"] },
  { href: "/reports", label: "Báo cáo", icon: Activity, roles: ["ADMIN", "MANAGER"] },
  { href: "/settings", label: "Cài đặt", icon: Settings, roles: ["ADMIN"] },
];

