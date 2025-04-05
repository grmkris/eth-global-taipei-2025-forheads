import { useQuery } from "@tanstack/react-query";

import { getConversation, getProgression, getUserInfo } from "./chatLib";
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

export const useProgression = (props: { address?: string; level?: Level }) => {
  return useQuery({
    queryKey: ["progression", props.address, props.level],
    queryFn: () => {
      if (!props.address) {
        throw new Error("Address is required");
      }
      if (!props.level) {
        throw new Error("Level is required");
      }
      return getProgression(props.address, props.level);
    },
    enabled: !!props.address && !!props.level,
  });
};

export const useUserInfo = (props: { address?: string }) => {
  return useQuery({
    queryKey: ["userInfo", props.address],
    queryFn: () => {
      if (!props.address) {
        throw new Error("Address is required");
      }
      return getUserInfo(props.address);
    },
    enabled: !!props.address,
  });
};
