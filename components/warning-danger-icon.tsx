import React from "react";

interface IconProps {
  height?: string;
  width?: string;
  type?: "danger" | "warning"; // We can specify the type as "danger" or "warning"
}

export function WarningDangerIcon({ height, width, type }: IconProps) {
  // Set the fill color dynamically based on the type
  const fillColor = type === "danger" ? "red" : "yellow"; // Danger uses red, warning uses yellow

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      width={width}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g>
        {/* Draw triangle with a black border */}
        <polygon
          points="12,2 22,20 2,20"
          fill={fillColor}
          stroke="black" // Add black border
          strokeWidth="1" // Set border thickness
        />
        {/* Add exclamation mark inside the triangle */}
        <text
          x="12"
          y="16"
          fontSize="10"
          textAnchor="middle"
          dy=".3em"
          fill={type === "danger" ? "white" : "black"}
        >
          !
        </text>
      </g>
    </svg>
  );
}
