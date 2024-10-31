"use client";

import { motion, animate, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

const StaticPath = () => (
  <>
    {/* Static circle - reduced radius from 100 to 70 */}
    <path
      d="M 160 90 A 70 70 0 1 0 160 230 A 70 70 0 1 0 160 90"
      fill="none"
      stroke="black"
      strokeWidth="2"
    />
  </>
);

interface MovingIconProps {
  offset: number;
  href: string;
}

const MovingIcon = ({ offset, href }: MovingIconProps) => {
  const progress = useMotionValue(offset);

  useEffect(() => {
    const animation = animate(progress, offset + 1, {
      duration: 4, // Faster animation
      repeat: Infinity,
      ease: "linear",
      repeatType: "loop",
    });

    return animation.stop;
  }, []);

  // Using modulus to ensure continuous movement
  const angle = useTransform(progress, (value) => (value % 1) * 360);
  const radius = 70; // Reduced radius to match smaller circle
  const centerX = 160;
  const centerY = 160;

  const x = useTransform(
    angle,
    (a) => centerX + radius * Math.cos((a - 90) * (Math.PI / 180))
  );
  const y = useTransform(
    angle,
    (a) => centerY + radius * Math.sin((a - 90) * (Math.PI / 180))
  );

  return (
    <motion.image
      href={href}
      width="24"
      height="24"
      style={{
        x: useTransform(x, (value) => value - 12), // Center the image
        y: useTransform(y, (value) => value - 12),
      }}
    />
  );
};

export function IdentityLifeCycle() {
  return (
    <div className="relative w-[320px] h-[320px] mx-auto flex items-center justify-center">
      <svg className="w-full h-full" viewBox="0 0 320 320">
        <StaticPath />
        <image href="/images/user.png" x="140" y="140" width="40" height="40" />
        <MovingIcon href="/images/oauth-icon.png" offset={0} />
        <MovingIcon href="/images/saml.png" offset={0.25} />
        <MovingIcon href="/images/password.png" offset={0.5} />
        <MovingIcon href="/images/oidc.png" offset={0.75} />
      </svg>
    </div>
  );
}
