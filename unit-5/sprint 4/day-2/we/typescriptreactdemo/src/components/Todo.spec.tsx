import {render, screen, fireEvent} from "@testing-library/react";
import {Todo} from "./Todo";
test("todos in document", function(){
    const {container} = render(<Todo/>)
    expect(container).toMatchSnapshot()
})