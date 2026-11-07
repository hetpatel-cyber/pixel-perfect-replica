import {
  HeartPulse, Bone, Ribbon, Brain, Repeat, Sparkles, Baby, Smile, Soup, Droplets, Eye, Activity,
  type LucideIcon,
} from "lucide-react";

// Editable brand placeholders — replace with genuine details.
export const BRAND = {
  name: "Aarogya Global Care",
  short: "Aarogya",
  phone: "+91 00000 00000",
  whatsapp: "910000000000",
  email: "care@yourdomain.com",
  address: "[Office address], New Delhi, India",
  hours: "Mon – Sat, 9:00 – 19:00 IST",
};

export type Specialty = { slug: string; name: string; icon: LucideIcon; desc: string; treatments: string[] };

export const SPECIALTIES: Specialty[] = [
  { slug: "cardiology", name: "Cardiology", icon: HeartPulse, desc: "Assessment and coordination for heart conditions, from diagnostics to cardiac surgery.", treatments: ["Angioplasty", "Bypass surgery (CABG)", "Valve replacement", "Cardiac check-up"] },
  { slug: "orthopaedics", name: "Orthopaedics", icon: Bone, desc: "Joint, bone and sports-injury care with structured rehabilitation planning.", treatments: ["Knee replacement", "Hip replacement", "Arthroscopy", "Shoulder surgery"] },
  { slug: "oncology", name: "Oncology", icon: Ribbon, desc: "Coordinated access to multidisciplinary cancer evaluation and treatment.", treatments: ["Second opinion", "Chemotherapy", "Radiation therapy", "Surgical oncology"] },
  { slug: "neurology", name: "Neurology", icon: Brain, desc: "Evaluation for brain and nervous-system conditions with specialist teams.", treatments: ["Neuro consultation", "Epilepsy care", "Stroke rehabilitation", "Brain tumour surgery"] },
  { slug: "transplant", name: "Organ Transplant", icon: Repeat, desc: "Guidance through the evaluation and legal documentation transplants require.", treatments: ["Kidney transplant", "Liver transplant", "Bone marrow transplant"] },
  { slug: "cosmetic", name: "Cosmetic & Plastic Surgery", icon: Sparkles, desc: "Reconstructive and aesthetic procedures with qualified plastic surgeons.", treatments: ["Rhinoplasty", "Liposuction", "Breast surgery", "Reconstructive surgery"] },
  { slug: "fertility", name: "Fertility & IVF", icon: Baby, desc: "Discreet, compassionate coordination of fertility assessments and IVF cycles.", treatments: ["IVF", "IUI", "Fertility assessment", "Egg freezing"] },
  { slug: "dental", name: "Dental Care", icon: Smile, desc: "Restorative and cosmetic dentistry, planned around your travel dates.", treatments: ["Dental implants", "Crowns & veneers", "Full-mouth rehabilitation"] },
  { slug: "gastro", name: "Gastroenterology", icon: Soup, desc: "Digestive and liver care, including endoscopic and surgical options.", treatments: ["Endoscopy", "Bariatric surgery", "Liver care"] },
  { slug: "urology", name: "Urology", icon: Droplets, desc: "Kidney, bladder and prostate care with minimally invasive approaches.", treatments: ["Kidney stone treatment", "Prostate surgery", "Urology consultation"] },
  { slug: "ophthalmology", name: "Ophthalmology", icon: Eye, desc: "Vision care from cataract and refractive surgery to retinal treatment.", treatments: ["Cataract surgery", "LASIK", "Retina treatment"] },
  { slug: "spine", name: "Spine Surgery", icon: Activity, desc: "Assessment of back and neck conditions, surgical and non-surgical.", treatments: ["Disc surgery", "Spinal fusion", "Minimally invasive spine surgery"] },
];

export const NAV = [
  { label: "About Us", href: "#about" },
  { label: "Treatments", href: "#treatments" },
  { label: "Hospitals & Doctors", href: "#experts" },
  { label: "International Patients", href: "#international" },
  { label: "Patient Stories", href: "#stories" },
  { label: "Contact", href: "#contact" },
];

export const waLink = (text = "Hello, I would like to enquire about treatment in India.") =>
  `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(text)}`;
