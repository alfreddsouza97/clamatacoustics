// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import { ArrowRight } from "lucide-react";

// export default function Home() {
//   return (
//     <div>
//       {/* Hero Section */}
//       <section 
//         className="relative h-[90vh] flex items-center justify-center bg-cover bg-center"
//         style={{
//           backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1519419166318-4f5c601b8e6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")'
//         }}
//       >
//         <div className="text-center text-white">
//           <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to Clamat Acoustics</h1>
//           <p className="text-xl md:text-2xl mb-8">Professional Music Studio in Bangalore</p>
//           <Button asChild size="lg">
//             <Link href="/contact">Book a Session <ArrowRight className="ml-2 h-4 w-4" /></Link>
//           </Button>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="py-20 px-4">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               {
//                 title: "Recording Sessions",
//                 description: "State-of-the-art recording facilities for musicians and artists.",
//                 image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//                 link: "/recording"
//               },
//               {
//                 title: "Podcast Studio",
//                 description: "Professional podcast recording and production services.",
//                 image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//                 link: "/podcast"
//               },
//               {
//                 title: "Music Lessons",
//                 description: "Expert instruction in various instruments and music theory.",
//                 image: "https://images.unsplash.com/photo-1514119412350-e174d90d280e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//                 link: "/lessons"
//               }
//             ].map((service, index) => (
//               <div key={index} className="bg-card rounded-lg overflow-hidden shadow-lg">
//                 <img 
//                   src={service.image} 
//                   alt={service.title}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-6">
//                   <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
//                   <p className="text-muted-foreground mb-4">{service.description}</p>
//                   <Button asChild variant="outline">
//                     <Link href={service.link}>Learn More</Link>
//                   </Button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="bg-primary text-primary-foreground py-20 px-4">
//         <div className="max-w-7xl mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-4">Ready to Create Something Amazing?</h2>
//           <p className="text-xl mb-8">Get in touch with us to discuss your project</p>
//           <Button asChild size="lg" variant="secondary">
//             <Link href="/contact">Contact Us</Link>
//           </Button>
//         </div>
//       </section>
//     </div>
//   );
// }


//second

import { Button } from "@/components/ui/button";
import { ArrowRight, Music, Mic, Radio, Headphones, BookOpen, MessageCircle } from "lucide-react";
import Link from "next/link";
import { Carousel1, Carousel2, Carousel3 } from "@/components/ui/carousel";

// Metadata for the page
// export const metadata = {
//   title: "VL Studios - Professional Music Production & Recording Studio in Bangalore",
//   description:
//     "Welcome to VL Studios, the premier music production and recording studio in Bangalore. Offering top-notch facilities for recording, podcast production, music lessons, and more.",
//   keywords: [
//     "music studio Bangalore",
//     "recording studio Bangalore",
//     "podcast production",
//     "music lessons",
//     "music production services",
//     "rehearsal space Bangalore",
//     "VL Studios",
//   ],
//   authors: [{ name: "Victor Logidasan" }],
//   openGraph: {
//     title: "VL Studios - Music Production & Recording in Bangalore",
//     description:
//       "Explore VL Studios' state-of-the-art facilities and services. Bring your musical vision to life with our professional team and cutting-edge equipment.",
//     url: "https://www.vlstudio.com",
//     images: [
//       {
//         url: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&q=80",
//         alt: "Studio Image",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "VL Studios - Music Production & Recording Studio in Bangalore",
//     description:
//       "Experience professional music production, recording sessions, and more at VL Studios in Bangalore.",
//     images: [
//       "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&q=80",
//     ],
//   },
// };

// Metadata for Clamat Acoustics

export const metadata = {
  title: "Clamat Acoustics - Professional Music Production & Recording Studio in Bangalore",
  description:
    "Welcome to Clamat Acoustics, a premier music production and recording studio in Bangalore. Offering high-quality recording, mixing, mastering, and music composition services.",
  keywords: [
    "music studio Bangalore",
    "recording studio Bangalore",
    "mixing and mastering",
    "music production",
    "Clamat Acoustics",
    "Clamat Acoustics Music Studio Bangalore",
    "Clamat Acoustics Bangalore",
    "clamat acoustics bangalore",
    "clamat acoustics music studio bangalore",
    "Clamat Acoustics KR Puram Bangalore",
    "clamatacoustics",
    "audio recording Bangalore",
    "vocal recording studio",
    "sound engineering Bangalore",
    "Bollywood music production",
    "jam sessions",
    "top rated music studios in bangalore",
    "music studio kr puram bangalore",
    "gerry anthony",
    "rehearsal space bangalore",
    "music recording studio bangalore"

  ],
  authors: [{ name: "Gerry Anthony" }],
  openGraph: {
    title: "Clamat Acoustics - Professional Music Studio in Bangalore",
    description:
      "Clamat Acoustics delivers top-tier music production, recording, and mixing services. Craft your sound with expert engineers and industry-grade equipment in Bangalore.",
    url: "https://www.clamatacoustics.com",
    images: [
      {
        url: "https://i.pinimg.com/736x/c4/0f/44/c40f44a04f0f6b8a36a6c3967b6e6f49.jpg",
        alt: "Clamat Acoustics Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clamat Acoustics - Music Production & Recording Studio in Bangalore",
    description:
      "Record, produce, and mix your music with Clamat Acoustics — Bangalore’s trusted music production studio for artists, content creators, and brands.",
    images: [
      "https://i.pinimg.com/1200x/70/7c/d1/707cd1e6e9f48aaefe9b310f63c7ad55.jpg",
    ],
  },
};


export default function Home() {
  return (
    <div>
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/918147180736/?text=Hello Clamat Acoustics, I am interested to know about your services"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition-all z-50"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Hero Section */}
      <section
        className="relative h-[600px] flex items-center justify-center"
        style={{
          backgroundImage:
            // "url('https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&q=80')",
            "url('https://i.pinimg.com/1200x/52/e2/58/52e25883dbfb494e3a79ad46277c67d5.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
       
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Welcome to Clamat Acoustics</h1>
          <p className="text-xl mb-8">
            Professional Music Production & Recording Studio in Bangalore
          </p>
          <Link href="/booking">
            <Button size="lg" className="bg-primary text-primary-foreground">
              Book a Session
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Video Section */}
      {/* <section className="py-20 bg-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-8">
            Discover Clamat Acoustics in Action
          </h2>
          <p className="text-muted-foreground mb-6">
            Take a closer look at our studio facilities and see what makes us unique.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="relative aspect-w-16 aspect-h-9">
              <iframe
                className="rounded-lg shadow-lg w-full h-[315px]"
                src="https://www.youtube.com/embed/ZirZaR0iNhQ"
                title="Clamat Acoustics Overview"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="relative aspect-w-16 aspect-h-9">
              <iframe
                className="rounded-lg shadow-lg w-full h-[315px]"
                src="https://www.youtube.com/embed/y_FtLQeXucY"
                title="Clamat Acoustics Showcase"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section> */}

      {/* Services Section */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Radio,
                title: "Podcast Production",
                description: "Professional podcast recording and production services",
                href: "/podcast",
              },
              {
                icon: Mic,
                title: "Recording Sessions",
                description: "State-of-the-art recording facilities for musicians",
                href: "/recording",
              },
              {
                icon: Music,
                title: "Rehearsal Space",
                description: "Fully equipped rehearsal rooms for bands and artists",
                href: "/rehearsal",
              },
              {
                icon: Headphones,
                title: "Music Production",
                description: "Complete music production and mixing services",
                href: "/production",
              },
              {
                icon: BookOpen,
                title: "Music Lessons",
                description: "Professional music education for all skill levels",
                href: "/lessons",
              },
            ].map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="block p-6 bg-card rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <service.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Carousel Section */}
      <section>
        <h1 className="text-center text-3xl font-bold my-8">Glimpse of our Studio</h1>
        <Carousel1 />
      </section>

      {/* Customer Testimonials */}
      <section>
        <h1 className="text-center text-3xl font-bold my-8">What our Customers Say</h1>
        <Carousel2 />
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Clamat Acoustics</h2>
              <p className="text-muted-foreground mb-6">
              Our state-of-the-art facility towards Bangalore East is equipped with the latest technology to bring your musical vision to life. It boasts as being one of the largest studio space and the conducive environment with best in class sound proofing. Our recording studio caters to all your needs, whether you’re a solo music producer, a full-scale rock band or even a string section, across our three rooms we can provide you with a world-class experience in studio recording and music production.
              </p>
              <Link href="/contact">
                <Button variant="outline">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative h-[400px]">
              <section>
                <h1 className="text-center text-3xl font-bold my-8">Explore our Studio</h1>
                <Carousel3 />
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}