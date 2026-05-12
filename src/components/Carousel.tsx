"use client";

/**
 * Carousel — content slider backed by embla-carousel.
 *
 * Compose:
 *   <Carousel>
 *     <CarouselContent>
 *       <CarouselItem>slide one</CarouselItem>
 *       <CarouselItem>slide two</CarouselItem>
 *     </CarouselContent>
 *     <CarouselPrevious />
 *     <CarouselNext />
 *   </Carousel>
 *
 * The `Carousel` root owns the embla instance and shares it via context. Pass
 * `opts` to configure embla (loop, align, etc.); pass `orientation` for
 * vertical slides; pass `setApi` to get a handle to the embla instance for
 * imperative control (autoplay, programmatic scrollTo, etc.).
 */
import {
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useState,
  type HTMLAttributes,
  type KeyboardEvent,
} from "react";
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react";
import { cn } from "../lib/cn";

type CarouselApi = UseEmblaCarouselType[1];
type EmblaOptions = NonNullable<Parameters<typeof useEmblaCarousel>[0]>;

interface CarouselContextValue {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: CarouselApi;
  orientation: "horizontal" | "vertical";
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
}

const CarouselContext = createContext<CarouselContextValue | null>(null);

function useCarousel() {
  const ctx = useContext(CarouselContext);
  if (!ctx) {
    throw new Error("Carousel components must be used inside <Carousel>");
  }
  return ctx;
}

export interface CarouselProps extends HTMLAttributes<HTMLDivElement> {
  opts?: EmblaOptions;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
}

export const Carousel = forwardRef<HTMLDivElement, CarouselProps>(
  (
    {
      className,
      opts,
      orientation = "horizontal",
      setApi,
      children,
      ...props
    },
    ref,
  ) => {
    const [carouselRef, api] = useEmblaCarousel({
      ...opts,
      axis: orientation === "vertical" ? "y" : "x",
    });
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    const onSelect = useCallback((a: CarouselApi) => {
      if (!a) return;
      setCanScrollPrev(a.canScrollPrev());
      setCanScrollNext(a.canScrollNext());
    }, []);

    const scrollPrev = useCallback(() => api?.scrollPrev(), [api]);
    const scrollNext = useCallback(() => api?.scrollNext(), [api]);

    const handleKeyDown = useCallback(
      (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext],
    );

    useEffect(() => {
      if (!api || !setApi) return;
      setApi(api);
    }, [api, setApi]);

    useEffect(() => {
      if (!api) return;
      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);
      return () => {
        api.off("select", onSelect);
      };
    }, [api, onSelect]);

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api,
          orientation,
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    );
  },
);
Carousel.displayName = "Carousel";

export const CarouselContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel();
    return (
      <div ref={carouselRef} className="overflow-hidden">
        <div
          ref={ref}
          className={cn(
            "flex",
            orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
            className,
          )}
          {...props}
        />
      </div>
    );
  },
);
CarouselContent.displayName = "CarouselContent";

export const CarouselItem = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { orientation } = useCarousel();
    return (
      <div
        ref={ref}
        role="group"
        aria-roledescription="slide"
        className={cn(
          "min-w-0 shrink-0 grow-0 basis-full",
          orientation === "horizontal" ? "pl-4" : "pt-4",
          className,
        )}
        {...props}
      />
    );
  },
);
CarouselItem.displayName = "CarouselItem";

const ChevronLeft = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="m15 18-6-6 6-6" />
  </svg>
);

const ChevronRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);

export interface CarouselNavButtonProps
  extends HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
}

const navButtonBase =
  "absolute z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-foreground shadow-sm transition-colors hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 disabled:opacity-40 disabled:pointer-events-none";

export const CarouselPrevious = forwardRef<
  HTMLButtonElement,
  CarouselNavButtonProps
>(({ className, ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();
  return (
    <button
      ref={ref}
      type="button"
      aria-label="Previous slide"
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      className={cn(
        navButtonBase,
        orientation === "horizontal"
          ? "left-3 top-1/2 -translate-y-1/2"
          : "left-1/2 top-3 -translate-x-1/2 rotate-90",
        className,
      )}
      {...props}
    >
      <ChevronLeft />
    </button>
  );
});
CarouselPrevious.displayName = "CarouselPrevious";

export const CarouselNext = forwardRef<
  HTMLButtonElement,
  CarouselNavButtonProps
>(({ className, ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel();
  return (
    <button
      ref={ref}
      type="button"
      aria-label="Next slide"
      disabled={!canScrollNext}
      onClick={scrollNext}
      className={cn(
        navButtonBase,
        orientation === "horizontal"
          ? "right-3 top-1/2 -translate-y-1/2"
          : "left-1/2 bottom-3 -translate-x-1/2 rotate-90",
        className,
      )}
      {...props}
    >
      <ChevronRight />
    </button>
  );
});
CarouselNext.displayName = "CarouselNext";

export type { CarouselApi };
