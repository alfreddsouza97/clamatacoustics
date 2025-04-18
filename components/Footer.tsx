// import { Mail, Phone, MapPin } from 'lucide-react';

// export function Footer() {
//   return (
//     <footer className="bg-background border-t">
//       <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Clamat Acoustics</h3>
//             <p className="text-muted-foreground">
//               Professional music studio in Bangalore offering recording, podcast, rehearsal,
//               and music education services.
//             </p>
//           </div>
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
//             <div className="space-y-2">
//               <p className="flex items-center gap-2 text-muted-foreground">
//                 <Phone className="h-4 w-4" />
//                 <span>+91 XXXXXXXXXX</span>
//               </p>
//               <p className="flex items-center gap-2 text-muted-foreground">
//                 <Mail className="h-4 w-4" />
//                 <span>contact@clamatacoustics.com</span>
//               </p>
//               <p className="flex items-center gap-2 text-muted-foreground">
//                 <MapPin className="h-4 w-4" />
//                 <span>Bangalore, India</span>
//               </p>
//             </div>
//           </div>
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Hours</h3>
//             <div className="space-y-2 text-muted-foreground">
//               <p>Monday - Friday: 9:00 AM - 9:00 PM</p>
//               <p>Saturday: 10:00 AM - 8:00 PM</p>
//               <p>Sunday: By Appointment</p>
//             </div>
//           </div>
//         </div>
//         <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
//           <p>&copy; {new Date().getFullYear()} Clamat Acoustics. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// }

//second

import { Mail, MapPin, Phone, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Clamat Acoustics</h3>
            <p className="text-muted-foreground">
              Professional music production and recording studio in Bangalore.
            </p>
            <div className="mt-4 space-y-2">
              <a
                href="https://www.instagram.com/clamat_acoustics/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Instagram className="h-4 w-4" /> Clamat Acoustics Instagram
              </a>
              {/* <a
                href="https://www.instagram.com/victor_logi_/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Instagram className="h-4 w-4" /> Owner Instagram
              </a> */}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2">
              <a 
                href="tel:+918147180736"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Phone className="h-4 w-4" /> +91 8147180736
              </a>
              <a 
                href="tel:+919886110256"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Phone className="h-4 w-4" /> +91 9886110256
              </a>
              <a 
                href="mailto:info@clamatacoustics.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Mail className="h-4 w-4" /> info@clamatacoustics.com
              </a>
              <a 
                href="https://maps.app.goo.gl/m57pYGuEZjsYohFL6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <MapPin className="h-4 w-4" /> #33 2nd cross, Abhivridhi layout, KR Puram, Bengaluru, Karnataka 560036
              </a>
            </div>
            <div className="mt-4 w-full h-48 rounded-lg overflow-hidden">
              <iframe
                // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.3897082752544!2d77.63399631482233!3d12.93449019088697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15c505000001%3A0x6c13d32b5e6cc3c8!2sVL%20Studios!5e0!3m2!1sen!2sin!4v1646469125799!5m2!1sen!2sin"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.2730627779215!2d77.6939498!3d13.018275299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae110045a240a7%3A0xb426f5a3dc3f4913!2sCLAMAT%20ACOUSTICS!5e0!3m2!1sen!2sin!4v1744725689706!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="VL Studios Location"
                className="rounded-lg"
              />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Studio Hours</h3>
            <p className="text-muted-foreground">
              Monday - Sunday: 07:00 AM - 12:00 AM<br />
              {/* Sunday: By Appointment */}
            </p>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Clamat Acoustics. All rights reserved.{" "}
            <span className="inline-flex items-center">
              Site by{" "}
              <a 
                href="http://wa.me/919900272747?text=hello%20Alfred,%20I%20am%20interested%20to%20know%20about%20web%20development%20services" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="ml-1 font-medium text-primary hover:text-primary/80 transition-colors duration-200 relative group"
              >
                ALFRED MARSHALL DSOUZA
                <span className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}