import { useState } from "react";
import { animated as a, useTrail } from "react-spring";

import "./Header.scss";

const items = [
  "• Frontend React Developer specializing in scalable, business-critical applications",
  "• I work daily with React, TypeScript, advanced state management, and complex table logic",
  "• I lead frontend development and translate business requirements into clean, maintainable code",
  "• Background in architecture with a strong focus on UX/UI and system design",
];
const config = { mass: 5, tension: 3000, friction: 200 };

function TextTramsform() {
  const [toggle, set] = useState(true);
  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 0 : 1,
    x: toggle ? 20 : 0,
    height: toggle ? 0 : 90,
    from: { opacity: 20, x: 0, height: 0 },
  });

  return (
    <div onClick={() => set((state) => !state)}>
      <h3 className="head-text">About me</h3>
      <p className="p-info">
        {trail.map(({ x, height, ...rest }, index) => (
          <a.div
            key={items[index]}
            style={{
              ...rest,
              transform: x.interpolate((x) => `translate3d(0,${x}px,0)`),
            }}
          >
            <a.div style={{ height }}>
              <b>{items[index]}</b>
            </a.div>
          </a.div>
        ))}
      </p>
    </div>
  );
}

export default TextTramsform;
