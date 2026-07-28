import { HeartPulse, MessageCircle, Phone } from 'lucide-react';

const whatsapp = 'https://wa.me/917452020359?text=Hello%20Bajrang%20Hospital%2C%20I%20would%20like%20to%20enquire.';

export function PageShell({ children }: { children: React.ReactNode }) {
  return <>
    <header className="header"><div className="container nav">
      <a className="brand" href="/"><span className="logo"><span className="logo-badge"><span>✚</span></span><span className="logo-name">Bajrang <b>Hospital</b></span></span></a>
      <nav><a href="/">Home</a><a href="/about">About</a><a href="/services">Services</a><a href="/contact">Contact</a></nav>
      <a className="nav-cta" href={whatsapp}><MessageCircle size={18}/> WhatsApp us</a>
      <a className="nav-emergency" href="tel:8126470874"><Phone size={16}/> Emergency</a>
    </div></header>
    <div className="inner-banner"><HeartPulse size={16}/> Compassionate care for every family in Agra</div>
    <main>{children}</main>
    <footer><div className="container footer-inner"><a className="brand" href="/"><span className="logo"><span className="logo-badge"><span>✚</span></span><span className="logo-name">Bajrang <b>Hospital</b></span></span></a><span>Hopeful care for every family.</span><span>© {new Date().getFullYear()} Bajrang Hospital</span></div></footer>
    <a className="whatsapp-float" href={whatsapp} aria-label="Chat on WhatsApp"><MessageCircle size={25}/></a>
  </>;
}

export function Placeholder({ children = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dignissim, ligula at consequat tincidunt, sapien urna faucibus mauris, vitae placerat arcu lectus non erat.' }: { children?: React.ReactNode }) {
  return <p className="placeholder-copy">{children}</p>;
}

export function PageHero({ eyebrow, title, text }: { eyebrow: string; title: React.ReactNode; text: string }) {
  return <section className="page-hero"><div className="container"><div className="eyebrow">{eyebrow}</div><h1>{title}</h1><p>{text}</p></div></section>;
}
