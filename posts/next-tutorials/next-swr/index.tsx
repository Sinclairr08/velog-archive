import useSWR from "swr";

interface ShopsReturn {
  ok: boolean;
  shops: string[];
}

export default function Test() {
  const { data, error } = useSWR<ShopsReturn>("/api/shops");

  return <h1>{data.ok}</h1>;
}
