// "use client";

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { useToast } from "@/hooks/use-toast";
// import { useState } from "react";
// import { Mail, Phone, MapPin } from "lucide-react";

// export default function ContactPage() {
//   const { toast } = useToast();
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     // Simulate form submission
//     await new Promise(resolve => setTimeout(resolve, 1000));
    
//     toast({
//       title: "Message sent!",
//       description: "We'll get back to you as soon as possible.",
//     });
    
//     setIsSubmitting(false);
//     (e.target as HTMLFormElement).reset();
//   };

//   return (
//     <div>
//       <section 
//         className="relative h-[50vh] flex items-center justify-center bg-cover bg-center"
//         style={{
//           backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")'
//         }}
//       >
//         <div className="text-center text-white">
//           <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
//           <p className="text-xl">Get in touch with our team</p>
//         </div>
//       </section>

//       <section className="py-20 px-4">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//             <div>
//               <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
//               <p className="text-lg text-muted-foreground mb-8">
//                 Have questions about our services? Want to book a session? Fill out the form and we'll get back to you as soon as possible.
//               </p>
              
//               <div className="space-y-6 mb-8">
//                 <div className="flex items-center gap-4">
//                   <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
//                     <Phone className="h-6 w-6 text-primary" />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold">Phone</h3>
//                     <p className="text-muted-foreground">+91 XXXXXXXXXX</p>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-4">
//                   <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
//                     <Mail className="h-6 w-6 text-primary" />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold">Email</h3>
//                     <p className="text-muted-foreground">contact@clamatacoustics.com</p>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-4">
//                   <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
//                     <MapPin className="h-6 w-6 text-primary" />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold">Location</h3>
//                     <p className="text-muted-foreground">Bangalore, India</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-card p-8 rounded-lg shadow-lg">
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div className="space-y-2">
//                     <label htmlFor="name" className="text-sm font-medium">Name</label>
//                     <Input id="name" required placeholder="Your name" />
//                   </div>
//                   <div className="space-y-2">
//                     <label htmlFor="email" className="text-sm font-medium">Email</label>
//                     <Input id="email" type="email" required placeholder="Your email" />
//                   </div>
//                 </div>

//                 <div className="space-y-2">
//                   <label htmlFor="phone" className="text-sm font-medium">Phone</label>
//                   <Input id="phone" type="tel" required placeholder="Your phone number" />
//                 </div>

//                 <div className="space-y-2">
//                   <label htmlFor="service" className="text-sm font-medium">Service</label>
//                   <Select>
//                     <SelectTrigger>
//                       <SelectValue placeholder="Select a service" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="podcast">Podcast Studio</SelectItem>
//                       <SelectItem value="recording">Recording Session</SelectItem>
//                       <SelectItem value="rehearsal">Rehearsal Space</SelectItem>
//                       <SelectItem value="production">Music Production</SelectItem>
//                       <SelectItem value="lessons">Music Lessons</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>

//                 <div className="space-y-2">
//                   <label htmlFor="message" className="text-sm font-medium">Message</label>
//                   <Textarea 
//                     id="message" 
//                     required
//                     placeholder="Tell us about your project or inquiry"
//                     className="min-h-[120px]"
//                   />
//                 </div>

//                 <Button type="submit" className="w-full" disabled={isSubmitting}>
//                   {isSubmitting ? "Sending..." : "Send Message"}
//                 </Button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="py-20 px-4 bg-muted">
//         <div className="max-w-7xl mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-8">Visit Our Studio</h2>
//           <div className="aspect-[16/9] w-full rounded-lg overflow-hidden">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.84916296526!2d77.49085423359373!3d12.954294900000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBangalore%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1652186795702!5m2!1sen!2sin"
//               width="100%"
//               height="100%"
//               style={{ border: 0 }}
//               allowFullScreen
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             ></iframe>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// second

// adding open to call and email functionality


"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Construct WhatsApp URL with prefilled message
      const whatsappMessage = `Hi Clamat Acoustics, my name is ${formData.name}. I am interested in your ${formData.service} service. Here's my message: ${formData.message}. You can reach me at ${formData.email} or ${formData.phone}.`;
      const whatsappUrl = `https://wa.me/918147180736?text=${encodeURIComponent(
        whatsappMessage
      )}`;

      // Open WhatsApp in a new tab
      window.open(whatsappUrl, "_blank");

      toast({
        title: "Message sent successfully",
        description: "Redirecting to WhatsApp.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <section className="relative h-[400px] flex items-center justify-center">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl">Get in touch with Clamat Acoustics</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                Have questions about our services? Want to book a session? Fill
                out the form below and we'll get back to you as soon as
                possible.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <a 
                      href="tel:+918147180736"
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      +91 8147180736
                    </a>
                    <br />
                    <a 
                      href="tel:+919886110256"
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      +91 9886110256
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <a 
                      href="mailto:info@clamatacoustics.com"
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      info@clamatacoustics.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    {/* <p className="text-muted-foreground mb-4">
                      1023 2nd floor, 80 Feet Rd, 1st Block Koramangala,
                      Koramangala, Bengaluru, Karnataka 560034
                    </p> */}
                    <a 
                href="https://maps.app.goo.gl/m57pYGuEZjsYohFL6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                 #33 2nd cross, Abhivridhi layout, KR Puram, Bengaluru, Karnataka 560036
              </a>
              <br />
                    <div className="w-full h-48 rounded-lg overflow-hidden">
                      <iframe
                        // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.389708275254!2d77.63399631482233!3d12.934490190886972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15c505000001%3A0x6c13d32b5e6cc3c8!2sVL%20Studios!5e0!3m2!1sen!2sin!4v1646469125799!5m2!1sen!2sin"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.2730627779215!2d77.6939498!3d13.018275299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae110045a240a7%3A0xb426f5a3dc3f4913!2sCLAMAT%20ACOUSTICS!5e0!3m2!1sen!2sin!4v1744725689706!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Clamat Acoustics Location"
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-2"
                  >
                    Phone
                  </label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium mb-2"
                  >
                    Service Interested In
                  </label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) =>
                      setFormData({ ...formData, service: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="podcast production">Podcast Production</SelectItem>
                      <SelectItem value="recording sessions">
                        Recording Sessions
                      </SelectItem>
                      <SelectItem value="rehearsal space">
                        Rehearsal Space
                      </SelectItem>
                      <SelectItem value="music production">
                        Music Production
                      </SelectItem>
                      <SelectItem value="music lessons">Music Lessons</SelectItem>
                      <SelectItem value="karaoke">
                        Karaoke Party Venue
                      </SelectItem>
                      <SelectItem value="music classes">Music Classes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Redirecting..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}