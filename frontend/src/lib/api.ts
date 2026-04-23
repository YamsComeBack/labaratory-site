export const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000/api";

type ContactPayload = {
  fio: string;
  email: string;
  phone: string;
  agree: boolean;
};

export const postContact = async (payload: ContactPayload) => {
  const res = await fetch(`${API_URL}/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || `Contact error: ${res.status}`);
  }
};

export type Photo = {
  id: number;
  title?: string | null;
  alt?: string | null;
  url: string;
  created_at: string;
};

export const getPhotos = async (): Promise<Photo[]> => {
  const res = await fetch(`${API_URL}/photos`, { cache: "no-store" });
  if (!res.ok) throw new Error(`Photos error: ${res.status}`);
  return res.json();
};