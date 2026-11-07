import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight, ArrowUpRight, Check, Stethoscope, Users, ClipboardList, Globe2, MessagesSquare,
  Send, FileUp, ClipboardCheck, Calculator, Plane, MapPin, HeartHandshake, FileText, Car, Hotel,
  Languages, CalendarCheck, PhoneCall, Mail, Clock, Instagram, Facebook, Linkedin, Youtube, Quote, X,
} from "lucide-react";
import { Header, WhatsAppFab, Reveal, Tilt, Logo } from "@/components/site/chrome";
import { BRAND, SPECIALTIES, waLink } from "@/lib/site-data";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import heroImg from "@/assets/hero-doctor.jpg";
import indiaImg from "@/assets/india-care.jpg";
import servicesImg from "@/assets/patient-services.jpg";
import consultImg from "@/assets/consult-room.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aarogya Global Care — Medical Treatment in India for International Patients" },
      { name: "description", content: "Personalised treatment coordination, international patient assistance and trusted medical expertise in India. Request a free initial consultation." },
      { property: "og:title", content: "Aarogya Global Care — Medical Treatment in India" },
      { property: "og:description", content: "Personalised care coordination for international patients travelling to India for treatment." },
    ],
  }),
  component: Index,
});

function Section({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) {
  return <section id={id} className={`scroll-mt-24 px-5 py-24 lg:px-8 lg:py-32 ${className}`}><div className="mx-auto max-w-7xl">{children}</div></section>;
}

function Index() {
  return (
    <div id="top" className="overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Trust />
        <Specialties />
        <WhyIndia />
        <Experts />
        <Journey />
        <Services />
        <Packages />
        <Stories />
        <Gallery />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section className="relative bg-hero px-5 pb-20 pt-32 lg:px-8 lg:pb-28 lg:pt-40">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-12">
        <div className="lg:col-span-7" style={{ animation: "fade-up 1s cubic-bezier(.2,.7,.2,1) both" }}>
          <p className="eyebrow">International Patient Care · India</p>
          <h1 className="mt-6 text-5xl font-light leading-[1.02] text-foreground sm:text-6xl lg:text-[5.4rem]">
            World-Class Healthcare. <em className="font-normal text-primary">A Journey</em> Towards Better Health.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Access trusted medical expertise in India with personalised treatment coordination, international patient assistance and care throughout your healthcare journey.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#treatments" className="group inline-flex items-center justify-center gap-2 rounded-full border border-foreground/20 px-7 py-4 font-semibold transition hover:border-primary hover:text-primary">
              Explore Treatments <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <Link to="/book" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 font-semibold text-primary-foreground shadow-soft transition hover:bg-ink">
              Book Free Initial Consultation
            </Link>
          </div>
        </div>
        <div className="relative lg:col-span-5">
          <div className="orb animate-float absolute -left-10 top-10 z-10 h-24 w-24 lg:-left-16" aria-hidden />
          <div className="orb-gold animate-float-slow absolute -right-4 -top-6 h-16 w-16" aria-hidden />
          <Tilt>
            <div className="relative overflow-hidden rounded-t-[12rem] rounded-b-2xl shadow-lift">
              <img src={heroImg} alt="Doctor standing in a modern hospital lobby in India" width={1024} height={1280} className="aspect-[4/5] w-full object-cover" />
            </div>
          </Tilt>
          <div className="animate-float-slow absolute -bottom-8 -left-4 z-10 flex items-center gap-3 rounded-2xl border bg-card/90 p-4 shadow-lift backdrop-blur sm:-left-12">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-accent text-accent-foreground"><HeartHandshake className="h-5 w-5" /></span>
            <div><p className="text-sm font-semibold">Dedicated care coordinator</p><p className="text-xs text-muted-foreground">From enquiry to recovery</p></div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-24 grid max-w-7xl grid-cols-2 gap-y-4 border-t pt-8 md:grid-cols-4">
        {["Personalised Patient Support", "International Patient Assistance", "Treatment Coordination", "Transparent Communication"].map((t) => (
          <p key={t} className="flex items-center gap-2 text-sm font-medium text-foreground/80"><Check className="h-4 w-4 text-gold" /> {t}</p>
        ))}
      </div>
    </section>
  );
}

/* ---------- TRUST ---------- */
function Trust() {
  const items = [
    { icon: ClipboardList, t: "Professional medical coordination", d: "One point of contact who organises appointments, reports and timelines." },
    { icon: Stethoscope, t: "Access to qualified professionals", d: "Your case is reviewed by appropriately qualified specialists." },
    { icon: Users, t: "Personalised treatment assistance", d: "Options explained clearly so you can make informed decisions." },
    { icon: Globe2, t: "International patient support", d: "Help with travel, stay, language and local logistics." },
    { icon: MessagesSquare, t: "Transparent communication", d: "Clear updates, written estimates and no pressure." },
  ];
  return (
    <Section id="about">
      <div className="grid gap-16 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow">About us</p>
          <h2 className="mt-5 text-4xl font-light leading-tight sm:text-5xl">Your health deserves the <em className="text-primary">right care.</em></h2>
          <p className="mt-6 max-w-md text-muted-foreground">We help patients from around the world understand their options in India and coordinate every step — calmly, honestly and with care.</p>
          <div className="mt-10 rounded-2xl border border-dashed p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Accreditations & partners</p>
            <p className="mt-2 text-sm text-muted-foreground">Space reserved for verified accreditation logos and hospital partnerships.</p>
          </div>
        </Reveal>
        <div className="lg:col-span-7">
          {items.map((it, i) => (
            <Reveal key={it.t} delay={i * 80}>
              <div className="group grid grid-cols-[auto_1fr] gap-6 border-b py-7 first:border-t sm:grid-cols-[3rem_auto_1fr]">
                <span className="hidden font-display text-sm text-gold sm:block">0{i + 1}</span>
                <span className="grid h-12 w-12 place-items-center rounded-full border bg-card transition group-hover:bg-primary group-hover:text-primary-foreground"><it.icon className="h-5 w-5" /></span>
                <div><h3 className="font-display text-2xl">{it.t}</h3><p className="mt-1 text-muted-foreground">{it.d}</p></div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------- SPECIALTIES ---------- */
function Specialties() {
  return (
    <Section id="treatments" className="bg-card">
      <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div><p className="eyebrow">Treatments</p><h2 className="mt-5 max-w-2xl text-4xl font-light sm:text-5xl">Explore our medical specialties</h2></div>
        <p className="max-w-sm text-muted-foreground">Twelve areas of care. Choose one to begin a confidential enquiry.</p>
      </Reveal>
      <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {SPECIALTIES.map((s, i) => (
          <div key={s.slug} id={`sp-${s.slug}`} className="group relative flex flex-col bg-card p-8 transition-colors duration-500 hover:bg-ink hover:text-ink-foreground">
            <div className="flex items-start justify-between">
              <span className="relative grid h-14 w-14 place-items-center">
                <span className={`${i % 3 === 1 ? "orb-gold" : "orb"} absolute inset-0 opacity-90 transition group-hover:scale-110`} />
                <s.icon className="relative h-6 w-6 text-primary-foreground" />
              </span>
              <span className="font-display text-sm text-muted-foreground group-hover:text-gold">{String(i + 1).padStart(2, "0")}</span>
            </div>
            <h3 className="mt-8 font-display text-2xl">{s.name}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground group-hover:text-ink-foreground/70">{s.desc}</p>
            <div className="mt-6 flex items-center justify-between text-sm font-semibold">
              <a href="#packages" className="inline-flex items-center gap-1 text-primary group-hover:text-gold">Explore treatment <ArrowUpRight className="h-4 w-4" /></a>
              <Link to="/book" search={{ specialty: s.slug }} className="underline-offset-4 hover:underline">Consult</Link>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- WHY INDIA ---------- */
function WhyIndia() {
  const pts = ["Experienced medical professionals", "Modern healthcare facilities", "Multiple treatment options", "International patient coordination", "Help with travel & accommodation", "Support through the whole journey"];
  return (
    <Section>
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <Reveal className="relative">
          <img src={indiaImg} alt="Comfortable private hospital suite overlooking an Indian city at sunset" loading="lazy" width={1280} height={960} className="aspect-[4/5] w-full rounded-3xl object-cover shadow-lift lg:aspect-[4/5]" />
          <div className="absolute -bottom-8 right-6 max-w-xs rounded-2xl bg-ink p-6 text-ink-foreground shadow-lift">
            <p className="font-display text-lg italic">"Care that feels personal, in a country that welcomes you."</p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <p className="eyebrow">Why choose India</p>
          <h2 className="mt-5 text-4xl font-light leading-tight sm:text-5xl">India: advanced healthcare meets <em className="text-primary">personalised care.</em></h2>
          <p className="mt-6 text-muted-foreground">India is home to large, modern hospitals and experienced specialists across many disciplines. We help you navigate them with clarity — so you can focus on getting better.</p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {pts.map((p) => <li key={p} className="flex gap-3 rounded-xl border bg-card p-4 text-sm font-medium shadow-soft"><Check className="h-5 w-5 shrink-0 text-primary" />{p}</li>)}
          </ul>
          <p className="mt-6 text-xs text-muted-foreground">Outcomes and costs vary by individual case and hospital. We do not guarantee results or savings.</p>
        </Reveal>
      </div>
    </Section>
  );
}

/* ---------- EXPERTS ---------- */
function Experts() {
  const docs = ["Cardiology", "Orthopaedics", "Oncology", "Neurology"];
  const hospitals = [{ img: consultImg, n: "[Partner Hospital Name]", l: "New Delhi" }, { img: indiaImg, n: "[Partner Hospital Name]", l: "Mumbai" }, { img: servicesImg, n: "[Partner Hospital Name]", l: "Chennai" }];
  return (
    <Section id="experts" className="bg-card">
      <Reveal><p className="eyebrow">Hospitals & doctors</p><h2 className="mt-5 text-4xl font-light sm:text-5xl">Meet the experts behind your care</h2>
        <p className="mt-4 inline-block rounded-full bg-gold-soft px-3 py-1 text-xs font-semibold">Placeholder profiles — to be replaced with verified doctor details</p></Reveal>
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {docs.map((d, i) => (
          <Reveal key={d} delay={i * 80}>
            <Tilt className="rounded-3xl border bg-background p-6 shadow-soft">
              <div className="grid aspect-square place-items-center rounded-2xl bg-muted"><Stethoscope className="h-10 w-10 text-muted-foreground" /><span className="sr-only">Doctor photo placeholder</span></div>
              <p className="mt-5 eyebrow">{d}</p>
              <h3 className="mt-2 font-display text-xl">Dr. [Name Surname]</h3>
              <dl className="mt-3 space-y-1 text-sm text-muted-foreground">
                <div>[Qualifications]</div><div>[XX] years experience</div><div>[Hospital affiliation]</div>
              </dl>
              <div className="mt-5 flex gap-2">
                <button className="flex-1 rounded-full border px-3 py-2 text-sm font-semibold hover:border-primary" disabled title="Available once profiles are added">View Profile</button>
                <Link to="/book" className="flex-1 rounded-full bg-primary px-3 py-2 text-center text-sm font-semibold text-primary-foreground hover:bg-ink">Book</Link>
              </div>
            </Tilt>
          </Reveal>
        ))}
      </div>
      <div className="mt-20 grid gap-6 md:grid-cols-3">
        {hospitals.map((h, i) => (
          <Reveal key={i} delay={i * 100} className={i === 1 ? "md:translate-y-10" : ""}>
            <figure className="group overflow-hidden rounded-3xl">
              <img src={h.img} alt="Partner hospital facility" loading="lazy" width={1280} height={960} className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105" />
              <figcaption className="flex items-center justify-between pt-4"><span className="font-display text-xl">{h.n}</span><span className="flex items-center gap-1 text-sm text-muted-foreground"><MapPin className="h-4 w-4" />{h.l}</span></figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ---------- JOURNEY ---------- */
function Journey() {
  const steps = [
    { i: Send, t: "Submit your medical enquiry" }, { i: FileUp, t: "Share medical reports" },
    { i: ClipboardCheck, t: "Receive an initial treatment assessment" }, { i: Calculator, t: "Discuss options and estimated costs" },
    { i: Plane, t: "Plan your medical travel" }, { i: MapPin, t: "Arrive in India and receive assistance" },
    { i: HeartHandshake, t: "Treatment and follow-up support" },
  ];
  return (
    <Section id="journey" className="bg-ink text-ink-foreground">
      <div className="grid gap-16 lg:grid-cols-12">
        <Reveal className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
          <p className="eyebrow text-gold">Patient journey</p>
          <h2 className="mt-5 text-4xl font-light leading-tight sm:text-5xl">From your first consultation to your recovery.</h2>
          <p className="mt-6 text-ink-foreground/70">Final treatment decisions are always made by qualified medical professionals after a clinical assessment.</p>
          <Link to="/book" className="mt-10 inline-flex rounded-full bg-gold px-7 py-4 font-semibold text-ink transition hover:bg-ink-foreground">Start your enquiry</Link>
        </Reveal>
        <ol className="relative lg:col-span-7">
          <span className="absolute left-6 top-2 bottom-2 w-px bg-ink-foreground/20" aria-hidden />
          {steps.map((s, i) => (
            <Reveal key={s.t} delay={i * 60}>
              <li className="relative flex items-center gap-6 py-6">
                <span className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full border border-ink-foreground/25 bg-ink"><s.i className="h-5 w-5 text-gold" /></span>
                <div><p className="text-xs uppercase tracking-widest text-ink-foreground/50">Step {i + 1}</p><p className="font-display text-2xl">{s.t}</p></div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}

/* ---------- SERVICES ---------- */
function Services() {
  const s = [
    { i: FileText, t: "Visa documentation guidance" }, { i: Plane, t: "Airport pickup coordination" },
    { i: Hotel, t: "Accommodation assistance" }, { i: Languages, t: "Language & interpreter support" },
    { i: CalendarCheck, t: "Hospital appointment coordination" }, { i: Car, t: "Local transportation assistance" },
    { i: ClipboardList, t: "Treatment documentation" }, { i: HeartHandshake, t: "Post-treatment follow-up" },
  ];
  return (
    <Section id="international">
      <div className="grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-6">
          <p className="eyebrow">International patients</p>
          <h2 className="mt-5 text-4xl font-light leading-tight sm:text-5xl">Support that travels with you.</h2>
          <img src={servicesImg} alt="Care coordinator welcoming an international patient at hospital reception" loading="lazy" width={1280} height={960} className="mt-10 aspect-[16/11] w-full rounded-3xl object-cover shadow-lift" />
        </Reveal>
        <div className="grid content-end gap-4 sm:grid-cols-2 lg:col-span-6">
          {s.map((x, i) => (
            <Reveal key={x.t} delay={i * 50}>
              <div className="flex h-full items-start gap-4 rounded-2xl border bg-card p-5 transition hover:-translate-y-1 hover:shadow-soft">
                <x.i className="mt-0.5 h-5 w-5 shrink-0 text-primary" /><p className="font-medium">{x.t}</p>
              </div>
            </Reveal>
          ))}
          <p className="text-xs text-muted-foreground sm:col-span-2">We provide guidance and coordination. Visa approval rests with the authorities, and travel arrangements depend on third-party availability.</p>
        </div>
      </div>
    </Section>
  );
}

/* ---------- PACKAGES ---------- */
function Packages() {
  const [cur, setCur] = useState<"USD" | "INR">("USD");
  const rows = [
    { t: "Knee Replacement", s: "Orthopaedics", inc: ["Pre-operative assessment", "Surgery & hospital stay", "Initial physiotherapy"] },
    { t: "Coronary Bypass (CABG)", s: "Cardiology", inc: ["Cardiac evaluation", "Surgery & ICU care", "Discharge planning"] },
    { t: "IVF Cycle", s: "Fertility & IVF", inc: ["Fertility consultation", "Stimulation & monitoring", "Embryo transfer"] },
    { t: "Dental Implants", s: "Dental Care", inc: ["Dental imaging", "Implant placement", "Crown fitting"] },
  ];
  return (
    <Section id="packages" className="bg-card">
      <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div><p className="eyebrow">Cost transparency</p><h2 className="mt-5 text-4xl font-light sm:text-5xl">Understand your treatment options.</h2></div>
        <div className="inline-flex self-start rounded-full border p-1" role="group" aria-label="Currency">
          {(["USD", "INR"] as const).map((c) => <button key={c} onClick={() => setCur(c)} aria-pressed={cur === c} className={`rounded-full px-5 py-2 text-sm font-semibold transition ${cur === c ? "bg-ink text-ink-foreground" : "text-muted-foreground"}`}>{c}</button>)}
        </div>
      </Reveal>
      <div className="mt-14 divide-y rounded-3xl border bg-background">
        {rows.map((r) => (
          <div key={r.t} className="grid items-center gap-6 p-7 md:grid-cols-12">
            <div className="md:col-span-4"><p className="eyebrow">{r.s}</p><h3 className="mt-2 font-display text-2xl">{r.t}</h3></div>
            <ul className="space-y-1 text-sm text-muted-foreground md:col-span-4">{r.inc.map((x) => <li key={x} className="flex gap-2"><Check className="h-4 w-4 text-primary" />{x}</li>)}</ul>
            <div className="md:col-span-2"><p className="text-xs text-muted-foreground">Estimated cost ({cur})</p><p className="font-display text-xl">Request an estimate</p></div>
            <Link to="/book" className="rounded-full border border-primary px-5 py-3 text-center text-sm font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground md:col-span-2">Request quote</Link>
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm text-muted-foreground">Estimates are preliminary. Final costs depend on medical evaluation and the treating hospital.</p>
    </Section>
  );
}

/* ---------- STORIES ---------- */
function Stories() {
  const s = [{ c: "Country", t: "Orthopaedics" }, { c: "Country", t: "Cardiology" }, { c: "Country", t: "Fertility & IVF" }, { c: "Country", t: "Dental Care" }];
  return (
    <Section id="stories">
      <Reveal><p className="eyebrow">Patient stories</p><h2 className="mt-5 text-4xl font-light sm:text-5xl">Stories of care and confidence</h2>
        <p className="mt-4 inline-block rounded-full bg-gold-soft px-3 py-1 text-xs font-semibold">Demo layout — genuine testimonials will be added with patient permission</p></Reveal>
      <div className="-mx-5 mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-6">
        {s.map((x, i) => (
          <figure key={i} className="w-[85%] shrink-0 snap-start rounded-3xl border bg-card p-8 shadow-soft sm:w-[440px]">
            <Quote className="h-8 w-8 text-gold" />
            <blockquote className="mt-6 font-display text-xl leading-snug text-muted-foreground">[Patient testimonial will appear here once provided and approved by the patient.]</blockquote>
            <figcaption className="mt-8 flex items-center gap-4 border-t pt-6">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-muted text-sm text-muted-foreground" aria-label="Patient photo placeholder">?</span>
              <div><p className="font-semibold">[Patient Name]</p><p className="text-sm text-muted-foreground">[{x.c}] · {x.t}</p></div>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}

/* ---------- GALLERY ---------- */
function Gallery() {
  const imgs = [
    { src: heroImg, a: "Hospital lobby and reception", h: "row-span-2" }, { src: consultImg, a: "Medical consultation room", h: "" },
    { src: indiaImg, a: "Patient suite and accommodation", h: "" }, { src: servicesImg, a: "International patient services desk", h: "md:col-span-2" },
  ];
  const [open, setOpen] = useState<number | null>(null);
  return (
    <Section className="bg-card">
      <Reveal><p className="eyebrow">Gallery</p><h2 className="mt-5 text-4xl font-light sm:text-5xl">Spaces designed for recovery.</h2></Reveal>
      <div className="mt-14 grid auto-rows-[220px] gap-4 md:grid-cols-3 md:auto-rows-[260px]">
        {imgs.map((im, i) => (
          <button key={i} onClick={() => setOpen(i)} className={`group overflow-hidden rounded-2xl ${im.h}`} aria-label={`Open image: ${im.a}`}>
            <img src={im.src} alt={im.a} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
          </button>
        ))}
      </div>
      {open !== null && (
        <div className="fixed inset-0 z-[60] grid place-items-center bg-ink/90 p-5" role="dialog" aria-modal="true" onClick={() => setOpen(null)}>
          <button className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-ink-foreground text-ink" aria-label="Close"><X className="h-5 w-5" /></button>
          <img src={imgs[open].src} alt={imgs[open].a} className="max-h-[85vh] max-w-full rounded-2xl" />
        </div>
      )}
    </Section>
  );
}

/* ---------- FAQ ---------- */
function Faq() {
  const q: [string, string][] = [
    ["Why should international patients consider India?", "India has large, modern hospitals and experienced specialists across many fields, and often shorter waiting times. Suitability depends on your condition, and we'll help you weigh options honestly."],
    ["How do I receive an initial treatment assessment?", "Submit an enquiry and share your medical reports. Our team forwards them to appropriate specialists, who provide a preliminary opinion — usually within a few working days."],
    ["Can I share my medical reports online?", "Yes. You can upload PDF or image files through our consultation form. Reports are only shared with the clinicians reviewing your case."],
    ["How much does treatment cost?", "Costs depend on your diagnosis, the hospital and the treatment plan. We provide written preliminary estimates after a review of your reports; final costs are confirmed by the treating hospital."],
    ["Can you assist with medical travel?", "We provide guidance on medical visa documentation, airport pickup, accommodation and local transport. Visa approval is decided by the authorities."],
    ["How long should I stay in India?", "It varies by treatment and recovery. Your treating doctor will advise an expected duration once your plan is agreed."],
    ["Can my family accompany me?", "Usually yes. Many patients travel with one or more attendants, and we can help with documentation guidance and nearby accommodation."],
    ["How do I book an appointment?", "Use the Book Consultation form or message us on WhatsApp. Your request is reviewed, then we confirm availability with you."],
    ["What happens after I submit my enquiry?", "A care coordinator contacts you, collects any missing information, and arranges a specialist review. Nothing is confirmed until you agree to the plan."],
  ];
  return (
    <Section id="faq">
      <div className="grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-4"><p className="eyebrow">FAQ</p><h2 className="mt-5 text-4xl font-light sm:text-5xl">Questions, answered.</h2></Reveal>
        <Accordion type="single" collapsible className="lg:col-span-8">
          {q.map(([a, b], i) => (
            <AccordionItem key={i} value={`q${i}`}>
              <AccordionTrigger className="py-6 text-left font-display text-xl font-normal hover:no-underline">{a}</AccordionTrigger>
              <AccordionContent className="pb-6 text-base text-muted-foreground">{b}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}

/* ---------- FINAL CTA ---------- */
function FinalCta() {
  return (
    <section className="px-5 pb-24 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-ink px-8 py-20 text-center text-ink-foreground sm:px-16 lg:py-28">
        <div className="orb animate-float-slow absolute -left-20 -top-20 h-72 w-72 opacity-60" aria-hidden />
        <div className="orb-gold animate-float absolute -bottom-16 -right-10 h-56 w-56 opacity-50" aria-hidden />
        <div className="relative mx-auto max-w-3xl">
          <h2 className="text-4xl font-light leading-tight sm:text-6xl">Your journey to better health starts here.</h2>
          <p className="mx-auto mt-6 max-w-xl text-ink-foreground/75">Connect with our international patient care team and take the first step towards understanding your treatment options in India.</p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/book" className="rounded-full bg-gold px-8 py-4 font-semibold text-ink transition hover:bg-ink-foreground">Book a Consultation</Link>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="rounded-full border border-ink-foreground/30 px-8 py-4 font-semibold transition hover:bg-ink-foreground/10">Talk to Our Care Team</a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer id="contact" className="scroll-mt-24 border-t bg-card px-5 pt-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo />
          <p className="mt-4 text-sm text-muted-foreground">{BRAND.name} — international patient care coordination in India.</p>
          <ul className="mt-6 space-y-3 text-sm">
            <li className="flex gap-3"><MapPin className="h-4 w-4 text-primary" />{BRAND.address}</li>
            <li className="flex gap-3"><PhoneCall className="h-4 w-4 text-primary" /><a href={`tel:${BRAND.phone}`}>{BRAND.phone}</a></li>
            <li className="flex gap-3"><Mail className="h-4 w-4 text-primary" /><a href={`mailto:${BRAND.email}`}>{BRAND.email}</a></li>
            <li className="flex gap-3"><Clock className="h-4 w-4 text-primary" />{BRAND.hours}</li>
          </ul>
          <div className="mt-6 flex gap-3">
            {[Instagram, Facebook, Linkedin, Youtube].map((I, i) => <a key={i} href="#" aria-label="Social link" className="grid h-10 w-10 place-items-center rounded-full border hover:border-primary hover:text-primary"><I className="h-4 w-4" /></a>)}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 lg:col-span-4">
          <div><p className="text-sm font-semibold">Explore</p><ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {[["About", "#about"], ["Treatments", "#treatments"], ["Doctors", "#experts"], ["Journey", "#journey"], ["FAQ", "#faq"]].map(([l, h]) => <li key={h}><a href={h} className="hover:text-primary">{l}</a></li>)}
          </ul></div>
          <div><p className="text-sm font-semibold">Treatments</p><ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {SPECIALTIES.slice(0, 6).map((s) => <li key={s.slug}><a href={`#sp-${s.slug}`} className="hover:text-primary">{s.name}</a></li>)}
          </ul></div>
        </div>
        <div className="lg:col-span-4">
          <div className="grid aspect-[4/3] place-items-center rounded-2xl border border-dashed bg-muted text-center text-sm text-muted-foreground"><span><MapPin className="mx-auto mb-2 h-6 w-6" />Google Maps embed placeholder</span></div>
        </div>
      </div>
      <div className="mx-auto mt-16 flex max-w-7xl flex-col justify-between gap-4 border-t py-8 text-xs text-muted-foreground md:flex-row">
        <p>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
        <div className="flex gap-6"><a href="#">Privacy Policy</a><a href="#">Terms & Conditions</a><a href="#">Medical Disclaimer</a></div>
      </div>
    </footer>
  );
}
