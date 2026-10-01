# Cardiac Device Implant Assistant
Next.js 14 + TypeScript + Tailwind. Knowledge base: ACC/AHA 1998 Guidelines for Implantation of Cardiac Pacemakers and Antiarrhythmia Devices (Executive Summary), `public/knowledge/`.

Tabs: indication assessment (Class I/IIa/IIb/III + level of evidence), generator selector (1998 Table, Fig 1-2), lead-placement checks, searchable knowledge base.

## Deploy
```bash
npm install && npm run dev
gh repo create shivesh2334-ai/cardiac-device-implant-assistant --public --source=. --push
npx vercel --prod      # or import the repo at vercel.com/new (region bom1 set in vercel.json)
```
Educational reference only; the 1998 guideline is superseded by current ACC/AHA/HRS guidance.
