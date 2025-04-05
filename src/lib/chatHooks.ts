import { useQuery } from "@tanstack/react-query";

import { getConversation, getProgression } from "./chatLib";
import type { Level } from "@/server/db/chat/chat.db";
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


export const useProgression = (props: { address?: string, level: Level }) => {
  return useQuery({
    queryKey: ["progression", props.address, props.level],
    queryFn: () => {
      if (!props.address) {
        throw new Error("Address is required");
      }
      return getProgression(props.address, props.level);
    },
    enabled: !!props.address,
  });
};

