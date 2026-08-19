/** Figma-aligned image crop classes (desktop frame 353:581). */
export type ImageCrop = {
  /** Wrapper: overflow hidden + rounded when needed */
  wrapper?: string;
  /** img element classes */
  img: string;
};

const cover: ImageCrop = {
  img: "absolute inset-0 size-full max-w-none object-cover",
};

export const imageCrops: Record<string, ImageCrop> = {
  "/assets/team-maria.webp": {
    wrapper: "overflow-hidden",
    img: "absolute max-w-none object-bottom size-full",
  },
  "/assets/team-olga.webp": {
    wrapper: "overflow-hidden",
    img: "absolute h-[205.86%] left-[-14.52%] top-[-24.58%] w-[137.14%] max-w-none",
  },
  "/assets/team-elena.webp": {
    wrapper: "overflow-hidden",
    img: "absolute h-[163.15%] left-[-11.58%] top-[-34.29%] w-[122.36%] max-w-none",
  },
  "/assets/case-apsy.webp": cover,
  "/assets/case-tha.webp": {
    wrapper: "overflow-hidden",
    img: "absolute h-[127.5%] left-0 top-[-0.95%] w-full max-w-none",
  },
  "/assets/case-pinarin.webp": {
    wrapper: "overflow-hidden",
    img: "absolute h-[148.18%] left-[-9.29%] top-[-23.52%] w-[117.51%] max-w-none",
  },
  "/assets/case-ezo.webp": {
    wrapper: "overflow-hidden",
    img: "absolute h-[139.38%] left-[-26.26%] top-[-18.58%] w-[154.29%] max-w-none",
  },
  "/assets/case-mostovoy.webp": {
    wrapper: "overflow-hidden",
    img: "absolute h-[136.65%] left-0 top-[-26.27%] w-full max-w-none",
  },
  "/assets/case-celine.webp": {
    wrapper: "overflow-hidden",
    img: "absolute h-[153.77%] left-[-11.61%] top-[-20%] w-[112.53%] max-w-none",
  },
  "/assets/case-agentezzo.webp": {
    wrapper: "overflow-hidden",
    img: "absolute h-[141.96%] left-[-33.93%] top-[-14.33%] w-[149.66%] max-w-none",
  },
  "/assets/case-tarot-melek.webp": {
    wrapper: "overflow-hidden",
    img: "absolute h-[144.36%] left-[-29.46%] top-[-20.41%] w-[159.8%] max-w-none",
  },
  "/assets/case-hera-tarolog.webp": {
    wrapper: "overflow-hidden",
    img: "absolute h-[154.14%] left-[-13.89%] top-[-34.64%] w-[170.63%] max-w-none",
  },
  "/assets/case-callcenter.webp": {
    wrapper: "overflow-hidden",
    img: "absolute h-[126.06%] left-[-25.14%] top-[-13.23%] w-[149.5%] max-w-none",
  },
  "/assets/case-sales-manager.webp": cover,
  "/assets/block-standard.webp": cover,
  "/assets/block-zero.webp": cover,
  "/assets/block-mechanic.webp": cover,
  "/assets/mechanic-player.webp": cover,
  "/assets/mechanic-wheel.webp": cover,
  "/assets/mechanic-calc.webp": cover,
  "/assets/mechanic-quiz.webp": cover,
};

export function getImageCrop(path: string): ImageCrop {
  return imageCrops[path] ?? cover;
}
