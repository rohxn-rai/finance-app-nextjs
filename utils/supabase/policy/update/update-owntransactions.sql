create policy "update:owntransaction"
on "public"."transactions"
as PERMISSIVE
for UPDATE
to authenticated
using ( 
    user_id = auth.uid()
) with check (
    user_id = auth.uid()
);