import * as React from "react";

function SvgStar(props) {
  return (
    <svg viewBox="0 0 512 512" width="1em" height="1em" {...props}>
      <path fill={props.color} d="M512 197.816l-186.039-12.231L255.898 9.569l-70.063 176.016L0 197.816l142.534 121.026-46.772 183.589L255.898 401.21l160.137 101.221-46.772-183.589z" />
    </svg>
  );
}

export default SvgStar;