import React from "react";

const CLOUDS = ["☀️", "⛅", "☁️", "🌧️", "🌨️"];

export default function CloudView({ cloud }) {
  return <div>
    {CLOUDS[cloud - 1]}  
    </div>;
}
