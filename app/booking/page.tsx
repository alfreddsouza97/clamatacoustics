// ALLOWING 11 PM BOOKING - Fixing bug

// "use client"

// import React, { useState, useEffect } from 'react';
// import { Calendar as CalendarIcon, Send, Music2, Clock, MapPin, Phone } from 'lucide-react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { DayPicker } from 'react-day-picker';
// import { format, addDays, setHours, setMinutes, isBefore, isAfter, addMinutes } from 'date-fns';

// interface CourseOption {
//   id: string;
//   name: string;
//   price: string;
// }

// const courses: CourseOption[] = [
//   { id: '1', name: 'Vocals Mixing Mastering Package', price: '₹2500' },
//   { id: '2', name: 'BEGINNER YouTube Cover song shoot', price: '₹4999' },
//   { id: '3', name: 'Audio podcast Per hour', price: '₹1499' },
//   { id: '4', name: 'Recording Session Per Hour - AKG 220/ MXL 990', price: '₹750' },
//   { id: '5', name: 'Professional Cover songs Package', price: '₹12000' },
//   { id: '6', name: 'Premium Room with Rode NT2 - Spacious', price: '₹1200' },
//   { id: '7', name: 'Podcast Audio & Video Production Package - 4 Hours', price: '₹22000' },
//   { id: '8', name: 'VL Studios Premium', price: '₹1000' },
//   { id: '9', name: 'Intimate Sessions/karaoke sessions', price: '₹7500' },
//   { id: '10', name: 'Jam sessions @ 550/850/1000Rs', price: '₹550' },
//   { id: '11', name: 'Guitar/Keyboard Drum Group Classes', price: '₹10000' },
//   { id: '12', name: '10 hours Package for Jam Session', price: '₹5000' },
//   { id: '13', name: '12db - Audios services', price: '₹2499' },
//   { id: '14', name: 'Audio podcast Per hour', price: '₹1499' },
//   { id: '15', name: 'Karaoke Party Venue', price: '₹299' },
//   { id: '16', name: 'Music Classes - 3 Months', price: '₹10000' }
// ];

// // Generate time slots from 7 AM to 12 AM
// const generateTimeSlots = () => {
//   const slots = [];
//   for (let hour = 7; hour <= 24; hour++) { // Changed from 23 to 24 to include midnight
//     // For midnight (hour 24), we only want to include 00:00
//     const maxMinute = hour === 24 ? 0 : 30;
//     for (let minute = 0; minute <= maxMinute; minute += 30) {
//       // Use hour % 24 to handle midnight correctly
//       const time = setMinutes(setHours(new Date(), hour % 24), minute);
//       slots.push(time);
//     }
//   }
//   return slots;
// };

// function Booking() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     mobile: '',
//     selectedCourse: '',
//     guests: '1',
//   });

//   const [selectedDate, setSelectedDate] = useState<Date>();
//   const [selectedStartTime, setSelectedStartTime] = useState<Date>();
//   const [selectedEndTime, setSelectedEndTime] = useState<Date>();
//   const [showTimeSlots, setShowTimeSlots] = useState(false);
//   const [availableEndTimes, setAvailableEndTimes] = useState<Date[]>([]);

//   const timeSlots = generateTimeSlots();
//   const today = new Date();
//   const thirtyDaysFromNow = addDays(today, 30);

//   useEffect(() => {
//     if (selectedStartTime) {
//       // Get hours and minutes from the selected start time
//       const startHours = selectedStartTime.getHours();
//       const startMinutes = selectedStartTime.getMinutes();
      
//       const endTimeSlots = timeSlots.filter(time => {
//         const endHours = time.getHours();
//         const endMinutes = time.getMinutes();
        
//         // Convert times to minutes for easier comparison
//         const startTimeInMinutes = startHours * 60 + startMinutes;
//         const endTimeInMinutes = endHours * 60 + endMinutes;
        
//         // Ensure at least 60 minutes difference and include midnight (00:00)
//         return (endTimeInMinutes - startTimeInMinutes) >= 60 || 
//                (endHours === 0 && (24 * 60 - startTimeInMinutes) >= 60);
//       });
      
//       setAvailableEndTimes(endTimeSlots);
//       setSelectedEndTime(undefined);
//     }
//   }, [selectedStartTime]);

//   const handleDateSelect = (date: Date | undefined) => {
//     setSelectedDate(date);
//     setShowTimeSlots(true);
//     setSelectedStartTime(undefined);
//     setSelectedEndTime(undefined);
//   };

//   const handleStartTimeSelect = (time: Date) => {
//     setSelectedStartTime(time);
//   };

//   const handleEndTimeSelect = (time: Date) => {
//     setSelectedEndTime(time);
//   };

//   const isTimeSlotAvailable = (time: Date) => {
//     if (!selectedDate) return false;

//     const slotDateTime = new Date(
//       selectedDate.getFullYear(),
//       selectedDate.getMonth(),
//       selectedDate.getDate(),
//       time.getHours(),
//       time.getMinutes()
//     );

//     // If the selected date is today, disable past time slots
//     if (format(selectedDate, 'yyyy-MM-dd') === format(today, 'yyyy-MM-dd')) {
//       return isAfter(slotDateTime, new Date());
//     }

//     return true;
//   };

  

// const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
  
//     if (!selectedDate || !selectedStartTime || !selectedEndTime) return;
  
//     const selectedCourseName = courses.find(c => c.id === formData.selectedCourse)?.name;
  
//     const rawMessage =
//       `Hello! I would like to book:\n\n` +
//       `Service: ${selectedCourseName}\n` +
//       `Name: ${formData.name}\n` +
//       `Email: ${formData.email}\n` +
//       `Mobile: ${formData.mobile}\n` +
//       `Date: ${format(selectedDate, 'MMMM d, yyyy')}\n` +
//       `Start Time: ${format(selectedStartTime, 'h:mm a')}\n` +
//       `End Time: ${format(selectedEndTime, 'h:mm a')}\n` +
//       `Number of Guests: ${formData.guests}`;
  
//     const encodedMessage = encodeURIComponent(rawMessage);
//     const whatsappUrl = `https://wa.me/918147180736?text=${encodedMessage}`;
  
//     window.open(whatsappUrl, '_blank');
//   };
  
//   return (
//     <div className="min-h-screen bg-black text-white">
//       {/* Hero Section */}
//       <div className="relative h-[40vh] w-full"> 
//         <Image
         
//           src = "https://i.pinimg.com/1200x/52/ce/f7/52cef7889d01b615a48c3b089b93758d.jpg"
//           alt="Studio Background"
//           fill
//           className="object-cover brightness-50"
//         />
//         <div className="absolute inset-0 flex items-center justify-center">
//           <div className="text-center">
//             <h1 className="text-5xl font-bold mb-4">Book Your Session</h1>
//             <p className="text-xl">Experience the magic of music in our professional studio</p>
//           </div>
//         </div>
//       </div>

//       {/* Info Cards */}
//       <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
//           <div className="bg-zinc-900 p-6 rounded-lg text-center">
//             <Clock className="mx-auto mb-4 h-8 w-8 text-green-500" />
//             <h3 className="text-xl font-semibold mb-2">Operating Hours</h3>
//             <p>Mon - Sun: 7:00 AM - 12:00 AM</p>
//           </div>
//           <div className="bg-zinc-900 p-6 rounded-lg text-center">
//             <MapPin className="mx-auto mb-4 h-8 w-8 text-green-500" />
//             <h3 className="text-xl font-semibold mb-2">Location</h3>
//             <p>Bangalore, India</p>
//           </div>
//           <div className="bg-zinc-900 p-6 rounded-lg text-center">
//             <Phone className="mx-auto mb-4 h-8 w-8 text-green-500" />
//             <h3 className="text-xl font-semibold mb-2">Contact</h3>
//             <p>+91 81471 80736</p>
//           </div>
//         </div>

//         {/* Booking Form */}
//         <div className="max-w-4xl mx-auto bg-zinc-900 rounded-xl shadow-xl overflow-hidden">
//           <div className="p-8">
//             <div className="flex items-center justify-center mb-8">
//               <Music2 className="h-8 w-8 text-green-500 mr-3" />
//               <h2 className="text-3xl font-bold">Reserve Your Spot</h2>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-medium mb-2">
//                     Select Service
//                   </label>
//                   <select
//                     className="w-full bg-zinc-800 rounded-md border-zinc-700 text-white focus:ring-green-500 focus:border-green-500"
//                     value={formData.selectedCourse}
//                     onChange={(e) => setFormData({ ...formData, selectedCourse: e.target.value })}
//                     required
//                   >
//                     <option value="">Choose a service</option>
//                     {courses.map((course) => (
//                       <option key={course.id} value={course.id}>
//                         {course.name} - {course.price}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium mb-2">
//                     Number of Guests
//                   </label>
//                   <input
//                     type="number"
//                     min="1"
//                     className="w-full bg-zinc-800 rounded-md border-zinc-700 text-white focus:ring-green-500 focus:border-green-500"
//                     value={formData.guests}
//                     onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
//                     required
//                   />
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-medium mb-2">
//                     Select Date
//                   </label>
//                   <div className="bg-zinc-800 rounded-lg p-4">
//                     <DayPicker
//                       mode="single"
//                       selected={selectedDate}
//                       onSelect={handleDateSelect}
//                       disabled={[
//                         { before: today },
//                         { after: thirtyDaysFromNow }
//                       ]}
//                       className="!bg-zinc-800 text-white"
//                       classNames={{
//                         day_selected: "bg-green-500 text-white",
//                         day_today: "text-green-500 font-bold",
//                         day: "text-white hover:bg-zinc-700",
//                         day_disabled: "text-zinc-600",
//                         head_cell: "text-green-500",
//                         caption: "text-white",
//                         nav_button_previous: "text-green-500 hover:text-green-400",
//                         nav_button_next: "text-green-500 hover:text-green-400",
//                       }}
//                     />
//                   </div>
//                 </div>

//                 {showTimeSlots && (
//                   <div className="space-y-6">
//                     <div>
//                       <label className="block text-sm font-medium mb-2">
//                         Select Start Time
//                       </label>
//                       <div className="bg-zinc-800 rounded-lg p-4 h-[150px] overflow-y-auto">
//                         <div className="grid grid-cols-2 gap-2">
//                           {timeSlots.map((time, index) => (
//                             <button
//                               key={index}
//                               type="button"
//                               disabled={!isTimeSlotAvailable(time)}
//                               onClick={() => handleStartTimeSelect(time)}
//                               className={`p-2 rounded-md text-center transition-colors duration-200 ${
//                                 selectedStartTime && format(selectedStartTime, 'HH:mm') === format(time, 'HH:mm')
//                                   ? 'bg-green-500 text-white'
//                                   : isTimeSlotAvailable(time)
//                                   ? 'bg-zinc-700 hover:bg-zinc-600 text-white'
//                                   : 'bg-zinc-900 text-zinc-600 cursor-not-allowed'
//                               }`}
//                             >
//                               {format(time, 'h:mm a')}
//                             </button>
//                           ))}
//                         </div>
//                       </div>
//                     </div>

//                     {selectedStartTime && (
//                       <div>
//                         <label className="block text-sm font-medium mb-2">
//                           Select End Time
//                         </label>
//                         <div className="bg-zinc-800 rounded-lg p-4 h-[150px] overflow-y-auto">
//                           <div className="grid grid-cols-2 gap-2">
//                             {availableEndTimes.map((time, index) => (
//                               <button
//                                 key={index}
//                                 type="button"
//                                 onClick={() => handleEndTimeSelect(time)}
//                                 className={`p-2 rounded-md text-center transition-colors duration-200 ${
//                                   selectedEndTime && format(selectedEndTime, 'HH:mm') === format(time, 'HH:mm')
//                                     ? 'bg-green-500 text-white'
//                                     : 'bg-zinc-700 hover:bg-zinc-600 text-white'
//                                 }`}
//                               >
//                                 {format(time, 'h:mm a')}
//                               </button>
//                             ))}
//                           </div>
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 )}
//               </div>

//               <div>
//                 <label className="block text-sm font-medium mb-2">
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   className="w-full bg-zinc-800 rounded-md border-zinc-700 text-white focus:ring-green-500 focus:border-green-500"
//                   value={formData.name}
//                   onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium mb-2">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   className="w-full bg-zinc-800 rounded-md border-zinc-700 text-white focus:ring-green-500 focus:border-green-500"
//                   value={formData.email}
//                   onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium mb-2">
//                   Mobile Number
//                 </label>
//                 <input
//                   type="tel"
//                   pattern="[0-9]{10}"
//                   className="w-full bg-zinc-800 rounded-md border-zinc-700 text-white focus:ring-green-500 focus:border-green-500"
//                   value={formData.mobile}
//                   onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
//                   required
//                 />
//               </div>

//               <button
//                 type="submit"
//                 disabled={!selectedDate || !selectedStartTime || !selectedEndTime}
//                 className="w-full flex justify-center items-center gap-2 py-4 px-4 bg-green-600 hover:bg-green-700 rounded-md text-white font-medium transition-colors duration-200 disabled:bg-zinc-700 disabled:cursor-not-allowed"
//               >
//                 <Send size={20} />
//                 Book via WhatsApp
//               </button>
//             </form>

//             <div className="mt-8 text-center">
//               <Link href="/services" className="text-green-500 hover:text-green-400 font-medium">
//                 View Complete Services Catalogue →
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Booking;

//second

// Booking.tsx
// "use client";

// import React, { useState, useEffect } from 'react';
// import { Calendar as CalendarIcon, Send, Music2, Clock, MapPin, Phone, User, Mail } from 'lucide-react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { DayPicker } from 'react-day-picker';
// import { format, addDays, setHours, setMinutes, isAfter } from 'date-fns';
// import { motion } from 'framer-motion';

// const courses = [
//   { id: '1', name: 'Vocals Mixing Mastering Package', price: '₹2500' },
//   { id: '2', name: 'BEGINNER YouTube Cover song shoot', price: '₹4999' },
//   { id: '3', name: 'Audio podcast Per hour', price: '₹1499' },
//   { id: '4', name: 'Recording Session Per Hour - Shure SM 58/ Scarlett', price: '₹750' },
//   { id: '5', name: 'Professional Cover songs Package', price: '₹12000' },
//   { id: '6', name: 'Premium Room with Rode NT2 - Spacious', price: '₹1200' },
//   { id: '7', name: 'Podcast Audio & Video Production Package - 4 Hours', price: '₹22000' },
//   { id: '8', name: 'Clamat Acoustics Premium', price: '₹1000' },
//   { id: '9', name: 'Intimate Sessions/karaoke sessions', price: '₹7500' },
//   { id: '10', name: 'Jam sessions @ 550/850/1000Rs', price: '₹550' },
//   { id: '11', name: 'Guitar/Keyboard Drum Group Classes', price: '₹10000' },
//   { id: '12', name: '10 hours Package for Jam Session', price: '₹5000' },
//   { id: '13', name: 'Clamat Audio Release Service', price: '₹2499' },
//   { id: '14', name: 'Audio podcast Per hour', price: '₹1499' },
//   { id: '15', name: 'Karaoke Party Venue', price: '₹299' },
//   { id: '16', name: 'Music Classes - 3 Months', price: '₹10000' }
// ];

// const generateTimeSlots = () => {
//   const slots = [];
//   for (let hour = 7; hour <= 24; hour++) {
//     const maxMinute = hour === 24 ? 0 : 30;
//     for (let minute = 0; minute <= maxMinute; minute += 30) {
//       const time = setMinutes(setHours(new Date(), hour % 24), minute);
//       slots.push(time);
//     }
//   }
//   return slots;
// };

// function Booking() {
//   const [formData, setFormData] = useState({ name: '', email: '', mobile: '', selectedCourse: '', guests: '1' });
//   const [selectedDate, setSelectedDate] = useState();
//   const [selectedStartTime, setSelectedStartTime] = useState();
//   const [selectedEndTime, setSelectedEndTime] = useState();
//   const [showTimeSlots, setShowTimeSlots] = useState(false);
//   const [availableEndTimes, setAvailableEndTimes] = useState([]);

//   const timeSlots = generateTimeSlots();
//   const today = new Date();
//   const thirtyDaysFromNow = addDays(today, 30);

//   useEffect(() => {
//     if (selectedStartTime) {
//       const start = selectedStartTime.getHours() * 60 + selectedStartTime.getMinutes();
//       const endTimeSlots = timeSlots.filter(time => {
//         const end = time.getHours() * 60 + time.getMinutes();
//         return end - start >= 60 || (time.getHours() === 0 && 1440 - start >= 60);
//       });
//       setAvailableEndTimes(endTimeSlots);
//       setSelectedEndTime(undefined);
//     }
//   }, [selectedStartTime]);

//   const handleDateSelect = (date) => {
//     setSelectedDate(date);
//     setShowTimeSlots(true);
//     setSelectedStartTime(undefined);
//     setSelectedEndTime(undefined);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!selectedDate || !selectedStartTime || !selectedEndTime) return;

//     const message = encodeURIComponent(
//       `Hello! I would like to book:\n\n` +
//       `Service: ${courses.find(c => c.id === formData.selectedCourse)?.name}\n` +
//       `Name: ${formData.name}\nEmail: ${formData.email}\nMobile: ${formData.mobile}\n` +
//       `Date: ${format(selectedDate, 'MMMM d, yyyy')}\n` +
//       `Start Time: ${format(selectedStartTime, 'h:mm a')}\n` +
//       `End Time: ${format(selectedEndTime, 'h:mm a')}\nGuests: ${formData.guests}`
//     );

//     window.open(`https://wa.me/918147180736?text=${message}`, '_blank');
//   };

//   const isTimeSlotAvailable = (time) => {
//     if (!selectedDate) return false;
//     const slot = new Date(selectedDate);
//     slot.setHours(time.getHours(), time.getMinutes(), 0, 0);
//     return format(selectedDate, 'yyyy-MM-dd') !== format(today, 'yyyy-MM-dd') || isAfter(slot, new Date());
//   };

//   return (
//     <motion.div
//       className="min-h-screen bg-black text-white"
//       initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
//     >
//       <div className="relative h-[40vh] w-full">
//         <Image
//           src="https://i.pinimg.com/1200x/52/ce/f7/52cef7889d01b615a48c3b089b93758d.jpg"
//           alt="Studio Background"
//           fill className="object-cover brightness-50"
//         />
//         <div className="absolute inset-0 flex items-center justify-center">
//           <div className="text-center">
//             <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
//               Book Your Session
//             </h1>
//             <p className="text-xl">Experience the magic of music in our professional studio</p>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
//           {[{ icon: Clock, title: 'Operating Hours', desc: 'Mon - Sun: 7:00 AM - 12:00 AM' }, { icon: MapPin, title: 'Location', desc: 'Bangalore, India' }, { icon: Phone, title: 'Contact', desc: '+91 81471 80736' }].map((item, idx) => (
//             <div key={idx} className="bg-zinc-900 p-6 rounded-lg text-center shadow-lg">
//               <item.icon className="mx-auto mb-4 h-8 w-8 text-green-500" />
//               <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
//               <p>{item.desc}</p>
//             </div>
//           ))}
//         </div>

//         <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl overflow-hidden">
//           <div className="p-8">
//             <div className="flex items-center justify-center mb-8">
//               <Music2 className="h-8 w-8 text-green-500 mr-3" />
//               <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
//                 Reserve Your Spot
//               </h2>
//             </div>
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-medium mb-2">Select Service</label>
//                   <select
//                     className="w-full bg-zinc-800 rounded-md border-zinc-700 text-white"
//                     value={formData.selectedCourse}
//                     onChange={(e) => setFormData({ ...formData, selectedCourse: e.target.value })}
//                     required
//                   >
//                     <option value="">Choose a service</option>
//                     {courses.map((course) => (
//                       <option key={course.id} value={course.id}>
//                         {course.name} - {course.price}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium mb-2">Number of Guests</label>
//                   <input
//                     type="number" min="1"
//                     className="w-full bg-zinc-800 rounded-md border-zinc-700 text-white"
//                     value={formData.guests}
//                     onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
//                     required
//                   />
//                 </div>
//               </div>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-medium mb-2">Select Date</label>
//                   <div className="bg-zinc-800 rounded-lg p-4">
//                     <DayPicker
//                       mode="single" selected={selectedDate} onSelect={handleDateSelect}
//                       disabled={[{ before: today }, { after: thirtyDaysFromNow }]}
//                       className="!bg-zinc-800 text-white"
//                       classNames={{
//                         day_selected: "bg-green-500 text-white shadow-md shadow-green-500/30 rounded-full",
//                         day_today: "text-green-500 font-bold",
//                         day: "text-white hover:bg-zinc-700",
//                         day_disabled: "text-zinc-600",
//                         head_cell: "text-green-500",
//                         caption: "text-white",
//                         nav_button_previous: "text-green-500 hover:text-green-400",
//                         nav_button_next: "text-green-500 hover:text-green-400",
//                       }}
//                     />
//                   </div>
//                 </div>
//                 {showTimeSlots && (
//                   <div className="space-y-6">
//                     <div>
//                       <label className="block text-sm font-medium mb-2">Select Start Time</label>
//                       <div className="bg-zinc-800 rounded-lg p-4 h-[150px] overflow-y-auto">
//                         <div className="grid grid-cols-2 gap-2">
//                           {timeSlots.map((time, idx) => (
//                             <button
//                               key={idx} type="button" disabled={!isTimeSlotAvailable(time)}
//                               onClick={() => setSelectedStartTime(time)}
//                               className={`p-2 rounded-md transition-colors duration-200 ${
//                                 selectedStartTime && format(selectedStartTime, 'HH:mm') === format(time, 'HH:mm')
//                                   ? 'bg-green-500 text-white'
//                                   : isTimeSlotAvailable(time)
//                                   ? 'bg-zinc-700 hover:bg-zinc-600 text-white'
//                                   : 'bg-zinc-900 text-zinc-600 cursor-not-allowed'
//                               }`}
//                             >{format(time, 'h:mm a')}</button>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                     {selectedStartTime && (
//                       <div>
//                         <label className="block text-sm font-medium mb-2">Select End Time</label>
//                         <div className="bg-zinc-800 rounded-lg p-4 h-[150px] overflow-y-auto">
//                           <div className="grid grid-cols-2 gap-2">
//                             {availableEndTimes.map((time, idx) => (
//                               <button key={idx} type="button" onClick={() => setSelectedEndTime(time)}
//                                 className={`p-2 rounded-md transition-colors duration-200 ${
//                                   selectedEndTime && format(selectedEndTime, 'HH:mm') === format(time, 'HH:mm')
//                                     ? 'bg-green-500 text-white'
//                                     : 'bg-zinc-700 hover:bg-zinc-600 text-white'
//                                 }`}
//                               >{format(time, 'h:mm a')}</button>
//                             ))}
//                           </div>
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 )}
//               </div>
//               {['name', 'email', 'mobile'].map((field) => (
//                 <div key={field} className="relative">
//                   <input
//                     type={field === 'email' ? 'email' : field === 'mobile' ? 'tel' : 'text'}
//                     pattern={field === 'mobile' ? '[0-9]{10}' : undefined}
//                     className="w-full pl-10 bg-zinc-800 rounded-md border-zinc-700 text-white"
//                     placeholder={field === 'name' ? 'Full Name' : field === 'email' ? 'Email' : 'Mobile Number'}
//                     value={formData[field]}
//                     onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
//                     required
//                   />
//                   {(field === 'name' && <User className="absolute top-3 left-3 text-green-400 h-5 w-5" />) ||
//                    (field === 'email' && <Mail className="absolute top-3 left-3 text-green-400 h-5 w-5" />) ||
//                    (field === 'mobile' && <Phone className="absolute top-3 left-3 text-green-400 h-5 w-5" />)}
//                 </div>
//               ))}
//               <button
//                 type="submit" disabled={!selectedDate || !selectedStartTime || !selectedEndTime}
//                 className="w-full flex justify-center items-center gap-2 py-4 px-4 bg-green-600 hover:bg-green-700 hover:scale-105 transform transition-all duration-300 rounded-md text-white font-semibold disabled:bg-zinc-700 disabled:cursor-not-allowed"
//               >
//                 <Send size={20} /> Book via WhatsApp
//               </button>
//             </form>
//             <div className="mt-8 text-center">
//               <Link href="/services" className="text-green-500 hover:text-green-400 font-medium">
//                 View Complete Services Catalogue →
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Link href="https://wa.me/918147180736" className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 rounded-full p-3 shadow-lg">
//         <Send className="text-white w-6 h-6" />
//       </Link>
//     </motion.div>
//   );
// }

// export default Booking;


//third 


"use client";

import React, { useState, useEffect } from 'react';
import { Calendar as CalendarIcon, Send, Music2, Clock, MapPin, Phone, User, Mail } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { DayPicker } from 'react-day-picker';
import { format, addDays, setHours, setMinutes, isAfter } from 'date-fns';
import { motion } from 'framer-motion';

const courses = [
  { id: '1', name: 'Vocals Mixing Mastering Package', price: '₹2500' },
  { id: '2', name: 'BEGINNER YouTube Cover song shoot', price: '₹4999' },
  { id: '3', name: 'Audio podcast Per hour', price: '₹1499' },
  { id: '4', name: 'Recording Session Per Hour - Shure SM 58/ Scarlett', price: '₹750' },
  { id: '5', name: 'Professional Cover songs Package', price: '₹12000' },
  { id: '6', name: 'Premium Room with Rode NT2 - Spacious', price: '₹1200' },
  { id: '7', name: 'Podcast Audio & Video Production Package - 4 Hours', price: '₹22000' },
  { id: '8', name: 'Clamat Acoustics Premium', price: '₹1000' },
  { id: '9', name: 'Intimate Sessions/karaoke sessions', price: '₹7500' },
  { id: '10', name: 'Jam sessions @ 550/850/1000Rs', price: '₹550' },
  { id: '11', name: 'Guitar/Keyboard Drum Group Classes', price: '₹10000' },
  { id: '12', name: '10 hours Package for Jam Session', price: '₹5000' },
  { id: '13', name: 'Clamat Audio Release Service', price: '₹2499' },
  { id: '14', name: 'Audio podcast Per hour', price: '₹1499' },
  { id: '15', name: 'Karaoke Party Venue', price: '₹299' },
  { id: '16', name: 'Music Classes - 3 Months', price: '₹10000' }
];

const generateTimeSlots = () => {
  const slots: Date[] = [];
  for (let hour = 7; hour <= 24; hour++) {
    const maxMinute = hour === 24 ? 0 : 30;
    for (let minute = 0; minute <= maxMinute; minute += 30) {
      const time = setMinutes(setHours(new Date(), hour % 24), minute);
      slots.push(time);
    }
  }
  return slots;
};

function Booking() {
  const [formData, setFormData] = useState({ name: '', email: '', mobile: '', selectedCourse: '', guests: '1' });
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedStartTime, setSelectedStartTime] = useState<Date | undefined>();
  const [selectedEndTime, setSelectedEndTime] = useState<Date | undefined>();
  const [showTimeSlots, setShowTimeSlots] = useState(false);
  const [availableEndTimes, setAvailableEndTimes] = useState<Date[]>([]);

  const timeSlots = generateTimeSlots();
  const today = new Date();
  const thirtyDaysFromNow = addDays(today, 30);

  useEffect(() => {
    if (selectedStartTime) {
      const start = selectedStartTime.getHours() * 60 + selectedStartTime.getMinutes();
      const endTimeSlots = timeSlots.filter((time) => {
        const end = time.getHours() * 60 + time.getMinutes();
        return end - start >= 60 || (time.getHours() === 0 && 1440 - start >= 60);
      });
      setAvailableEndTimes(endTimeSlots);
      setSelectedEndTime(undefined);
    }
  }, [selectedStartTime]);

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    setShowTimeSlots(true);
    setSelectedStartTime(undefined);
    setSelectedEndTime(undefined);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedStartTime || !selectedEndTime) return;

    const message = encodeURIComponent(
      `Hello! I would like to book:\n\n` +
      `Service: ${courses.find(c => c.id === formData.selectedCourse)?.name}\n` +
      `Name: ${formData.name}\nEmail: ${formData.email}\nMobile: ${formData.mobile}\n` +
      `Date: ${format(selectedDate, 'MMMM d, yyyy')}\n` +
      `Start Time: ${format(selectedStartTime, 'h:mm a')}\n` +
      `End Time: ${format(selectedEndTime, 'h:mm a')}\nGuests: ${formData.guests}`
    );

    window.open(`https://wa.me/918147180736?text=${message}`, '_blank');
  };

  const isTimeSlotAvailable = (time: Date) => {
    if (!selectedDate) return false;
    const slot = new Date(selectedDate);
    slot.setHours(time.getHours(), time.getMinutes(), 0, 0);
    return format(selectedDate, 'yyyy-MM-dd') !== format(today, 'yyyy-MM-dd') || isAfter(slot, new Date());
  };

  return (
    <motion.div className="min-h-screen bg-black text-white" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      {/* Hero */}
      <div className="relative h-[40vh] w-full">
        <Image
          src="https://i.pinimg.com/1200x/52/ce/f7/52cef7889d01b615a48c3b089b93758d.jpg"
          alt="Studio Background"
          fill
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Book Your Session
            </h1>
            <p className="text-xl">Experience the magic of music in our professional studio</p>
          </div>
        </div>
      </div>

      {/* Booking Form */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[{ icon: Clock, title: 'Operating Hours', desc: 'Mon - Sun: 7:00 AM - 12:00 AM' }, { icon: MapPin, title: 'Location', desc: 'Bangalore, India' }, { icon: Phone, title: 'Contact', desc: '+91 81471 80736' }].map((item, idx) => (
            <div key={idx} className="bg-zinc-900 p-6 rounded-lg text-center shadow-lg">
              <item.icon className="mx-auto mb-4 h-8 w-8 text-green-500" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Booking Card */}
        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl overflow-hidden">
          <div className="p-8">
            <div className="flex items-center justify-center mb-8">
              <Music2 className="h-8 w-8 text-green-500 mr-3" />
              <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Reserve Your Spot</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Service + Guests */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Select Service</label>
                  <select
                    className="w-full bg-zinc-800 rounded-md border-zinc-700 text-white"
                    value={formData.selectedCourse}
                    onChange={(e) => setFormData({ ...formData, selectedCourse: e.target.value })}
                    required
                  >
                    <option value="">Choose a service</option>
                    {courses.map(course => (
                      <option key={course.id} value={course.id}>
                        {course.name} - {course.price}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Number of Guests</label>
                  <input
                    type="number"
                    min="1"
                    className="w-full bg-zinc-800 rounded-md border-zinc-700 text-white"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    required
                  />
                </div>
              </div>

              {/* Date + Time Slot Selectors */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Select Date</label>
                  <div className="bg-zinc-800 rounded-lg p-4">
                    <DayPicker
                      mode="single"
                      selected={selectedDate}
                      onSelect={handleDateSelect}
                      disabled={[{ before: today }, { after: thirtyDaysFromNow }]}
                      className="!bg-zinc-800 text-white"
                      classNames={{
                        day_selected: "bg-green-500 text-white shadow-md shadow-green-500/30 rounded-full",
                        day_today: "text-green-500 font-bold",
                        day: "text-white hover:bg-zinc-700",
                        day_disabled: "text-zinc-600",
                        head_cell: "text-green-500",
                        caption: "text-white",
                        nav_button_previous: "text-green-500 hover:text-green-400",
                        nav_button_next: "text-green-500 hover:text-green-400",
                      }}
                    />
                  </div>
                </div>

                {showTimeSlots && (
                  <div className="space-y-6">
                    {/* Start Time */}
                    <div>
                      <label className="block text-sm font-medium mb-2">Select Start Time</label>
                      <div className="bg-zinc-800 rounded-lg p-4 h-[150px] overflow-y-auto">
                        <div className="grid grid-cols-2 gap-2">
                          {timeSlots.map((time, idx) => (
                            <button
                              key={idx}
                              type="button"
                              disabled={!isTimeSlotAvailable(time)}
                              onClick={() => setSelectedStartTime(time)}
                              className={`p-2 rounded-md transition-colors duration-200 ${
                                selectedStartTime && format(selectedStartTime, 'HH:mm') === format(time, 'HH:mm')
                                  ? 'bg-green-500 text-white'
                                  : isTimeSlotAvailable(time)
                                  ? 'bg-zinc-700 hover:bg-zinc-600 text-white'
                                  : 'bg-zinc-900 text-zinc-600 cursor-not-allowed'
                              }`}
                            >
                              {format(time, 'h:mm a')}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* End Time */}
                    {selectedStartTime && (
                      <div>
                        <label className="block text-sm font-medium mb-2">Select End Time</label>
                        <div className="bg-zinc-800 rounded-lg p-4 h-[150px] overflow-y-auto">
                          <div className="grid grid-cols-2 gap-2">
                            {availableEndTimes.map((time, idx) => (
                              <button
                                key={idx}
                                type="button"
                                onClick={() => setSelectedEndTime(time)}
                                className={`p-2 rounded-md transition-colors duration-200 ${
                                  selectedEndTime && format(selectedEndTime, 'HH:mm') === format(time, 'HH:mm')
                                    ? 'bg-green-500 text-white'
                                    : 'bg-zinc-700 hover:bg-zinc-600 text-white'
                                }`}
                              >
                                {format(time, 'h:mm a')}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Name, Email, Mobile */}
              {['name', 'email', 'mobile'].map((field) => (
                <div key={field} className="relative">
                  <input
                    type={field === 'email' ? 'email' : field === 'mobile' ? 'tel' : 'text'}
                    pattern={field === 'mobile' ? '[0-9]{10}' : undefined}
                    className="w-full pl-10 bg-zinc-800 rounded-md border-zinc-700 text-white"
                    placeholder={field === 'name' ? 'Full Name' : field === 'email' ? 'Email' : 'Mobile Number'}
                    value={formData[field as keyof typeof formData]}
                    onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                    required
                  />
                  {(field === 'name' && <User className="absolute top-3 left-3 text-green-400 h-5 w-5" />) ||
                    (field === 'email' && <Mail className="absolute top-3 left-3 text-green-400 h-5 w-5" />) ||
                    (field === 'mobile' && <Phone className="absolute top-3 left-3 text-green-400 h-5 w-5" />)}
                </div>
              ))}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!selectedDate || !selectedStartTime || !selectedEndTime}
                className="w-full flex justify-center items-center gap-2 py-4 px-4 bg-green-600 hover:bg-green-700 hover:scale-105 transform transition-all duration-300 rounded-md text-white font-semibold disabled:bg-zinc-700 disabled:cursor-not-allowed"
              >
                <Send size={20} /> Book via WhatsApp
              </button>
            </form>

            <div className="mt-8 text-center">
              <Link href="/services" className="text-green-500 hover:text-green-400 font-medium">
                View Complete Services Catalogue →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <Link href="https://wa.me/918147180736" className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 rounded-full p-3 shadow-lg">
        <Send className="text-white w-6 h-6" />
      </Link>
    </motion.div>
  );
}

export default Booking;
