"use server";
import { fromError } from "zod-validation-error";
import { IRegisterUser } from "@/types/user";
import { RegisterUserServerSchema } from "@/schema/user";
import prisma from "@/lib/db";

export async function createUser(requestData: IRegisterUser) {
  const validation = RegisterUserServerSchema.safeParse(requestData);
  if (!validation.success) {
    return {
      success: false,
      error: fromError(validation.error).toString(),
    };
  }

  try {
    const { data } = validation;
    const user = prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
      },
    });

    return {
      success: true,
      data: user,
    };
  } catch (error) {
    return {
      success: false,
      error: (error as Error).message,
    };
  }
}
