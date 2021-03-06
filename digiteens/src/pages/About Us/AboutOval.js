import React from "react";

const AboutOval = (props) => {
  return (
    <svg
      width="100vw"
      height="120vw"
      viewBox="0 0 1512 914"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <ellipse
        cx="838.804"
        cy="456.76"
        rx="872.269"
        ry="456.222"
        transform="rotate(1.0918 838.804 456.76)"
        fill="url(#paint0_radial_46_171)"
      />
      <defs>
        <radialGradient
          id="paint0_radial_46_171"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(838.804 456.76) rotate(91.4581) scale(556.037 1057.55)"
        >
          <stop stopColor="#106466" />
          <stop offset="0.755208" stopColor="#715085" stopOpacity="0.046875" />
          <stop offset="0.942708" stopColor="#0FEFBD" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default AboutOval;
