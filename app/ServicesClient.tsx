'use client';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { specialties, type Service } from './specialties';
import ServiceModal from './ServiceModal';
import { IllustrationKids, IllustrationSurgery, IllustrationMother, IllustrationHeart, IllustrationLab, IllustrationAmbulance } from './illustrations';

function IllustrationFor({ kind, className }: { kind: Service['illustration']; className?: string }) {
  switch (kind) {
    case 'kids': return <IllustrationKids className={className} />;
    case 'surgery': return <IllustrationSurgery className={className} />;
    case 'mother': return <IllustrationMother className={className} />;
    case 'heart': return <IllustrationHeart className={className} />;
    case 'lab': return <IllustrationLab className={className} />;
    case 'ambulance': return <IllustrationAmbulance className={className} />;
  }
}

export default function ServicesClient() {
  const [active, setActive] = useState<Service | null>(null);
  return (
    <>
      <div className="service-grid">
        {specialties.map((s) => (
          <article className="service-card" key={s.id}>
            <div className="service-illustration"><IllustrationFor kind={s.illustration} /></div>
            <h3>{s.title}</h3>
            <p>{s.short}</p>
            <button type="button" className="service-link" aria-label={`Learn more about ${s.title}`} onClick={() => setActive(s)}>
              Know more <ArrowRight size={15} />
            </button>
          </article>
        ))}
      </div>
      <ServiceModal service={active} onClose={() => setActive(null)} />
    </>
  );
}