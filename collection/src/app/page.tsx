'use client'

import { useState } from "react";

export default function Home() {
  const [display, setDisplay] = useState(true);
  return <>
  {display && <div>User wants me to be seen!</div>}
  <button type="button" onClick={() => setDisplay(prev => !prev)}>Toggle</button>
  </>;
}
