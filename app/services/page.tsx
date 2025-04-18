// // trying to keep category wise -- experimental -- working correctly

// "use client";

// import { useState } from "react";
// import { Mic, Music, Radio, Video, Users, Guitar, Calendar, Headphones, Speaker, Youtube, Star, Building, PartyPopper } from "lucide-react";
// import { Card } from "@/components/ui/card";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import { ReactElement } from "react";

// interface Service {
//   title: string;
//   price: string;
//   duration: string;
//   icon: ReactElement;
//   description: string;
//   features: string[];
//   images: string[];
// }

// interface ServiceCategories {
//   podcast: Service[];
//   karaoke: Service[];
//   production: Service[];
//   jam: Service[];
//   learning: Service[];
//   misc: Service[];
// }

// type CategoryId = keyof ServiceCategories;

// function ContactUsButton() {
//   return (
//     <div className="text-center">
//       <Link legacyBehavior href="/booking">
//         <a className="w-full inline-block py-3 px-6 text-center bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700">
//           Book your Service now
//         </a>
//       </Link>
//     </div>
//   );
// }

// const categories = [
//   {
//     id: "podcast" as CategoryId,
//     name: "Podcast Services",
//     icon: <Radio className="w-6 h-6" />,
//   },
//   {
//     id: "karaoke" as CategoryId,
//     name: "Karaoke & Events",
//     icon: <PartyPopper className="w-6 h-6" />,
//   },
//   {
//     id: "production" as CategoryId,
//     name: "Music Production",
//     icon: <Music className="w-6 h-6" />,
//   },
//   {
//     id: "jam" as CategoryId,
//     name: "Jam Sessions",
//     icon: <Guitar className="w-6 h-6" />,
//   },
//   {
//     id: "learning" as CategoryId,
//     name: "Music Learning",
//     icon: <Users className="w-6 h-6" />,
//   },
//   {
//     id: "misc" as CategoryId,
//     name: "Other Services",
//     icon: <Star className="w-6 h-6" />,
//   },
// ];

// const services: ServiceCategories = {
//   podcast: [
//     {
//       title: "Audio Podcast",
//       price: "₹1,499.00",
//       duration: "Per hour",
//       icon: <Radio className="w-6 h-6" />,
//       description: "Round Table setup with seating arrangements in a sound proof room",
//       features: [
//         "Sound proof Room with AC",
//         "UPS backup (1-2 hours)",
//         "Podcast Mics",
//         "Sound Engineer",
//         "Multitracking capable Systems",
//         "Black backgrounds wall 9ft",
//         "Camera Rental: Sony alfa A7 (₹3500 per camera)",
//         "Post editing/mastering charges additional",
//         "50% Advance payment required"
//       ],
//       images: [
//         // "https://i.pinimg.com/1200x/de/da/05/deda0595dd29b9da14a6c2a39eb5fd88.jpg",
//         "https://i.pinimg.com/1200x/f5/a6/9f/f5a69ffedcca4255d9cfd728c1abbe1f.jpg",
//         // "https://i.pinimg.com/736x/7e/73/1f/7e731f6b9b4086c7a3356b3461e78812.jpg",
//         "https://i.pinimg.com/1200x/50/2e/59/502e5951ea3790b17c6437addf4b366f.jpg"
//       ]
//     },
//     {
//       title: "Podcast Audio & Video Production",
//       price: "₹22,000.00",
//       duration: "4 hours",
//       icon: <Video className="w-6 h-6" />,
//       description: "Complete half-day podcast production package",
//       features: [
//         "2 day lights (300W) with Floor Stand",
//         "8ft brown/Black background screen",
//         "Basic Properties (lamps, plants)",
//         "Sound proof Room with AC",
//         "UPS backup",
//         "Client waiting room with AC",
//         "Two DSLR cameras (HD Quality)",
//         "Two podcast microphones",
//         "Multi-tracking audio recording",
//         "Professional crew included",
//         "4K Quality available at ₹35,000"
//       ],
//       images: [
//         // "https://i.pinimg.com/736x/6d/89/52/6d895209bb2d3ce0c21861c7339284dd.jpg",
//         "https://i.pinimg.com/1200x/18/09/15/18091582094b6c6c6368c0dd116c0566.jpg",
//         // "https://i.pinimg.com/1200x/de/7e/b0/de7eb0299b0b01e844e22fb61ed3342f.jpg",
//         "https://i.pinimg.com/1200x/d5/51/51/d551518bb91d535370549eb9fbfb096b.jpg",
//         // "https://i.pinimg.com/736x/28/b3/a7/28b3a769af199c4556ca907b39ba0ffb.jpg",
//       ]
//     },
//   ],
//   karaoke: [
//     {
//       title: "Intimate Sessions/Karaoke",
//       price: "₹7,500.00",
//       duration: "4 hours",
//       icon: <Users className="w-6 h-6" />,
//       description: "Perfect for small musical gatherings",
//       features: [
//         "Acoustically treated room with AC",
//         "1-2 hours power backup",
//         "25-30 seating capacity",
//         "1000W PA system",
//         "8 channel mixer",
//         "Dynamic mics (SM57/SM58)",
//         "Wireless microphone available",
//         "Professional equipment"
//       ],
//       images: [
//         // "https://i.pinimg.com/1200x/8a/43/a2/8a43a2a62bba97b5aa9d23a9fa00a3e0.jpg",
//         "https://i.pinimg.com/1200x/7c/f3/04/7cf304435dcb2dc7d28dca5e8a78c856.jpg",
//         // "https://i.pinimg.com/1200x/02/3b/61/023b61c428cdace73dcc78169ba712f5.jpg",
//         "https://i.pinimg.com/1200x/f7/f0/86/f7f08669a32c3318c8e01119cefacbab.jpg",
//         // "https://i.pinimg.com/1200x/6f/6a/55/6f6a557d765c59c44bab4d0e8c8335ba.jpg",
//       ]
//     },
//     {
//       title: "Karaoke Party Venue",
//       price: "₹299.00",
//       duration: "Per Head",
//       icon: <PartyPopper className="w-6 h-6" />,
//       description: "Perfect venue for karaoke parties",
//       features: [
//         "Air-conditioned venue",
//         "UPS backup",
//         "Professional sound system",
//         "Karaoke equipment",
//         "Comfortable seating",
//         "Group booking available"
//       ],
//       images: [
//         // "https://i.pinimg.com/736x/cb/39/6b/cb396b7f5689322befa801cd34dcc33d.jpg",
//         "https://i.pinimg.com/1200x/b7/b5/bb/b7b5bb644bfa8e5d36be10bdaa11f620.jpg",
//         "https://images.unsplash.com/photo-1501612780327-45045538702b",
//       ]
//     },
//   ],
//   production: [
//     {
//       title: "Recording Session",
//       price: "₹750.00",
//       duration: "Per Hour",
//       icon: <Mic className="w-6 h-6" />,
//       description: "Vocal booth Recording with MXL 990 / AKG220",
//       features: [
//         "Professional vocal booth",
//         "High-quality microphones",
//         "Sound-treated environment",
//         "Professional monitoring"
//       ],
//       images: [
//         "https://i.pinimg.com/1200x/06/cc/8e/06cc8e506dc149f6442a6fe5700cf7de.jpg",
//         "https://i.pinimg.com/1200x/1c/4b/e5/1c4be541bafe045ed7fae888525da035.jpg",
//       ]
//     },
//     {
//       title: "Premium Room with Rode NT2",
//       price: "₹1,200.00",
//       duration: "Per Hour",
//       icon: <Star className="w-6 h-6" />,
//       description: "Spacious premium recording room",
//       features: [
//         "Rode NT2a microphone",
//         "Space for 6-piece Orchestra",
//         "Drum tracking capability",
//         "Multitracking available",
//         "Air-conditioned environment"
//       ],
//       images: [
//         "https://i.pinimg.com/1200x/62/63/ef/6263ef355acf647b3de5963ce8a0bf6e.jpg",
//         "https://i.pinimg.com/1200x/a9/b4/1d/a9b41d6aaaaf67ee9900ae83fed074b9.jpg",
//       ]
//     },
//     {
//       title: "Vocals Mixing Mastering Package",
//       price: "₹2,500.00",
//       duration: "Package",
//       icon: <Headphones className="w-6 h-6" />,
//       description: "Complete vocal recording and mixing package",
//       features: [
//         "Recording with MXL 990/AKG220",
//         "1 hour recording session",
//         "Karaoke/minus Track",
//         "Professional mixing",
//         "Mastering included",
//         "50% Advance payment"
//       ],
//       images: [
//         "https://i.pinimg.com/1200x/ae/19/8f/ae198f1af59b8603314c32a54f9b4959.jpg",
//         "https://i.pinimg.com/1200x/e2/6e/0c/e26e0ccde3f6119e6c229602ae19a28a.jpg",
//       ]
//     },
//     {
//       title: " BEGINNER YouTube Cover Song",
//       price: "₹4,999.00",
//       duration: "Package",
//       icon: <Youtube className="w-6 h-6" />,
//       description: "Starter package for YouTube cover videos",
//       features: [
//         "Professional video shoot",
//         "Basic editing",
//         "Quality equipment",
//         "Perfect for beginners",
//         "Sample videos available"
//       ],
//       images: [
//         "https://i.pinimg.com/1200x/a6/3a/ab/a63aab39e3173eaf25a8d24227be81b1.jpg",
//         "https://i.pinimg.com/1200x/46/2f/0b/462f0b0a21fc5059c6675d806bf0a79c.jpg",
//       ]
//     },
//     {
//       title: "Professional Cover Songs Package",
//       price: "₹12,000.00",
//       duration: "Package",
//       icon: <Star className="w-6 h-6" />,
//       description: "Complete professional cover song production",
//       features: [
//         "Recording with minus track",
//         "Professional mixing & mastering",
//         "DSLR video shoot",
//         "Professional cameraman",
//         "Lighting setup",
//         "Indoor venue",
//         "50% advance required"
//       ],
//       images: [
//         "https://i.pinimg.com/474x/fd/34/94/fd3494dc88f5b075c0d529f30d89383c.jpg",
//         "https://images.unsplash.com/photo-1598653222000-6b7b7a552625",
//       ]
//     },
//   ],
//   jam: [
//     {
//       title: "Jam Sessions",
//       price: "₹550.00",
//       duration: "Per Hour",
//       icon: <Music className="w-6 h-6" />,
//       description: "Professional jam room with full equipment",
//       features: [
//         "Sound proof room with UPS",
//         "Tama drum kit",
//         "1000W speakers",
//         "Dynamic microphones",
//         "16 Channel mixer",
//         "Blackstar 150 ID",
//         "Hartke A70 Bass Combo",
//         "Equipment rental available"
//       ],
//       images: [
//         "https://i.pinimg.com/1200x/9c/2c/85/9c2c8523f9639791ea2d82868bd578b4.jpg",
//         "https://i.pinimg.com/1200x/d8/53/2d/d8532d83f21e31c947c4f51470101c9f.jpg",
//       ]
//     },
//     {
//       title: "10 Hours Jam Package",
//       price: "₹5,000.00",
//       duration: "Package",
//       icon: <Music className="w-6 h-6" />,
//       description: "10 hours of jam session time",
//       features: [
//         "Valid for 30 days",
//         "5-6 piece band setup",
//         "Advance payment required",
//         "Flexible scheduling",
//         "Professional equipment",
//         "Cancellation charges apply"
//       ],
//       images: [
//         "https://i.pinimg.com/1200x/3e/2b/ea/3e2beadae399e46f868293b70592315d.jpg",
//         "https://i.pinimg.com/1200x/47/dc/e3/47dce3d3d8a9cc7898b7ab6d4ce03078.jpg",
//       ]
//     },
//   ],
//   learning: [
//     {
//       title: "Music Classes",
//       price: "₹10,000.00",
//       duration: "3 months",
//       icon: <Guitar className="w-6 h-6" />,
//       description: "Guitar/Keyboard/Drum group classes",
//       features: [
//         "3-month hobby course",
//         "8 classes per month",
//         "Weekly 2 classes",
//         "1-hour sessions",
//         "Weekend/weekday options",
//         "All age groups welcome",
//         "Music theory basics",
//         "Performance training"
//       ],
//       images: [
//         "https://i.pinimg.com/736x/24/c8/27/24c8277079cef321c09e483c55a69d68.jpg",
//         "https://i.pinimg.com/1200x/ba/e2/2a/bae22a838b6a9035b3da958bc17debf2.jpg",
//       ]
//     },
//   ],
//   misc: [
//     {
//       title: "VL Studios PREMIUM",
//       price: "₹1,000.00",
//       duration: "Per Hour",
//       icon: <Building className="w-6 h-6" />,
//       description: "Premium venue for podcasts and events",
//       features: [
//         "Intimate sessions",
//         "Open mics",
//         "Various events",
//         "Capacity: 20-30 members",
//         "Professional setup"
//       ],
//       images: [
//         "https://i.pinimg.com/1200x/e5/48/ad/e548adba23c55bd9cd0a23bd2721cb74.jpg",
//         "https://i.pinimg.com/1200x/af/e9/f0/afe9f0eab4aec366a84075e5a9580a3e.jpg",
//       ]
//     },
//     {
//       title: "12db Audio Services",
//       price: "₹2,499.00",
//       duration: "Package",
//       icon: <Speaker className="w-6 h-6" />,
//       description: "Professional audio distribution package",
//       features: [
//         "Additional mastering",
//         "Release on 20 major platforms",
//         "Professional quality",
//         "Digital distribution"
//       ],
//       images: [
//         "https://i.pinimg.com/1200x/8c/64/a9/8c64a915d6782d84ab5d25a042881f1f.jpg",
//         "https://i.pinimg.com/1200x/1e/90/5a/1e905a1fba2c7a028c9b839d3caab3ff.jpg",
//       ]
//     },
//   ],
// };

// export default function Services() {
//   const [selectedCategory, setSelectedCategory] = useState<CategoryId>("podcast");

//   return (
//     <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
//       {/* Hero Section */}
//       <div className="bg-black text-white py-20 px-4">
//         <div className="max-w-7xl mx-auto text-center">
//           <h1 className="text-5xl font-bold mb-6">VL Studios</h1>
//           <p className="text-xl mb-8">Professional Audio & Video Production Services</p>
//           <Calendar className="w-12 h-12 mx-auto animate-bounce" />
//           <br />
//           <ContactUsButton/>
//         </div>
//       </div>

//       {/* Category Selection */}
//       <div className="max-w-7xl mx-auto py-8 px-4">
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
//           {categories.map((category) => (
//             <Button
//               key={category.id}
//               variant={selectedCategory === category.id ? "default" : "outline"}
//               className="flex items-center gap-2 w-full"
//               onClick={() => setSelectedCategory(category.id)}
//             >
//               {category.icon}
//               <span className="hidden sm:inline">{category.name}</span>
//             </Button>
//           ))}
//         </div>
//       </div>

//       {/* Services Grid */}
//       <div className="max-w-7xl mx-auto py-16 px-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services[selectedCategory].map((service, index) => (
//             <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
//               <div className="mb-4">{service.icon}</div>
//               <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
//               <div className="text-xl font-bold text-primary mb-2">
//                 {service.price}
//                 <span className="text-sm text-gray-500 ml-2">{service.duration}</span>
//               </div>
//               <p className="text-gray-600 mb-4">{service.description}</p>
              
//               <div className="relative mb-4">
//                 <Carousel className="w-full">
//                   <CarouselContent>
//                     {service.images.map((image, imgIndex) => (
//                       <CarouselItem key={imgIndex}>
//                         <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
//                           <img
//                             src={image}
//                             alt={`${service.title} ${imgIndex + 1}`}
//                             className="absolute inset-0 h-full w-full object-contain bg-black/5"
//                             loading="lazy"
//                           />
//                         </div>
//                       </CarouselItem>
//                     ))}
//                   </CarouselContent>
//                   <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
//                   <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
//                 </Carousel>
//               </div>

//               <ul className="space-y-2">
//                 {service.features.map((feature, fIndex) => (
//                   <li key={fIndex} className="flex items-center text-sm text-gray-600">
//                     <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
//                     {feature}
//                   </li>
//                 ))}
//               </ul>
//             </Card>
//           ))}
//         </div>
//       </div>

//       {/* Contact Section */}
//       <div className="bg-black text-white py-16 px-4">
//         <div className="max-w-7xl mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-4">Book Your Session Today</h2>
//           <p className="mb-8">50% advance payment required for booking. Contact us for availability.</p>
//           <ContactUsButton/>
//         </div>
//       </div>
//     </main>
//   );
// }


// second - zoom functionality

// "use client";

// import { useState } from "react";
// import { Mic, Music, Radio, Video, Users, Guitar, Calendar, Headphones, Speaker, Youtube, Star, Building, PartyPopper, X } from "lucide-react";
// import { Card } from "@/components/ui/card";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogClose,
// } from "@/components/ui/dialog";
// import Link from "next/link";
// import { ReactElement } from "react";

// interface Service {
//   title: string;
//   price: string;
//   duration: string;
//   icon: ReactElement;
//   description: string;
//   features: string[];
//   images: string[];
// }

// interface ServiceCategories {
//   podcast: Service[];
//   karaoke: Service[];
//   production: Service[];
//   jam: Service[];
//   learning: Service[];
//   misc: Service[];
// }

// type CategoryId = keyof ServiceCategories;

// function ContactUsButton() {
//   return (
//     <div className="text-center">
//       <Link legacyBehavior href="/booking">
//         <a className="w-full inline-block py-3 px-6 text-center bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700">
//           Book your Service now
//         </a>
//       </Link>
//     </div>
//   );
// }

// function ImageModal({ isOpen, onClose, imageUrl }: { isOpen: boolean; onClose: () => void; imageUrl: string }) {
//   return (
//     <Dialog open={isOpen} onOpenChange={onClose}>
//       <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 overflow-hidden">
//         <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
//           <X className="h-6 w-6 text-white" />
//         </DialogClose>
//         <div className="relative w-full h-full flex items-center justify-center bg-black">
//           <img
//             src={imageUrl}
//             alt="Full size"
//             className="max-w-full max-h-[85vh] object-contain"
//           />
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// }

// const categories = [
//   {
//     id: "podcast" as CategoryId,
//     name: "Podcast Services",
//     icon: <Radio className="w-6 h-6" />,
//   },
//   {
//     id: "karaoke" as CategoryId,
//     name: "Karaoke & Events",
//     icon: <PartyPopper className="w-6 h-6" />,
//   },
//   {
//     id: "production" as CategoryId,
//     name: "Music Production",
//     icon: <Music className="w-6 h-6" />,
//   },
//   {
//     id: "jam" as CategoryId,
//     name: "Jam Sessions",
//     icon: <Guitar className="w-6 h-6" />,
//   },
//   {
//     id: "learning" as CategoryId,
//     name: "Music Learning",
//     icon: <Users className="w-6 h-6" />,
//   },
//   {
//     id: "misc" as CategoryId,
//     name: "Other Services",
//     icon: <Star className="w-6 h-6" />,
//   },
// ];

// const services: ServiceCategories = {
//   podcast: [
//     {
//       title: "Audio Podcast",
//       price: "₹1,499.00",
//       duration: "Per hour",
//       icon: <Radio className="w-6 h-6" />,
//       description: "Round Table setup with seating arrangements in a sound proof room",
//       features: [
//         "Sound proof Room with AC",
//         "UPS backup (1-2 hours)",
//         "Podcast Mics",
//         "Sound Engineer",
//         "Multitracking capable Systems",
//         "Black backgrounds wall 9ft",
//         "Camera Rental: Sony alfa A7 (₹3500 per camera)",
//         "Post editing/mastering charges additional",
//         "50% Advance payment required"
//       ],
//       images: [
//         "https://i.pinimg.com/1200x/f5/a6/9f/f5a69ffedcca4255d9cfd728c1abbe1f.jpg",
//         "https://i.pinimg.com/1200x/50/2e/59/502e5951ea3790b17c6437addf4b366f.jpg"
//       ]
//     },
//     {
//       title: "Podcast Audio & Video Production",
//       price: "₹22,000.00",
//       duration: "4 hours",
//       icon: <Video className="w-6 h-6" />,
//       description: "Complete half-day podcast production package",
//       features: [
//         "2 day lights (300W) with Floor Stand",
//         "8ft brown/Black background screen",
//         "Basic Properties (lamps, plants)",
//         "Sound proof Room with AC",
//         "UPS backup",
//         "Client waiting room with AC",
//         "Two DSLR cameras (HD Quality)",
//         "Two podcast microphones",
//         "Multi-tracking audio recording",
//         "Professional crew included",
//         "4K Quality available at ₹35,000"
//       ],
//       images: [
//         "https://i.pinimg.com/1200x/18/09/15/18091582094b6c6c6368c0dd116c0566.jpg",
//         "https://i.pinimg.com/1200x/d5/51/51/d551518bb91d535370549eb9fbfb096b.jpg"
//       ]
//     },
//   ],
//   karaoke: [
//     {
//       title: "Intimate Sessions/Karaoke",
//       price: "₹7,500.00",
//       duration: "4 hours",
//       icon: <Users className="w-6 h-6" />,
//       description: "Perfect for small musical gatherings",
//       features: [
//         "Acoustically treated room with AC",
//         "1-2 hours power backup",
//         "25-30 seating capacity",
//         "1000W PA system",
//         "8 channel mixer",
//         "Dynamic mics (SM57/SM58)",
//         "Wireless microphone available",
//         "Professional equipment"
//       ],
//       images: [
//         "https://i.pinimg.com/1200x/7c/f3/04/7cf304435dcb2dc7d28dca5e8a78c856.jpg",
//         "https://i.pinimg.com/1200x/f7/f0/86/f7f08669a32c3318c8e01119cefacbab.jpg"
//       ]
//     },
//     {
//       title: "Karaoke Party Venue",
//       price: "₹299.00",
//       duration: "Per Head",
//       icon: <PartyPopper className="w-6 h-6" />,
//       description: "Perfect venue for karaoke parties",
//       features: [
//         "Air-conditioned venue",
//         "UPS backup",
//         "Professional sound system",
//         "Karaoke equipment",
//         "Comfortable seating",
//         "Group booking available"
//       ],
//       images: [
//         "https://i.pinimg.com/1200x/b7/b5/bb/b7b5bb644bfa8e5d36be10bdaa11f620.jpg",
//         "https://images.unsplash.com/photo-1501612780327-45045538702b"
//       ]
//     },
//   ],
//   production: [
//     {
//       title: "Recording Session",
//       price: "₹750.00",
//       duration: "Per Hour",
//       icon: <Mic className="w-6 h-6" />,
//       description: "Vocal booth Recording with MXL 990 / AKG220",
//       features: [
//         "Professional vocal booth",
//         "High-quality microphones",
//         "Sound-treated environment",
//         "Professional monitoring"
//       ],
//       images: [
//         "https://i.pinimg.com/1200x/06/cc/8e/06cc8e506dc149f6442a6fe5700cf7de.jpg",
//         "https://i.pinimg.com/1200x/1c/4b/e5/1c4be541bafe045ed7fae888525da035.jpg"
//       ]
//     },
//     {
//       title: "Premium Room with Rode NT2",
//       price: "₹1,200.00",
//       duration: "Per Hour",
//       icon: <Star className="w-6 h-6" />,
//       description: "Spacious premium recording room",
//       features: [
//         "Rode NT2a microphone",
//         "Space for 6-piece Orchestra",
//         "Drum tracking capability",
//         "Multitracking available",
//         "Air-conditioned environment"
//       ],
//       images: [
//         "https://i.pinimg.com/1200x/62/63/ef/6263ef355acf647b3de5963ce8a0bf6e.jpg",
//         "https://i.pinimg.com/1200x/a9/b4/1d/a9b41d6aaaaf67ee9900ae83fed074b9.jpg"
//       ]
//     },
//     {
//       title: "Vocals Mixing Mastering Package",
//       price: "₹2,500.00",
//       duration: "Package",
//       icon: <Headphones className="w-6 h-6" />,
//       description: "Complete vocal recording and mixing package",
//       features: [
//         "Recording with MXL 990/AKG220",
//         "1 hour recording session",
//         "Karaoke/minus Track",
//         "Professional mixing",
//         "Mastering included",
//         "50% Advance payment"
//       ],
//       images: [
//         "https://i.pinimg.com/1200x/ae/19/8f/ae198f1af59b8603314c32a54f9b4959.jpg",
//         "https://i.pinimg.com/1200x/e2/6e/0c/e26e0ccde3f6119e6c229602ae19a28a.jpg"
//       ]
//     },
//     {
//       title: "BEGINNER YouTube Cover Song",
//       price: "₹4,999.00",
//       duration: "Package",
//       icon: <Youtube className="w-6 h-6" />,
//       description: "Starter package for YouTube cover videos",
//       features: [
//         "Professional video shoot",
//         "Basic editing",
//         "Quality equipment",
//         "Perfect for beginners",
//         "Sample videos available"
//       ],
//       images: [
//         "https://i.pinimg.com/1200x/a6/3a/ab/a63aab39e3173eaf25a8d24227be81b1.jpg",
//         "https://i.pinimg.com/1200x/46/2f/0b/462f0b0a21fc5059c6675d806bf0a79c.jpg"
//       ]
//     },
//     {
//       title: "Professional Cover Songs Package",
//       price: "₹12,000.00",
//       duration: "Package",
//       icon: <Star className="w-6 h-6" />,
//       description: "Complete professional cover song production",
//       features: [
//         "Recording with minus track",
//         "Professional mixing & mastering",
//         "DSLR video shoot",
//         "Professional cameraman",
//         "Lighting setup",
//         "Indoor venue",
//         "50% advance required"
//       ],
//       images: [
//         "https://i.pinimg.com/474x/fd/34/94/fd3494dc88f5b075c0d529f30d89383c.jpg",
//         "https://images.unsplash.com/photo-1598653222000-6b7b7a552625"
//       ]
//     },
//   ],
//   jam: [
//     {
//       title: "Jam Sessions",
//       price: "₹550.00",
//       duration: "Per Hour",
//       icon: <Music className="w-6 h-6" />,
//       description: "Professional jam room with full equipment",
//       features: [
//         "Sound proof room with UPS",
//         "Tama drum kit",
//         "1000W speakers",
//         "Dynamic microphones",
//         "16 Channel mixer",
//         "Blackstar 150 ID",
//         "Hartke A70 Bass Combo",
//         "Equipment rental available"
//       ],
//       images: [
//         "https://i.pinimg.com/1200x/9c/2c/85/9c2c8523f9639791ea2d82868bd578b4.jpg",
//         "https://i.pinimg.com/1200x/d8/53/2d/d8532d83f21e31c947c4f51470101c9f.jpg"
//       ]
//     },
//     {
//       title: "10 Hours Jam Package",
//       price: "₹5,000.00",
//       duration: "Package",
//       icon: <Music className="w-6 h-6" />,
//       description: "10 hours of jam session time",
//       features: [
//         "Valid for 30 days",
//         "5-6 piece band setup",
//         "Advance payment required",
//         "Flexible scheduling",
//         "Professional equipment",
//         "Cancellation charges apply"
//       ],
//       images: [
//         "https://i.pinimg.com/1200x/3e/2b/ea/3e2beadae399e46f868293b70592315d.jpg",
//         "https://i.pinimg.com/1200x/47/dc/e3/47dce3d3d8a9cc7898b7ab6d4ce03078.jpg"
//       ]
//     },
//   ],
//   learning: [
//     {
//       title: "Music Classes",
//       price: "₹10,000.00",
//       duration: "3 months",
//       icon: <Guitar className="w-6 h-6" />,
//       description: "Guitar/Keyboard/Drum group classes",
//       features: [
//         "3-month hobby course",
//         "8 classes per month",
//         "Weekly 2 classes",
//         "1-hour sessions",
//         "Weekend/weekday options",
//         "All age groups welcome",
//         "Music theory basics",
//         "Performance training"
//       ],
//       images: [
//         "https://i.pinimg.com/736x/24/c8/27/24c8277079cef321c09e483c55a69d68.jpg",
//         "https://i.pinimg.com/1200x/ba/e2/2a/bae22a838b6a9035b3da958bc17debf2.jpg"
//       ]
//     },
//   ],
//   misc: [
//     {
//       title: "VL Studios PREMIUM",
//       price: "₹1,000.00",
//       duration: "Per Hour",
//       icon: <Building className="w-6 h-6" />,
//       description: "Premium venue for podcasts and events",
//       features: [
//         "Intimate sessions",
//         "Open mics",
//         "Various events",
//         "Capacity: 20-30 members",
//         "Professional setup"
//       ],
//       images: [
//         "https://i.pinimg.com/1200x/e5/48/ad/e548adba23c55bd9cd0a23bd2721cb74.jpg",
//         "https://i.pinimg.com/1200x/af/e9/f0/afe9f0eab4aec366a84075e5a9580a3e.jpg"
//       ]
//     },
//     {
//       title: "12db Audio Services",
//       price: "₹2,499.00",
//       duration: "Package",
//       icon: <Speaker className="w-6 h-6" />,
//       description: "Professional audio distribution package",
//       features: [
//         "Additional mastering",
//         "Release on 20 major platforms",
//         "Professional quality",
//         "Digital distribution"
//       ],
//       images: [
//         "https://i.pinimg.com/1200x/8c/64/a9/8c64a915d6782d84ab5d25a042881f1f.jpg",
//         "https://i.pinimg.com/1200x/1e/90/5a/1e905a1fba2c7a028c9b839d3caab3ff.jpg"
//       ]
//     },
//   ],
// };

// export default function Services() {
//   const [selectedCategory, setSelectedCategory] = useState<CategoryId>("podcast");
//   const [selectedImage, setSelectedImage] = useState<string | null>(null);

//   return (
//     <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
//       {/* Hero Section */}
//       <div className="bg-black text-white py-20 px-4">
//         <div className="max-w-7xl mx-auto text-center">
//           <h1 className="text-5xl font-bold mb-6">VL Studios</h1>
//           <p className="text-xl mb-8">Professional Audio & Video Production Services</p>
//           <Calendar className="w-12 h-12 mx-auto animate-bounce" />
//           <br />
//           <ContactUsButton/>
//         </div>
//       </div>

//       {/* Category Selection */}
//       <div className="max-w-7xl mx-auto py-8 px-4">
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
//           {categories.map((category) => (
//             <Button
//               key={category.id}
//               variant={selectedCategory === category.id ? "default" : "outline"}
//               className="flex items-center gap-2 w-full"
//               onClick={() => setSelectedCategory(category.id)}
//             >
//               {category.icon}
//               <span className="hidden sm:inline">{category.name}</span>
//             </Button>
//           ))}
//         </div>
//       </div>

//       {/* Services Grid */}
//       <div className="max-w-7xl mx-auto py-16 px-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services[selectedCategory].map((service, index) => (
//             <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
//               <div className="mb-4">{service.icon}</div>
//               <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
//               <div className="text-xl font-bold text-primary mb-2">
//                 {service.price}
//                 <span className="text-sm text-gray-500 ml-2">{service.duration}</span>
//               </div>
//               <p className="text-gray-600 mb-4">{service.description}</p>
              
//               <div className="relative mb-4">
//                 <Carousel className="w-full">
//                   <CarouselContent>
//                     {service.images.map((image, imgIndex) => (
//                       <CarouselItem key={imgIndex}>
//                         <div 
//                           className="relative aspect-[16/9] w-full overflow-hidden rounded-lg cursor-pointer"
//                           onClick={() => setSelectedImage(image)}
//                         >
//                           <img
//                             src={image}
//                             alt={`${service.title} ${imgIndex + 1}`}
//                             className="absolute inset-0 h-full w-full object-contain bg-black/5"
//                             loading="lazy"
//                           />
//                         </div>
//                       </CarouselItem>
//                     ))}
//                   </CarouselContent>
//                   <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
//                   <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
//                 </Carousel>
//               </div>

//               <ul className="space-y-2">
//                 {service.features.map((feature, fIndex) => (
//                   <li key={fIndex} className="flex items-center text-sm text-gray-600">
//                     <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
//                     {feature}
//                   </li>
//                 ))}
//               </ul>
//             </Card>
//           ))}
//         </div>
//       </div>

//       {/* Contact Section */}
//       <div className="bg-black text-white py-16 px-4">
//         <div className="max-w-7xl mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-4">Book Your Session Today</h2>
//           <p className="mb-8">50% advance payment required for booking. Contact us for availability.</p>
//           <ContactUsButton/>
//         </div>
//       </div>

//       {/* Image Modal */}
//       <ImageModal
//         isOpen={!!selectedImage}
//         onClose={() => setSelectedImage(null)}
//         imageUrl={selectedImage || ''}
//       />
//     </main>
//   );
// }


"use client";

import { useState } from "react";
import { Mic, Music, Radio, Video, Users, Guitar, Calendar, Headphones, Speaker, Youtube, Star, Building, PartyPopper, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";
import Link from "next/link";
import { ReactElement } from "react";

interface Service {
  title: string;
  price: string;
  duration: string;
  icon: ReactElement;
  description: string;
  features: string[];
  images: string[];
}

interface ServiceCategories {
  podcast: Service[];
  karaoke: Service[];
  production: Service[];
  jam: Service[];
  learning: Service[];
  misc: Service[];
}

type CategoryId = keyof ServiceCategories;

function ContactUsButton() {
  return (
    <div className="text-center">
      <Link legacyBehavior href="/booking">
        <a className="w-full inline-block py-3 px-6 text-center bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700">
          Book your Service now
        </a>
      </Link>
    </div>
  );
}

function ImageModal({ 
  isOpen, 
  onClose, 
  imageUrl, 
  onPrevious, 
  onNext, 
  hasPrevious, 
  hasNext 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  imageUrl: string;
  onPrevious: () => void;
  onNext: () => void;
  hasPrevious: boolean;
  hasNext: boolean;
}) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 overflow-hidden">
        <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <X className="h-6 w-6 text-white" />
        </DialogClose>
        <div className="relative w-full h-full flex items-center justify-center bg-black">
          <img
            src={imageUrl}
            alt="Full size"
            className="max-w-full max-h-[85vh] object-contain"
          />
          {hasPrevious && (
            <button
              onClick={onPrevious}
              className="absolute left-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>
          )}
          {hasNext && (
            <button
              onClick={onNext}
              className="absolute right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

const categories = [
  {
    id: "podcast" as CategoryId,
    name: "Podcast Services",
    icon: <Radio className="w-6 h-6" />,
  },
  {
    id: "karaoke" as CategoryId,
    name: "Karaoke & Events",
    icon: <PartyPopper className="w-6 h-6" />,
  },
  {
    id: "production" as CategoryId,
    name: "Music Production",
    icon: <Music className="w-6 h-6" />,
  },
  {
    id: "jam" as CategoryId,
    name: "Jam Sessions",
    icon: <Guitar className="w-6 h-6" />,
  },
  {
    id: "learning" as CategoryId,
    name: "Music Learning",
    icon: <Users className="w-6 h-6" />,
  },
  {
    id: "misc" as CategoryId,
    name: "Other Services",
    icon: <Star className="w-6 h-6" />,
  },
];

const services: ServiceCategories = {
  podcast: [
    {
      title: "Audio Podcast",
      price: "₹1,499.00",
      duration: "Per hour",
      icon: <Radio className="w-6 h-6" />,
      description: "Round Table setup with seating arrangements in a sound proof room",
      features: [
        "Sound proof Room with AC",
        "UPS backup (1-2 hours)",
        "Podcast Mics",
        "Sound Engineer",
        "Multitracking capable Systems",
        "Black backgrounds wall 9ft",
        "Camera Rental: Sony alfa A7 (₹3500 per camera)",
        "Post editing/mastering charges additional",
        "50% Advance payment required"
      ],
      images: [
        "https://i.pinimg.com/1200x/f5/a6/9f/f5a69ffedcca4255d9cfd728c1abbe1f.jpg",
        "https://i.pinimg.com/1200x/50/2e/59/502e5951ea3790b17c6437addf4b366f.jpg"
      ]
    },
    {
      title: "Podcast Audio & Video Production",
      price: "₹22,000.00",
      duration: "4 hours",
      icon: <Video className="w-6 h-6" />,
      description: "Complete half-day podcast production package",
      features: [
        "2 day lights (300W) with Floor Stand",
        "8ft brown/Black background screen",
        "Basic Properties (lamps, plants)",
        "Sound proof Room with AC",
        "UPS backup",
        "Client waiting room with AC",
        "Two DSLR cameras (HD Quality)",
        "Two podcast microphones",
        "Multi-tracking audio recording",
        "Professional crew included",
        "4K Quality available at ₹35,000"
      ],
      images: [
        "https://i.pinimg.com/1200x/18/09/15/18091582094b6c6c6368c0dd116c0566.jpg",
        "https://i.pinimg.com/1200x/d5/51/51/d551518bb91d535370549eb9fbfb096b.jpg"
      ]
    },
  ],
  karaoke: [
    {
      title: "Intimate Sessions/Karaoke",
      price: "₹7,500.00",
      duration: "4 hours",
      icon: <Users className="w-6 h-6" />,
      description: "Perfect for small musical gatherings",
      features: [
        "Acoustically treated room with AC",
        "1-2 hours power backup",
        "25-30 seating capacity",
        "1000W PA system",
        "8 channel mixer",
        "Dynamic mics (SM57/SM58)",
        "Wireless microphone available",
        "Professional equipment"
      ],
      images: [
        "https://i.pinimg.com/1200x/ae/75/d6/ae75d6aac4773f0b19d06e57b26a54ee.jpg",
        "https://i.pinimg.com/1200x/7c/f3/04/7cf304435dcb2dc7d28dca5e8a78c856.jpg",
        "https://i.pinimg.com/1200x/f7/f0/86/f7f08669a32c3318c8e01119cefacbab.jpg"
      ]
    },
    {
      title: "Karaoke Party Venue",
      price: "₹299.00",
      duration: "Per Head",
      icon: <PartyPopper className="w-6 h-6" />,
      description: "Perfect venue for karaoke parties",
      features: [
        "Air-conditioned venue",
        "UPS backup",
        "Professional sound system",
        "Karaoke equipment",
        "Comfortable seating",
        "Group booking available"
      ],
      images: [
        "https://i.pinimg.com/1200x/b7/b5/bb/b7b5bb644bfa8e5d36be10bdaa11f620.jpg",
        "https://i.pinimg.com/1200x/8c/fe/87/8cfe87196effc761a0498503f167f202.jpg"
      ]
    },
  ],
  production: [
    {
      title: "Recording Session",
      price: "₹750.00",
      duration: "Per Hour",
      icon: <Mic className="w-6 h-6" />,
      description: "Vocal booth Recording with Shure SM 58 / Scarlett",
      features: [
        "Professional vocal booth",
        "High-quality microphones",
        "Sound-treated environment",
        "Professional monitoring"
      ],
      images: [
        "https://i.pinimg.com/1200x/b2/96/6d/b2966dc21782b2e555e594e1ebd1873d.jpg",
        "https://i.pinimg.com/1200x/7d/53/42/7d5342e8661aab07979f3789a5e3fa63.jpg"
      ]
    },
    {
      title: "Premium Room with Rode NT2",
      price: "₹1,200.00",
      duration: "Per Hour",
      icon: <Star className="w-6 h-6" />,
      description: "Spacious premium recording room",
      features: [
        "Rode NT2a microphone",
        "Space for 6-piece Orchestra",
        "Drum tracking capability",
        "Multitracking available",
        "Air-conditioned environment"
      ],
      images: [
        "https://i.pinimg.com/1200x/62/63/ef/6263ef355acf647b3de5963ce8a0bf6e.jpg",
        "https://i.pinimg.com/1200x/a9/b4/1d/a9b41d6aaaaf67ee9900ae83fed074b9.jpg"
      ]
    },
    {
      title: "Vocals Mixing Mastering Package",
      price: "₹2,500.00",
      duration: "Package",
      icon: <Headphones className="w-6 h-6" />,
      description: "Complete vocal recording and mixing package",
      features: [
        "Recording with Shure SM58/Scarlett",
        "1 hour recording session",
        "Karaoke/minus Track",
        "Professional mixing",
        "Mastering included",
        "50% Advance payment"
      ],
      images: [
        "https://i.pinimg.com/1200x/70/7c/d1/707cd1e6e9f48aaefe9b310f63c7ad55.jpg",
        "https://i.pinimg.com/1200x/a9/06/fe/a906fe282c9b74ef6ef20778ee9f89d6.jpg"
      ]
    },
    {
      title: "BEGINNER YouTube Cover Song",
      price: "₹4,999.00",
      duration: "Package",
      icon: <Youtube className="w-6 h-6" />,
      description: "Starter package for YouTube cover videos",
      features: [
        "Professional video shoot",
        "Basic editing",
        "Quality equipment",
        "Perfect for beginners",
        "Sample videos available"
      ],
      images: [
        "https://i.pinimg.com/1200x/d5/33/ab/d533ab25834889e89ab93f4ac91c0ccf.jpg",
        "https://i.pinimg.com/1200x/50/2e/59/502e5951ea3790b17c6437addf4b366f.jpg"
      ]
    },
    {
      title: "Professional Cover Songs Package",
      price: "₹12,000.00",
      duration: "Package",
      icon: <Star className="w-6 h-6" />,
      description: "Complete professional cover song production",
      features: [
        "Recording with minus track",
        "Professional mixing & mastering",
        "DSLR video shoot",
        "Professional cameraman",
        "Lighting setup",
        "Indoor venue",
        "50% advance required"
      ],
      images: [
        "https://i.pinimg.com/1200x/8c/fe/87/8cfe87196effc761a0498503f167f202.jpg",
        "https://i.pinimg.com/1200x/73/9e/b5/739eb5762c14bc2a43cab7f250ac3e39.jpg"
      ]
    },
  ],
  jam: [
    {
      title: "Jam Sessions",
      price: "₹550.00",
      duration: "Per Hour",
      icon: <Music className="w-6 h-6" />,
      description: "Professional jam room with full equipment",
      features: [
        "Sound proof room with UPS",
        "Tama drum kit",
        "1000W speakers",
        "Dynamic microphones",
        "16 Channel mixer",
        "Blackstar 150 ID",
        "Hartke A70 Bass Combo",
        "Equipment rental available"
      ],
      images: [
        "https://i.pinimg.com/1200x/73/9e/b5/739eb5762c14bc2a43cab7f250ac3e39.jpg",
        "https://i.pinimg.com/736x/93/fe/bd/93febd3b15bac520da757a178db72c85.jpg",
        
        "https://i.pinimg.com/1200x/ae/b0/ea/aeb0ea227543931ed7d82fcd58226443.jpg"
       
       
      ]
    },
    {
      title: "10 Hours Jam Package",
      price: "₹5,000.00",
      duration: "Package",
      icon: <Music className="w-6 h-6" />,
      description: "10 hours of jam session time",
      features: [
        "Valid for 30 days",
        "5-6 piece band setup",
        "Advance payment required",
        "Flexible scheduling",
        "Professional equipment",
        "Cancellation charges apply"
      ],
      images: [
        "https://i.pinimg.com/1200x/8d/f3/c2/8df3c22c4d4178418bc94db735644aa8.jpg",
        "https://i.pinimg.com/1200x/79/3d/97/793d97a607e7e4c2c43389a610296484.jpg"
      ]
    },
  ],
  learning: [
    {
      title: "Music Classes",
      price: "₹10,000.00",
      duration: "3 months",
      icon: <Guitar className="w-6 h-6" />,
      description: "Guitar/Keyboard/Drum group classes",
      features: [
        "3-month hobby course",
        "8 classes per month",
        "Weekly 2 classes",
        "1-hour sessions",
        "Weekend/weekday options",
        "All age groups welcome",
        "Music theory basics",
        "Performance training"
      ],
      images: [
        "https://i.pinimg.com/1200x/f1/fe/36/f1fe36f67d00c01c24323ddee477524a.jpg",
        "https://i.pinimg.com/1200x/a5/e8/ed/a5e8ed9355f087e47205a469a3d56902.jpg"
      ]
    },
  ],
  misc: [
    {
      title: "Clamat Acoustics PREMIUM",
      price: "₹1,000.00",
      duration: "Per Hour",
      icon: <Building className="w-6 h-6" />,
      description: "Premium venue for podcasts and events",
      features: [
        "Intimate sessions",
        "Open mics",
        "Various events",
        "Capacity: 20-30 members",
        "Professional setup"
      ],
      images: [
        "https://i.pinimg.com/1200x/73/9e/b5/739eb5762c14bc2a43cab7f250ac3e39.jpg",
        "https://i.pinimg.com/736x/c5/33/0e/c5330eaae67d802229357e515cdfd071.jpg"
      ]
    },
    {
      title: "Clamat Audio Release Service",
      price: "₹2,499.00",
      duration: "Package",
      icon: <Speaker className="w-6 h-6" />,
      description: "Professional audio distribution package",
      features: [
        "Additional mastering",
        "Release on 20 major platforms",
        "Professional quality",
        "Digital distribution"
      ],
      images: [
        "https://i.pinimg.com/1200x/ad/ef/86/adef86d092536ecad0580c585f958c93.jpg",
        "https://i.pinimg.com/1200x/1e/90/5a/1e905a1fba2c7a028c9b839d3caab3ff.jpg"
      ]
    },
  ],
};

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>("podcast");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentServiceIndex, setCurrentServiceIndex] = useState<number>(0);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const currentService = services[selectedCategory][currentServiceIndex];

  const handleImageClick = (serviceIndex: number, imageIndex: number) => {
    setCurrentServiceIndex(serviceIndex);
    setCurrentImageIndex(imageIndex);
    setSelectedImage(services[selectedCategory][serviceIndex].images[imageIndex]);
  };

  const handlePreviousImage = () => {
    if (currentImageIndex > 0) {
      const newIndex = currentImageIndex - 1;
      setCurrentImageIndex(newIndex);
      setSelectedImage(currentService.images[newIndex]);
    }
  };

  const handleNextImage = () => {
    if (currentImageIndex < currentService.images.length - 1) {
      const newIndex = currentImageIndex + 1;
      setCurrentImageIndex(newIndex);
      setSelectedImage(currentService.images[newIndex]);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}

      
      <div className="bg-black text-white py-20 px-4">

        
        
        <div className="max-w-7xl mx-auto text-center">
          
          <h1 className="text-5xl font-bold mb-6">Clamat Acoustics</h1>
          <p className="text-xl mb-8">Professional Audio & Video Production Services</p>
          <Calendar className="w-12 h-12 mx-auto animate-bounce" />
          <br />
          <ContactUsButton/>
        </div>
      </div>

      


      {/* Category Selection */}
      <div className="max-w-7xl mx-auto py-8 px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              className="flex items-center gap-2 w-full"
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.icon}
              <span className="hidden sm:inline">{category.name}</span>
            </Button>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services[selectedCategory].map((service, serviceIndex) => (
            <Card key={serviceIndex} className="p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <div className="text-xl font-bold text-primary mb-2">
                {service.price}
                <span className="text-sm text-gray-500 ml-2">{service.duration}</span>
              </div>
              <p className="text-gray-600 mb-4">{service.description}</p>
              
              <div className="relative mb-4">
                <Carousel className="w-full">
                  <CarouselContent>
                    {service.images.map((image, imgIndex) => (
                      <CarouselItem key={imgIndex}>
                        <div 
                          className="relative aspect-[16/9] w-full overflow-hidden rounded-lg cursor-pointer"
                          onClick={() => handleImageClick(serviceIndex, imgIndex)}
                        >
                          <img
                            src={image}
                            alt={`${service.title} ${imgIndex + 1}`}
                            className="absolute inset-0 h-full w-full object-contain bg-black/5"
                            loading="lazy"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
                  <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
                </Carousel>
              </div>

              <ul className="space-y-2">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-black text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Book Your Session Today</h2>
          <p className="mb-8">50% advance payment required for booking. Contact us for availability.</p>
          <ContactUsButton/>
        </div>
      </div>

      {/* Image Modal */}
      <ImageModal
        isOpen={!!selectedImage}
        onClose={() => {
          setSelectedImage(null);
          setCurrentImageIndex(0);
        }}
        imageUrl={selectedImage || ''}
        onPrevious={handlePreviousImage}
        onNext={handleNextImage}
        hasPrevious={currentImageIndex > 0}
        hasNext={currentImageIndex < (currentService?.images.length || 0) - 1}
      />
    </main>
  );
}