import { render, screen } from "@testing-library/react";
import Header from "../Header";

// Get by
test("renders the same prop passed in header component", () => {
  render(<Header title={"My Prop"} />);
  const headerElement = screen.getByText(/my prop/i);
  expect(headerElement).toBeInTheDocument();
});

// it("renders the same prop passed in header component", () => {
//   render(<Header />);
//   const headerElement = screen.getByRole("heading");
//   expect(headerElement).toBeInTheDocument();
// });

it("renders the same prop passed in header component", () => {
  render(<Header title={"My Header"} />);
  const headerElement = screen.getByRole("heading", { name: "My Header" }); // get header with specific text only
  expect(headerElement).toBeInTheDocument();
});

it("renders the same prop passed in header component", () => {
  render(<Header />);
  const headerElement = screen.getByTitle("Header");
  expect(headerElement).toBeInTheDocument(headerElement);
});

it("renders the same prop passed in header component", () => {
  render(<Header />);
  const headerElement = screen.getByTestId("test");
  expect(headerElement).toBeInTheDocument();
});

it("renders the same prop passed in header component", () => {
  render(<Header />);
  const headerElements = screen.getAllByRole("heading");
  expect(headerElements.length).toBe(4);
});

// Find by
it("renders the same prop passed in header component", async () => {
  render(<Header title={"My Prop"} />);
  const headerElement = await screen.findByText(/my prop/i);
  expect(headerElement).toBeInTheDocument();
});

// Query by
it("renders the same prop passed in header component", () => {
  render(<Header />);
  const headerElement = screen.queryByText(/dogs/i);
  expect(headerElement).not.toBeInTheDocument();
});
