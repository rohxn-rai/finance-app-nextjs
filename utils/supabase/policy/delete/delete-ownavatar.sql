CREATE POLICY "delete:ownavatar 1rxe2x3_0" 
ON storage.objects FOR 
DELETE TO authenticated 
USING (
    bucket_id = 'finance-avatars' and 
    auth.uid()::text = owner_id
);