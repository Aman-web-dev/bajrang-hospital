import Image from 'next/image';
import { ArrowRight, Clock3, HeartPulse, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import ServicesClient from './ServicesClient';
import { IllustrationKids, IllustrationSurgery, IllustrationMother, IllustrationHeart, IllustrationLab, IllustrationAmbulance } from './illustrations';

const doctors = ['Dr. A.K. Mishra', 'Dr. Vivek Mishra', 'Dr. Kartikeya Sharma', 'Dr. Snehya Tyagi', 'Dr. Amit Kumar', 'Dr. Vinod Chaudhary', 'Dr. Sapna Singh'];
const numbers = ['7452020359'];
const whatsapp = 'https://wa.me/917452020359?text=Hello%20Bajrang%20Hospital%2C%20I%20would%20like%20to%20enquire%20about%20an%20appointment.';

const bannerItems = [
  { icon: <Phone size={16} />, label: '24×7 Helpline', value: '+91 74520 20359' },
  { icon: <HeartPulse size={16} />, label: 'ICU Beds Available', value: '4 / 6' },
  { icon: <Clock3 size={16} />, label: 'NICU Beds Available', value: '2 / 3' },
  { icon: <Clock3 size={16} />, label: 'General Beds Available', value: '3 / 7' },
  { icon: <Clock3 size={16} />, label: 'OPD Hours', value: '9 AM – 9 PM' },
  { icon: <HeartPulse size={16} />, label: 'Specialities', value: '9 under one roof' },
  { icon: <HeartPulse size={16} />, label: 'Diagnostics', value: 'X-ray • ECG • Pathology' },
  { icon: <MessageCircle size={16} />, label: 'Ambulance', value: 'Available 24×7' },
];

const careCards = [
  { illo: <IllustrationKids />, title: 'Children & newborns', text: 'A calm, attentive environment for paediatric and neonatal care.' },
  { illo: <IllustrationSurgery />, title: 'Operation theatre', text: 'Modern OT with C-arm image intensifier for safe surgery.' },
  { illo: <IllustrationMother />, title: 'Maternity', text: 'Pregnancy, delivery and post-natal care by a dedicated team.' },
  { illo: <IllustrationHeart />, title: 'Cardiac & emergency', text: 'ICU monitoring, oxygen and a 24×7 ambulance on standby.' },
  { illo: <IllustrationLab />, title: 'Diagnostics', text: 'Pathology, X-ray and ECG reported the same day.' },
];

function Logo() { return <span className="logo"><span className="logo-badge" aria-hidden="true"><span>✚</span></span><span className="logo-name">Bajrang <b>Hospital</b></span></span>; }

export default function Home() {
  return (
    <>
      <header className="header">
        <div className="container nav">
          <a className="brand" href="#top" aria-label="Bajrang Hospital home"><Logo /></a>
          <nav><a href="#services">Services</a><a href="#doctors">Doctors</a><a href="#contact">Contact</a></nav>
          <a className="nav-cta" href={whatsapp}><MessageCircle size={18} /> WhatsApp us</a>
          <a className="nav-emergency" href="tel:8126470874" aria-label="Emergency call"><Phone size={16} /> Emergency</a>
          <button className="menu" aria-label="Open navigation">☰</button>
        </div>
      </header>
      <div className="banner" role="region" aria-label="Hospital information ticker">
        <div className="banner-track">
          {[...bannerItems, ...bannerItems].map((item, i) => (
            <span className="banner-item" key={`${item.label}-${i}`}>
              <span className="banner-icon">{item.icon}</span>
              <span className="banner-label">{item.label}</span>
              <span className="banner-value">{item.value}</span>
              <span className="banner-dot" aria-hidden="true">•</span>
            </span>
          ))}
        </div>
      </div>
      <a className="emergency-cta" href="tel:8126470874" aria-label="Emergency call now">
        <Phone size={18} /><span>Emergency Call</span>
      </a>
      <main id="top">
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <div className="eyebrow"><span>✦</span> Compassionate care. Every day.</div>
              <h1>Healthcare with <em>hope</em> at its heart.</h1>
              <p className="hero-copy">Trusted, comprehensive healthcare for you and your family — delivered with skill, warmth, and dignity in Agra. A 15–16 bed hospital where every patient gets personal attention.</p>
              <div className="actions">
                <a className="button primary" href="#contact">Book an appointment <ArrowRight size={18} /></a>
                <a className="button secondary" href="tel:7452020359"><Phone size={17} /> Call us now</a>
              </div>
              <div className="trust">
                <div className="avatars"><span>AK</span><span>VM</span><span>KS</span><span>+</span></div>
                <span>Care from a team you can trust</span>
              </div>
            </div>
            <div className="hero-art">
              <div className="sun"></div>
              <div className="arch">
                <Image src="/assets/bajrang1.webp" alt="Bajrang Hospital building" fill priority sizes="(max-width: 800px) 70vw, 300px" className="hero-image" />
                <div className="arch-overlay"></div>
                <div className="arch-inner">
                  <div className="cross">✚</div>
                  <span>BAJRANG<br /><b>HOSPITAL</b></span>
                  <small>CARE • COMPASSION • HOPE</small>
                </div>
              </div>
              <div className="hero-note note-one"><HeartPulse size={19} /><span><b>Complete care</b><small>For every family</small></span></div>
              <div className="hero-note note-two"><Clock3 size={19} /><span><b>24/7 support</b><small>Here when you need us</small></span></div>
            </div>
          </div>
        </section>
        <section className="promise">
          <div className="container promise-inner">
            <span className="promise-icon">✦</span>
            <div><b>Built on a simple promise</b><p>Your health comes first — always.</p></div>
            <div className="promise-line"></div>
            <div className="promise-stat"><b>15–16</b><span>Total beds</span></div>
            <div className="promise-stat"><b>24/7</b><span>Emergency support</span></div>
            <div className="promise-stat"><b>9</b><span>Specialities under one roof</span></div>
          </div>
        </section>
        <section className="section care-strip">
          <div className="container">
            <div className="care-grid">
              {careCards.map((c) => (
                <div className="care-card" key={c.title}>
                  <div className="care-illo">{c.illo}</div>
                  <div>
                    <b>{c.title}</b>
                    <span>{c.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="section gallery">
          <div className="container">
            <div className="section-head">
              <div><div className="eyebrow">OUR HOSPITAL</div><h2>A place for <em>better days.</em></h2></div>
              <p>Modern facilities, thoughtful spaces and a caring team — all working together for your health.</p>
            </div>
            <div className="gallery-grid">
              <div className="gallery-main"><Image src="/assets/bajrang2.webp" alt="Bajrang Hospital facility" fill sizes="(max-width: 700px) 100vw, 55vw" /></div>
              <div><Image src="/assets/bajrang3.webp" alt="Bajrang Hospital care environment" width={500} height={300} /></div>
              <div><Image src="/assets/bajrang4.webp" alt="Bajrang Hospital facilities" width={500} height={300} /></div>
            </div>
          </div>
        </section>
        <section className="section" id="services">
          <div className="container">
            <div className="section-head">
              <div><div className="eyebrow">WHAT WE DO</div><h2>Care that covers <em>you</em>.</h2></div>
              <p>From everyday health needs to specialised treatment, our experienced team is here to support your journey to better health. Tap “Know more” to read about each speciality.</p>
            </div>
            <ServicesClient />
            <div className="emergency">
              <div className="emergency-symbol">✚</div>
              <div><b>Need urgent care?</b><p>Our emergency team and ambulance service are available around the clock.</p></div>
              <a className="button light" href="tel:8126470874"><Phone size={16} /> Call emergency</a>
            </div>
          </div>
        </section>
        <section className="section soft" id="doctors">
          <div className="container">
            <div className="eyebrow">OUR TEAM</div>
            <div className="section-head team-head">
              <h2>Experienced hands.<br /><em>Human care.</em></h2>
              <p>Meet the doctors who bring knowledge, experience and genuine care to every patient.</p>
            </div>
            <div className="doctor-grid">
              {doctors.map((doctor, i) => (
                <div className="doctor" key={doctor}>
                  <div className="doctor-avatar">{['AK', 'VM', 'KS', 'ST', 'AK', 'VC', 'SS'][i]}</div>
                  <div><b>{doctor}</b><span>Medical care specialist</span></div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="contact section" id="contact">
          <div className="container contact-grid">
            <div>
              <div className="eyebrow">FIND US</div>
              <h2>Let’s take the next step <em>together.</em></h2>
              <p className="contact-copy">Whether you have a question, need an appointment or require urgent help, we’re just a call away.</p>
              <div className="contact-list">
                <a href="https://share.google/tlBnB05PbzN8LmsIn"><MapPin /><span><b>Visit us</b><small>In front of Shriram Finance Company,<br />Nagla Makrol, Etora, Gwalior Road, Agra</small></span></a>
                <a href="mailto:Hospital@bajranghospital.com"><Mail /><span><b>Email us</b><small>Hospital@bajranghospital.com</small></span></a>
              </div>
            </div>
            <div className="contact-card">
              <div className="card-label">CALL US ANYTIME</div>
              <h3>We’re here to help.</h3>
              {numbers.map(n => <a className="phone" href={`tel:${n}`} key={n}><Phone size={17} />{n}</a>)}
              <a className="button primary full" href={whatsapp}><MessageCircle size={17} /> Chat on WhatsApp</a>
              <a className="map-link" href="https://share.google/tlBnB05PbzN8LmsIn">Get directions <ArrowRight size={15} /></a>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="container footer-inner">
          <a className="brand" href="#top"><Logo /></a>
          <span>Hopeful care for every family.</span>
          <span>© {new Date().getFullYear()} Bajrang Hospital</span>
        </div>
      </footer>
      <a className="whatsapp-float" href={whatsapp} aria-label="Chat on WhatsApp"><MessageCircle size={25} /></a>
    </>
  );
}