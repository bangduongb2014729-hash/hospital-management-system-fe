export type UserRole = "ADMIN" | "RECEPTIONIST" | "DOCTOR" | "NURSE" | "PHARMACIST" | "CASHIER" | "MANAGER";

export type Gender = "MALE" | "FEMALE" | "OTHER";

export type User = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
};

export type Patient = {
  id: string;
  code: string;
  fullName: string;
  gender: Gender;
  dateOfBirth: string;
  phone?: string;
  address?: string;
  insuranceNumber?: string;
  createdAt: string;
  updatedAt: string;
};

export type AppointmentStatus = "PENDING" | "CONFIRMED" | "CHECKED_IN" | "IN_PROGRESS" | "COMPLETED" | "CANCELLED";

export type ApiResponse<T> = { data: T; message?: string; success: boolean };
export type PaginatedResponse<T> = { items: T[]; total: number; page: number; pageSize: number };
export type ApiError = { message: string; status?: number; details?: unknown };
export type PaginationParams = { page?: number; pageSize?: number };
export type SortParams = { sortBy?: string; sortOrder?: "asc" | "desc" };
export type FilterParams = Record<string, string | number | boolean | undefined>;
