import { forwardRef } from "react";
import clsx from "clsx";

interface OrangeSquiggleAltProps {
  className?: string;
}

const OrangeSquiggleAlt = forwardRef<HTMLDivElement, OrangeSquiggleAltProps>(
  ({ className }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          "w-52 h-52 absolute -top-6 -left-6 -z-10 orange-squiggle-container",
          className
        )}>
        <div className="orange-squiggle h-full rounded-tl-full"></div>
      </div>
    );
  }
);

OrangeSquiggleAlt.displayName = "OrangeSquiggleAlt";

export default OrangeSquiggleAlt;
