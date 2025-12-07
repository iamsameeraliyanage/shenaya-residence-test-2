"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import {
  HeroSection,
  WelcomeSection,
  AboutUsSection,
  RoomsSection,
  DiningSection,
  DestinationsSection,
  TestimonialsSection
} from './sections';

export default function Home() {
  return (
    <div className="min-h-screen relative bg-[#F6F6EF] overflow-hidden">
      {/* Decorative Background Vector 1 */}
      <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none z-0">
        <Image
          src="/images/home/Vector1.jpg"
          alt="Decorative background"
          fill
          className="object-contain object-right-top opacity-40 mix-blend-multiply"
          priority
          style={{ filter: 'brightness(1.1) contrast(0.9)' }}
        />
      </div>

      {/* Decorative Background Vector 2 */}
      <div className="absolute top-2/12 left-0 w-1/2 h-3/4 pointer-events-none z-0">
        <Image
          src="/images/home/Vector2.jpg"
          alt="Decorative background"
          fill
          className="object-contain object-left-top opacity-40 mix-blend-multiply"
          priority
          style={{ filter: 'brightness(1.1) contrast(0.9)' }}
        />
      </div>

      {/* Decorative Background Vector 3 */}
      <div className="absolute top-2/8 right-0 w-1/2 h-full pointer-events-none z-0">
        <Image
          src="/images/home/Vector3.jpg"
          alt="Decorative background"
          fill
          className="object-contain object-right-top opacity-40 mix-blend-multiply"
          priority
          style={{ filter: 'brightness(1.1) contrast(0.9)' }}
        />
      </div>

      {/* Decorative Background Vector 4 */}
      <div className="absolute top-4/12 left-0 w-1/2 h-3/4 pointer-events-none z-0">
        <Image
          src="/images/home/Vector4.jpg"
          alt="Decorative background"
          fill
          className="object-contain object-left-top opacity-40 mix-blend-multiply"
          priority
          style={{ filter: 'brightness(1.1) contrast(0.9)' }}
        />
      </div>

      {/* Decorative Background Vector 5 */}
      <div className="absolute top-5/8 right-0 w-1/2 h-full pointer-events-none z-0">
        <Image
          src="/images/home/Vector5.jpg"
          alt="Decorative background"
          fill
          className="object-contain object-right-top opacity-40 mix-blend-multiply"
          priority
          style={{ filter: 'brightness(1.1) contrast(0.9)' }}
        />
      </div>

      {/* Header Component */}
      <Header />

      {/* Main Content Container */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-4 sm:space-y-8 md:space-y-12 relative z-10">
        {/* Animate sections on scroll using Framer Motion */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <HeroSection />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <WelcomeSection />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <AboutUsSection />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <RoomsSection />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <DiningSection />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <DestinationsSection />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <TestimonialsSection />
        </motion.div>
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}
