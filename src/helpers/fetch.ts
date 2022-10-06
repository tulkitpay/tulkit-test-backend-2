import fetch from "node-fetch";

export async function fetchApi<T>(endpoint: string) {
  const response = await fetch(endpoint);
  return (await response.json()) as T;
}
