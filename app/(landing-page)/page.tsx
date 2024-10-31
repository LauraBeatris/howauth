import { IdentityLifeCycle } from "./components/IdentityLifeCycle";
import SubscribeToEmailList from "./components/SubscribeToEmailList";
import { serif } from "../fonts";
import Image from "next/image";

export default function Home() {
  return (
    <main className="m-auto max-w-2xl h-full container flex flex-col justify-center items-center p-6">
      <NoiseTexture />

      <IdentityLifeCycle />

      <section>
        <div className="w-full flex flex-col items-center gap-2 mb-4">
          <h1
            className={`text-4xl text-center ${serif.className} text-gray-900`}
          >
            Interactive learning experience around web authentication
          </h1>

          <h4 className="text-md text-orange-700">Coming on February 2024</h4>

          <h2 className="text-lg font-light text-center m-auto text-gray-800">
            Every developer dreams of building the next big thing. Getting users
            securely onboard?
            <strong className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-800">
              {" "}
              But how?
            </strong>
          </h2>
        </div>

        <SubscribeToEmailList />
      </section>

      <footer className="mx-auto mt-6 flex gap-2 items-center">
        <Image
          alt="My profile picture"
          width="32"
          height="32"
          className="rounded-full"
          src="/images/laura-beatris.png"
        />

        <span className="text-sm text-gray-700">Created by Laura Beatris</span>
      </footer>
    </main>
  );
}

function NoiseTexture() {
  return (
    <svg
      className="fixed inset-0 -z-10 h-full w-full opacity-[0.2] pointer-events-none"
      style={{
        filter: "constract(60%) brightness(100%)",
      }}
    >
      <filter id="noise">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.8"
          numOctaves="4"
          stitchTiles="stitch"
        />
      </filter>
      <rect width="100%" height="100%" filter="url(#noise)" />
    </svg>
  );
}
