interface ProseProps {
  children: React.ReactNode;
}

export default function Prose({ children }: ProseProps) {
  return (
    <div className="prose-p:text-md prose mx-auto mt-16 lg:prose-xl prose-img:mx-auto prose-img:aspect-auto prose-img:h-auto prose-img:w-auto prose-img:rounded-md">
      {children}
    </div>
  );
}
