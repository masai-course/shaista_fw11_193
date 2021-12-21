import React, { useContext, useState } from "react";
import { Input, Button, Row, Col } from "antd";
import TodosDispatch from "../../providers/todoProvider.js";
import { add } from "../../actions/todos";

//const InputWithButton = Input.Search;

export default function TodoItem(props) {
  const dispatch = useContext(TodosDispatch);
  const [value, setValue] = useState("");

  const handleChange = e => {
    setValue(e.target.value);
  };
  const handleSubmit = () => {
    dispatch(add(value));
    setValue("");
  };

  return (
    <Row>
      <Col span={24}>
        <Input value={value} onChange={handleChange} style={{ width: "30%", marginLeft: "22%" }} />
        <Button
          onClick={handleSubmit}
          style={{ width: "10%", marginLeft: "1%" }}
          type="primary"
        >
          Add
        </Button>
      </Col>
    </Row>
  );
}
