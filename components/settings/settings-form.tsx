"use client";

import React, { useState } from "react";

import type { UserMetadata } from "@supabase/supabase-js";

import type { FilterByTime } from "@/types/transaction";
import { UserSettings, type UpdateUserSettings } from "@/types/user-settings";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";

import { useForm, type Resolver, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import UpdatingUserSettings from "@/actions/updating-user-settings";

const SettingsForm = ({
  defaults,
}: {
  defaults:
    | (UserMetadata & { fullName: string; defaultView: FilterByTime })
    | null;
}) => {
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const form = useForm<UpdateUserSettings, object, UpdateUserSettings>({
    resolver: zodResolver(UserSettings) as Resolver<
      UpdateUserSettings,
      object,
      UpdateUserSettings
    >,
    mode: "all",
    defaultValues: {
      fullName: defaults?.fullName ?? "",
      defaultView: defaults?.defaultView ?? undefined,
    },
    reValidateMode: "onChange",
  });

  const onSubmit: SubmitHandler<UpdateUserSettings> = async (
    data: UpdateUserSettings
  ) => {
    setIsSaving(true);
    toast.loading("Saving ...", { id: "update:ownuserdata" });
    try {
      const formData = new FormData();
      formData.append("fullName", data.fullName);
      formData.append("defaultView", data.defaultView);
      UpdatingUserSettings(formData);
      toast.success("Your profile has been updated!");
    } catch (err) {
      console.log(err);
      toast.error(
        err instanceof Error ? err.message : "An unexpected error occurred"
      );
    }
    toast.dismiss("update:ownuserdata");
    setIsSaving(false);
  };

  return (
    <Form {...form}>
      <form className="grid gap-4" onSubmit={form.handleSubmit(onSubmit)}>
        <>
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-1">
                <FormLabel htmlFor="fullName" className="gap-1">
                  Display name<span className="text-destructive">*</span>
                </FormLabel>
                <Input
                  id="fullName"
                  type="text"
                  {...field}
                  placeholder="Enter your display name ..."
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="defaultView"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-1">
                <Label htmlFor="defaultView" className="gap-1">
                  Default view<span className="text-destructive">*</span>
                </Label>
                <Select
                  {...field}
                  onValueChange={(value: FilterByTime) => {
                    field.onChange(value);
                  }}
                >
                  <SelectTrigger id="defaultView" name="defaultView">
                    <SelectValue placeholder="Select Filter by time ..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="last24hours">Last 24 hours</SelectItem>
                    <SelectItem value="last7days">Last 7 days</SelectItem>
                    <SelectItem value="last30days">Last 30 days</SelectItem>
                    <SelectItem value="last3months">Last 3 months </SelectItem>
                    <SelectItem value="last12months">Last 12 months</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isSaving}>
            {isSaving ? "Saving ..." : "Save Changes"}
          </Button>
        </>
      </form>
    </Form>
  );
};

export default SettingsForm;
