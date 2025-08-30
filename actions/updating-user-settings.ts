"use server";

import { UserSettings } from "@/types/user-settings";
import { createClient } from "@/utils/supabase/server";

const UpdatingUserSettings = async (formdata: FormData) => {
  const supabase = await createClient();

  const data = {
    fullName: formdata.get("fullName"),
    defaultView: formdata.get("defaultView"),
  };

  const validateData = UserSettings.safeParse(data);

  if (!validateData.success) throw new Error("Data is not valid!");

  const { error } = await supabase.auth.updateUser({
    data: {
      settings: data,
    },
  });

  if (error) {
    throw new Error("Unable to update your profile!");
  }
};

export default UpdatingUserSettings;
