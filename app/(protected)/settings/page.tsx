"use client";

import React from "react";

import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { logout } from "@/actions/logout";

const SettingsPage = () => {
  const session = useSession();

  const onClick = () => {
    logout();
  };

  return (
    <div>
      SettingsPage: {JSON.stringify(session)}
      <form>
        <button type="submit" onClick={onClick}>
          Sign Out
        </button>
      </form>
    </div>
  );
};

export default SettingsPage;
