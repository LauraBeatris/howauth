import { IdentityLifeCycle } from "./components/IdentityLifeCycle";
import SubscribeToEmailList from "./components/SubscribeToEmailList";

export default function Home() {
  return (
    <div>
      <h2>
        When a developer decides to build a product, they need to get users into
        their applications, but how?
      </h2>

      <h3>
        howauth.com, an interactive learning experience around web
        authentication
      </h3>

      <h4>Coming on February 2024</h4>

      <IdentityLifeCycle />

      <SubscribeToEmailList />
    </div>
  );
}
