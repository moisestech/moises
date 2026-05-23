function Paragraphs({ text, className }: { text: string; className?: string }) {
  return (
    <>
      {text.split('\n\n').map((para, i) => (
        <p key={i} className={className}>
          {para}
        </p>
      ))}
    </>
  );
}

export { Paragraphs };
