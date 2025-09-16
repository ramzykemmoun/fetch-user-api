import { useQuery } from "@tanstack/react-query";
import { api } from "../api";

export function useGetUsers(query: QueryParams) {
  return useQuery({
    queryKey: ["user/getAll", query?.limit, query?.skip, query?.q],
    queryFn: () => api.user.getAll(query),
  });
}
