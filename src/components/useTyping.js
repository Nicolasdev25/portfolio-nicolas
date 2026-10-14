import { useEffect, useState } from "react";

// Devolve o texto "sendo digitado" letra por letra.
// Com prefers-reduced-motion ativo, devolve o texto completo na hora.
export default function useTyping(text, { speed = 110, delay = 400 } = {}) {
  const [count, setCount] = useState(() =>
    matchMedia("(prefers-reduced-motion: reduce)").matches ? text.length : 0,
  );

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let i = 0;
    let timer;
    setCount(0);
    const tick = () => {
      i += 1;
      setCount(i);
      if (i < text.length) timer = setTimeout(tick, speed);
    };
    timer = setTimeout(tick, delay);
    return () => clearTimeout(timer);
  }, [text, speed, delay]);

  return text.slice(0, count);
}
