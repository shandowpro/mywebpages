// This is the main file of the all project :

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// import Dashboard from './page/dashboard/Dashboard';
import Dashboard from "./page/dashboard/Dashboard";
import Team from "./page/team/Team";
import Contacts from "./page/contact/Contacts";
import Invoices from "./page/invoices/Invoices";
import Form from "./page/form/Form";
import Calendar from "./page/calendar/Calendar";
import BarChart from "./page/barChart/BarChart";
import PieChart from "./page/pieChart/PieChart";
import LineChart from "./page/lineChart/LineChart";
// import Geographyhy  from './page/geography/Geography';
 
import FAQ from "./page/faq/FAQ";
import { Geography } from './page/geography/Geography';

// <Route path="geoChart"  element={<LineChart />} />

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index  element={<Dashboard />} />
      <Route path="team"  element={<Team />} />
      <Route path="contact"  element={<Contacts />} />
      <Route path="invoices"  element={<Invoices />} />
      <Route path="form"  element={<Form />} />
      <Route path="calendar"  element={<Calendar />} />
      <Route path="faq"  element={<FAQ />} />
      <Route path="barChart"  element={<BarChart />} />
      <Route path="pieChart"  element={<PieChart />} />
      <Route path="lineChart"  element={<LineChart />} />
      <Route path="geography"  element={<Geography />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
