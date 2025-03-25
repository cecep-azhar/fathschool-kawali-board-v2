import axios from "axios";
import { useQuery } from "react-query";

function useGetCondition() {
  const { data, isLoading, error } = useQuery(
    "getCondition", // ✅ Query Key (tanpa array, karena React Query versi lama)
    async () => {
      try {
        const response = await axios.get("https://your-api-url.com/dummy/condition");
        return response.data; // ✅ Pastikan hanya mengembalikan `response.data`
      } catch (err) {
        throw new Error("Gagal mengambil data kondisi!"); // ✅ Tangani error
      }
    },
    {
      retry: 2, // ✅ Coba lagi jika gagal (maks 2 kali)
      staleTime: 1000 * 60 * 5, // ✅ Cache selama 5 menit
    }
  );

  return {
    Condition: data?.data || [], // ✅ Pastikan akses data dengan benar
    ConditionLoad: isLoading, // ✅ Gunakan `isLoading` di React Query versi lama
    ConditionError: error, // ✅ Tambahkan handling error
  };
}

export { useGetCondition };
