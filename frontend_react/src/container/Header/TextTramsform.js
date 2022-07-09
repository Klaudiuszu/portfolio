import React, { useState } from "react";
import { render } from "react-dom";
import { useTrail, animated as a } from "react-spring";

import './Header.scss';

const items = ["• after work i make sketches", "• Now i am Fullstack Developer", "• before i start my journey with programming i have studied architecture", "• and Occasionally i am graphic designer"];
const config = { mass: 5, tension: 3000, friction: 200 };

function TextTramsform() {
  const [toggle, set] = useState(true);
  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 0 : 1,
    x: toggle ? 20 : 0,
    height: toggle ? 0 : 90,
    from: { opacity: 20, x: 0, height: 0 }
  });

  return (
    <div onClick={() => set(state => !state)}>
    <h3 className="head-text">About me</h3>
      <p className="p-info">
        {trail.map(({ x, height, ...rest }, index) => (
          <a.div
            key={items[index]}
            style={{
              ...rest,
              transform: x.interpolate(x => `translate3d(0,${x}px,0)`)
            }}
          >
            <a.div style={{ height }}><b>{items[index]}</b></a.div>
          </a.div>
        ))}
      </p>
    </div>
  );
}

export default TextTramsform;