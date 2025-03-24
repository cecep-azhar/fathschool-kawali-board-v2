import axios from "axios";
import { useQuery } from "react-query";

// Buat instance axios (Opsional, jika axiosInstance belum ada)
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL, // Sesuaikan dengan API kamu
  headers: { "Content-Type": "application/json" },
});

function useGetCondition() {
  const { data, isLoading, isError } = useQuery({
    queryFn: async () => {
      const response = await axiosInstance.get("dummy/condition");
      return response.data; // Pastikan mengakses .data
    },
    queryKey: ["getCondition"],
    staleTime: 1000 * 60 * 5, // Cache data selama 5 menit
    retry: 2, // Coba ulangi 2x jika error
  });

  return {
    Condition: data?.data || [],
    ConditionLoad: isLoading,
    ConditionError: isError, // Tambahkan error handling
  };
}

export { useGetCondition };
