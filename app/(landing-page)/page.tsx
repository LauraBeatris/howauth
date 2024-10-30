import { IdentityLifeCycle } from "./components/IdentityLifeCycle";
import SubscribeToEmailList from "./components/SubscribeToEmailList";

export default function Home() {
  return (
    <main className="m-auto h-full container flex justify-center items-center px-6">
      <section>
        <div className="w-full flex flex-col gap-2 mb-4">
          <h1>Learn web authentication with an interactive experience</h1>

          <h2>
            When a developer decides to build a product, they need to get users
            into their applications, but how?
          </h2>

          <h4>Coming on February 2024</h4>
        </div>

        <IdentityLifeCycle />

        <SubscribeToEmailList />
      </section>
    </main>
  );
}
