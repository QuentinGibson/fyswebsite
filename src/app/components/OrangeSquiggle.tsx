import clsx from "clsx";

interface OrangeSquiggleProps {
  className?: string;
}

export default function OrangeSquiggle({ className }: OrangeSquiggleProps) {
  return (
    <div
      className={clsx(
        "w-52 h-52 absolute -top-6 -left-6 -z-10 orange-squiggle-container",
        className
      )}>
      <div className="orange-squiggle h-full rounded-tl-full"></div>
    </div>
  );
}
