import React from 'react';
import { motion as m } from 'framer-motion';
import { Card } from '../components/Card';
import { ShieldCheck, Calendar, CheckCircle2 } from 'lucide-react';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  glowColor: string;
  id: string;
}

const certsData: Certification[] = [
  {
    title: 'ServiceNow Certified System Administrator (CSA)',
    issuer: 'ServiceNow',
    date: 'April 2026',
    glowColor: 'rgba(52, 211, 153, 0.12)',
    id: 'SN-CSA-202604',
  },
  {
    title: 'ServiceNow Certified Application Developer (CAD)',
    issuer: 'ServiceNow',
    date: 'May 2026',
    glowColor: 'rgba(96, 165, 250, 0.12)',
    id: 'SN-CAD-202605',
  },
  {
    title: 'AWS Certified AI Practitioner',
    issuer: 'Amazon Web Services (AWS)',
    date: 'June 2026',
    glowColor: 'rgba(251, 191, 36, 0.12)',
    id: 'AWS-AIP-202606',
  },
];

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 px-4 bg-gradient-to-b from-neutral-950/20 to-transparent relative">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center md:text-left space-y-4">
          <m.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold tracking-widest text-purple-400 uppercase font-mono block"
          >
            Credentials
          </m.span>
          <m.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display"
          >
            Continuous Learning
          </m.h2>
          <m.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-neutral-400 font-light max-w-xl text-sm sm:text-base"
          >
            Officially accredited certifications proving deep knowledge in cloud platform development, systems administration, and artificial intelligence.
          </m.p>
        </div>

        {/* Certs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certsData.map((cert, index) => (
            <m.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full flex flex-col justify-between" glowColor={cert.glowColor}>
                <div className="space-y-6">
                  {/* Badge & Issuer */}
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <div className="text-xs font-mono text-neutral-500 uppercase tracking-widest">Issuer</div>
                      <div className="font-semibold text-white text-sm sm:text-base font-display">
                        {cert.issuer}
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-purple-400 shadow-md">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug font-display">
                    {cert.title}
                  </h3>

                  {/* ID & Date */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-neutral-400">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                      {cert.date}
                    </span>
                    <span className="text-[10px] text-neutral-600 bg-neutral-950 px-2 py-0.5 rounded border border-white/5">
                      {cert.id}
                    </span>
                  </div>
                </div>

                {/* Status Indicator */}
                <div className="mt-6 flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 uppercase tracking-widest">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span>Verified Credential</span>
                </div>
              </Card>
            </m.div>
          ))}
        </div>

      </div>
    </section>
  );
};
