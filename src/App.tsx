import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import "./App.css"; // 필요하다면 유지

export default function App() {
  return <RouterProvider router={router} />;
}
