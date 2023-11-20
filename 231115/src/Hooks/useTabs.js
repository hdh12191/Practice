import { useState } from "react";


// const content = [
//   {
//     tab: "Section 1",
//     content: "I'm the content of the Sectioin 1",
//   },
//   {
//     tab: "Section 2",
//     content: "I'm the content of the Sectioin 2",
//   },
// ];

// const App = () => {
//   const { currentItem, changeItem} = useTabs(0, content);

//   return (
//     <div className="App">
//       {content.map((section, index) => (
//         <button onClick={() => changeItem(index)}>{section.tab}</button>
//       ))}
//       <div>{currentItem.content}</div>
//     </div>
//   );
// };

const useTabs = (initalTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initalTab);
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex
  };
};

export default useTabs;
