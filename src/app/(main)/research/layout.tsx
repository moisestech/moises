import { ReactNode } from "react";

export default function ResearchLayout({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-7xl mx-auto px-4 pt-44 md:pt-52">
      {children}
    </div>
  );
}