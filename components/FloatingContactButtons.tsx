"use client";

import { Mail, Phone, MessageCircleMore } from "lucide-react";

export function FloatingContactButtons() {
  return (
    <div className="fixed bottom-6 left-6 flex flex-col gap-3 z-50">
      {/* WhatsApp */}
      <a
        href="https://wa.me/918147180736?text=Hi%20Clamat%20Acoustics,%20I%20am%20interested%20in%20your%20services"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-full bg-green-600 text-white shadow-lg hover:bg-green-700 transition"
        title="Chat on WhatsApp"
      >
        <MessageCircleMore className="w-5 h-5" />
      </a>

      {/* Call */}
      <a
        href="tel:+918147180736"
        className="p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition"
        title="Call Clamat Acoustics"
      >
        <Phone className="w-5 h-5" />
      </a>

      {/* Second Call */}
      <a
        href="tel:+919886110256"
        className="p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition"
        title="Call Clamat Acoustics (Second Number)"
      >
        <Phone className="w-5 h-5" />
      </a>

      {/* Email */}
      <a
        href="mailto:info@clamatacoustics.com"
        className="p-3 rounded-full bg-red-600 text-white shadow-lg hover:bg-red-700 transition"
        title="Send Email"
      >
        <Mail className="w-5 h-5" />
      </a>
    </div>
  );
}
