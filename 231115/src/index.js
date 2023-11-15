import React from "react";
import ReactDOM from "react-dom/client";
import useTabs from "./Hooks/useTabs";

const content = [
  {
    tab: "Section 1",
    content: "I'm the content of the Sectioin 1",
  },
  {
    tab: "Section 2",
    content: "I'm the content of the Sectioin 2",
  },
];

const App = () => {
  const { currentItem } = useTabs(0, content);

  return (
    <div className="App">
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
