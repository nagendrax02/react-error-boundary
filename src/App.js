import "./styles.css";
import { useState } from "react";

import ErrorBoundary from "./components/error-boundary/ErrorBoundary";
import Login from "./components/login/Login";

export default function App() {
  const [todos, setTodos] = useState("workout");

  return (
    <div className="App">
      <ErrorBoundary>
        <Login />
      </ErrorBoundary>
    </div>
  );
}
