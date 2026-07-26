'use client';
import { useEffect } from 'react';
import { X } from 'lucide-react';
import type { Service } from './specialties';

export default function ServiceModal({ service, onClose }: { service: Service | null; onClose: () => void }) {
  useEffect(() => {
    if (!service) return;
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', handler); document.body.style.overflow = original; };
  }, [service, onClose]);

  if (!service) return null;
  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={onClose}>
      <div className="modal-card" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close"><X size={18} /></button>
        <div className="modal-eyebrow">SPECIALITY</div>
        <h3 id="modal-title">{service.title}</h3>
        <p className="modal-short">{service.short}</p>
        <p className="modal-detail">{service.detail}</p>
        <a className="button primary full" href="tel:7452020359">Call to enquire</a>
      </div>
    </div>
  );
}