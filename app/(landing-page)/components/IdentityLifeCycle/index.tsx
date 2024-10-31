"use client";

import { motion, animate, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";

const StaticPath = () => (
  <>
    <defs>
      <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#ffedd5", stopOpacity: 0.9 }} />
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

    <path
      d="M 75 15 A 45 45 0 1 0 75 105 A 45 45 0 1 0 75 15"
      fill="none"
      stroke="url(#circleGradient)"
      strokeWidth="1.5"
      filter="url(#glow)"
    />
  </>
);

const MotionImage = motion(Image);

interface MovingIconProps {
  offset: number;
  src: string;
}

const MovingIcon = ({ offset, src }: MovingIconProps) => {
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
    <div className="absolute" style={{ width: "18px", height: "18px" }}>
      <MotionImage
        src={src}
        alt=""
        width={18}
        height={18}
        priority
        className="object-contain"
        style={{
          x: useTransform(x, (value) => value - 9),
          y: useTransform(y, (value) => value - 9),
        }}
        placeholder="blur"
        blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2UwZTdmZiIvPjwvc3ZnPg=="
      />
    </div>
  );
};

export function IdentityLifeCycle() {
  return (
    <div className="relative w-[150px] h-[120px] mx-auto flex items-center justify-center mb-2">
      <svg className="w-full h-full" viewBox="0 0 150 120">
        <StaticPath />
      </svg>

      {/* Icons layer */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          <MovingIcon src="/images/oauth-icon.png" offset={0} />
          <MovingIcon src="/images/saml.png" offset={0.25} />
          <MovingIcon src="/images/password.png" offset={0.5} />
          <MovingIcon src="/images/oidc.png" offset={0.75} />

          {/* Center user icon */}
          <div
            className="absolute"
            style={{ left: "66px", top: "51px", width: "18px", height: "18px" }}
          >
            <Image
              src="/images/user.png"
              alt=""
              width={18}
              height={18}
              priority
              className="object-contain"
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2UwZTdmZiIvPjwvc3ZnPg=="
            />
          </div>
        </div>
      </div>
    </div>
  );
}
