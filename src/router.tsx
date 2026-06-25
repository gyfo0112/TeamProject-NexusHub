import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "./page/PublicLayout";
import Home from "./page/publicpage/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      { index: true, element: <Home /> },
      // 추후 Tracking, Login 등 다른 퍼블릭 페이지 라우트도 여기에 추가합니다.
    ],
  },
  // 추후 AdminLayout 및 ProtectedRoute를 사용하는 /admin 라우트도 여기에 추가합니다.
]);

