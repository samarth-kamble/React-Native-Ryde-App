"use server";

import * as z from "zod";

import { RegisterSchema } from "@/schema";

export const Register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatesFields = RegisterSchema.safeParse(values);

  if (!validatesFields.success) {
    return {
      error: "Invalid fields !",
    };
  }
  return { success: "Email Sent !" };
};
