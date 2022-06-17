import { useState, useEffect } from "react";
import Drag from "./Drag";
export default function DragLand() {
  const [ready, setReady] = useState<Boolean>(false);
  useEffect(() => {
    setReady(true);
  }, []);
  return <div>{ready ? <Drag /> : null}</div>;
}
