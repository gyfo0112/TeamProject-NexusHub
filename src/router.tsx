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

import ConsultingContract from "./page/publicpage/ConsultingContract";
import ConsultingDriver from "./page/publicpage/ConsultingDriver";
import ConsultingWorker from "./page/publicpage/ConsultingWorker";

import SupportNotice from "./page/publicpage/SupportNotice";
import SupportFaq from "./page/publicpage/SupportFaq";
import SupportClaim from "./page/publicpage/SupportClaim";

export const router = createBrowserRouter([
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

      { path: "consulting/contract", element: <ConsultingContract /> },
      { path: "consulting/driver-recruit", element: <ConsultingDriver /> },
      { path: "consulting/worker-recruit", element: <ConsultingWorker /> },

      { path: "support/notice", element: <SupportNotice /> },
      { path: "support/faq", element: <SupportFaq /> },
      { path: "support/claim", element: <SupportClaim /> },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      // 어드민 하위 페이지들이 여기에 추가됩니다.
    ],
  },
]);

