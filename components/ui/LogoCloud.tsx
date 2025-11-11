
import React from "react";
import { InfiniteSlider } from "./InfiniteSlider";
import { cn } from "../../lib/utils";

type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
  logos: Logo[];
};

export function LogoCloud({ className, logos, ...props }: LogoCloudProps) {
  return (
    <div
      {...props}
      className={cn(
        "relative",
        className
      )}
    >
      <InfiniteSlider gap={60} reverse speed={40} speedOnHover={15}>
        {logos.map((logo, index) => (
          <img
            alt={logo.alt}
            className="pointer-events-none h-12 select-none md:h-14 object-contain"
            height={logo.height || "auto"}
            key={`logo-${logo.alt}-${index}`}
            loading="lazy"
            src={logo.src}
            width={logo.width || "auto"}
          />
        ))}
      </InfiniteSlider>
    </div>
  );
}
