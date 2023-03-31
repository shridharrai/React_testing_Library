import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import TodoFooter from "../TodoFooter";

//Mocking a component
const MockToDoFooter = ({ numberOfIncompleteTasks }) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  );
};

it("should render the correct number of incomplete tasks", async () => {
  render(<MockToDoFooter numberOfIncompleteTasks={5} />);
  const paragraphEle = screen.getByText(/5 tasks left/i);
  expect(paragraphEle).toBeInTheDocument();
});

it("should render task when only one task is incomplete", () => {
  render(<MockToDoFooter numberOfIncompleteTasks={1} />);
  const paragraphEle = screen.getByText(/1 task left/i);
  expect(paragraphEle).toBeInTheDocument();
});

it("should check whether the number of task ele is visible to user or not", async () => {
  render(<MockToDoFooter numberOfIncompleteTasks={1} />);
  const paragraphEle = screen.getByText(/1 task left/i);
  expect(paragraphEle).toBeVisible();
});

it("should check whether the number of task ele is contained within p tag", () => {
  render(<MockToDoFooter numberOfIncompleteTasks={1} />);
  const paragraphEle = screen.getByText(/1 task left/i);
  expect(paragraphEle).toContainHTML("p");
});

it("assert the particular text to be present after getting an ele", () => {
  render(<MockToDoFooter numberOfIncompleteTasks={1} />);
  const paragraphEle = screen.getByTestId("para");
  expect(paragraphEle).toHaveTextContent("1 task left");
});

it("using not in assertion", () => {
  render(<MockToDoFooter numberOfIncompleteTasks={1} />);
  const paragraphEle = screen.getByTestId("para");
  expect(paragraphEle).not.toBeFalsy();
});

it("get the attributes of a ele", () => {
  render(<MockToDoFooter numberOfIncompleteTasks={1} />);
  const paragraphEle = screen.getByTestId("para");
  expect(paragraphEle.textContent).toBe("1 task left");
});
