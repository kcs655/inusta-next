"use server";

import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";

export async function registerUser(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const passwordConfirmation = formData.get("passwordConfirmation") as string;

  const user = await prisma.user.findFirst({ where: { email } });

  if (user) {
    return "このメールアドレスはすでに使われています。";
  }

  if (password != passwordConfirmation) {
    return "パスワードと確認用パスワードが一致しません。";
  }

  const bcryptedPassword = await bcrypt.hash(password, 10);
  try {
    await prisma.user.create({
      data: {
        name,
        email,
        password: bcryptedPassword,
      },
    });
  } catch (error) {
    console.error(error);
    return "新規登録に失敗しました。";
  }
}
