import React, { Component } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { Container } from "semantic-ui-react";
//import { render } from "react-dom";

class App extends Component {
  state = { todos: [] };

  componentDidMount() {
    //  make a call to our rails server to get items
  }

  addItem = (name) => {};

  deleteTodo = (id) => {};

  render() {
    return (
      <Container style={{ padding: "30px 0" }}>
        <TodoForm addItem={this.addItem} />
        <br />
        <br />
        <TodoList
          todos={this.state.todos}
          updateTodo={this.updateTodo}
          deleteTodo={this.deleteTodo}
        />
      </Container>
    );
  }
}

export default App;
