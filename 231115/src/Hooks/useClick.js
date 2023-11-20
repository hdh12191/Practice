// const App = () => {
//   const potato = useRef();
//   setTimeout(() => potato.current?.focus(), 5000);
//   return (
//     <div>
//       <div>hi</div>
//       <input ref={potato} placeholder="la" />
//     </div>
//   );
// };

// const App = () => {
//   const sayHello = () => console.log("say Hello");
//   const title = useClick(sayHello);

//   return (
//     <div>
//       <h1 ref={title}>Hi</h1>
//     </div>
//   );
// };


const useClick = (onClick) => {
 
  const element = useRef();
  useEffect(() => {
    if(typeof onClick !== "function") {
      return;
    }
    const eleCurrent = element.current;
    if (eleCurrent) {
      eleCurrent.addEventListener("click", onClick);
    }
    return () => {
      if (eleCurrent) {
        eleCurrent.removeEventListener("click", onClick);
      }
    };
  }, [onClick]);
  return element;
};