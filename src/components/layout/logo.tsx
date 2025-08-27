import * as React from "react";

const Logo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    width="1.em"
    height="1.em"
    {...props}
  >
    <path
      fill="currentColor"
      d="M171.84 220.49l-50.5-87.47-50.5 87.47H21.34l94.5-163.68h44.32l50.5 87.47L234.66 56.81h49.5l-94.5 163.68z"
    />
  </svg>
);

export default Logo;
