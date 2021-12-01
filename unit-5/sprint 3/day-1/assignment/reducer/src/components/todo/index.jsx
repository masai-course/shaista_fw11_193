import React, { useContext } from "react";
import { List, Checkbox } from "antd";
import TodosDispatch from "../../providers/todoProvider.js";
import { toggleTodo, remove } from "../../actions/todos";

export default function TodoItem(props) {
  const dispatch = useContext(TodosDispatch);

  const {
    id,
    todo: { title, isDone }
  } = props;

  const handleStatus = () => {
    dispatch(toggleTodo(id));
  };

  const handleRemove = () => {
    dispatch(remove(id));
  };

  return (
    <List.Item
      data-item={id}
      className={isDone ? "done" : null}
      actions={[
        <a href="/" onClick={handleRemove}>
          Remove
        </a>
      ]}
    >
      <List.Item.Meta
        title={title}
        avatar={<Checkbox onChange={handleStatus} />}
      />
    </List.Item>
  );
}
