import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "./page/PublicLayout";
import AdminLayout from "./page/AdminLayout";
import Home from "./page/publicpage/Home";

import AboutMessage from "./page/publicpage/AboutMessage";
import AboutInfrastructure from "./page/publicpage/AboutInfrastructure";
import AboutLocation from "./page/publicpage/AboutLocation";
import History from "./page/publicpage/History";

import TrackingWaybill from "./page/publicpage/TrackingWaybill";
import TrackingNeighborhood from "./page/publicpage/TrackingNeighborhood";
import TrackingPickup from "./page/publicpage/TrackingPickup";
import Login from "./page/publicpage/Login";
import AdminLogin from "./page/publicpage/AdminLogin";

import ConsultingInfo from "./page/publicpage/ConsultingInfo";
import ConsultingApply from "./page/publicpage/ConsultingApply";

import SupportNotice from "./page/publicpage/SupportNotice";
import SupportNoticeDetail from "./page/publicpage/SupportNoticeDetail";
import SupportFaq from "./page/publicpage/SupportFaq";
import SupportClaim from "./page/publicpage/SupportClaim";
import SupportInquiry from "./page/publicpage/SupportInquiry";

import Dashboard from "./page/adminpage/Dashboard";
import LogisticsDock from "./page/adminpage/LogisticsDock";
import LogisticsControl from "./page/adminpage/LogisticsControl";
import LogisticsCS from "./page/adminpage/LogisticsCS";
import DeliveryDispatch from "./page/adminpage/DeliveryDispatch";
import DeliveryPickup from "./page/adminpage/DeliveryPickup";
import SystemHR from "./page/adminpage/SystemHR";
import SystemSettings from "./page/adminpage/SystemSettings";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin/login",
    element: <AdminLogin />,
  },
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      { index: true, element: <Home /> },
      
      { path: "about/message", element: <AboutMessage /> },
      { path: "about/infrastructure", element: <AboutInfrastructure /> },
      { path: "about/location", element: <AboutLocation /> },
      { path: "about/history", element: <History /> },

      { path: "tracking/waybill", element: <TrackingWaybill /> },
      { path: "tracking/neighborhood", element: <TrackingNeighborhood /> },
      { path: "tracking/pickup", element: <TrackingPickup /> },

      { path: "consulting/info", element: <ConsultingInfo /> },
      { path: "consulting/apply", element: <ConsultingApply /> },

      { path: "support/notice", element: <SupportNotice /> },
      { path: "support/notice/:id", element: <SupportNoticeDetail /> },
      { path: "support/faq", element: <SupportFaq /> },
      { path: "support/claim", element: <SupportClaim /> },
      { path: "support/inquiry", element: <SupportInquiry /> },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "logistics/dock", element: <LogisticsDock /> },
      { path: "logistics/control", element: <LogisticsControl /> },
      { path: "logistics/cs", element: <LogisticsCS /> },
      { path: "delivery/dispatch", element: <DeliveryDispatch /> },
      { path: "delivery/pickup", element: <DeliveryPickup /> },
      { path: "system/hr", element: <SystemHR /> },
      { path: "system/settings", element: <SystemSettings /> },
    ],
  },
]);

