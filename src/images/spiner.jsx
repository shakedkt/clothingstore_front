import React from "react";

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ margin: "auto", background: "none" }}
      width="200"
      height="200"
      display="block"
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 100 100"
    >
      <g transform="translate(79 50)">
        <circle r="6" fill="#00458b">
          <animateTransform
            attributeName="transform"
            begin="-0.875s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            type="scale"
            values="1 1;1 1"
          ></animateTransform>
          <animate
            attributeName="fill-opacity"
            begin="-0.875s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            values="1;0"
          ></animate>
        </circle>
      </g>
      <g transform="translate(70.506 70.506) rotate(45)">
        <circle r="6" fill="#00458b" fillOpacity="0.875">
          <animateTransform
            attributeName="transform"
            begin="-0.75s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            type="scale"
            values="1 1;1 1"
          ></animateTransform>
          <animate
            attributeName="fill-opacity"
            begin="-0.75s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            values="1;0"
          ></animate>
        </circle>
      </g>
      <g transform="translate(50 79) rotate(90)">
        <circle r="6" fill="#00458b" fillOpacity="0.75">
          <animateTransform
            attributeName="transform"
            begin="-0.625s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            type="scale"
            values="1 1;1 1"
          ></animateTransform>
          <animate
            attributeName="fill-opacity"
            begin="-0.625s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            values="1;0"
          ></animate>
        </circle>
      </g>
      <g transform="translate(29.494 70.506) rotate(135)">
        <circle r="6" fill="#00458b" fillOpacity="0.625">
          <animateTransform
            attributeName="transform"
            begin="-0.5s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            type="scale"
            values="1 1;1 1"
          ></animateTransform>
          <animate
            attributeName="fill-opacity"
            begin="-0.5s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            values="1;0"
          ></animate>
        </circle>
      </g>
      <g transform="translate(21 50) rotate(180)">
        <circle r="6" fill="#00458b" fillOpacity="0.5">
          <animateTransform
            attributeName="transform"
            begin="-0.375s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            type="scale"
            values="1 1;1 1"
          ></animateTransform>
          <animate
            attributeName="fill-opacity"
            begin="-0.375s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            values="1;0"
          ></animate>
        </circle>
      </g>
      <g transform="translate(29.494 29.494) rotate(225)">
        <circle r="6" fill="#00458b" fillOpacity="0.375">
          <animateTransform
            attributeName="transform"
            begin="-0.25s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            type="scale"
            values="1 1;1 1"
          ></animateTransform>
          <animate
            attributeName="fill-opacity"
            begin="-0.25s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            values="1;0"
          ></animate>
        </circle>
      </g>
      <g transform="translate(50 21) rotate(270)">
        <circle r="6" fill="#00458b" fillOpacity="0.25">
          <animateTransform
            attributeName="transform"
            begin="-0.125s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            type="scale"
            values="1 1;1 1"
          ></animateTransform>
          <animate
            attributeName="fill-opacity"
            begin="-0.125s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            values="1;0"
          ></animate>
        </circle>
      </g>
      <g transform="translate(70.506 29.494) rotate(315)">
        <circle r="6" fill="#00458b" fillOpacity="0.125">
          <animateTransform
            attributeName="transform"
            begin="0s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            type="scale"
            values="1 1;1 1"
          ></animateTransform>
          <animate
            attributeName="fill-opacity"
            begin="0s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            values="1;0"
          ></animate>
        </circle>
      </g>
    </svg>
  );
}

export default Icon;
