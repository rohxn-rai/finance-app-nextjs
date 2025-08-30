import SettingsForm from "@/components/settings/settings-form";
import type { GetUpdatedSetings } from "@/types/user-settings";
import { createClient } from "@/utils/supabase/server";

const SettingsLandingPage = async () => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const defaults: GetUpdatedSetings = user?.user_metadata?.settings ?? {};

  return (
    <>
      <h1 className="text-2xl font-semibold">Settings</h1>
      <SettingsForm defaults={defaults} />
    </>
  );
};

export default SettingsLandingPage;
