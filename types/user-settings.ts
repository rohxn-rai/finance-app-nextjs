import z from "zod";

import { FILTERBYTIME } from "@/constants/all-consts";
import type { FilterByTime } from "@/types/transaction";

export type GetUpdatedSetings = {
  fullName?: string;
  defaultView?: FilterByTime;
};

export const UserSettings = z.object({
  fullName: z.string().min(3, "Display name can not be less than 3 characters"),
  defaultView: z.enum(FILTERBYTIME, "Choose from the options given below"),
});

export type UpdateUserSettings = z.infer<typeof UserSettings>;
