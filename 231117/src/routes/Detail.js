import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

function Detail() {
  const myId = useParams().id;
  const toDo = toDos.find((toDo) => toDo.id === parseInt(myId));
  return (
    <h1>
      {toDo?.text}
      Created at: {toDo?.id}
    </h1>
  );
}

function mapStateToProps(state, ownProps) {
  return { toDos: state };
}

export default connect(mapStateToProps)(Detail);
