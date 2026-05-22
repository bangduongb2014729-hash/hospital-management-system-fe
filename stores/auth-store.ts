"use client";

import { create } from "zustand";
import type { User } from "@/types";

type AuthState = {
  user: User | null;
  accessToken: string | null;
  login: (user: User, accessToken: string) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: { id: "demo-admin", name: "Admin Demo", email: "admin@hospital.local", role: "ADMIN" },
  accessToken: null,
  login: (user, accessToken) => set({ user, accessToken }),
  logout: () => set({ user: null, accessToken: null }),
}));
