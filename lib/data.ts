export type Cls = "I" | "IIa" | "IIb" | "III";
export interface Ind { c: Cls; t: string; l?: string }
export interface Cat { id: string; title: string; group: "Pacing" | "ICD"; page: string; note: string; ind: Ind[] }
const i = (c: Cls, t: string, l?: string): Ind => ({ c, t, l });

export const CATS: Cat[] = [
{ id: "av", title: "Acquired AV block (adults)", group: "Pacing", page: "pp. 1326-1327",
  note: "Symptoms attributable to bradycardia drive the decision. Type I second-degree block within the AV node rarely progresses; type II (intra-/infra-His) often does. Marked first-degree block (PR >0.30 s) can cause pseudopacemaker syndrome.",
  ind: [
  i("I","Third-degree AV block (any level) with bradycardia symptoms presumed due to the block","C"),
  i("I","Third-degree AV block with arrhythmias/medical conditions requiring drugs that cause symptomatic bradycardia","C"),
  i("I","Third-degree AV block with documented asystole >3.0 s or escape rate <40 bpm in awake, symptom-free patient","B, C"),
  i("I","Third-degree AV block after catheter ablation of the AV junction","B, C"),
  i("I","Postoperative third-degree AV block not expected to resolve","C"),
  i("I","Third-degree AV block with neuromuscular disease (myotonic dystrophy, Kearns-Sayre, Erb's, peroneal atrophy)","B"),
  i("I","Second-degree AV block of any type/site with symptomatic bradycardia","B"),
  i("IIa","Asymptomatic third-degree AV block at any site with awake ventricular rate >=40 bpm","B, C"),
  i("IIa","Asymptomatic type II second-degree AV block","B"),
  i("IIa","Asymptomatic type I second-degree AV block at intra-/infra-His level found incidentally at EP study","B"),
  i("IIa","First-degree AV block with pacemaker-syndrome symptoms and documented relief with temporary AV pacing","B"),
  i("IIb","Marked first-degree AV block (>0.30 s) with LV dysfunction and CHF where shorter AV interval improves hemodynamics","C"),
  i("III","Asymptomatic first-degree AV block","B"),
  i("III","Asymptomatic type I second-degree AV block at supra-His (AV node) level or level unknown","B, C"),
  i("III","AV block expected to resolve and unlikely to recur (e.g. drug toxicity, Lyme disease)","B")]},
{ id: "bifasc", title: "Chronic bifascicular / trifascicular block", group: "Pacing", page: "p. 1327",
  note: "Progression to third-degree block is slow; death is usually from underlying heart disease. If syncope cause cannot be determined with certainty, prophylactic pacing is indicated.",
  ind: [
  i("I","Intermittent third-degree AV block","B"),
  i("I","Type II second-degree AV block","B"),
  i("IIa","Syncope not proved due to AV block when other causes excluded, specifically VT","B"),
  i("IIa","Incidental EP finding of markedly prolonged HV interval (>100 ms) in asymptomatic patient","B"),
  i("IIa","Incidental EP finding of non-physiological pacing-induced infra-His block","B"),
  i("III","Fascicular block without AV block or symptoms","B"),
  i("III","Fascicular block with first-degree AV block, without symptoms","B")]},
{ id: "ami", title: "AV block after acute myocardial infarction", group: "Pacing", page: "pp. 1327-1328",
  note: "Indication depends on conduction disturbance type, infarct location and timing, not necessarily symptoms. LBBB + advanced AV block, or RBBB + fascicular block, carry an ominous prognosis.",
  ind: [
  i("I","Persistent second-degree block in His-Purkinje system with bilateral BBB, or third-degree block within/below His-Purkinje after AMI","B"),
  i("I","Transient advanced (2nd/3rd-degree) infranodal AV block with associated BBB (EP study if site uncertain)","B"),
  i("I","Persistent and symptomatic second- or third-degree AV block","C"),
  i("IIb","Persistent second- or third-degree AV block at the AV node level","B"),
  i("III","Transient AV block without intraventricular conduction defects","B"),
  i("III","Transient AV block with isolated left anterior fascicular block","B"),
  i("III","Acquired left anterior fascicular block without AV block","B"),
  i("III","Persistent first-degree AV block with old/age-indeterminate BBB","B")]},
{ id: "snd", title: "Sinus node dysfunction", group: "Pacing", page: "p. 1328",
  note: "Symptom-rhythm correlation is essential. Trained athletes may have awake rates 40-50, sleeping ~30 bpm and pauses to 2.8 s (vagal; not an indication). Pacing relieves symptoms but may not improve survival.",
  ind: [
  i("I","Documented symptomatic bradycardia incl. frequent symptomatic sinus pauses (incl. iatrogenic from essential drugs with no alternative)","C"),
  i("I","Symptomatic chronotropic incompetence","C"),
  i("IIa","Heart rate <40 bpm (spontaneous or from necessary drugs) without documented symptom correlation","C"),
  i("IIb","Minimally symptomatic patient with chronic awake heart rate <30 bpm","C"),
  i("III","Asymptomatic sinus node dysfunction (incl. drug-induced rate <40)"),
  i("III","Symptoms clearly documented as NOT associated with slow rate"),
  i("III","Symptomatic bradycardia due to nonessential drug therapy")]},
{ id: "tachy-t", title: "Pacing to terminate tachycardias", group: "Pacing", page: "pp. 1328-1329",
  note: "Antitachycardia pacing can terminate flutter, reentrant SVT and VT; largely superseded by ablation for SVT.",
  ind: [
  i("I","Symptomatic recurrent SVT reproducibly terminated by pacing after drugs and ablation fail or cause intolerable effects","C"),
  i("I","Symptomatic recurrent sustained VT as part of an automatic defibrillator system","B"),
  i("IIb","Recurrent SVT/atrial flutter reproducibly terminated by pacing, as alternative to drugs or ablation","C"),
  i("III","Tachycardias frequently accelerated or converted to fibrillation by pacing"),
  i("III","Accessory pathway with rapid anterograde conduction capacity")]},
{ id: "tachy-p", title: "Pacing to prevent tachycardias", group: "Pacing", page: "p. 1329",
  note: "Pacing prevents pause-dependent VT (e.g. long QT); combined pacing + beta-blockade shortens QT.",
  ind: [
  i("I","Sustained pause-dependent VT, with/without long QT, with pacing efficacy thoroughly documented","C"),
  i("IIa","High-risk patients with congenital long QT syndrome","C"),
  i("IIb","AV reentrant or AVNRT unresponsive to medical or ablative therapy","C"),
  i("IIb","Prevention of symptomatic, drug-refractory recurrent atrial fibrillation","C"),
  i("III","Frequent/complex ventricular ectopy without sustained VT, absent long QT syndrome"),
  i("III","Long QT syndrome due to reversible causes")]},
{ id: "carotid", title: "Hypersensitive carotid sinus & neurally mediated syncope", group: "Pacing", page: "p. 1329",
  note: "10-20% of carotid sinus patients have a vasodepressor component; ~25% of neurally mediated syncope is predominantly vasodepressor. Evidence for pacing in vasovagal syncope is conflicting.",
  ind: [
  i("I","Recurrent syncope from carotid sinus stimulation; minimal pressure induces asystole >3 s off sinus/AV-depressant drugs","C"),
  i("IIa","Recurrent syncope without clear provocation and with hypersensitive cardioinhibitory response","C"),
  i("IIa","Unexplained syncope with major sinus node/AV conduction abnormalities found or provoked at EP study","C"),
  i("IIb","Neurally mediated syncope with significant bradycardia reproduced by head-up tilt (+/- isoproterenol)","B"),
  i("III","Hyperactive cardioinhibitory response without symptoms"),
  i("III","Hyperactive response with only vague symptoms (dizziness/light-headedness)"),
  i("III","Recurrent syncope/dizziness without hyperactive cardioinhibitory response"),
  i("III","Situational vasovagal syncope where avoidance is effective")]},
{ id: "peds", title: "Children & adolescents", group: "Pacing", page: "pp. 1329-1330",
  note: "Heart-rate norms are age-dependent; postoperative block persisting 7-14 days after cardiac surgery warrants permanent pacing.",
  ind: [
  i("I","Advanced 2nd/3rd-degree AV block with symptomatic bradycardia, CHF or low cardiac output","C"),
  i("I","Sinus node dysfunction with symptoms correlated to age-inappropriate bradycardia","B"),
  i("I","Postoperative advanced 2nd/3rd-degree AV block not expected to resolve or persisting >=7 days after cardiac surgery","B, C"),
  i("I","Congenital third-degree AV block with wide QRS escape rhythm or ventricular dysfunction","B"),
  i("I","Congenital third-degree AV block in infant with rate <50-55 bpm, or with CHD and rate <70 bpm","B, C"),
  i("I","Sustained pause-dependent VT with documented pacing efficacy","B"),
  i("IIa","Bradycardia-tachycardia syndrome needing long-term antiarrhythmic other than digitalis","C"),
  i("IIa","Congenital third-degree AV block beyond age 1 with average rate <50 bpm or abrupt pauses 2-3x basic cycle","B"),
  i("IIa","Long QT syndrome with 2:1 AV or third-degree AV block","B"),
  i("IIa","Asymptomatic sinus bradycardia in child with complex CHD, rate <35 bpm or pauses >3 s","C"),
  i("IIb","Transient postoperative third-degree block reverting to sinus rhythm with residual bifascicular block","C"),
  i("IIb","Asymptomatic congenital third-degree block with acceptable rate, narrow QRS, normal function","B"),
  i("IIb","Asymptomatic sinus bradycardia in adolescent with CHD, rate <35 bpm or pauses >3 s","C"),
  i("III","Transient postoperative AV block with normal conduction returning within 7 days","B"),
  i("III","Asymptomatic postoperative bifascicular block +/- first-degree AV block","C"),
  i("III","Asymptomatic type I second-degree AV block","C"),
  i("III","Asymptomatic adolescent sinus bradycardia with longest RR <3 s and minimum rate >40 bpm","C")]},
{ id: "hcm", title: "Hypertrophic cardiomyopathy", group: "Pacing", page: "pp. 1330-1331",
  note: "Dual-chamber short-AV-delay pacing results are variable; indications remain controversial.",
  ind: [
  i("I","Class I indications for sinus node dysfunction or AV block as above","C"),
  i("IIb","Medically refractory, symptomatic HCM with significant resting or provoked LVOT obstruction","C"),
  i("III","Asymptomatic or medically controlled patients"),
  i("III","Symptomatic patients without evidence of LVOT obstruction")]},
{ id: "dcm", title: "Dilated cardiomyopathy", group: "Pacing", page: "p. 1331",
  note: "Dual-chamber pacing evidence limited; biventricular pacing was investigational in 1998 (now established as CRT; see current guidelines).",
  ind: [
  i("I","Class I indications for sinus node dysfunction or AV block as above","C"),
  i("IIb","Symptomatic, drug-refractory DCM with prolonged PR when acute hemodynamic study shows pacing benefit","C"),
  i("III","Asymptomatic dilated cardiomyopathy"),
  i("III","Symptomatic DCM rendered asymptomatic by drug therapy"),
  i("III","Symptomatic ischemic cardiomyopathy")]},
{ id: "tx", title: "After cardiac transplantation", group: "Pacing", page: "p. 1331",
  note: "Bradyarrhythmias occur in 8-23%; ~50% improve within 6-12 months, so long-term pacing is often unnecessary.",
  ind: [
  i("I","Symptomatic bradyarrhythmia/chronotropic incompetence not expected to resolve, or other Class I indications","C"),
  i("IIb","Symptomatic bradyarrhythmia/chronotropic incompetence that is transient but may persist for months","C"),
  i("III","Asymptomatic bradyarrhythmias after transplantation")]},
{ id: "icd", title: "Implantable cardioverter-defibrillator (ICD)", group: "ICD", page: "pp. 1333-1335",
  note: "All-cause mortality is the preferred endpoint. Not recommended in evolving AMI/electrolyte-related VT, terminal illness, drug-refractory NYHA IV not transplant-eligible, or significant psychiatric illness precluding follow-up. 1998 criteria predate MADIT-II, SCD-HeFT and CRT-D.",
  ind: [
  i("I","Cardiac arrest due to VF or VT not due to a transient or reversible cause","A"),
  i("I","Spontaneous sustained VT","B"),
  i("I","Syncope of undetermined origin with clinically relevant, hemodynamically significant sustained VT/VF induced at EP study when drugs ineffective, not tolerated or not preferred","B"),
  i("I","Nonsustained VT with CAD, prior MI, LV dysfunction and inducible VF/sustained VT at EP study not suppressible by Class I antiarrhythmic","B"),
  i("IIb","Cardiac arrest presumed due to VF when EP testing is precluded by other medical conditions","C"),
  i("IIb","Severe symptoms from sustained ventricular tachyarrhythmias while awaiting cardiac transplantation","C"),
  i("IIb","Familial/inherited conditions with high risk of life-threatening VT (long QT syndrome, HCM)","B"),
  i("IIb","Nonsustained VT with CAD, prior MI, LV dysfunction and inducible sustained VT/VF at EP study","B"),
  i("IIb","Recurrent syncope of undetermined etiology with ventricular dysfunction and inducible ventricular arrhythmias, other causes excluded","C"),
  i("III","Syncope of undetermined cause without inducible ventricular tachyarrhythmias","C"),
  i("III","Incessant VT or VF","C"),
  i("III","VF/VT from arrhythmias amenable to ablation (WPW with AF, RVOT VT, idiopathic LV/fascicular VT)","C"),
  i("III","Ventricular tachyarrhythmias from transient/reversible disorder (AMI, electrolytes, drugs, trauma)","C"),
  i("III","Significant psychiatric illness that may be aggravated by device implantation or preclude follow-up","C"),
  i("III","Terminal illness with projected life expectancy <6 months","C"),
  i("III","CAD with LV dysfunction and prolonged QRS, no spontaneous/inducible VT, undergoing bypass surgery","B"),
  i("III","NYHA Class IV drug-refractory CHF in patients not candidates for cardiac transplantation","C")]}
];

export const CLS_INFO: Record<Cls, { label: string; verdict: string; cls: string }> = {
  I: { label: "Class I", verdict: "Indicated — evidence/general agreement that it is beneficial", cls: "bg-emerald-100 text-emerald-900 border-emerald-400" },
  IIa: { label: "Class IIa", verdict: "Reasonable — weight of evidence favors usefulness", cls: "bg-sky-100 text-sky-900 border-sky-400" },
  IIb: { label: "Class IIb", verdict: "May be considered — usefulness less well established", cls: "bg-amber-100 text-amber-900 border-amber-400" },
  III: { label: "Class III", verdict: "Not indicated — not useful and may be harmful", cls: "bg-rose-100 text-rose-900 border-rose-400" },
};
const ORDER: Cls[] = ["I", "IIa", "IIb", "III"];
export function assess(cat: Cat, picked: number[]) {
  const m = picked.map((k) => cat.ind[k]);
  const best = ORDER.find((c) => m.some((x) => x.c === c));
  const conflict = m.some((x) => x.c === "III") && m.some((x) => x.c !== "III");
  return { matched: m, best, conflict };
}

// Generator selection (Table + Figures 1 & 2, pp. 1332-1333)
export interface Sel { ind: "av" | "snd" | "nms"; chronicAF: boolean; paroxAF: boolean; sync: boolean; atrialPacing: boolean; rate: boolean; avRisk: boolean }
export function selectDevice(s: Sel): { device: string; why: string[] } {
  const r = s.rate ? "rate-responsive " : "";
  const ms = s.paroxAF ? " with mode switching" : "";
  if (s.ind === "av") {
    if (s.chronicAF) return { device: `${r}Ventricular pacemaker`, why: ["Chronic AF/atrial tachyarrhythmia: atrial tracking not useful (Fig 1)."] };
    if (!s.sync) return { device: `${r}Ventricular pacemaker`, why: ["AV synchrony not required (Fig 1)."] };
    if (s.atrialPacing) return { device: `${r}Dual-chamber pacemaker${ms}`, why: ["AV synchrony and atrial pacing desired (Fig 1)."] };
    return { device: `Single-lead atrial-sensing ventricular pacemaker${ms}`, why: ["AV synchrony desired, no atrial pacing needed, normal sinus node function; limits leads (Table, Fig 1).", "If the sinus node is chronotropically impaired, choose dual-chamber instead."] };
  }
  if (s.ind === "snd") {
    if (!s.avRisk) return { device: `${r}Single-chamber atrial pacemaker`, why: ["No evidence of impaired AV conduction or future AV block (Fig 2).", "Not appropriate if AV block is suspected."] };
    if (!s.sync) return { device: `${r}Ventricular pacemaker`, why: ["AV conduction concern but synchrony not needed (Fig 2)."] };
    return { device: `${r}Dual-chamber pacemaker${ms}`, why: ["Suspected AV conduction abnormality plus AV synchrony desired (Table, Fig 2)."] };
  }
  if (s.chronicAF) return { device: `${r}Ventricular pacemaker`, why: ["Chronic atrial tachyarrhythmia (Table)."] };
  return { device: `${r}Dual-chamber pacemaker`, why: ["Sinus mechanism present (Table).", "Single-chamber atrial pacing is not appropriate unless AV block is systematically excluded."] };
}

// src "G" = in the 1998 guideline; "P" = general implant practice, NOT in the guideline; verify against current documents and manufacturer IFU.
export interface Chk { p: string; v: string; why: string; src: "G" | "P" }
export const LEAD: { title: string; items: Chk[] }[] = [
{ title: "Right ventricular lead — intra-operative electrical", items: [
  { p: "Capture threshold (acute)", v: "typically <=1.0 V @ 0.4-0.5 ms", why: "High acute threshold suggests poor contact, scar, or perforation; thresholds rise transiently over weeks (steroid-eluting leads blunt this).", src: "P" },
  { p: "R-wave amplitude", v: "typically >=5 mV (ideally >8 mV)", why: "Low R wave risks undersensing; may mean infarcted/fibrotic myocardium.", src: "P" },
  { p: "Slew rate", v: "typically >=0.5 V/s", why: "Reflects signal quality at the tip; poor slew rate predicts later sensing problems.", src: "P" },
  { p: "Pacing impedance", v: "roughly 400-1,200 ohm (lead-specific)", why: "Abnormally low suggests insulation break; abnormally high suggests conductor fracture or loose set-screw.", src: "P" },
  { p: "Current of injury (active fixation)", v: "ST elevation on EGM after helix deployment", why: "Supports tissue contact.", src: "P" },
  { p: "High-output stimulation (10 V)", v: "no diaphragmatic or pectoral capture", why: "Phrenic/pocket stimulation or perforation signs; reposition if present.", src: "P" }]},
{ title: "Right atrial lead", items: [
  { p: "Capture threshold", v: "typically <=1.5 V @ 0.4 ms", why: "Adequate safety margin for atrial capture.", src: "P" },
  { p: "P-wave amplitude", v: "typically >=2 mV (>=1.5 mV minimum)", why: "Needed for reliable atrial sensing, tracking and mode switching.", src: "P" },
  { p: "Far-field R wave", v: "small relative to P wave", why: "Large far-field R causes oversensing and false mode switching.", src: "P" },
  { p: "Phrenic stimulation at high output", v: "absent", why: "Lateral RA wall lies near the phrenic nerve.", src: "P" }]},
{ title: "ICD lead (RV shocking lead)", items: [
  { p: "R-wave amplitude", v: "typically >=7-8 mV (min ~5 mV)", why: "VF undersensing risk is critical in an ICD.", src: "P" },
  { p: "Pacing threshold / impedance", v: "<=1.5 V; 400-1,200 ohm", why: "Reliable bradycardia/antitachycardia pacing.", src: "P" },
  { p: "Shock impedance", v: "roughly 20-80 ohm", why: "Out-of-range suggests lead damage, wrong coil position or connection problem.", src: "P" },
  { p: "Defibrillation safety margin", v: ">=10 J below maximum output when tested", why: "Guideline: abbreviated defibrillation-threshold testing is desirable when LV filling pressures are markedly elevated.", src: "G" }]},
{ title: "Fluoroscopic position", items: [
  { p: "RV apex vs septum (AP + LAO ~40°)", v: "tip directed toward patient's left, away from sternum, on LAO", why: "Septal leads point toward left/spine in LAO; anterior = free wall/RVOT-anterior; posterior = coronary sinus.", src: "P" },
  { p: "Lateral / RAO view", v: "tip anterior, not beyond the cardiac border", why: "Tip near/beyond the cardiac silhouette suggests perforation risk.", src: "P" },
  { p: "Lead slack and curvature", v: "gentle loop; no sharp angulation", why: "Taut leads dislodge with respiration/posture; sharp bends stress insulation.", src: "P" },
  { p: "Atrial J-lead motion", v: "side-to-side motion with deep breath/cough", why: "Confirms stable appendage/lateral wall fixation.", src: "P" },
  { p: "Stability maneuvers", v: "deep inspiration, cough, gentle tug", why: "Detects micro-dislodgement before closing the pocket.", src: "P" }]},
{ title: "Paced 12-lead ECG & imaging", items: [
  { p: "RV apical paced morphology", v: "LBBB pattern, left superior axis", why: "Expected. Inferior axis suggests outflow tract/septal position.", src: "P" },
  { p: "Paced RBBB pattern in V1", v: "unexpected — investigate", why: "Suggests LV capture: LV perforation, lead across PFO/septal defect, or coronary vein placement. Get lateral CXR and echo; consider CT.", src: "P" },
  { p: "Post-op chest X-ray (PA + lateral)", v: "tip position, loops, pneumothorax", why: "Pneumothorax and malposition are the commonest early findings.", src: "P" },
  { p: "Echocardiography", v: "no new pericardial effusion", why: "New effusion, pleuritic pain, rising threshold, loss of capture or diaphragmatic stimulation suggest perforation/tamponade.", src: "P" }]},
{ title: "Lead function at follow-up (guideline)", items: [
  { p: "Battery status", v: "assess every follow-up", why: "Core follow-up element in the guideline.", src: "G" },
  { p: "Pacing threshold and pulse width", v: "assess every follow-up", why: "Expert programming of output, pulse width and AV delay extended generator life by ~4.2 years vs nominal settings.", src: "G" },
  { p: "Sensing function", v: "assess every follow-up", why: "Detects under/oversensing.", src: "G" },
  { p: "Lead integrity", v: "impedance trend, EGM noise", why: "Pacemaker-dependent patients need more frequent evaluation; transtelephonic testing is used.", src: "G" },
  { p: "Programming review before discharge", v: "interrogate and review", why: "Must be reviewed before discharge and refined at later visits.", src: "G" }]}
];
