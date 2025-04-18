// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import { Check, Music } from "lucide-react";

// export default function LessonsPage() {
//   return (
//     <div>
//       <section 
//         className="relative h-[50vh] flex items-center justify-center bg-cover bg-center"
//         style={{
//           backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1514119412350-e174d90d280e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")'
//         }}
//       >
//         <div className="text-center text-white">
//           <h1 className="text-4xl md:text-6xl font-bold mb-4">Music Lessons</h1>
//           <p className="text-xl">Professional music education for all skill levels</p>
//         </div>
//       </section>

//       <section className="py-20 px-4">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//             <div>
//               <h2 className="text-3xl font-bold mb-6">Learn from the Best</h2>
//               <p className="text-lg text-muted-foreground mb-6">
//                 Our experienced instructors provide personalized music lessons for students of all ages and skill levels. Whether you're a beginner or an advanced musician, we'll help you achieve your musical goals.
//               </p>
//               <ul className="space-y-4 mb-8">
//                 {[
//                   "Professional instructors",
//                   "Customized lesson plans",
//                   "All skill levels welcome",
//                   "Multiple instruments",
//                   "Theory and practical training",
//                   "Regular performance opportunities"
//                 ].map((feature, index) => (
//                   <li key={index} className="flex items-center gap-3">
//                     <Check className="h-5 w-5 text-primary" />
//                     <span>{feature}</span>
//                   </li>
//                 ))}
//               </ul>
//               <Button asChild size="lg">
//                 <Link href="/contact">Book a Trial Lesson</Link>
//               </Button>
//             </div>
//             <div className="grid grid-cols-2 gap-4">
//               <img 
//                 src="https://images.unsplash.com/photo-1514119412350-e174d90d280e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
//                 alt="Music Lesson"
//                 className="rounded-lg w-full h-64 object-cover"
//               />
//               <img 
//                 src="https://images.unsplash.com/photo-1514119127522-d8446f53c690?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
//                 alt="Piano Lesson"
//                 className="rounded-lg w-full h-64 object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="bg-muted py-20 px-4">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold text-center mb-12">Available Instruments</h2>
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             {[
//               {
//                 name: "Guitar",
//                 description: "Acoustic, Electric, Bass",
//                 image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
//               },
//               {
//                 name: "Piano",
//                 description: "Classical, Jazz, Contemporary",
//                 image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
//               },
//               {
//                 name: "Drums",
//                 description: "Acoustic & Electronic",
//                 image: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
//               },
//               {
//                 name: "Vocals",
//                 description: "All genres",
//                 image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
//               }
//             ].map((instrument, index) => (
//               <div key={index} className="bg-card rounded-lg overflow-hidden shadow-lg">
//                 <img 
//                   src={instrument.image}
//                   alt={instrument.name}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold mb-2">{instrument.name}</h3>
//                   <p className="text-muted-foreground mb-4">{instrument.description}</p>
//                   <Button className="w-full" asChild variant="outline">
//                     <Link href="/contact">Learn More</Link>
//                   </Button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="py-20 px-4">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold text-center mb-12">Lesson Packages</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               {
//                 name: "Trial Package",
//                 price: "₹999",
//                 features: [
//                   "2 lessons",
//                   "30 minutes each",
//                   "Basic assessment",
//                   "Flexible scheduling"
//                 ]
//               },
//               {
//                 name: "Monthly Package",
//                 price: "₹4999/month",
//                 features: [
//                   "8 lessons per month",
//                   "45 minutes each",
//                   "Personalized curriculum",
//                   "Progress tracking",
//                   "Practice materials"
//                 ]
//               },
//               {
//                 name: "Premium Package",
//                 price: "₹8999/month",
//                 features: [
//                   "12 lessons per month",
//                   "1 hour each",
//                   "Advanced curriculum",
//                   "Recording session included",
//                   "Performance opportunities",
//                   "Theory classes included"
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
//                   <Link href="/contact">Enroll Now</Link>
//                 </Button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

//second

import { Button } from "@/components/ui/button";
import { Music, BookOpen, Users, Award } from "lucide-react";
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


export default function LessonsPage() {
  return (
    <div>
      <section className="relative h-[400px] flex items-center justify-center">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Music Lessons</h1>
          <p className="text-xl">Professional music education for all skill levels</p>
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
                title: "Instrument Training",
                description: "Learn various instruments from expert instructors",
              },
              {
                icon: BookOpen,
                title: "Music Theory",
                description: "Comprehensive music theory education",
              },
              {
                icon: Users,
                title: "Group Classes",
                description: "Collaborative learning environment",
              },
              {
                icon: Award,
                title: "Certification",
                description: "Professional certification programs",
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
          <h2 className="text-3xl font-bold text-center mb-12">Available Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Beginner Package",
                description: "Perfect for those just starting their musical journey",
                features: [
                  "Basic instrument techniques",
                  "Introduction to music theory",
                  "Weekly 45-minute lessons",
                  "Practice materials",
                ],
                price: "₹3000/month",
              },
              {
                name: "Intermediate Package",
                description: "For students with some musical experience",
                features: [
                  "Advanced techniques",
                  "Comprehensive theory classes",
                  "Weekly 60-minute lessons",
                  "Recording sessions",
                  "Performance opportunities",
                ],
                price: "₹4500/month",
              },
              {
                name: "Advanced Package",
                description: "Professional-level training",
                features: [
                  "Expert-level techniques",
                  "Advanced theory and composition",
                  "Weekly 90-minute lessons",
                  "Studio time included",
                  "Performance opportunities",
                  "Industry guidance",
                ],
                price: "₹6000/month",
              },
            ].map((course, index) => (
              <div key={index} className="bg-card rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{course.name}</h3>
                  <p className="text-muted-foreground mb-4">{course.description}</p>
                  <ul className="space-y-2 mb-6">
                    {course.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Music className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-xl font-bold mb-4">{course.price}</p>
                  <Link href="/contact">
                    <Button className="w-full">Enroll Now</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Instruments We Teach</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "Guitar",
              "Piano",
              "Drums",
              "Bass",
              "Vocals",
              "Violin",
              "Saxophone",
              "Music Production",
            ].map((instrument, index) => (
              <div key={index} className="text-center p-6 bg-card rounded-lg shadow-lg">
                <Music className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold">{instrument}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Start Your Musical Journey</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us to schedule a trial lesson and begin your musical education.
          </p>
          <Link href="/contact">
            <Button size="lg">
              Book Trial Lesson
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}