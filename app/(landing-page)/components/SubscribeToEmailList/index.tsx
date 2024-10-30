"use client";

import { useFormState, useFormStatus } from "react-dom";
import { subscribeToEmailList } from "./actions";

/**
 * TODOs
 * - Add a route handler to be called by a QR code
 * - Verify if has already been subscribed by persisting this on local storage / or introduce some sort of rate limitting
 * - Handle success and error, eg: what if the Resend API fails due to exceeding the audience
 */

export default function SubscribeToEmailList() {
  const [state, action] = useFormState(subscribeToEmailList, undefined);

  return (
    <form action={action}>
      <input
        name="email"
        type="email"
        required
        placeholder="foocorp@email.com"
      />
      <SubscribeButton />

      {state?.data && <span>Subscribed!</span>}
      {state?.error && <span>Oh no, try again!</span>}
    </form>
  );
}

function SubscribeButton() {
  const { pending } = useFormStatus();

  return <button disabled={pending}>Subscribe</button>;
}
