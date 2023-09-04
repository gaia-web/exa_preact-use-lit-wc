import "./app.css";
import Router from "preact-router";
import HomePage from "./pages/home.page";
import OtherPage from "./pages/other.page";

export function App() {
  return (
    <Router>
      <HomePage path="/" />
      <OtherPage path="/:who" />
    </Router>
  );
}
