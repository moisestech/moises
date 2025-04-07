import dynamic from "next/dynamic";
import { Metadata } from "next";

const AIMarketingClient = dynamic(() => import("@/components/page/AIMarketingClient"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "The Art of AI Marketing | Moises Sanabria",
  description: "Learn how to stand out in the age of AI-generated content with our comprehensive workshop on AI marketing strategies.",
};

export default function AIMarketingPage() {
  return <AIMarketingClient />;
} 