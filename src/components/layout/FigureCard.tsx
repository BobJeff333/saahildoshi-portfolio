import NextImage from 'next/image';

export type FigureCardProps = {
  src: string;
  caption: string;
  ratio?: string; // e.g. "330/230"
  portrait?: boolean;
  landscape?: boolean;
  wide?: boolean;
  ultraWide?: boolean;
};

export function FigureCard({
  src,
  caption,
  ratio,
  portrait,
  landscape,
  wide,
  ultraWide,
}: FigureCardProps) {
  // Determine aspect ratio
  let aspectClass = "aspect-video"; // default

  if (ratio) {
    const [w, h] = ratio.split("/").map(Number);
    aspectClass = `aspect-[${w}/${h}]`;
  }

  if (portrait) aspectClass = "aspect-[3/4]";
  if (landscape) aspectClass = "aspect-video";
  if (wide) aspectClass = "aspect-[5/2]";
  if (ultraWide) aspectClass = "aspect-[8/1]";

  return (
    <figure className="flex flex-col overflow-hidden border border-white/10 bg-surface/70">
      <div className={`relative w-full overflow-hidden ${aspectClass}`}>
        <NextImage
          src={src}
          alt={caption}
          fill
          className="object-contain p-5"
          sizes="(min-width: 1024px) 33vw, 100vw"
        />
      </div>
      <figcaption className="border-t border-white/10 px-5 py-4 font-mono text-xs leading-5 text-primary-foreground/60">
        {caption}
      </figcaption>
    </figure>
  );
}
