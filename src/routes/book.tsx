import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState, type ReactNode } from "react";
import { Check, ChevronLeft, ChevronRight, FileText, Lock, Trash2, Upload, Info } from "lucide-react";
import { Header, WhatsAppFab } from "@/components/site/chrome";
import { SPECIALTIES } from "@/lib/site-data";
import { cn } from "@/lib/utils";

type Search = { specialty?: string };

export const Route = createFileRoute("/book")({
  validateSearch: (s: Record<string, unknown>): Search => ({ specialty: typeof s.specialty === "string" ? s.specialty : undefined }),
  head: () => ({
    meta: [
      { title: "Request a Consultation — Aarogya Global Care" },
      { name: "description", content: "Submit a confidential consultation request, share your medical reports and choose your preferred consultation time." },
      { property: "og:title", content: "Request a Consultation — Aarogya Global Care" },
      { property: "og:description", content: "A secure, step-by-step consultation request for international patients." },
    ],
  }),
  component: BookPage,
});

const STEPS = ["Patient", "Treatment", "Reports", "Preferences", "Confirm"];
const MAX_MB = 10;
const OK_TYPES = ["application/pdf", "image/jpeg", "image/png"];
type Up = { name: string; size: number; progress: number; error?: string };

const initial = {
  name: "", email: "", country: "", code: "+", phone: "", age: "", gender: "",
  specialty: "", treatment: "", hospital: "", doctor: "", concern: "", history: "",
  date: "", time: "", type: "Online", comm: "WhatsApp",
  consentPrivacy: false, consentMedical: false,
};
type F = typeof initial;

function validate(step: number, f: F): Record<string, string> {
  const e: Record<string, string> = {};
  if (step === 0) {
    if (f.name.trim().length < 2) e.name = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = "Please enter a valid email.";
    if (!f.country.trim()) e.country = "Please enter your country.";
    if (!/^\+\d{1,4}$/.test(f.code)) e.code = "e.g. +44";
    if (!/^\d{6,14}$/.test(f.phone.replace(/\s/g, ""))) e.phone = "Enter digits only (6–14).";
    const a = Number(f.age); if (!f.age || a < 0 || a > 120) e.age = "Enter a valid age.";
  }
  if (step === 1) {
    if (!f.specialty) e.specialty = "Please choose a specialty.";
    if (!f.treatment) e.treatment = "Please choose a treatment.";
    if (f.concern.trim().length < 10) e.concern = "Please describe your concern (min. 10 characters).";
  }
  if (step === 3) {
    if (!f.date) e.date = "Choose a preferred date.";
    else if (new Date(f.date) < new Date(new Date().toDateString())) e.date = "Date must be in the future.";
    if (!f.time) e.time = "Choose a preferred time.";
  }
  if (step === 4) {
    if (!f.consentPrivacy) e.consentPrivacy = "Consent is required.";
    if (!f.consentMedical) e.consentMedical = "Consent is required.";
  }
  return e;
}

function BookPage() {
  const search = Route.useSearch();
  const [step, setStep] = useState(0);
  const [f, setF] = useState<F>({ ...initial, specialty: SPECIALTIES.some((s) => s.slug === search.specialty) ? search.specialty! : "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [files, setFiles] = useState<Up[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [ref, setRef] = useState<string | null>(null);
  const sp = useMemo(() => SPECIALTIES.find((s) => s.slug === f.specialty), [f.specialty]);
  const set = <K extends keyof F>(k: K, v: F[K]) => setF((p) => ({ ...p, [k]: v }));

  const next = () => { const e = validate(step, f); setErrors(e); if (!Object.keys(e).length) { setStep((s) => s + 1); window.scrollTo({ top: 0, behavior: "smooth" }); } };

  const addFiles = (list: FileList | null) => {
    if (!list) return;
    Array.from(list).forEach((file) => {
      const err = !OK_TYPES.includes(file.type) ? "Unsupported type — PDF, JPG or PNG only." : file.size > MAX_MB * 1024 * 1024 ? `Exceeds ${MAX_MB} MB limit.` : undefined;
      const item: Up = { name: file.name, size: file.size, progress: err ? 0 : 0, error: err };
      setFiles((p) => [...p, item]);
      if (err) return;
      // Demo mode: simulated progress. Files stay in the browser and are never uploaded.
      let pct = 0;
      const t = setInterval(() => {
        pct = Math.min(100, pct + 12 + Math.random() * 18);
        setFiles((p) => p.map((x) => (x === item || (x.name === item.name && x.size === item.size) ? { ...x, progress: pct } : x)));
        if (pct >= 100) clearInterval(t);
      }, 180);
    });
  };

  const submit = async () => {
    const e = validate(4, f); setErrors(e); if (Object.keys(e).length) return;
    setSubmitting(true);
    // BACKEND INTEGRATION POINT: replace with a server function that stores the enquiry
    // and uploads reports to private storage once a backend is connected.
    await new Promise((r) => setTimeout(r, 1200));
    setRef(`DEMO-${Date.now().toString(36).toUpperCase().slice(-6)}`);
    setSubmitting(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const okFiles = files.filter((x) => !x.error);

  return (
    <div className="min-h-screen bg-hero">
      <Header solid />
      <main className="mx-auto max-w-3xl px-5 pb-24 pt-32">
        <div className="mb-8 flex items-start gap-3 rounded-2xl border border-gold bg-gold-soft p-4 text-sm">
          <Info className="mt-0.5 h-4 w-4 shrink-0" />
          <p><strong>Demo mode.</strong> This form is fully interactive, but nothing is saved or sent yet. Please don't enter real medical information until the secure backend is connected.</p>
        </div>

        {ref ? (
          <div className="rounded-3xl border bg-card p-10 text-center shadow-lift">
            <span className="orb mx-auto grid h-20 w-20 place-items-center"><Check className="h-8 w-8 text-primary-foreground" /></span>
            <h1 className="mt-8 text-4xl font-light">Consultation request received</h1>
            <p className="mt-3 text-muted-foreground">Reference number</p>
            <p className="font-display text-3xl text-primary">{ref}</p>
            <p className="mx-auto mt-6 max-w-md text-muted-foreground">This is a consultation <strong>request</strong>, not a confirmed appointment. Our care team will review your enquiry and contact you to confirm availability.</p>
            <Link to="/" className="mt-10 inline-flex rounded-full bg-ink px-7 py-3.5 font-semibold text-ink-foreground hover:bg-primary">Back to home</Link>
          </div>
        ) : (
          <>
            <p className="eyebrow">Consultation request</p>
            <h1 className="mt-4 text-4xl font-light sm:text-5xl">Let's understand your needs.</h1>
            <ol className="mt-10 grid grid-cols-5 gap-2" aria-label="Progress">
              {STEPS.map((s, i) => (
                <li key={s} aria-current={i === step ? "step" : undefined}>
                  <div className={cn("h-1 rounded-full transition-colors", i <= step ? "bg-primary" : "bg-border")} />
                  <p className={cn("mt-2 text-xs font-semibold", i === step ? "text-primary" : "text-muted-foreground")}><span className="hidden sm:inline">{i + 1}. </span>{s}</p>
                </li>
              ))}
            </ol>

            <div className="mt-8 rounded-3xl border bg-card p-6 shadow-soft sm:p-10">
              {step === 0 && (
                <Grid>
                  <Field label="Full name" err={errors.name} full><input className={inp} value={f.name} onChange={(e) => set("name", e.target.value)} autoComplete="name" /></Field>
                  <Field label="Email address" err={errors.email} full><input type="email" className={inp} value={f.email} onChange={(e) => set("email", e.target.value)} autoComplete="email" /></Field>
                  <Field label="Country of residence" err={errors.country} full><input className={inp} value={f.country} onChange={(e) => set("country", e.target.value)} autoComplete="country-name" /></Field>
                  <Field label="Country code" err={errors.code}><input className={inp} value={f.code} onChange={(e) => set("code", e.target.value)} inputMode="tel" /></Field>
                  <Field label="WhatsApp / phone" err={errors.phone}><input className={inp} value={f.phone} onChange={(e) => set("phone", e.target.value)} inputMode="tel" /></Field>
                  <Field label="Age" err={errors.age}><input type="number" min={0} max={120} className={inp} value={f.age} onChange={(e) => set("age", e.target.value)} /></Field>
                  <Field label="Gender (optional)"><select className={inp} value={f.gender} onChange={(e) => set("gender", e.target.value)}><option value="">Prefer not to say</option><option>Female</option><option>Male</option><option>Other</option></select></Field>
                </Grid>
              )}
              {step === 1 && (
                <Grid>
                  <Field label="Medical specialty" err={errors.specialty}><select className={inp} value={f.specialty} onChange={(e) => { set("specialty", e.target.value); set("treatment", ""); }}><option value="">Select…</option>{SPECIALTIES.map((s) => <option key={s.slug} value={s.slug}>{s.name}</option>)}</select></Field>
                  <Field label="Treatment" err={errors.treatment}><select className={inp} value={f.treatment} disabled={!sp} onChange={(e) => set("treatment", e.target.value)}><option value="">Select…</option>{sp?.treatments.map((t) => <option key={t}>{t}</option>)}<option>Not sure — need advice</option></select></Field>
                  <Field label="Preferred hospital (optional)"><input className={inp} value={f.hospital} onChange={(e) => set("hospital", e.target.value)} /></Field>
                  <Field label="Preferred doctor (optional)"><input className={inp} value={f.doctor} onChange={(e) => set("doctor", e.target.value)} /></Field>
                  <Field label="Describe your medical concern" err={errors.concern} full><textarea rows={4} className={inp} value={f.concern} onChange={(e) => set("concern", e.target.value)} /></Field>
                  <Field label="Previous treatment history (optional)" full><textarea rows={3} className={inp} value={f.history} onChange={(e) => set("history", e.target.value)} /></Field>
                </Grid>
              )}
              {step === 2 && (
                <div>
                  <label className="flex cursor-pointer flex-col items-center rounded-2xl border-2 border-dashed p-10 text-center transition hover:border-primary hover:bg-accent/40"
                    onDragOver={(e) => e.preventDefault()} onDrop={(e) => { e.preventDefault(); addFiles(e.dataTransfer.files); }}>
                    <Upload className="h-8 w-8 text-primary" />
                    <span className="mt-4 font-semibold">Drop files or click to browse</span>
                    <span className="mt-1 text-sm text-muted-foreground">PDF, JPG, JPEG or PNG · max {MAX_MB} MB each · optional</span>
                    <input type="file" multiple accept=".pdf,.jpg,.jpeg,.png" className="sr-only" onChange={(e) => { addFiles(e.target.files); e.target.value = ""; }} />
                  </label>
                  <p className="mt-4 flex items-center gap-2 text-xs text-muted-foreground"><Lock className="h-3.5 w-3.5" />When live, reports go to private storage and are never published at a public link.</p>
                  <ul className="mt-6 space-y-3">
                    {files.map((x, i) => (
                      <li key={i} className="rounded-xl border p-4">
                        <div className="flex items-center gap-3">
                          <FileText className="h-5 w-5 shrink-0 text-primary" />
                          <div className="min-w-0 flex-1"><p className="truncate text-sm font-medium">{x.name}</p><p className={cn("text-xs", x.error ? "text-destructive" : "text-muted-foreground")}>{x.error ?? `${(x.size / 1024 / 1024).toFixed(2)} MB · ${x.progress >= 100 ? "Ready" : `${Math.round(x.progress)}%`}`}</p></div>
                          <button onClick={() => setFiles((p) => p.filter((_, j) => j !== i))} aria-label={`Remove ${x.name}`} className="text-muted-foreground hover:text-destructive"><Trash2 className="h-4 w-4" /></button>
                        </div>
                        {!x.error && <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-muted"><div className="h-full bg-primary transition-all" style={{ width: `${x.progress}%` }} /></div>}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {step === 3 && (
                <Grid>
                  <Field label="Preferred date" err={errors.date}><input type="date" className={inp} value={f.date} onChange={(e) => set("date", e.target.value)} /></Field>
                  <Field label="Preferred time (IST)" err={errors.time}><select className={inp} value={f.time} onChange={(e) => set("time", e.target.value)}><option value="">Select…</option>{["09:00 – 11:00", "11:00 – 13:00", "14:00 – 16:00", "16:00 – 18:00"].map((t) => <option key={t}>{t}</option>)}</select></Field>
                  <Field label="Consultation type" full><Pills opts={["Online", "In-person"]} v={f.type} on={(v) => set("type", v)} /></Field>
                  <Field label="Preferred communication" full><Pills opts={["WhatsApp", "Email", "Phone call", "Video call"]} v={f.comm} on={(v) => set("comm", v)} /></Field>
                </Grid>
              )}
              {step === 4 && (
                <div className="space-y-6">
                  <Summary title="Patient" rows={[["Name", f.name], ["Email", f.email], ["Country", f.country], ["Phone", `${f.code} ${f.phone}`], ["Age", f.age]]} />
                  <Summary title="Treatment" rows={[["Specialty", sp?.name ?? ""], ["Treatment", f.treatment], ["Concern", f.concern]]} />
                  <Summary title="Consultation" rows={[["Date", f.date], ["Time", f.time], ["Type", f.type], ["Contact via", f.comm]]} />
                  <Summary title="Documents" rows={[["Reports", okFiles.length ? `${okFiles.length} file(s) ready` : "None attached"]]} />
                  <Consent checked={f.consentPrivacy} on={(v) => set("consentPrivacy", v)} err={errors.consentPrivacy}>I agree to the Privacy Policy and consent to my data being processed to handle this enquiry.</Consent>
                  <Consent checked={f.consentMedical} on={(v) => set("consentMedical", v)} err={errors.consentMedical}>I consent to my medical information being shared with qualified clinicians to assess my case.</Consent>
                  <p className="rounded-xl bg-muted p-4 text-sm text-muted-foreground">This is a consultation request, not a confirmed appointment. Our care team will review it and confirm availability.</p>
                </div>
              )}

              <div className="mt-10 flex items-center justify-between gap-4 border-t pt-6">
                <button onClick={() => setStep((s) => s - 1)} disabled={step === 0} className="inline-flex items-center gap-1 rounded-full px-4 py-3 text-sm font-semibold disabled:opacity-0"><ChevronLeft className="h-4 w-4" />Back</button>
                {step < 4 ? (
                  <button onClick={next} className="inline-flex items-center gap-1 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-ink-foreground hover:bg-primary">Continue<ChevronRight className="h-4 w-4" /></button>
                ) : (
                  <button onClick={submit} disabled={submitting} className="rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-ink disabled:opacity-60">{submitting ? "Submitting…" : "Submit Consultation Request"}</button>
                )}
              </div>
            </div>
          </>
        )}
      </main>
      <WhatsAppFab />
    </div>
  );
}

const inp = "w-full rounded-xl border bg-background px-4 py-3 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/20 disabled:opacity-50";
const Grid = ({ children }: { children: ReactNode }) => <div className="grid gap-5 sm:grid-cols-2">{children}</div>;
function Field({ label, err, full, children }: { label: string; err?: string; full?: boolean; children: ReactNode }) {
  return <label className={cn("block", full && "sm:col-span-2")}><span className="mb-2 block text-sm font-semibold">{label}</span>{children}{err && <span className="mt-1.5 block text-xs text-destructive" role="alert">{err}</span>}</label>;
}
function Pills({ opts, v, on }: { opts: string[]; v: string; on: (v: string) => void }) {
  return <div className="flex flex-wrap gap-2">{opts.map((o) => <button type="button" key={o} onClick={() => on(o)} aria-pressed={v === o} className={cn("rounded-full border px-5 py-2.5 text-sm font-semibold transition", v === o ? "border-primary bg-primary text-primary-foreground" : "hover:border-primary")}>{o}</button>)}</div>;
}
function Summary({ title, rows }: { title: string; rows: [string, string][] }) {
  return <div><p className="eyebrow">{title}</p><dl className="mt-3 divide-y rounded-xl border">{rows.map(([k, v]) => <div key={k} className="grid grid-cols-3 gap-4 px-4 py-3 text-sm"><dt className="text-muted-foreground">{k}</dt><dd className="col-span-2 break-words">{v || "—"}</dd></div>)}</dl></div>;
}
function Consent({ checked, on, err, children }: { checked: boolean; on: (v: boolean) => void; err?: string; children: ReactNode }) {
  return <label className="flex gap-3 text-sm"><input type="checkbox" checked={checked} onChange={(e) => on(e.target.checked)} className="mt-0.5 h-5 w-5 accent-primary" /><span>{children}{err && <span className="block text-xs text-destructive">{err}</span>}</span></label>;
}
