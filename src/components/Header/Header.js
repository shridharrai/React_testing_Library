import React from "react";
import "./Header.css";

export default function Header({ title }) {
  return (
    <>
      <h1 className="header">{title}</h1>
      <h2>Cats</h2>
      <h3 title="Header">My Test</h3>
      <h4 data-testid="test">By Test ID</h4>
    </>
  );
}
