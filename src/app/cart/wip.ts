//*TODO: Узнать у Димы нужна ли эта логика здесь и не стоит ли его перенести в компонент AddButton

// const cartRef = useRef<HTMLDivElement>(null);
// const checkoutBtnRef = useRef<HTMLButtonElement>(null);

// useEffect(() => {
//   if (cartRef.current) {
//     gsap.fromTo(
//       cartRef.current,
//       { opacity: 0, y: 50 },
//       { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
//     );
//   }

//   if (checkoutBtnRef.current) {
//     gsap.fromTo(
//       checkoutBtnRef.current,
//       { scale: 0.8, opacity: 0 },
//       {
//         scale: 1,
//         opacity: 1,
//         duration: 0.5,
//         delay: 0.5,
//         ease: 'back.out(1.7)',
//       },
//     );
//   }
// }, []);
