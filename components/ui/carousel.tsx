// 'use client';

// import * as React from 'react';
// import useEmblaCarousel, {
//   type UseEmblaCarouselType,
// } from 'embla-carousel-react';
// import { ArrowLeft, ArrowRight } from 'lucide-react';

// import { cn } from '@/lib/utils';
// import { Button } from '@/components/ui/button';

// type CarouselApi = UseEmblaCarouselType[1];
// type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
// type CarouselOptions = UseCarouselParameters[0];
// type CarouselPlugin = UseCarouselParameters[1];

// type CarouselProps = {
//   opts?: CarouselOptions;
//   plugins?: CarouselPlugin;
//   orientation?: 'horizontal' | 'vertical';
//   setApi?: (api: CarouselApi) => void;
// };

// type CarouselContextProps = {
//   carouselRef: ReturnType<typeof useEmblaCarousel>[0];
//   api: ReturnType<typeof useEmblaCarousel>[1];
//   scrollPrev: () => void;
//   scrollNext: () => void;
//   canScrollPrev: boolean;
//   canScrollNext: boolean;
// } & CarouselProps;

// const CarouselContext = React.createContext<CarouselContextProps | null>(null);

// function useCarousel() {
//   const context = React.useContext(CarouselContext);

//   if (!context) {
//     throw new Error('useCarousel must be used within a <Carousel />');
//   }

//   return context;
// }

// const Carousel = React.forwardRef<
//   HTMLDivElement,
//   React.HTMLAttributes<HTMLDivElement> & CarouselProps
// >(
//   (
//     {
//       orientation = 'horizontal',
//       opts,
//       setApi,
//       plugins,
//       className,
//       children,
//       ...props
//     },
//     ref
//   ) => {
//     const [carouselRef, api] = useEmblaCarousel(
//       {
//         ...opts,
//         axis: orientation === 'horizontal' ? 'x' : 'y',
//       },
//       plugins
//     );
//     const [canScrollPrev, setCanScrollPrev] = React.useState(false);
//     const [canScrollNext, setCanScrollNext] = React.useState(false);

//     const onSelect = React.useCallback((api: CarouselApi) => {
//       if (!api) {
//         return;
//       }

//       setCanScrollPrev(api.canScrollPrev());
//       setCanScrollNext(api.canScrollNext());
//     }, []);

//     const scrollPrev = React.useCallback(() => {
//       api?.scrollPrev();
//     }, [api]);

//     const scrollNext = React.useCallback(() => {
//       api?.scrollNext();
//     }, [api]);

//     const handleKeyDown = React.useCallback(
//       (event: React.KeyboardEvent<HTMLDivElement>) => {
//         if (event.key === 'ArrowLeft') {
//           event.preventDefault();
//           scrollPrev();
//         } else if (event.key === 'ArrowRight') {
//           event.preventDefault();
//           scrollNext();
//         }
//       },
//       [scrollPrev, scrollNext]
//     );

//     React.useEffect(() => {
//       if (!api || !setApi) {
//         return;
//       }

//       setApi(api);
//     }, [api, setApi]);

//     React.useEffect(() => {
//       if (!api) {
//         return;
//       }

//       onSelect(api);
//       api.on('reInit', onSelect);
//       api.on('select', onSelect);

//       return () => {
//         api?.off('select', onSelect);
//       };
//     }, [api, onSelect]);

//     return (
//       <CarouselContext.Provider
//         value={{
//           carouselRef,
//           api: api,
//           opts,
//           orientation:
//             orientation || (opts?.axis === 'y' ? 'vertical' : 'horizontal'),
//           scrollPrev,
//           scrollNext,
//           canScrollPrev,
//           canScrollNext,
//         }}
//       >
//         <div
//           ref={ref}
//           onKeyDownCapture={handleKeyDown}
//           className={cn('relative', className)}
//           role="region"
//           aria-roledescription="carousel"
//           {...props}
//         >
//           {children}
//         </div>
//       </CarouselContext.Provider>
//     );
//   }
// );
// Carousel.displayName = 'Carousel';

// const CarouselContent = React.forwardRef<
//   HTMLDivElement,
//   React.HTMLAttributes<HTMLDivElement>
// >(({ className, ...props }, ref) => {
//   const { carouselRef, orientation } = useCarousel();

//   return (
//     <div ref={carouselRef} className="overflow-hidden">
//       <div
//         ref={ref}
//         className={cn(
//           'flex',
//           orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col',
//           className
//         )}
//         {...props}
//       />
//     </div>
//   );
// });
// CarouselContent.displayName = 'CarouselContent';

// const CarouselItem = React.forwardRef<
//   HTMLDivElement,
//   React.HTMLAttributes<HTMLDivElement>
// >(({ className, ...props }, ref) => {
//   const { orientation } = useCarousel();

//   return (
//     <div
//       ref={ref}
//       role="group"
//       aria-roledescription="slide"
//       className={cn(
//         'min-w-0 shrink-0 grow-0 basis-full',
//         orientation === 'horizontal' ? 'pl-4' : 'pt-4',
//         className
//       )}
//       {...props}
//     />
//   );
// });
// CarouselItem.displayName = 'CarouselItem';

// const CarouselPrevious = React.forwardRef<
//   HTMLButtonElement,
//   React.ComponentProps<typeof Button>
// >(({ className, variant = 'outline', size = 'icon', ...props }, ref) => {
//   const { orientation, scrollPrev, canScrollPrev } = useCarousel();

//   return (
//     <Button
//       ref={ref}
//       variant={variant}
//       size={size}
//       className={cn(
//         'absolute  h-8 w-8 rounded-full',
//         orientation === 'horizontal'
//           ? '-left-12 top-1/2 -translate-y-1/2'
//           : '-top-12 left-1/2 -translate-x-1/2 rotate-90',
//         className
//       )}
//       disabled={!canScrollPrev}
//       onClick={scrollPrev}
//       {...props}
//     >
//       <ArrowLeft className="h-4 w-4" />
//       <span className="sr-only">Previous slide</span>
//     </Button>
//   );
// });
// CarouselPrevious.displayName = 'CarouselPrevious';

// const CarouselNext = React.forwardRef<
//   HTMLButtonElement,
//   React.ComponentProps<typeof Button>
// >(({ className, variant = 'outline', size = 'icon', ...props }, ref) => {
//   const { orientation, scrollNext, canScrollNext } = useCarousel();

//   return (
//     <Button
//       ref={ref}
//       variant={variant}
//       size={size}
//       className={cn(
//         'absolute h-8 w-8 rounded-full',
//         orientation === 'horizontal'
//           ? '-right-12 top-1/2 -translate-y-1/2'
//           : '-bottom-12 left-1/2 -translate-x-1/2 rotate-90',
//         className
//       )}
//       disabled={!canScrollNext}
//       onClick={scrollNext}
//       {...props}
//     >
//       <ArrowRight className="h-4 w-4" />
//       <span className="sr-only">Next slide</span>
//     </Button>
//   );
// });
// CarouselNext.displayName = 'CarouselNext';

// export {
//   type CarouselApi,
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselPrevious,
//   CarouselNext,
// };



// 3 - slider 

// "use client"

// import useEmblaCarousel, {
//   type UseEmblaCarouselType,
// } from 'embla-carousel-react';
// import { ArrowLeft, ArrowRight } from 'lucide-react';

// import { cn } from '@/lib/utils';
// import { Button } from '@/components/ui/button';

// import React, { useState, useEffect } from "react";

// const images = [
//   "https://i.pinimg.com/1200x/70/7c/d1/707cd1e6e9f48aaefe9b310f63c7ad55.jpg",
//   "https://i.pinimg.com/1200x/d5/51/51/d551518bb91d535370549eb9fbfb096b.jpg",
//   "https://i.pinimg.com/736x/37/b4/f2/37b4f24c0daac4b6851d08d410ff9767.jpg",
//   "https://i.pinimg.com/474x/92/f5/bb/92f5bb550ce33d1576c5aaea1d5c1f18.jpg",
//   "https://i.pinimg.com/736x/89/6d/61/896d6145bc1f75dae45f8c3069862e40.jpg",
//   "https://i.pinimg.com/736x/52/c3/90/52c390d5fb9cdfcc140a82e9a8d88b4a.jpg",
//   "https://i.pinimg.com/736x/b5/bf/0a/b5bf0af0a86f8b29e98805ff89f8061f.jpg",
//   "https://i.pinimg.com/736x/a3/c2/5b/a3c25b1f8d0891d194dbe4c142161837.jpg",
//   "https://i.pinimg.com/736x/8c/ab/1e/8cab1e6861bbc8b3914c0f660fe0544c.jpg",
// ];

// //trying to add reviews - images for Carousel2

// const images2 = [
//   "https://i.imghippo.com/files/yunM9022xFU.png",
//   "https://i.imghippo.com/files/TGU1365Ao.png",
//   "https://i.imghippo.com/files/VaE4326URE.png",
//   "https://i.imghippo.com/files/BtNv1853vc.png",
  
// ];


// //adding extra carousel

// const images3 = [
//   "https://i.pinimg.com/736x/a9/b4/1d/a9b41d6aaaaf67ee9900ae83fed074b9.jpg",

//   "https://i.pinimg.com/1200x/0d/2a/91/0d2a9173536ee208b42f837ea6496ae1.jpg",
//   "https://i.pinimg.com/736x/b9/34/f1/b934f1c2282b5c22b751d8824e900184.jpg",
//   "https://i.pinimg.com/1200x/94/15/4e/94154ee11f3e2a3f6c5aa3f2c643240e.jpg",
//   "https://i.pinimg.com/1200x/e5/48/ad/e548adba23c55bd9cd0a23bd2721cb74.jpg",
 
//   "https://i.pinimg.com/736x/8c/ab/1e/8cab1e6861bbc8b3914c0f660fe0544c.jpg",
// ];

// export const Carousel1 = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Automatically slide every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       handleNext();
//     }, 5000); // Change image every 5 seconds
//     return () => clearInterval(interval); // Cleanup interval on unmount
//   }, [currentIndex]);

//   // Go to the next image
//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   // Go to the previous image
//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   // Go to a specific image
//   const goToImage = (index: number) => {
//     setCurrentIndex(index);
//   };

//   return (
//     <div className="relative w-full max-w-4xl mx-auto">
//       {/* Image Container */}
//       <div className="relative overflow-hidden">
//         <div
//           className="flex transition-transform duration-700 ease-in-out"
//           style={{
//             transform: `translateX(-${currentIndex * 100}%)`,
//           }}
//         >
//           {images.map((src, index) => (
//             <div key={index} className="w-full flex-shrink-0">
//               <img
//                 src={src}
//                 alt={`Carousel image ${index + 1}`}
//                 className="w-full h-[300px] object-cover rounded-lg"
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Navigation Arrows */}
//       <button
//         className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10 hover:bg-black/70"
//         onClick={handlePrev}
//       >
//         &#8249; {/* Left Arrow */}
//       </button>
//       <button
//         className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10 hover:bg-black/70"
//         onClick={handleNext}
//       >
//         &#8250; {/* Right Arrow */}
//       </button>

//       {/* Indicators */}
//       <div className="flex justify-center mt-4">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             className={`w-3 h-3 rounded-full mx-1 ${
//               currentIndex === index ? "bg-primary" : "bg-gray-400"
//             }`}
//             onClick={() => goToImage(index)}
//           ></button>
//         ))}
//       </div>
//     </div>
//   );
// };


// // optimising carousel2 for smaller screens

// export const Carousel2 = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Automatically slide every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       handleNext();
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   // Go to the next image
//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images2.length);
//   };

//   // Go to the previous image
//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images2.length - 1 : prevIndex - 1
//     );
//   };

//   // Go to a specific image
//   const goToImage = (index: number) => {
//     setCurrentIndex(index);
//   };

//   return (
//     <div className="relative w-full max-w-4xl mx-auto">
//       {/* Image Container */}
//       <div className="relative overflow-hidden">
//         <div
//           className="flex transition-transform duration-700 ease-in-out"
//           style={{
//             transform: `translateX(-${currentIndex * 100}%)`,
//           }}
//         >
//           {images2.map((src, index) => (
//             <div key={index} className="w-full flex-shrink-0">
//               <img
//                 src={src}
//                 alt={`Carousel image ${index + 1}`}
//                 className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-contain rounded-lg"
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Navigation Arrows */}
//       <button
//         className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10 hover:bg-black/70"
//         onClick={handlePrev}
//       >
//         &#8249; {/* Left Arrow */}
//       </button>
//       <button
//         className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10 hover:bg-black/70"
//         onClick={handleNext}
//       >
//         &#8250; {/* Right Arrow */}
//       </button>

//       {/* Indicators */}
//       <div className="flex justify-center mt-4">
//         {images2.map((_, index) => (
//           <button
//             key={index}
//             className={`w-3 h-3 rounded-full mx-1 ${
//               currentIndex === index ? "bg-primary" : "bg-gray-400"
//             }`}
//             onClick={() => goToImage(index)}
//           ></button>
//         ))}
//       </div>
//     </div>
//   );
// };

// // third carousel in homepage side of images3

// export const Carousel3 = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Automatically slide every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       handleNext();
//     }, 5000); // Change image every 5 seconds
//     return () => clearInterval(interval); // Cleanup interval on unmount
//   }, [currentIndex]);

//   // Go to the next image
//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images3.length);
//   };

//   // Go to the previous image
//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   // Go to a specific image
//   const goToImage = (index: number) => {
//     setCurrentIndex(index);
//   };

//   return (
//     <div className="relative w-full max-w-4xl mx-auto">
//       {/* Image Container */}
//       <div className="relative overflow-hidden">
//         <div
//           className="flex transition-transform duration-700 ease-in-out"
//           style={{
//             transform: `translateX(-${currentIndex * 100}%)`,
//           }}
//         >
//           {images3.map((src, index) => (
//             <div key={index} className="w-full flex-shrink-0">
//               <img
//                 src={src}
//                 alt={`Carousel image ${index + 1}`}
//                 className="w-full h-[300px] object-cover rounded-lg"
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Navigation Arrows */}
//       <button
//         className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10 hover:bg-black/70"
//         onClick={handlePrev}
//       >
//         &#8249; {/* Left Arrow */}
//       </button>
//       <button
//         className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10 hover:bg-black/70"
//         onClick={handleNext}
//       >
//         &#8250; {/* Right Arrow */}
//       </button>

//       {/* Indicators */}
//       <div className="flex justify-center mt-4">
//         {images3.map((_, index) => (
//           <button
//             key={index}
//             className={`w-3 h-3 rounded-full mx-1 ${
//               currentIndex === index ? "bg-primary" : "bg-gray-400"
//             }`}
//             onClick={() => goToImage(index)}
//           ></button>
//         ))}
//       </div>
//     </div>
//   );
// };





// type CarouselApi = UseEmblaCarouselType[1];
// type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
// type CarouselOptions = UseCarouselParameters[0];
// type CarouselPlugin = UseCarouselParameters[1];

// type CarouselProps = {
//   opts?: CarouselOptions;
//   plugins?: CarouselPlugin;
//   orientation?: 'horizontal' | 'vertical';
//   setApi?: (api: CarouselApi) => void;
// };

// type CarouselContextProps = {
//   carouselRef: ReturnType<typeof useEmblaCarousel>[0];
//   api: ReturnType<typeof useEmblaCarousel>[1];
//   scrollPrev: () => void;
//   scrollNext: () => void;
//   canScrollPrev: boolean;
//   canScrollNext: boolean;
// } & CarouselProps;

// const CarouselContext = React.createContext<CarouselContextProps | null>(null);

// function useCarousel() {
//   const context = React.useContext(CarouselContext);

//   if (!context) {
//     throw new Error('useCarousel must be used within a <Carousel />');
//   }

//   return context;
// }

// const Carousel = React.forwardRef<
//   HTMLDivElement,
//   React.HTMLAttributes<HTMLDivElement> & CarouselProps
// >(
//   (
//     {
//       orientation = 'horizontal',
//       opts,
//       setApi,
//       plugins,
//       className,
//       children,
//       ...props
//     },
//     ref
//   ) => {
//     const [carouselRef, api] = useEmblaCarousel(
//       {
//         ...opts,
//         axis: orientation === 'horizontal' ? 'x' : 'y',
//       },
//       plugins
//     );
//     const [canScrollPrev, setCanScrollPrev] = React.useState(false);
//     const [canScrollNext, setCanScrollNext] = React.useState(false);

//     const onSelect = React.useCallback((api: CarouselApi) => {
//       if (!api) {
//         return;
//       }

//       setCanScrollPrev(api.canScrollPrev());
//       setCanScrollNext(api.canScrollNext());
//     }, []);

//     const scrollPrev = React.useCallback(() => {
//       api?.scrollPrev();
//     }, [api]);

//     const scrollNext = React.useCallback(() => {
//       api?.scrollNext();
//     }, [api]);

//     const handleKeyDown = React.useCallback(
//       (event: React.KeyboardEvent<HTMLDivElement>) => {
//         if (event.key === 'ArrowLeft') {
//           event.preventDefault();
//           scrollPrev();
//         } else if (event.key === 'ArrowRight') {
//           event.preventDefault();
//           scrollNext();
//         }
//       },
//       [scrollPrev, scrollNext]
//     );

//     React.useEffect(() => {
//       if (!api || !setApi) {
//         return;
//       }

//       setApi(api);
//     }, [api, setApi]);

//     React.useEffect(() => {
//       if (!api) {
//         return;
//       }

//       onSelect(api);
//       api.on('reInit', onSelect);
//       api.on('select', onSelect);

//       return () => {
//         api?.off('select', onSelect);
//       };
//     }, [api, onSelect]);

//     return (
//       <CarouselContext.Provider
//         value={{
//           carouselRef,
//           api: api,
//           opts,
//           orientation:
//             orientation || (opts?.axis === 'y' ? 'vertical' : 'horizontal'),
//           scrollPrev,
//           scrollNext,
//           canScrollPrev,
//           canScrollNext,
//         }}
//       >
//         <div
//           ref={ref}
//           onKeyDownCapture={handleKeyDown}
//           className={cn('relative', className)}
//           role="region"
//           aria-roledescription="carousel"
//           {...props}
//         >
//           {children}
//         </div>
//       </CarouselContext.Provider>
//     );
//   }
// );
// Carousel.displayName = 'Carousel';

// const CarouselContent = React.forwardRef<
//   HTMLDivElement,
//   React.HTMLAttributes<HTMLDivElement>
// >(({ className, ...props }, ref) => {
//   const { carouselRef, orientation } = useCarousel();

//   return (
//     <div ref={carouselRef} className="overflow-hidden">
//       <div
//         ref={ref}
//         className={cn(
//           'flex',
//           orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col',
//           className
//         )}
//         {...props}
//       />
//     </div>
//   );
// });
// CarouselContent.displayName = 'CarouselContent';

// const CarouselItem = React.forwardRef<
//   HTMLDivElement,
//   React.HTMLAttributes<HTMLDivElement>
// >(({ className, ...props }, ref) => {
//   const { orientation } = useCarousel();

//   return (
//     <div
//       ref={ref}
//       role="group"
//       aria-roledescription="slide"
//       className={cn(
//         'min-w-0 shrink-0 grow-0 basis-full',
//         orientation === 'horizontal' ? 'pl-4' : 'pt-4',
//         className
//       )}
//       {...props}
//     />
//   );
// });
// CarouselItem.displayName = 'CarouselItem';

// const CarouselPrevious = React.forwardRef<
//   HTMLButtonElement,
//   React.ComponentProps<typeof Button>
// >(({ className, variant = 'outline', size = 'icon', ...props }, ref) => {
//   const { orientation, scrollPrev, canScrollPrev } = useCarousel();

//   return (
//     <Button
//       ref={ref}
//       variant={variant}
//       size={size}
//       className={cn(
//         'absolute  h-8 w-8 rounded-full',
//         orientation === 'horizontal'
//           ? '-left-12 top-1/2 -translate-y-1/2'
//           : '-top-12 left-1/2 -translate-x-1/2 rotate-90',
//         className
//       )}
//       disabled={!canScrollPrev}
//       onClick={scrollPrev}
//       {...props}
//     >
//       <ArrowLeft className="h-4 w-4" />
//       <span className="sr-only">Previous slide</span>
//     </Button>
//   );
// });
// CarouselPrevious.displayName = 'CarouselPrevious';

// const CarouselNext = React.forwardRef<
//   HTMLButtonElement,
//   React.ComponentProps<typeof Button>
// >(({ className, variant = 'outline', size = 'icon', ...props }, ref) => {
//   const { orientation, scrollNext, canScrollNext } = useCarousel();

//   return (
//     <Button
//       ref={ref}
//       variant={variant}
//       size={size}
//       className={cn(
//         'absolute h-8 w-8 rounded-full',
//         orientation === 'horizontal'
//           ? '-right-12 top-1/2 -translate-y-1/2'
//           : '-bottom-12 left-1/2 -translate-x-1/2 rotate-90',
//         className
//       )}
//       disabled={!canScrollNext}
//       onClick={scrollNext}
//       {...props}
//     >
//       <ArrowRight className="h-4 w-4" />
//       <span className="sr-only">Next slide</span>
//     </Button>
//   );
// });
// CarouselNext.displayName = 'CarouselNext';

// export {
//   type CarouselApi,
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselPrevious,
//   CarouselNext,
// };

// 4 -- optimising

"use client"

import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import React, { useState, useEffect } from "react";

const images = [
  "https://i.pinimg.com/1200x/52/ce/f7/52cef7889d01b615a48c3b089b93758d.jpg",
  "https://i.pinimg.com/1200x/70/7c/d1/707cd1e6e9f48aaefe9b310f63c7ad55.jpg",
  "https://i.pinimg.com/1200x/d5/51/51/d551518bb91d535370549eb9fbfb096b.jpg",
 
  "https://i.pinimg.com/1200x/18/09/15/18091582094b6c6c6368c0dd116c0566.jpg",
  "https://i.pinimg.com/1200x/50/2e/59/502e5951ea3790b17c6437addf4b366f.jpg",
  "https://i.pinimg.com/736x/f7/f0/86/f7f08669a32c3318c8e01119cefacbab.jpg",
  "https://i.pinimg.com/736x/6f/e9/65/6fe9653312f76a5e505a09ca126e73c2.jpg",
  "https://i.pinimg.com/1200x/79/0a/2b/790a2b388378d26892c30217c3963f1c.jpg",
  "https://i.pinimg.com/1200x/a9/d2/f4/a9d2f450b3a5ea5ead41d5efc04e9b7e.jpg",
];

const images2 = [
  "https://i.pinimg.com/1200x/d0/cc/a0/d0cca0361266c6c8e2cf2a9d41e70a54.jpg",
  // "https://i.imghippo.com/files/TGU1365Ao.png",
  // "https://i.imghippo.com/files/VaE4326URE.png",
  // "https://i.imghippo.com/files/BtNv1853vc.png",
];

const images3 = [
  "https://i.pinimg.com/1200x/ce/74/a6/ce74a6f051acd7140da2b97d9db4d382.jpg",
  "https://i.pinimg.com/1200x/bc/09/30/bc0930716e088051763d14fb77717b7c.jpg",
  "https://i.pinimg.com/1200x/e3/d5/cb/e3d5cb2604dae03eefffb6bdefe500c5.jpg",
  "https://i.pinimg.com/1200x/62/3a/7a/623a7aec3394236f4bbb5905529c16bc.jpg",
  "https://i.pinimg.com/1200x/a9/d2/f4/a9d2f450b3a5ea5ead41d5efc04e9b7e.jpg",
  "https://i.pinimg.com/1200x/50/2e/59/502e5951ea3790b17c6437addf4b366f.jpg",
];

export const Carousel1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative overflow-hidden aspect-[16/9]">
        <div
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((src, index) => (
            <div key={index} className="w-full flex-shrink-0 h-full">
              <img
                src={src}
                alt={`Carousel image ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10 hover:bg-black/70"
        onClick={handlePrev}
      >
        &#8249;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10 hover:bg-black/70"
        onClick={handleNext}
      >
        &#8250;
      </button>

      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full mx-1 ${
              currentIndex === index ? "bg-primary" : "bg-gray-400"
            }`}
            onClick={() => goToImage(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export const Carousel2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images2.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images2.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative overflow-hidden aspect-[16/9]">
        <div
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images2.map((src, index) => (
            <div key={index} className="w-full flex-shrink-0 h-full">
              <img
                src={src}
                alt={`Carousel image ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10 hover:bg-black/70"
        onClick={handlePrev}
      >
        &#8249;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10 hover:bg-black/70"
        onClick={handleNext}
      >
        &#8250;
      </button>

      <div className="flex justify-center mt-4">
        {images2.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full mx-1 ${
              currentIndex === index ? "bg-primary" : "bg-gray-400"
            }`}
            onClick={() => goToImage(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export const Carousel3 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images3.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images3.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative overflow-hidden aspect-[16/9]">
        <div
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images3.map((src, index) => (
            <div key={index} className="w-full flex-shrink-0 h-full">
              <img
                src={src}
                alt={`Carousel image ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10 hover:bg-black/70"
        onClick={handlePrev}
      >
        &#8249;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10 hover:bg-black/70"
        onClick={handleNext}
      >
        &#8250;
      </button>

      <div className="flex justify-center mt-4">
        {images3.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full mx-1 ${
              currentIndex === index ? "bg-primary" : "bg-gray-400"
            }`}
            onClick={() => goToImage(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: 'horizontal' | 'vertical';
  setApi?: (api: CarouselApi) => void;
};

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />');
  }

  return context;
}

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
    {
      orientation = 'horizontal',
      opts,
      setApi,
      plugins,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === 'horizontal' ? 'x' : 'y',
      },
      plugins
    );
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) {
        return;
      }

      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    }, []);

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev();
    }, [api]);

    const scrollNext = React.useCallback(() => {
      api?.scrollNext();
    }, [api]);

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'ArrowLeft') {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === 'ArrowRight') {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext]
    );

    React.useEffect(() => {
      if (!api || !setApi) {
        return;
      }

      setApi(api);
    }, [api, setApi]);

    React.useEffect(() => {
      if (!api) {
        return;
      }

      onSelect(api);
      api.on('reInit', onSelect);
      api.on('select', onSelect);

      return () => {
        api?.off('select', onSelect);
      };
    }, [api, onSelect]);

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation:
            orientation || (opts?.axis === 'y' ? 'vertical' : 'horizontal'),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn('relative', className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    );
  }
);
Carousel.displayName = 'Carousel';

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel();

  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        ref={ref}
        className={cn(
          'flex',
          orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col',
          className
        )}
        {...props}
      />
    </div>
  );
});
CarouselContent.displayName = 'CarouselContent';

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel();

  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        'min-w-0 shrink-0 grow-0 basis-full',
        orientation === 'horizontal' ? 'pl-4' : 'pt-4',
        className
      )}
      {...props}
    />
  );
});
CarouselItem.displayName = 'CarouselItem';

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = 'outline', size = 'icon', ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        'absolute h-8 w-8 rounded-full',
        orientation === 'horizontal'
          ? '-left-12 top-1/2 -translate-y-1/2'
          : '-top-12 left-1/2 -translate-x-1/2 rotate-90',
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeft className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>
    </Button>
  );
});
CarouselPrevious.displayName = 'CarouselPrevious';

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = 'outline', size = 'icon', ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel();

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        'absolute h-8 w-8 rounded-full',
        orientation === 'horizontal'
          ? '-right-12 top-1/2 -translate-y-1/2'
          : '-bottom-12 left-1/2 -translate-x-1/2 rotate-90',
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRight className="h-4 w-4" />
      <span className="sr-only">Next slide</span>
    </Button>
  );
});
CarouselNext.displayName = 'CarouselNext';

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
};