"use server";

import { LoginSchema } from "@/schema";
import * as z from "zod";

export const Login = async (values: z.infer<typeof LoginSchema>) => {
  const validatesFields = LoginSchema.safeParse(values);

  if (!validatesFields.success) {
    return {
      error: "Invalid fields !",
    };
  }
  return { success: "Email Sent !" };
};
