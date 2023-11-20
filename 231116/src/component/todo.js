import { createStore } from "redux";

{/* <title>Vanilla Redux</title>
  </head>
  <body>
    <h1>To Dos</h1>
    <form>
      <input type="text" placeholder="Write to do" />
      <button>Add</button>
    </form>
    <ul></ul>
  </body>
</html> */}

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const reducer = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TODO:
      return [];
    case DELETE_TODO:
      return [];
    default:
      return state;
  }
};

const store = createStore(reducer);