import type { PaginatedResponse, Patient } from "@/types";

export const mockPatients: Patient[] = [
  { id: "1", code: "BN-0001", fullName: "Nguyễn Văn An", gender: "MALE", dateOfBirth: "1988-04-12", phone: "0901000001", address: "Quận 1, TP.HCM", insuranceNumber: "HS001", createdAt: "2026-05-01", updatedAt: "2026-05-20" },
  { id: "2", code: "BN-0002", fullName: "Trần Thị Bình", gender: "FEMALE", dateOfBirth: "1994-09-03", phone: "0901000002", address: "Thủ Đức, TP.HCM", insuranceNumber: "HS002", createdAt: "2026-05-02", updatedAt: "2026-05-21" },
  { id: "3", code: "BN-0003", fullName: "Lê Minh Châu", gender: "OTHER", dateOfBirth: "1979-11-22", phone: "0901000003", address: "Biên Hòa, Đồng Nai", createdAt: "2026-05-03", updatedAt: "2026-05-21" },
];

export async function getPatients(): Promise<PaginatedResponse<Patient>> {
  return { items: mockPatients, total: mockPatients.length, page: 1, pageSize: 10 };
}
