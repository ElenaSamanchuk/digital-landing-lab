import type { ImageCrop } from "../../content/imageCrops";
import { getImageCrop } from "../../content/imageCrops";
import { resolvePublicPath } from "../../qa/assets";

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
  loading,
  fetchPriority,
  decoding = "async",
}: CroppedImageProps) {
  const resolved = resolvePublicPath(src);
  const cropConfig = crop ?? getImageCrop(src);
  const needsWrapper = Boolean(cropConfig.wrapper);

  const img = (
    <img
      src={resolved}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      fetchPriority={fetchPriority}
      decoding={decoding}
      className={`pointer-events-none ${cropConfig.img} ${className}`}
    />
  );

  if (!needsWrapper) {
    return img;
  }

  return (
    <div className={`relative size-full ${cropConfig.wrapper ?? ""}`}>
      {img}
    </div>
  );
}
