alter policy "delete:owntransactions"
on "public"."transactions"
to authenticated
using (
    user_id = auth.uid()
);