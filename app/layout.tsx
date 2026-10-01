import "./globals.css";
export const metadata = { title: "Cardiac Device Implant Assistant", description: "Pacemaker & ICD indication assessment, device selection and lead placement checks (ACC/AHA 1998 knowledge base)" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><head><meta name="viewport" content="width=device-width, initial-scale=1" /></head><body>{children}</body></html>);
}
