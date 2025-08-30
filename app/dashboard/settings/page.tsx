import SettingsForm from "@/components/settings/settings-form";
import type { FilterByTime } from "@/types/transaction";
import { createClient } from "@/utils/supabase/server";
import type { UserMetadata } from "@supabase/supabase-js";

const SettingsLandingPage = async () => {
  const supabase = await createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  let defaults:
    | (UserMetadata & { fullName: string; defaultView: FilterByTime })
    | null = null;

  if (!error) {
    defaults = user!.user_metadata as UserMetadata & {
      fullName: string;
      defaultView: FilterByTime;
    };
  }
  return (
    <>
      <h1 className="text-2xl font-semibold">Settings</h1>
      <SettingsForm defaults={defaults} />
    </>
  );
};

export default SettingsLandingPage;
