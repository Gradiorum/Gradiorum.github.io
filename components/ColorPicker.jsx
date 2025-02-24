import { useState } from "react";

export default function ColorPicker({ currentColor, onChange }) {
  const [color, setColor] = useState(currentColor);

  const handleChange = (e) => {
    setColor(e.target.value);
    onChange(e.target.value);
  };

  return (
    <input
      type="color"
      value={color}
      onChange={handleChange}
      className="w-16 h-10 p-0 border-0"
    />
  );
}
