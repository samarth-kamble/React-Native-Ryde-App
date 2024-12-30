import React from "react";

import { auth } from "@/auth";

const SettingsPage = async () => {
  const session = await auth();

  return <div>SettingsPage: {JSON.stringify(session)}</div>;
};

export default SettingsPage;
