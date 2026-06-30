import React from 'react';
import { motion as m } from 'framer-motion';
import { Card } from '../components/Card';
import { ShieldCheck, Calendar, CheckCircle2, ArrowUpRight } from 'lucide-react';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  glowColor: string;
  hoverShadow: string;
  hoverBorder: string;
  id: string;
  credentialUrl?: string;
}

const certsData: Certification[] = [
  {
    title: 'ServiceNow Certified System Administrator (CSA)',
    issuer: 'ServiceNow',
    date: 'April 2026',
    glowColor: 'rgba(52, 211, 153, 0.12)',
    hoverShadow: 'hover:shadow-[0_8px_30px_rgba(52,211,153,0.06)]',
    hoverBorder: 'hover:border-emerald-500/20',
    id: 'SN-CSA-202604',
    credentialUrl: undefined,
  },
  {
    title: 'ServiceNow Certified Application Developer (CAD)',
    issuer: 'ServiceNow',
    date: 'May 2026',
    glowColor: 'rgba(96, 165, 250, 0.12)',
    hoverShadow: 'hover:shadow-[0_8px_30px_rgba(96,165,250,0.06)]',
    hoverBorder: 'hover:border-blue-500/20',
    id: 'SN-CAD-202605',
    credentialUrl: undefined,
  },
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services (AWS)',
    date: 'June 2026',
    glowColor: 'rgba(251, 191, 36, 0.12)',
    hoverShadow: 'hover:shadow-[0_8px_30px_rgba(251,191,36,0.06)]',
    hoverBorder: 'hover:border-amber-500/20',
    id: 'AWS-CCP-202606',
    credentialUrl: undefined,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 25,
    },
  },
} as const;

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
            Professional Credentials
          </m.h2>
          <m.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-neutral-400 font-light max-w-xl text-sm sm:text-base leading-relaxed"
          >
            Industry-recognized certifications that reflect my commitment to continuous learning across enterprise platforms, cloud technologies, and modern software development.
          </m.p>
        </div>

        {/* Certs Grid */}
        <m.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certsData.map((cert) => (
            <m.div
              key={cert.title}
              variants={itemVariants}
              className="h-full"
            >
              <Card 
                className={`p-6 h-full flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 hover:border-white/15 ${cert.hoverShadow}`} 
                glowColor={cert.glowColor}
              >
                <div className="space-y-6">
                  {/* Badge & Issuer */}
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block">Issuer</span>
                      <div className="font-semibold text-white text-sm sm:text-base font-display">
                        {cert.issuer}
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-purple-400 shadow-md">
                      <ShieldCheck className="w-5 h-5" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug font-display">
                    {cert.title}
                  </h3>

                  {/* ID & Date */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-neutral-400">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-neutral-500" aria-hidden="true" />
                      {cert.date}
                    </span>
                    <span className="text-[10px] text-neutral-600 bg-neutral-950 px-2 py-0.5 rounded border border-white/5">
                      {cert.id}
                    </span>
                  </div>

                  {/* Metadata Row: Issued By & Status */}
                  <div className="grid grid-cols-2 gap-4 text-xs font-mono border-t border-white/5 pt-4 text-neutral-400">
                    <div>
                      <span className="text-[10px] text-neutral-500 uppercase block">Issued By</span>
                      <span className="text-white font-medium">{cert.issuer === 'Amazon Web Services (AWS)' ? 'AWS' : cert.issuer}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-neutral-500 uppercase block">Status</span>
                      <span className="text-emerald-400 font-medium flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
                        Verified
                      </span>
                    </div>
                  </div>
                </div>

                {/* Conditional Actions */}
                {cert.credentialUrl ? (
                  <button
                    onClick={() => window.open(cert.credentialUrl, '_blank')}
                    className="mt-6 text-xs font-mono font-medium text-purple-400 hover:text-white transition-colors flex items-center gap-1 cursor-pointer bg-transparent border-0 p-0 text-left outline-none"
                    aria-label={`View validation certificate for ${cert.title}`}
                  >
                    View Credential
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                ) : (
                  <div className="mt-6 flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 uppercase tracking-widest">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
                    <span>Verified Credential</span>
                  </div>
                )}
              </Card>
            </m.div>
          ))}
        </m.div>

      </div>
    </section>
  );
};
