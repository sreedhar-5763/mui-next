import * as React from "react";
import Link from "next/link";
import type { LinkProps } from "next/link";

const LinkBehavior = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (props, ref) => {
    return <Link ref={ref} {...props} />;
  }
);

LinkBehavior.displayName = "LinkBehavior";

export default LinkBehavior;
