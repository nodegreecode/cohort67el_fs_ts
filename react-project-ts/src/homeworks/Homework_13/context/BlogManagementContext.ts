import { createContext } from "react";
import type { BlogDataContext } from "../components/BlogManagement/types.ts";

export const BlogManagementContext = createContext<BlogDataContext>({
  blogData: undefined,
});