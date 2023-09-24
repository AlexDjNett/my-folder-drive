import React from "react";

export default function Button({ btnClass, title, ...props }: Button) {
  return (
    <button className={`btn normal-case ${btnClass}`} {...props}>
      {title}
    </button>
  );
}
