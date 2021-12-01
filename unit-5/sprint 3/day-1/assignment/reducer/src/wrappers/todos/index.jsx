import React, { useContext } from "react";
import TodoItem from "../../components/todo";
import TodoForm from "../../components/todoForm";
import TodosDispatch from "../../providers/todoProvider";
import { changeView } from "../../actions/todos";
import { List, Tabs } from "antd";

const TabPane = Tabs.TabPane;

export default function TodosWrapper(props) {
  const dispatch = useContext(TodosDispatch);
  const { todos, currentView } = props;

  const handleTabChange = value => {
    dispatch(changeView(value));
  };

  const filterTodos = type => {
    switch (type) {
      case "done":
        return todos.filter(todo => todo.isDone);
      case "pending":
        return todos.filter(todo => !todo.isDone);
      default:
        return todos;
    }
  };

  return (
    <React.Fragment>
      <TodoForm />
      <br />
      <Tabs defaultActiveKey="all" onChange={handleTabChange}>
        <TabPane tab={`All (${filterTodos("all").length})`} key="all" />
        <TabPane tab={`Done (${filterTodos("done").length})`} key="done" />
        <TabPane
          tab={`Pending (${filterTodos("pending").length})`}
          key="pending"
        />
      </Tabs>
      <List
        className="ul-todos"
        itemLayout="horizontal"
        bordered={true}
        dataSource={filterTodos(currentView)}
        renderItem={(todo, index) => (
          <TodoItem todo={todo} id={index} key={`todo_${index}`} />
        )}
        locale={{ emptyText: "No to-dos found." }}
      />
    </React.Fragment>
  );
}
