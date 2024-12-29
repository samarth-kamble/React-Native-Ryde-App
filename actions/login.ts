"use server";

import * as z from "zod";

import { LoginSchema } from "@/schema";

export const Login = async (values: z.infer<typeof LoginSchema>) => {
  const validatesFields = LoginSchema.safeParse(values);

  if (!validatesFields.success) {
    return {
      error: "Invalid fields !",
    };
  }
  return { success: "Email Sent !" };
};
