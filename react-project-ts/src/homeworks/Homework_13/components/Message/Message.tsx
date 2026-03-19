import { MessageContainer, MessageContent } from "./styles.ts";
import { useContext } from "react";
import { BlogManagementContext } from "homeworks/Homework_13/context/BlogManagementContext.ts";

export default function Message() {
  const { blogData } = useContext(BlogManagementContext);
  return (
    <>
      {!!blogData?.message && (
        <MessageContainer>
          <MessageContent>{blogData.message}</MessageContent>
        </MessageContainer>
      )}
    </>
  );
}
