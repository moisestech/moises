import { research } from '@/constants/research';
import { notFound } from 'next/navigation';
import EnhancedDescription from '@/components/EnhancedDescription';
import { Metadata } from 'next';

type Props = {
  params: { slug: string }
};

// Proper metadata export
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const item = research[params.slug];
  
  if (!item) {
    return {
      title: 'Not Found',
    };
  }

  return {
    title: item.title,
    description: item.description,
  };
}

// Main page component
export default function ResearchPage({ params }: Props) {
  const item = research[params.slug];

  if (!item) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-6 pt-44 pb-12">
      <h1 className="text-4xl font-bold mb-8">{item.title}</h1>
      <EnhancedDescription
        description={item.description}
        interactiveContent={item.interactiveContent}
      />
    </div>
  );
}

// Static params generator
export function generateStaticParams() {
  return Object.keys(research).map((slug) => ({
    slug,
  }));
}
