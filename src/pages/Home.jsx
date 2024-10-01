import React from "react";
import LoginSignupSection from "../components/auth/LoginSignupSection";
import Footer from "../components/home/Footer";
import Features from "../components/home/Features";
import Testimonial from "../components/home/Testimonial";
import FrontSection from "../components/home/FrontSection";
import Navbar from "../components/home/Navbar";

export default function HomePage() {
  return (
    <div className="font-sans bg-gray-100 text-gray-900 scroll-smooth">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <FrontSection />

      {/* Login / Sign Up Section */}
      <LoginSignupSection />

      {/* Features Overview Section */}
      <Features />

      {/* Testimonials Section */}
      <Testimonial />

      {/* Footer */}
      <Footer />
    </div>
  );
}