"use client";

import { motion, animate, useMotionValue, useTransform } from "framer-motion";
import { div } from "framer-motion/client";
import { useEffect } from "react";

const StaticPath = () => (
  <>
    {/* Gradient definitions */}
    <defs>
      <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#ea580c", stopOpacity: 0.6 }} />
        <stop
          offset="100%"
          style={{ stopColor: "#fb923c", stopOpacity: 0.3 }}
        />
      </linearGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="2" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {/* Circle path with gradient and glow */}
    <path
      d="M 75 15 A 45 45 0 1 0 75 105 A 45 45 0 1 0 75 15"
      fill="none"
      stroke="url(#circleGradient)"
      strokeWidth="1.5"
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
      duration: 8,
      repeat: Infinity,
      ease: "linear",
    });

    return animation.stop;
  }, []);

  const angle = useTransform(progress, (value) => (value % 1) * 360);
  const radius = 45;
  const centerX = 75;
  const centerY = 60;

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
      width="18"
      height="18"
      style={{
        x: useTransform(x, (value) => value - 9),
        y: useTransform(y, (value) => value - 9),
      }}
    />
  );
};

export function IdentityLifeCycle() {
  return (
    <div className="relative w-[150px] h-[120px] mx-auto flex items-center justify-center mb-2">
      <svg className="w-full h-full" viewBox="0 0 150 120">
        {/* Render order matters: path first, then icons */}
        <StaticPath />

        {/* Moving icons */}
        <MovingIcon href="/images/oauth-icon.png" offset={0} />
        <MovingIcon href="/images/saml.png" offset={0.25} />
        <MovingIcon href="/images/password.png" offset={0.5} />
        <MovingIcon href="/images/oidc.png" offset={0.75} />

        {/* Centered user icon */}
        <image href="/images/user.png" x="66" y="51" width="18" height="18" />
      </svg>
    </div>
  );
}
