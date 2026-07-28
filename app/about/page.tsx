import Image from 'next/image';
import { PageHero, PageShell, Placeholder } from '../PageShell';

export default function AboutPage() {
  return <PageShell><PageHero eyebrow="ABOUT BAJRANG HOSPITAL" title={<>A hospital built around <em>care and trust.</em></>} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. This page introduces the hospital, its people, values and facilities." />
    <section className="section"><div className="container inner-two-col"><div><div className="eyebrow">OUR STORY</div><h2>Care that puts people <em>first.</em></h2><Placeholder/><Placeholder/></div><div className="image-placeholder"><Image src="/assets/bajrang2.webp" alt="Hospital facility placeholder" fill sizes="(max-width: 800px) 100vw, 50vw"/><span>IMAGE PLACEHOLDER — hospital interior or reception</span></div></div></section>
    <section className="section soft"><div className="container"><div className="section-head"><div><div className="eyebrow">OUR VALUES</div><h2>Human care at <em>every step.</em></h2></div><Placeholder/></div><div className="value-grid">{['Compassion','Clarity','Safety','Accessibility'].map((x)=><article className="info-card" key={x}><h3>{x}</h3><Placeholder/></article>)}</div></div></section>
    <section className="section"><div className="container"><div className="eyebrow">OUR FACILITIES</div><h2>Everything you need, <em>under one roof.</em></h2><Placeholder/><div className="value-grid facility-grid">{['OPD & Consultation','Operation Theatre','ICU & NICU','Pathology, X-ray & ECG','C-arm & Cast Services','24-hour Ambulance'].map(x=><article className="info-card" key={x}><div className="placeholder-image">IMAGE PLACEHOLDER</div><h3>{x}</h3><Placeholder/></article>)}</div></div></section>
  </PageShell>;
}
