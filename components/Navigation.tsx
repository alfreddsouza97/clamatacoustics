// "use client";

// import { useState } from 'react';
// import Link from 'next/link';
// import { Menu, X, Music4 } from 'lucide-react';

// export function Navigation() {
//   const [isOpen, setIsOpen] = useState(false);

//   const navItems = [
//     { href: '/', label: 'Home' },
//     { href: '/podcast', label: 'Podcast Studio' },
//     { href: '/recording', label: 'Recording Sessions' },
//     { href: '/rehearsal', label: 'Rehearsal Space' },
//     { href: '/production', label: 'Music Production' },
//     { href: '/lessons', label: 'Music Lessons' },
//     { href: '/contact', label: 'Contact' },
//   ];

//   return (
//     <nav className="bg-background border-b">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           <div className="flex items-center">
//             <Link href="/" className="flex items-center space-x-2">
//               <Music4 className="h-8 w-8 text-primary" />
//               <span className="font-bold text-xl">Clamat Acoustics</span>
//             </Link>
//           </div>
          
//           <div className="hidden md:flex items-center space-x-8">
//             {navItems.map((item) => (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 className="text-foreground hover:text-primary transition-colors"
//               >
//                 {item.label}
//               </Link>
//             ))}
//           </div>

//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-foreground hover:text-primary"
//             >
//               {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       {isOpen && (
//         <div className="md:hidden">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             {navItems.map((item) => (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
//                 onClick={() => setIsOpen(false)}
//               >
//                 {item.label}
//               </Link>
//             ))}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

// Adding logo

// "use client";

// import { useState } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { Menu, X } from 'lucide-react';

// export function Navigation() {
//   const [isOpen, setIsOpen] = useState(false);

//   const navItems = [
//     { href: '/', label: 'Home' },
//     { href: '/booking', label: 'Book Now' },
//     { href: '/services', label: 'Services Catalogue' },
//     { href: '/podcast', label: 'Podcast Studio' },
  
//     { href: '/recording', label: 'Recording Sessions' },
//     { href: '/rehearsal', label: 'Rehearsal Space' },
//     { href: '/production', label: 'Music Production' },
//     { href: '/lessons', label: 'Music Lessons' },
//     { href: '/contact', label: 'Contact' },
//   ];

 

//   return (
//     <nav className="bg-background border-b w-full">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-24">
//           {/* LOGO */}
//           <div className="flex-shrink-0 mr-4">
//             <Link href="/" className="flex items-center space-x-2">
//               <Image
//                 src="/logo1.png"
//                 alt="Clamat Acoustics Logo"
//                 width={80}
//                 height={80}
//                 className="w-20 h-20 object-contain"
//                 priority
//               />
//               <span className="sr-only">Clamat Acoustics</span>
//             </Link>
//           </div>
  
//           {/* DESKTOP MENU */}
//           <div className="hidden md:flex flex-grow justify-between items-center overflow-hidden min-w-0">
//             <div className="flex flex-wrap justify-end gap-4 w-full min-w-0">
//               {navItems.map((item) => (
//                 <Link
//                   key={item.href}
//                   href={item.href}
//                   className="truncate text-foreground hover:text-primary transition-colors text-sm sm:text-base"
//                   title={item.label}
//                 >
//                   {item.label}
//                 </Link>
//               ))}
//             </div>
//           </div>
  
//           {/* MOBILE MENU BUTTON */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-foreground hover:text-primary"
//             >
//               {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>
//       </div>
  
//       {/* MOBILE MENU */}
//       {isOpen && (
//         <div className="md:hidden">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             {navItems.map((item) => (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
//                 onClick={() => setIsOpen(false)}
//               >
//                 {item.label}
//               </Link>
//             ))}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
  
  
// }


//third

"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/booking", label: "Book Now" },
    { href: "/services", label: "Services Catalogue" },
    { href: "/podcast", label: "Podcast Studio" },
    { href: "/recording", label: "Recording Sessions" },
    { href: "/rehearsal", label: "Rehearsal Space" },
    { href: "/production", label: "Music Production" },
    { href: "/lessons", label: "Music Lessons" },
    { href: "/contact", label: "Contact" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="border-b bg-white w-full sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo1.png"
                alt="VL Studios Logo"
                width={72}
                height={72}
                className="w-18 h-18 object-contain"
                priority
              />
              <span className="sr-only">VL Studios</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden sm:flex flex-wrap items-center justify-end flex-grow min-w-0 space-x-2 overflow-hidden">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "truncate px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  pathname === href
                    ? "text-primary bg-secondary"
                    : "text-muted-foreground hover:text-primary hover:bg-secondary/50"
                )}
                title={label}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile Button */}
          <button
            onClick={toggleMenu}
            className="sm:hidden text-muted-foreground hover:text-primary focus:outline-none"
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="sm:hidden bg-white border-t">
          <ul className="flex flex-col space-y-1 px-4 py-2">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "block px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    pathname === href
                      ? "text-primary bg-secondary"
                      : "text-muted-foreground hover:text-primary hover:bg-secondary/50"
                  )}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
