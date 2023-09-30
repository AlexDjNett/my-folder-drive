import React from "react";

export default function ButtonDefault({
  btnClass,
  title,
  ...props
}: ButtonDefault) {
  return (
    <button className={`btn normal-case ${btnClass}`} {...props}>
      {title}
    </button>
  );
}
