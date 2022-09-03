import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "../components/layout";
import Settings from "../views/settings";

export default function AppRoutes() {
  return (
    <main>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/settings" element={<Settings />} />
        </Route>
        <Route path="/" element={<Navigate to="/settings" replace={true} />} />
      </Routes>
    </main>
  );
}
