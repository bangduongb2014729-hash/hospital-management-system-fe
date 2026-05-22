import { z } from "zod";

export const patientSchema = z.object({
  fullName: z.string().min(2, "Họ tên tối thiểu 2 ký tự"),
  gender: z.enum(["MALE", "FEMALE", "OTHER"]),
  dateOfBirth: z.string().min(1, "Vui lòng chọn ngày sinh"),
  phone: z.string().optional(),
  address: z.string().optional(),
  insuranceNumber: z.string().optional(),
});

export type PatientInput = z.infer<typeof patientSchema>;
