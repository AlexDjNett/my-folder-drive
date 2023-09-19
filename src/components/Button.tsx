import React from "react";

export default function Button({ btnClass, title }: Button) {
  return <button className={`btn ${btnClass}`}>{title}</button>;
}
