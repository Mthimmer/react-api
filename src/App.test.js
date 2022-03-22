import { render, screen } from "@testing-library/react";
import App from "./App";
import Body from "./components/Body.js";

test("renders learn react link", () => {
  render(<App />);
  render(<Body />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
