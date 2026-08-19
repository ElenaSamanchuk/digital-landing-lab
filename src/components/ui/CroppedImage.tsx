import { useState } from "react";
import type { ImageCrop } from "../../content/imageCrops";
import { getImageCrop } from "../../content/imageCrops";
import { resolvePublicPath } from "../../qa/assets";
import { getResponsiveSrcSet } from "../../qa/imageVariants";

type CroppedImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  crop?: ImageCrop;
  loading?: "lazy" | "eager";
  fetchPriority?: "high" | "low" | "auto";
  decoding?: "async" | "sync" | "auto";
};

export function CroppedImage({
  src,
  alt,
  width,
  height,
  className = "",
  crop,
  loading = "lazy",
  fetchPriority,
  decoding = "async",
}: CroppedImageProps) {
  const [loaded, setLoaded] = useState(false);
  const responsive = getResponsiveSrcSet(src);
  const resolvedSrcSet = responsive.srcSet
    ? responsive.srcSet
        .split(", ")
        .map((entry) => {
          const [pathPart, descriptor] = entry.split(" ");
          return `${resolvePublicPath(pathPart)} ${descriptor}`;
        })
        .join(", ")
    : undefined;
  const cropConfig = crop ?? getImageCrop(src);
  const needsWrapper = Boolean(cropConfig.wrapper);

  const img = (
    <img
      src={resolvePublicPath(responsive.src)}
      srcSet={resolvedSrcSet}
      sizes={resolvedSrcSet ? "(max-width: 767px) 430px, 870px" : undefined}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      fetchPriority={fetchPriority}
      decoding={decoding}
      onLoad={() => setLoaded(true)}
      className={`pointer-events-none transition-opacity duration-300 ${
        loaded ? "opacity-100" : "opacity-0"
      } ${cropConfig.img} ${className}`}
    />
  );

  const placeholder = (
    <div
      aria-hidden
      className={`absolute inset-0 bg-surface transition-opacity duration-300 ${
        loaded ? "opacity-0" : "opacity-100"
      }`}
    />
  );

  if (!needsWrapper) {
    return (
      <div className="relative size-full overflow-hidden bg-surface">
        {placeholder}
        {img}
      </div>
    );
  }

  return (
    <div className={`relative size-full bg-surface ${cropConfig.wrapper ?? ""}`}>
      {placeholder}
      {img}
    </div>
  );
}
