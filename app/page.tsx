"use client";
import { useEffect, useMemo, useState } from "react";
import { CATS, CLS_INFO, LEAD, assess, selectDevice, type Sel } from "@/lib/data";

const TABS = ["Assessment", "Device selector", "Lead placement", "Knowledge base"] as const;
type Tab = (typeof TABS)[number];

function Badge({ c }: { c: keyof typeof CLS_INFO }) {
  return <span className={`shrink-0 rounded border px-1.5 py-0.5 text-xs font-semibold ${CLS_INFO[c].cls}`}>{CLS_INFO[c].label}</span>;
}

function Assessment() {
  const [id, setId] = useState(CATS[0].id);
  const [picked, setPicked] = useState<number[]>([]);
  const cat = CATS.find((c) => c.id === id)!;
  const res = assess(cat, picked);
  const toggle = (k: number) => setPicked((p) => (p.includes(k) ? p.filter((x) => x !== k) : [...p, k]));
  return (
    <div className="space-y-4">
      <select className="w-full rounded border p-2" value={id} onChange={(e) => { setId(e.target.value); setPicked([]); }}>
        <optgroup label="Permanent pacing">{CATS.filter((c) => c.group === "Pacing").map((c) => <option key={c.id} value={c.id}>{c.title}</option>)}</optgroup>
        <optgroup label="ICD">{CATS.filter((c) => c.group === "ICD").map((c) => <option key={c.id} value={c.id}>{c.title}</option>)}</optgroup>
      </select>
      <p className="rounded bg-slate-100 p-3 text-sm">{cat.note} <span className="text-slate-500">({cat.page})</span></p>
      <p className="text-sm font-medium">Tick every finding that applies to this patient:</p>
      <ul className="space-y-2">
        {cat.ind.map((x, k) => (
          <li key={k}><label className={`flex cursor-pointer items-start gap-2 rounded border bg-white p-2 text-sm ${picked.includes(k) ? "ring-2 ring-slate-800" : ""}`}>
            <input type="checkbox" className="mt-1" checked={picked.includes(k)} onChange={() => toggle(k)} />
            <span className="flex-1">{x.t}</span>
          </label></li>
        ))}
      </ul>
      <div className="sticky bottom-2 rounded-lg border bg-white p-3 shadow-lg">
        {!res.best ? <p className="text-sm text-slate-500">Select findings to see the guideline classification.</p> : (
          <div className="space-y-2 text-sm">
            <div className={`rounded border p-2 font-semibold ${CLS_INFO[res.best].cls}`}>{CLS_INFO[res.best].label}: {CLS_INFO[res.best].verdict}</div>
            {res.conflict && <p className="text-rose-700">Conflicting Class III finding selected — review contraindicating/reversible factors before proceeding.</p>}
            {res.matched.map((m, k) => <div key={k} className="flex gap-2"><Badge c={m.c} /><span>{m.t}{m.l && <em className="text-slate-500"> (LOE {m.l})</em>}</span></div>)}
          </div>)}
      </div>
    </div>
  );
}

function Yn({ label, v, set }: { label: string; v: boolean; set: (b: boolean) => void }) {
  return <label className="flex items-center justify-between rounded border bg-white p-2 text-sm">{label}<input type="checkbox" checked={v} onChange={(e) => set(e.target.checked)} /></label>;
}
function Device() {
  const [s, setS] = useState<Sel>({ ind: "av", chronicAF: false, paroxAF: false, sync: true, atrialPacing: false, rate: false, avRisk: false });
  const up = (p: Partial<Sel>) => setS({ ...s, ...p });
  const r = selectDevice(s);
  return (
    <div className="space-y-3">
      <select className="w-full rounded border p-2" value={s.ind} onChange={(e) => up({ ind: e.target.value as Sel["ind"] })}>
        <option value="av">AV block</option><option value="snd">Sinus node dysfunction</option><option value="nms">Neurally mediated syncope / carotid sinus hypersensitivity</option>
      </select>
      <Yn label="Chronic AF / atrial tachyarrhythmia (no reversion expected)" v={s.chronicAF} set={(b) => up({ chronicAF: b, paroxAF: b ? false : s.paroxAF })} />
      <Yn label="Paroxysmal / intermittent atrial tachyarrhythmia" v={s.paroxAF} set={(b) => up({ paroxAF: b, chronicAF: b ? false : s.chronicAF })} />
      {s.ind !== "nms" && <Yn label="AV synchrony desired" v={s.sync} set={(b) => up({ sync: b })} />}
      {s.ind === "av" && <Yn label="Atrial pacing desired (sinus node dysfunction/need)" v={s.atrialPacing} set={(b) => up({ atrialPacing: b })} />}
      {s.ind === "snd" && <Yn label="Suspected AV conduction abnormality / risk of future AV block" v={s.avRisk} set={(b) => up({ avRisk: b })} />}
      <Yn label="Rate response desired" v={s.rate} set={(b) => up({ rate: b })} />
      <div className="rounded-lg border-2 border-slate-800 bg-white p-3">
        <p className="text-xs uppercase text-slate-500">Suggested generator (1998 Table / Fig 1-2)</p>
        <p className="text-lg font-semibold">{r.device}</p>
        <ul className="mt-1 list-disc pl-5 text-sm">{r.why.map((w, k) => <li key={k}>{w}</li>)}</ul>
      </div>
    </div>
  );
}

function Leads() {
  return (
    <div className="space-y-4">
      <p className="rounded bg-amber-50 p-3 text-sm text-amber-900"><b>Note:</b> the 1998 guideline lists lead choice (polarity, fixation, steroid elution, impedance) and follow-up parameters but does not give acceptance values for implant. Items tagged <b>Practice</b> are general implant-practice reference ranges, not from the document — confirm against current HRS/ACC/AHA documents and the manufacturer's IFU.</p>
      {LEAD.map((g) => (
        <section key={g.title} className="rounded-lg border bg-white">
          <h3 className="border-b bg-slate-50 p-2 text-sm font-semibold">{g.title}</h3>
          <ul className="divide-y">{g.items.map((it) => (
            <li key={it.p} className="p-2 text-sm">
              <div className="flex items-center justify-between gap-2"><b>{it.p}</b><span className={`rounded px-1.5 text-xs ${it.src === "G" ? "bg-emerald-100 text-emerald-800" : "bg-slate-200 text-slate-700"}`}>{it.src === "G" ? "Guideline" : "Practice"}</span></div>
              <div className="text-slate-800">{it.v}</div><div className="text-slate-500">{it.why}</div>
            </li>))}</ul>
        </section>))}
    </div>
  );
}

function KB() {
  const [q, setQ] = useState("");
  const [paras, setParas] = useState<string[]>([]);
  useEffect(() => { fetch("/knowledge/guideline.txt").then((r) => r.text()).then((t) => setParas(t.split(/\n\s*\n/).map((p) => p.replace(/\s+/g, " ").trim()).filter((p) => p.length > 60))).catch(() => {}); }, []);
  const hits = useMemo(() => { const k = q.trim().toLowerCase(); return k.length < 3 ? [] : paras.filter((p) => p.toLowerCase().includes(k)).slice(0, 25); }, [q, paras]);
  return (
    <div className="space-y-3">
      <a className="block rounded bg-slate-800 p-3 text-center text-white" href="/knowledge/acc-aha-1998-pacemaker-guideline.pdf" target="_blank">Open source PDF: Gregoratos et al., Circulation 1998;97:1325-1335</a>
      <input className="w-full rounded border p-2" placeholder="Search the guideline text (e.g. HV interval, long QT, transplant)" value={q} onChange={(e) => setQ(e.target.value)} />
      {q.trim().length >= 3 && <p className="text-xs text-slate-500">{hits.length} passage(s)</p>}
      {hits.map((h, k) => <p key={k} className="rounded border bg-white p-2 text-sm">{h}</p>)}
      <p className="text-xs text-slate-500">Source document is kept in <code>public/knowledge/</code> (PDF + extracted text). Replace/add files there to extend the knowledge base.</p>
    </div>
  );
}

export default function Home() {
  const [tab, setTab] = useState<Tab>("Assessment");
  return (
    <main className="mx-auto max-w-2xl space-y-4 p-4">
      <header>
        <h1 className="text-xl font-bold">Cardiac Device Implant Assistant</h1>
        <p className="text-xs text-slate-500">Pacemaker &amp; ICD indications — ACC/AHA 1998 guideline knowledge base</p>
      </header>
      <p className="rounded border border-rose-300 bg-rose-50 p-2 text-xs text-rose-900">This guideline is from 1998 and has been superseded (e.g. ACC/AHA/HRS 2008 device guideline and later updates, the 2018 bradycardia guideline, and current ICD/CRT criteria). Use for education and reference only; verify against current guidelines before clinical decisions.</p>
      <nav className="flex gap-1 overflow-x-auto">{TABS.map((t) => <button key={t} onClick={() => setTab(t)} className={`whitespace-nowrap rounded-full border px-3 py-1 text-sm ${tab === t ? "bg-slate-800 text-white" : "bg-white"}`}>{t}</button>)}</nav>
      {tab === "Assessment" && <Assessment />}
      {tab === "Device selector" && <Device />}
      {tab === "Lead placement" && <Leads />}
      {tab === "Knowledge base" && <KB />}
    </main>
  );
}
