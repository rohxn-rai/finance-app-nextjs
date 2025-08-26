create policy "add:owntransactions"
on "public"."transactions"
as PERMISSIVE
for INSERT
to authenticated
with check (
    true
);