import type { ApiError } from "@/types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:8080/api";

type RequestOptions = RequestInit & { token?: string | null };

export async function apiClient<T>(path: string, options: RequestOptions = {}): Promise<T> {
  const { token, headers, ...init } = options;
  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...init,
    headers: { "Content-Type": "application/json", ...(token ? { Authorization: `Bearer ${token}` } : {}), ...headers },
  });
  if (!response.ok) {
    let details: unknown;
    try { details = await response.json(); } catch { details = undefined; }
    const error: ApiError = { message: `API request failed (${response.status})`, status: response.status, details };
    throw error;
  }
  if (response.status === 204) return undefined as T;
  return response.json() as Promise<T>;
}
