// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import { Check, Music } from "lucide-react";

// export default function RecordingPage() {
//   return (
//     <div>
//       <section 
//         className="relative h-[50vh] flex items-center justify-center bg-cover bg-center"
//         style={{
//           backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")'
//         }}
//       >
//         <div className="text-center text-white">
//           <h1 className="text-4xl md:text-6xl font-bold mb-4">Recording Sessions</h1>
//           <p className="text-xl">Professional music recording and production</p>
//         </div>
//       </section>

//       <section className="py-20 px-4">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//             <div>
//               <h2 className="text-3xl font-bold mb-6">World-Class Recording Facility</h2>
//               <p className="text-lg text-muted-foreground mb-6">
//                 Our recording studio features top-of-the-line equipment and acoustically treated spaces to ensure the highest quality recordings for your music projects.
//               </p>
//               <ul className="space-y-4 mb-8">
//                 {[
//                   "Professional mixing console and preamps",
//                   "Wide selection of professional microphones",
//                   "Multiple isolation booths",
//                   "Pro Tools HD recording system",
//                   "Vintage and modern outboard gear"
//                 ].map((feature, index) => (
//                   <li key={index} className="flex items-center gap-3">
//                     <Check className="h-5 w-5 text-primary" />
//                     <span>{feature}</span>
//                   </li>
//                 ))}
//               </ul>
//               <Button asChild size="lg">
//                 <Link href="/contact">Schedule Recording</Link>
//               </Button>
//             </div>
//             <div className="grid grid-cols-2 gap-4">
//               <img 
//                 src="https://images.unsplash.com/photo-1598653222000-6b7b7a552625?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
//                 alt="Studio Equipment"
//                 className="rounded-lg w-full h-64 object-cover"
//               />
//               <img 
//                 src="https://images.unsplash.com/photo-1519419166318-4f5c601b8e6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
//                 alt="Recording Session"
//                 className="rounded-lg w-full h-64 object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="bg-muted py-20 px-4">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold text-center mb-12">Recording Packages</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               {
//                 name: "Demo",
//                 price: "₹4999",
//                 features: [
//                   "4 hours studio time",
//                   "Basic mixing",
//                   "2 revisions",
//                   "Digital delivery"
//                 ]
//               },
//               {
//                 name: "Single",
//                 price: "₹9999",
//                 features: [
//                   "8 hours studio time",
//                   "Professional mixing",
//                   "3 revisions",
//                   "Mastering included",
//                   "Digital delivery"
//                 ]
//               },
//               {
//                 name: "EP/Album",
//                 price: "Custom",
//                 features: [
//                   "Multiple day booking",
//                   "Professional mixing",
//                   "Unlimited revisions",
//                   "Mastering included",
//                   "Digital & physical delivery"
//                 ]
//               }
//             ].map((pkg, index) => (
//               <div key={index} className="bg-card rounded-lg p-8 shadow-lg">
//                 <h3 className="text-2xl font-bold mb-4">{pkg.name}</h3>
//                 <p className="text-3xl font-bold mb-6">{pkg.price}</p>
//                 <ul className="space-y-3 mb-8">
//                   {pkg.features.map((feature, i) => (
//                     <li key={i} className="flex items-center gap-3">
//                       <Music className="h-4 w-4 text-primary" />
//                       <span>{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//                 <Button className="w-full" asChild>
//                   <Link href="/contact">Book Now</Link>
//                 </Button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

//second - working - with course prices

// "use client"

// import { useState } from "react";
// import Image from "next/image";

// import { Button } from "@/components/ui/button";
// import { Mic, Star, Music2, Headphones, Settings2 } from "lucide-react";
// import Link from "next/link";

// const recordingServices = [
//   {
//     title: "Recording Session",
//     price: "₹750.00",
//     duration: "Per Hour",
//     icon: <Mic className="w-6 h-6" />,
//     description: "Vocal booth Recording with Shure SM58 / Scarlett",
//     features: [
//       "Professional vocal booth",
//       "High-quality microphones",
//       "Sound-treated environment",
//       "Professional monitoring"
//     ],
//     images: [
//      "https://i.pinimg.com/1200x/b2/96/6d/b2966dc21782b2e555e594e1ebd1873d.jpg",
//         "https://i.pinimg.com/1200x/7d/53/42/7d5342e8661aab07979f3789a5e3fa63.jpg"
//     ]
//   },
//   {
//     title: "Premium Room with Rode NT2",
//     price: "₹1,200.00",
//     duration: "Per Hour",
//     icon: <Star className="w-6 h-6" />,
//     description: "Spacious premium recording room",
//     features: [
//       "Rode NT2a microphone",
//       "Space for 6-piece Orchestra",
//       "Drum tracking capability",
//       "Multitracking available",
//       "Air-conditioned environment"
//     ],
//     images: [
//       "https://i.pinimg.com/1200x/62/63/ef/6263ef355acf647b3de5963ce8a0bf6e.jpg",
//       "https://i.pinimg.com/1200x/a9/b4/1d/a9b41d6aaaaf67ee9900ae83fed074b9.jpg",
//     ]
//   },]

// export default function RecordingPage() {

//     const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({});
  
//     const nextImage = (serviceIndex: number, maxLength: number) => {
//       setCurrentImageIndex(prev => ({
//         ...prev,
//         [serviceIndex]: ((prev[serviceIndex] || 0) + 1) % maxLength
//       }));
//     };
  
//     const prevImage = (serviceIndex: number, maxLength: number) => {
//       setCurrentImageIndex(prev => ({
//         ...prev,
//         [serviceIndex]: ((prev[serviceIndex] || 0) - 1 + maxLength) % maxLength
//       }));
//     };
//   return (
//     <div>
//       <section className="relative h-[400px] flex items-center justify-center">
//         <div
//           className="absolute inset-0"
//           style={{
           
//             backgroundImage: "url('https://i.pinimg.com/1200x/70/7c/d1/707cd1e6e9f48aaefe9b310f63c7ad55.jpg')",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         >
//           <div className="absolute inset-0 bg-black/60" />
//         </div>
//         <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
//           <h1 className="text-4xl font-bold mb-4">Recording Sessions</h1>
//           <p className="text-xl">State-of-the-art recording facilities for musicians</p>
//           <br />
          
//         </div>
//       </section>

//       {/* extra */}

//       <section className="py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               {
//                 icon: Mic,
//                 title: "Professional Microphones",
//                 description: "High-end microphones for every instrument and voice type",
//               },
//               {
//                 icon: Music2,
//                 title: "Acoustic Treatment",
//                 description: "Perfectly treated rooms for optimal sound capture",
//               },
//               {
//                 icon: Headphones,
//                 title: "Monitoring",
//                 description: "Professional monitoring systems for accurate playback",
//               },
//               {
//                 icon: Settings2,
                
//                 title: "Logic Pro X Setup",
//                 description: "Industry-standard recording software and hardware",
//               },
//             ].map((feature, index) => (
//               <div key={index} className="p-6 bg-card rounded-lg shadow-lg">
//                 <feature.icon className="h-12 w-12 text-primary mb-4" />
//                 <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
//                 <p className="text-muted-foreground">{feature.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="py-16 bg-secondary/50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-center mb-12">Recording Services</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div className="space-y-6">
//               <h3 className="text-2xl font-semibold">Instruments We Record</h3>
//               <ul className="space-y-3">
//                 <li className="flex items-center gap-2">
//                   <Music2 className="h-5 w-5 text-primary" />
//                   <span>Vocals</span>
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <Music2 className="h-5 w-5 text-primary" />
//                   <span>Drums</span>
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <Music2 className="h-5 w-5 text-primary" />
//                   <span>Guitar</span>
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <Music2 className="h-5 w-5 text-primary" />
//                   <span>Bass</span>
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <Music2 className="h-5 w-5 text-primary" />
//                   <span>Piano</span>
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <Music2 className="h-5 w-5 text-primary" />
//                   <span>Orchestral Instruments</span>
//                 </li>
//               </ul>
//             </div>
//             <div className="space-y-6">
//               <h3 className="text-2xl font-semibold">Additional Services</h3>
//               <ul className="space-y-3">
//                 <li className="flex items-center gap-2">
//                   <Settings2 className="h-5 w-5 text-primary" />
//                   <span>Multi-track Recording</span>
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <Settings2 className="h-5 w-5 text-primary" />
//                   <span>Live Band Recording</span>
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <Settings2 className="h-5 w-5 text-primary" />
//                   <span>Mixing Services</span>
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <Settings2 className="h-5 w-5 text-primary" />
//                   <span>Mastering</span>
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <Settings2 className="h-5 w-5 text-primary" />
//                   <span>Session Musicians</span>
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <Settings2 className="h-5 w-5 text-primary" />
//                   <span>Audio Restoration</span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>



//       {/* extra */}

//       <section className="py-16 bg-secondary/50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-center mb-12">Our Recording Services</h2>
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//             {recordingServices.map((service, index) => (
//               <div key={index} className="bg-card rounded-lg shadow-lg overflow-hidden">
//                 <div className="relative h-[400px] group">
//                   <Image
//                     src={service.images[currentImageIndex[index] || 0]}
//                     alt={service.title}
//                     fill
//                     className="object-contain"
//                   />
//                   {service.images.length > 1 && (
//                     <>
//                       <button
//                         onClick={() => prevImage(index, service.images.length)}
//                         className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
//                       >
//                         ←
//                       </button>
//                       <button
//                         onClick={() => nextImage(index, service.images.length)}
//                         className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
//                       >
//                         →
//                       </button>
//                     </>
//                   )}
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
//                   <p className="text-lg font-bold text-primary mb-2">{service.price} <span className="text-sm text-muted-foreground">({service.duration})</span></p>
//                   <p className="text-muted-foreground mb-4">{service.description}</p>
//                   <ul className="space-y-2">
//                     {service.features.map((feature, featureIndex) => (
//                       <li key={featureIndex} className="flex items-start gap-2">
//                         <span className="text-sm">{feature}</span>
//                       </li>
//                     ))}
//                   </ul>
//                   <div className="mt-6">
//                     <a
//                       href={`https://wa.me/918147180736?text=${encodeURIComponent(`Hi, I am interested in your ${service.title} service. Please provide more information.`)}`}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <Button className="w-full flex items-center justify-center gap-2">Enquire on WhatsApp</Button>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

//third - working - without course prices


"use client"

import { useState } from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Mic, Star, Music2, Headphones, Settings2 } from "lucide-react";
import Link from "next/link";

const recordingServices = [
  {
    title: "Recording Session",
    price: "₹750.00",
    duration: "Per Hour",
    icon: <Mic className="w-6 h-6" />,
    description: "Vocal booth Recording with Shure SM58 / Scarlett",
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
      "https://i.pinimg.com/1200x/a9/b4/1d/a9b41d6aaaaf67ee9900ae83fed074b9.jpg",
    ]
  },]

export default function RecordingPage() {

    const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({});
  
    const nextImage = (serviceIndex: number, maxLength: number) => {
      setCurrentImageIndex(prev => ({
        ...prev,
        [serviceIndex]: ((prev[serviceIndex] || 0) + 1) % maxLength
      }));
    };
  
    const prevImage = (serviceIndex: number, maxLength: number) => {
      setCurrentImageIndex(prev => ({
        ...prev,
        [serviceIndex]: ((prev[serviceIndex] || 0) - 1 + maxLength) % maxLength
      }));
    };
  return (
    <div>
      <section className="relative h-[400px] flex items-center justify-center">
        <div
          className="absolute inset-0"
          style={{
           
            backgroundImage: "url('https://i.pinimg.com/1200x/70/7c/d1/707cd1e6e9f48aaefe9b310f63c7ad55.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Recording Sessions</h1>
          <p className="text-xl">State-of-the-art recording facilities for musicians</p>
          <br />
          
        </div>
      </section>

      {/* extra */}

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Mic,
                title: "Professional Microphones",
                description: "High-end microphones for every instrument and voice type",
              },
              {
                icon: Music2,
                title: "Acoustic Treatment",
                description: "Perfectly treated rooms for optimal sound capture",
              },
              {
                icon: Headphones,
                title: "Monitoring",
                description: "Professional monitoring systems for accurate playback",
              },
              {
                icon: Settings2,
                
                title: "Logic Pro X Setup",
                description: "Industry-standard recording software and hardware",
              },
            ].map((feature, index) => (
              <div key={index} className="p-6 bg-card rounded-lg shadow-lg">
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Recording Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Instruments We Record</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Music2 className="h-5 w-5 text-primary" />
                  <span>Vocals</span>
                </li>
                <li className="flex items-center gap-2">
                  <Music2 className="h-5 w-5 text-primary" />
                  <span>Drums</span>
                </li>
                <li className="flex items-center gap-2">
                  <Music2 className="h-5 w-5 text-primary" />
                  <span>Guitar</span>
                </li>
                <li className="flex items-center gap-2">
                  <Music2 className="h-5 w-5 text-primary" />
                  <span>Bass</span>
                </li>
                <li className="flex items-center gap-2">
                  <Music2 className="h-5 w-5 text-primary" />
                  <span>Piano</span>
                </li>
                <li className="flex items-center gap-2">
                  <Music2 className="h-5 w-5 text-primary" />
                  <span>Orchestral Instruments</span>
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Additional Services</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Settings2 className="h-5 w-5 text-primary" />
                  <span>Multi-track Recording</span>
                </li>
                <li className="flex items-center gap-2">
                  <Settings2 className="h-5 w-5 text-primary" />
                  <span>Live Band Recording</span>
                </li>
                <li className="flex items-center gap-2">
                  <Settings2 className="h-5 w-5 text-primary" />
                  <span>Mixing Services</span>
                </li>
                <li className="flex items-center gap-2">
                  <Settings2 className="h-5 w-5 text-primary" />
                  <span>Mastering</span>
                </li>
                <li className="flex items-center gap-2">
                  <Settings2 className="h-5 w-5 text-primary" />
                  <span>Session Musicians</span>
                </li>
                <li className="flex items-center gap-2">
                  <Settings2 className="h-5 w-5 text-primary" />
                  <span>Audio Restoration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>



      {/* extra */}

      <section className="py-16 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Recording Services</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {recordingServices.map((service, index) => (
              <div key={index} className="bg-card rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-[400px] group">
                  <Image
                    src={service.images[currentImageIndex[index] || 0]}
                    alt={service.title}
                    fill
                    className="object-contain"
                  />
                  {service.images.length > 1 && (
                    <>
                      <button
                        onClick={() => prevImage(index, service.images.length)}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        ←
                      </button>
                      <button
                        onClick={() => nextImage(index, service.images.length)}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        →
                      </button>
                    </>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-lg font-bold text-primary mb-2"> <span className="text-sm text-muted-foreground">({service.duration})</span></p>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <a
                      href={`https://wa.me/918147180736?text=${encodeURIComponent(`Hi, I am interested in your ${service.title} service. Please provide more information.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full flex items-center justify-center gap-2">Enquire on WhatsApp</Button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}