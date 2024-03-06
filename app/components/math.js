'use client';

import renderMathInElement from 'katex/dist/contrib/auto-render';
import 'katex/dist/katex.min.css';
import { useEffect, useRef } from 'react';

export default function Math({ text, ...delegated }) {

  const MathRef = useRef();

  useEffect(() => {
    if (MathRef.current) {
      renderMathInElement(MathRef.current, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false },
        ],
      });
    }
  }, [text]);

  return (
    <div ref={MathRef} {...delegated}>
      {text}
    </div>
  );
}