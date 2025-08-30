"use server";

import { createClient } from "@/utils/supabase/server";

const UpdatingUserSettings = async (formdata: FormData) => {
  const supabase = await createClient();

  const { error } = await supabase.auth.updateUser({
    data: {
      fullName: formdata.get("fullName"),
      defaultView: formdata.get("defaultView"),
    },
  });

  if (error) {
    throw new Error("Unable to update your profile!");
  }
};

export default UpdatingUserSettings;
