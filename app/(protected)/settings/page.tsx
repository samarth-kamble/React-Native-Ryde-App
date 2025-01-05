"use client";

import React from "react";

import { logout } from "@/actions/logout";
import { useCurrentUser } from "@/hooks/use-current-user";

const SettingsPage = () => {
  const user = useCurrentUser();

  const onClick = () => {
    logout();
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold">Settings</h1>
    </div>
  );
};

export default SettingsPage;
