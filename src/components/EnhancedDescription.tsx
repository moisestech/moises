import { InteractiveContent } from '@/constants/research';
import InteractiveText from '@/components/InteractiveText';

interface EnhancedDescriptionProps {
  description: string;
  interactiveContent: InteractiveContent[];
}

export default function EnhancedDescription({
  description,
  interactiveContent,
}: EnhancedDescriptionProps) {
  let enhancedText = description;

  // Sort interactive content by text length (longest first) to avoid nested replacements
  const sortedContent = [...interactiveContent].sort(
    (a, b) => b.text.length - a.text.length
  );

  // Replace each interactive text instance with a marker
  sortedContent.forEach((content, index) => {
    enhancedText = enhancedText.replace(content.text, `|||${index}|||`);
  });

  // Split by markers and map to components
  const parts = enhancedText.split('|||');

  return (
    <p className="text-lg leading-relaxed">
      {parts.map((part, index) => {
        const contentIndex = parseInt(part);
        if (!isNaN(contentIndex)) {
          const content = sortedContent[contentIndex];
          return (
            <InteractiveText
              key={index}
              type={content.type}
              content={content.content}
            >
              {content.text}
            </InteractiveText>
          );
        }
        return <span key={index}>{part}</span>;
      })}
    </p>
  );
} 