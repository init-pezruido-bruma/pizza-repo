import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/utils";

type FullImageProps = Omit<ImageProps, "fill" | "width" | "height"> & {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  imgClassName?: string;
  rounded?: string;
  /**
   * Tailwind max-height utilities applied to the <img>.
   * Keeps the full image visible (object-contain) within a viewport budget.
   */
  maxHeightClass?: string;
};

/**
 * Full image, no crop. Optional maxHeightClass scales tall assets down.
 */
export function FullImage({
  src,
  alt,
  width,
  height,
  className,
  imgClassName,
  rounded = "rounded-[1.25rem] sm:rounded-[1.5rem]",
  maxHeightClass,
  priority,
  sizes,
  ...rest
}: FullImageProps) {
  return (
    <div className={cn("overflow-hidden", rounded, className)}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes={sizes}
        quality={90}
        className={cn(
          "mx-auto h-auto w-full object-contain",
          maxHeightClass,
          imgClassName,
        )}
        {...rest}
      />
    </div>
  );
}
