import { RichTextField } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";

export default function Card({
  name,
  content,
  cardStyle,
}: {
  name: RichTextField;
  content: RichTextField;
  cardStyle: string;
}) {
  return (
    <div className={`px-6 py-4 absolute ${cardStyle}`}>
      <PrismicRichText field={name} />
      <PrismicRichText field={content} />
    </div>
  );
}
