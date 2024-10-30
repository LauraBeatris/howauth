"use client";

import { useFormState, useFormStatus } from "react-dom";
import { subscribeToEmailList } from "./actions";

/**
 * TODO - Add a route handler to be called by a QR code
 */

export default function SubscribeToEmailList() {
  const [state, action] = useFormState(subscribeToEmailList, undefined);

  // TODO - Verify if has already been subscribed by persisting this on local storage
  // Also doing this to not bloat Resend's audience on a free plan

  return (
    <form action={action}>
      <input type="email" required placeholder="foocorp@email.com" />
      <SubscribeButton />

      {/* Handle success and error, eg: what if the Resend API fails due to exceeding the audience */}
      {state?.data && <span>Subscribed!</span>}
      {state?.error && <span>Oh no, try again!</span>}
    </form>
  );
}

function SubscribeButton() {
  const { pending } = useFormStatus();

  return <button disabled={pending}>Subscribe</button>;
}
