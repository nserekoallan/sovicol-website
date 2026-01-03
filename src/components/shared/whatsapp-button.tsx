'use client';

import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { SITE_CONFIG } from '@/lib/constants';

interface WhatsAppButtonProps {
  message?: string;
  className?: string;
}

/**
 * Floating WhatsApp button for quick contact
 */
export function WhatsAppButton({
  message = 'Hi Sovicol! I would like to inquire about your car paint products.',
  className,
}: WhatsAppButtonProps) {
  const whatsappUrl = `${SITE_CONFIG.links.whatsapp}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-lg hover:bg-[#128C7E] transition-colors ${className}`}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle className="h-6 w-6" />
      <span className="hidden sm:inline font-medium">Chat with us</span>
    </motion.a>
  );
}
