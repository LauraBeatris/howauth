"use client";

import { useFormState, useFormStatus } from "react-dom";
import { subscribeToEmailList } from "./actions";

export default function SubscribeToEmailList() {
  const [state, action] = useFormState(subscribeToEmailList, undefined);

  return (
    <form
      action={action}
      className="lg:w-[400px] w-full mx-auto flex flex-col gap-1"
    >
      <div className="flex gap-1 w-full">
        <input
          name="email"
          type="email"
          required
          placeholder="foocorp@email.com"
          className="flex-1 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
        />

        <SubscribeButton />
      </div>

      {state?.data && <span className="mt-1 text-center">🎉 Success!</span>}
    </form>
  );
}

function SubscribeButton() {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className="px-3 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-md disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
    >
      {pending ? "Subscribing..." : "Subscribe"}
    </button>
  );
}
