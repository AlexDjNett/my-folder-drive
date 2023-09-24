import React from "react";

export default function Button({ btnClass, title, ...props }: Button) {
  return (
    <button className={`btn ${btnClass}`} {...props}>
      {title}
    </button>
  );
}
