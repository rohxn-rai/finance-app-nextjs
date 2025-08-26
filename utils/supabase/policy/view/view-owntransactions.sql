alter policy "view:owntransactions"
on "public"."transactions"
to authenticated
using ((
    user_id = auth.uid()
  )
);
