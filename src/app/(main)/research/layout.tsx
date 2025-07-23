import { ReactNode } from "react";

export default function ResearchLayout({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-7xl mx-auto px-4 pt-40">
      {children}
    </div>
  );
}