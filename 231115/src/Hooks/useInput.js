import { useState } from "react";

//input 업데이트 하는 hook

const useInput = (initialValue, vaildator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    let willUpdate = true;
    if(typeof vaildator === "function") {
      willUpdate = vaildator(value); // 유효성 검사
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

// const App = () => {
//   const maxLen = (value) => value.length <= 10; 최대 길이 검사
//   const name =useInput("Mr.", maxLen);
//   return (
//     <div className="App">
//       <h1>Hello </h1>
//       <input placeholder="Name" {...name} />
//     </div>
//   );
// };

export default useInput;
