'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './Loader.module.scss';

export const Loader = () => {
  const target1Ref = useRef<SVGLineElement | null>(null);
  const target2Ref = useRef<SVGLineElement | null>(null);
  const squareRef = useRef<SVGRectElement | null>(null);
  const textRef = useRef<SVGTextElement | null>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 0.5,
      defaults: { duration: 0.4, ease: 'power2.inOut' },
    });

    gsap.set(target1Ref.current, { rotation: 45, svgOrigin: '50 50' });
    gsap.set(target2Ref.current, { rotation: 135, svgOrigin: '50 50' });

    tl.to([target1Ref.current, target2Ref.current], { attr: { x2: 100 } })
      .to(target1Ref.current, { rotation: 0 }, 'turn')
      .to(target2Ref.current, { rotation: 180 }, 'turn')
      .to(target1Ref.current, { y: -10 }, 'move')
      .to(target2Ref.current, { y: 10 }, 'move')
      .to(squareRef.current, { attr: { height: 22, y: 38 } }, 'move')
      .to([target1Ref.current, target2Ref.current], {
        attr: { x1: 50, x2: 50 },
      })
      .to(textRef.current, { duration: 1, opacity: 0, ease: 'none' });
  }, []);

  return (
    <div className={styles.loaderWrapper}>
      <svg
        id="demo"
        xmlns="http://www.w3.org/2000/svg"
        width="400"
        height="200"
        viewBox="0 0 100 100"
      >
        <defs>
          <clipPath id="theClipPath">
            <rect
              ref={squareRef}
              id="theSquare"
              x="0"
              y="50"
              width="100"
              height="0"
            />
          </clipPath>
        </defs>

        <line
          ref={target1Ref}
          id="target1"
          x1="0"
          y1="50"
          x2="0"
          y2="50"
          strokeWidth="1"
          stroke="#fff"
        />
        <line
          ref={target2Ref}
          id="target2"
          x1="0"
          y1="50"
          x2="0"
          y2="50"
          strokeWidth="1"
          stroke="#fff"
        />

        <g clipPath="url(#theClipPath)">
          <text
            ref={textRef}
            transform="translate(50 55)"
            textAnchor="middle"
            fontSize="10"
            fontWeight="bold"
            fill="#fff"
          >
            NICE GADGETS 👌
          </text>
        </g>
      </svg>
    </div>
  );
};
