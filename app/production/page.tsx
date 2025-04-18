// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import { Check, Music } from "lucide-react";

// export default function ProductionPage() {
//   return (
//     <div>
//       <section 
//         className="relative h-[50vh] flex items-center justify-center bg-cover bg-center"
//         style={{
//           backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1576444356170-66073046b1bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")'
//         }}
//       >
//         <div className="text-center text-white">
//           <h1 className="text-4xl md:text-6xl font-bold mb-4">Music Production</h1>
//           <p className="text-xl">Professional music production and mixing services</p>
//         </div>
//       </section>

//       <section className="py-20 px-4">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//             <div>
//               <h2 className="text-3xl font-bold mb-6">Full-Service Music Production</h2>
//               <p className="text-lg text-muted-foreground mb-6">
//                 From composition to final master, our experienced producers will help bring your musical vision to life with professional-quality production services.
//               </p>
//               <ul className="space-y-4 mb-8">
//                 {[
//                   "Arrangement and composition",
//                   "Beat production",
//                   "Professional mixing",
//                   "Mastering services",
//                   "Session musicians available",
//                   "Industry-standard DAWs"
//                 ].map((feature, index) => (
//                   <li key={index} className="flex items-center gap-3">
//                     <Check className="h-5 w-5 text-primary" />
//                     <span>{feature}</span>
//                   </li>
//                 ))}
//               </ul>
//               <Button asChild size="lg">
//                 <Link href="/contact">Start Your Project</Link>
//               </Button>
//             </div>
//             <div className="grid grid-cols-2 gap-4">
//               <img 
//                 src="https://images.unsplash.com/photo-1598520106830-8c45c2035460?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
//                 alt="Production Setup"
//                 className="rounded-lg w-full h-64 object-cover"
//               />
//               <img 
//                 src="https://images.unsplash.com/photo-1583331761447-089a1ec4540c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
//                 alt="Mixing Console"
//                 className="rounded-lg w-full h-64 object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="bg-muted py-20 px-4">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold text-center mb-12">Production Services</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               {
//                 name: "Beat Production",
//                 price: "₹9999",
//                 features: [
//                   "Custom beat creation",
//                   "2 revisions",
//                   "Mixed and mastered",
//                   "Full rights included"
//                 ]
//               },
//               {
//                 name: "Single Production",
//                 price: "₹24999",
//                 features: [
//                   "Full song production",
//                   "Recording included",
//                   "3 revisions",
//                   "Mixed and mastered",
//                   "Session musicians"
//                 ]
//               },
//               {
//                 name: "Album Production",
//                 price: "Custom",
//                 features: [
//                   "Full album production",
//                   "Unlimited revisions",
//                   "Premium mixing/mastering",
//                   "Session musicians",
//                   "Distribution support"
//                 ]
//               }
//             ].map((pkg, index) => (
//               <div key={index} className="bg-card rounded-lg p-8 shadow-lg">
//                 <h3 className="text-2xl font-bol

// d mb-4">{pkg.name}</h3>
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
//                   <Link href="/contact">Get Started</Link>
//                 </Button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

//working -- with all services
"use client";

import { Button } from "@/components/ui/button";
import { Music2, Settings2, Mic, Star, Headphones, Youtube } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const productionServices = [
  {
    title: "Recording Session",
    price: "₹750.00",
    duration: "Per Hour",
    icon: <Mic className="w-6 h-6" />,
    description: "Vocal booth Recording with MXL 990 / AKG220",
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
  },
  {
    title: "Vocals Mixing Mastering Package",
    price: "₹2,500.00",
    duration: "Package",
    icon: <Headphones className="w-6 h-6" />,
    description: "Complete vocal recording and mixing package",
    features: [
      "Recording with MXL 990/AKG220",
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
  }
];

export default function ProductionPage() {
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

      {/* extra */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1598653222000-6b7b7a552625?auto=format&fit=crop&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Music Production</h1>
          <p className="text-xl">Professional music production and mixing services</p>
          <br />
          {/* <ContactUsButton/> */}
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Music2,
                title: "Composition",
                description: "Original music composition and arrangement services",
              },
              {
                icon: Headphones,
                title: "Mixing",
                description: "Professional mixing to perfect your sound",
              },
              {
                icon: Settings2,
                title: "Mastering",
                description: "Final polish for commercial-ready releases",
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
          <h2 className="text-3xl font-bold text-center mb-12">Our Production Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Pre-Production",
                description: "Song arrangement, reference tracks, and production planning",
              },
              {
                step: "2",
                title: "Recording",
                description: "High-quality recording of all instruments and vocals",
              },
              {
                step: "3",
                title: "Mixing",
                description: "Detailed mixing process to balance and enhance your tracks",
              },
              {
                step: "4",
                title: "Mastering",
                description: "Final polish for commercial-ready sound",
              },
            ].map((phase, index) => (
              <div key={index} className="relative p-6 bg-card rounded-lg shadow-lg">
                <div className="absolute -top-4 -left-4 bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold mb-2 mt-4">{phase.title}</h3>
                <p className="text-muted-foreground">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      

      



      {/* extra */}
      <section className="py-16 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {productionServices.map((service, index) => (
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