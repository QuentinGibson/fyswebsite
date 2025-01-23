"use server";

import prisma from "@/lib/prisma";
import { userSchema } from "./userSchema";
export default async function handleUserContactSubmission({ value }: { value: any }) {
  const result = userSchema.safeParse(value);

  if (!result.success) {
    throw Error("Failed to parse form! Error!");
  }

  console.log(result.data);

  await prisma.userContact
    .create({
      data: {
        firstName: result.data.firstName,
        lastName: result.data.lastName,
        email: result.data.emailAddress,
        service: result.data.services,
        message: result.data.message,
      },
    })
    .catch((e) => {
      console.error(e);
    });
}
