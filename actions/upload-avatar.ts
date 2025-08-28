"use server";

import { createClient } from "@/utils/supabase/server";

import type { UUID } from "crypto";

/**
 * The `uploadAvatar` function in TypeScript uploads a user's avatar image to a Supabase storage,
 * associates it with the user, and removes any previous avatar.
 * @param {FormData} formdata - The `uploadAvatar` function you provided is responsible for uploading a
 * user's avatar image to a Supabase storage bucket and associating it with the user's profile. Here's
 * a breakdown of the function:
 */
const uploadAvatar = async (formdata: FormData) => {
  const file = formdata.get("avatar") as File;

  if (file.size > 2 * 1024 * 1024)
    throw new Error("File size is bigger than 2 MB!");

  const fileExt = file?.name.split(".").pop();
  if (
    fileExt !== "jpeg" &&
    fileExt !== "png" &&
    fileExt !== "webp" &&
    fileExt !== "jpg"
  )
    throw new Error("File Type did not match!");

  const supabase = await createClient();

  const { data: userData, error: userDataError } =
    await supabase.auth.getUser();
  if (userDataError) throw new Error("Unable to find the user!");

  const userId = userData.user.id as UUID;

  const fileName = `${userId}.${fileExt}`;

  /* This block of code is responsible for removing the previous avatar associated with the user before
  uploading a new one. */
  const avatar = userData.user.user_metadata.avatar;
  if (avatar) {
    const { error } = await supabase.storage
      .from("finance-avatars")
      .remove([avatar]);

    if (error) {
      console.log(error);
      throw new Error("Unabled to remove your previous avatar");
    }
  }

  const { error: uploadError } = await supabase.storage
    .from("finance-avatars")
    .upload(fileName, file);

  if (uploadError) {
    console.log(uploadError);
    throw new Error("Error uploading avatar!");
  }

  const { error: dataUpdateError } = await supabase.auth.updateUser({
    data: {
      avatar: fileName,
    },
  });

  if (dataUpdateError)
    throw new Error("Error associating the avatar with the user!");
};

export default uploadAvatar;
