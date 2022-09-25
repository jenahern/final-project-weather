import React from "react";

const CLOUDS = ["☀️", "⛅", "☁️", "🌧️", "🌨️"];

export default function CloudSelect({ value, onChange }) {
  return (
    <div>
      {CLOUDS.map((cloud, index) => (
        <button
          key={cloud}
          type="button"
          onClick={() => onChange(index + 1)}
          className={
            index === value - 1 ? "btn btn-primary" : "btn btn-outline-primary"
          }
        >
          {cloud}
        </button>
      ))}
    </div>
  );
}
