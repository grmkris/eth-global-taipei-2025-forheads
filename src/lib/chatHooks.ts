import { useQuery } from "@tanstack/react-query";

import { getConversation } from "./chatLib";
export const useConversation = (props: { address?: string }) => {
  return useQuery({
    queryKey: ["conversation", props.address],
    queryFn: () => {
      if (!props.address) {
        throw new Error("Address is required");
      }
      return getConversation(props.address);
    },
    enabled: !!props.address,
  });
};