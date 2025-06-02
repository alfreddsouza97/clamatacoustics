// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import { Check } from "lucide-react";

// export default function RehearsalPage() {
//   return (
//     <div>
//       <section 
//         className="relative h-[50vh] flex items-center justify-center bg-cover bg-center"
//         style={{
//           backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1524650359799-842906ca1c06?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")'
//         }}
//       >
//         <div className="text-center text-white">
//           <h1 className="text-4xl md:text-6xl font-bold mb-4">Rehearsal Space</h1>
//           <p className="text-xl">Professional rehearsal rooms for bands and musicians</p>
//         </div>
//       </section>

//       <section className="py-20 px-4">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//             <div>
//               <h2 className="text-3xl font-bold mb-6">Fully Equipped Rehearsal Rooms</h2>
//               <p className="text-lg text-muted-foreground mb-6">
//                 Our rehearsal spaces are designed to provide the perfect environment for bands and musicians to practice and prepare for performances. Each room is equipped with professional gear and acoustically treated for optimal sound.
//               </p>
//               <ul className="space-y-4 mb-8">
//                 {[
//                   "Multiple room sizes available",
//                   "Professional PA system",
//                   "Drum kit available",
//                   "Guitar and bass amplifiers",
//                   "Climate controlled rooms",
//                   "24/7 access available"
//                 ].map((feature, index) => (
//                   <li key={index} className="flex items-center gap-3">
//                     <Check className="h-5 w-5 text-primary" />
//                     <span>{feature}</span>
//                   </li>
//                 ))}
//               </ul>
//               <Button asChild size="lg">
//                 <Link href="/contact">Book Rehearsal Space</Link>
//               </Button>
//             </div>
//             <div className="grid grid-cols-2 gap-4">
//               <img 
//                 src="https://images.unsplash.com/photo-1598653222000-6b7b7a552625?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
//                 alt="Rehearsal Room"
//                 className="rounded-lg w-full h-64 object-cover"
//               />
//               <img 
//                 src="https://images.unsplash.com/photo-1525201548942-d8732f6617a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
//                 alt="Equipment"
//                 className="rounded-lg w-full h-64 object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="bg-muted py-20 px-4">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold text-center mb-12">Rehearsal Packages</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               {
//                 name: "Hourly",
//                 price: "₹499/hour",
//                 features: [
//                   "PA System included",
//                   "Basic equipment",
//                   "Flexible timing",
//                   "Pay as you go"
//                 ]
//               },
//               {
//                 name: "Monthly",
//                 price: "₹7999/month",
//                 features: [
//                   "10 hours per week",
//                   "Full equipment access",
//                   "Storage space",
//                   "Priority booking",
//                   "24/7 access"
//                 ]
//               },
//               {
//                 name: "Band Package",
//                 price: "₹14999/month",
//                 features: [
//                   "20 hours per week",
//                   "Premium equipment",
//                   "Large storage space",
//                   "Priority booking",
//                   "24/7 access",
//                   "Recording time included"
//                 ]
//               }
//             ].map((pkg, index) => (
//               <div key={index} className="bg-card rounded-lg p-8 shadow-lg">
//                 <h3 className="text-2xl font-bold mb-4">{pkg.name}</h3>
//                 <p className="text-3xl font-bold mb-6">{pkg.price}</p>
//                 <ul className="space-y-3 mb-8">
//                   {pkg.features.map((feature, i) => (
//                     <li key={i} className="flex items-center gap-3">
//                       <Check className="h-4 w-4 text-primary" />
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


// second

import { Button } from "@/components/ui/button";
import { Music, Speaker, Clock, Users } from "lucide-react";
import Link from "next/link";

//extra code -  experimental

// export function ContactUsButton() {
//   return (
//     <div className="text-center">
//       {/* Adding experimental break */}
//       <br />

//       <Link legacyBehavior href="/booking">
//         <a className="w-full inline-block py-3 px-6 text-center bg-gray-600 text-white rounded-md shadow-md hover:bg-blue-700">
//           {/* Contact Us */}
//           Book your Service now
//         </a>
//       </Link>
//     </div>
//   );
// }

export default function RehearsalPage() {
  return (
    <div>
      <section className="relative h-[400px] flex items-center justify-center">
        <div
          className="absolute inset-0"
          style={{
            // backgroundImage: "url('https://images.unsplash.com/photo-1525201548942-d8732f6617a0?auto=format&fit=crop&q=80')",
            backgroundImage: "url('https://i.pinimg.com/1200x/cd/c4/26/cdc426638843a1659a51e3791594a585.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Rehearsal Space</h1>
          <p className="text-xl">Professional rehearsal rooms for bands and artists</p>
          <br />
          {/* <ContactUsButton/> */}
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Music,
                title: "Full Backline",
                description: "Professional equipment ready for your rehearsal",
              },
              {
                icon: Speaker,
                title: "PA System",
                description: "High-quality sound system and monitors",
              },
              {
                icon: Clock,
                title: "Flexible Hours",
                description: "Available for both short and long sessions",
              },
              {
                icon: Users,
                title: "Multiple Rooms",
                description: "Different room sizes for various group sizes",
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
          <h2 className="text-3xl font-bold text-center mb-12">Room Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Small Room",
                // size: "20㎡",
                capacity: "1-5 people",
                features: [
                  "Basic PA System",
                  "Drum Kit",
                  "Guitar Amp",
                  "Bass Amp",
                  "Microphones",
                ],
                price: "₹550/hour",
              },
              {
                name: "Medium Room",
                // size: "35㎡",
                capacity: "4-6 people",
                features: [
                  "Full PA System",
                  "Professional Drum Kit",
                  "Multiple Guitar Amps",
                  "Bass Amp",
                  "Microphones",
                  "Basic Recording Setup",
                ],
                price: "₹800/hour",
              },
              {
                name: "Large Room",
                // size: "50㎡",
                capacity: "6-10 people",
                features: [
                  "Premium PA System",
                  "Professional Drum Kit",
                  "Multiple Guitar Amps",
                  "Bass Amp",
                  "Multiple Microphones",
                  "Recording Capability",
                  // "Keyboard/Piano",
                ],
                price: "₹1200/hour",
              },
            ].map((room, index) => (
              <div key={index} className="bg-card rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{room.name}</h3>
                  <div className="space-y-4">
                    {/* <p className="text-muted-foreground">Size: {room.size}</p> */}
                    <p className="text-muted-foreground">Capacity: {room.capacity}</p>
                    <div>
                      <h4 className="font-semibold mb-2">Features:</h4>
                      <ul className="space-y-2">
                        {room.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <Music className="h-4 w-4 text-primary" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* <p className="text-xl font-bold">{room.price}</p> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Book Your Rehearsal Space</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us to reserve your preferred rehearsal room and time slot.
          </p>
          <Link href="/booking">
            <Button size="lg">
              Book Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}