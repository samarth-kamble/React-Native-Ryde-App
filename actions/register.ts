"use server";

import * as z from "zod";
import bcrypt from "bcryptjs";

import { RegisterSchema } from "@/schema";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";

export const Register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatesFields = RegisterSchema.safeParse(values);

  if (!validatesFields.success) {
    return {
      error: "Invalid fields !",
    };
  }

  const { email, password, name } = validatesFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return {
      error: "User already exists !",
    };
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  //TODO: Send email to verfication Token

  return { success: "User Created !" };
};
