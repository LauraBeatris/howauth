"use server";

import { CreateContactResponse, Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type ActionState = CreateContactResponse | undefined;

export async function subscribeToEmailList(
  _previousState: ActionState,
  data: FormData
) {
  const email = data.get("email")?.toString();

  if (!email) {
    throw new Error("Email is required");
  }

  const contact = await resend.contacts.create({
    email,
    audienceId: "945248ec-9775-4dbd-b0bd-13d3c92259ba",
  });

  return contact;
}
