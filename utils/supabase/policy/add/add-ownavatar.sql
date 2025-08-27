CREATE POLICY "add:ownavatar 1rxe2x3_0" 
ON storage.objects FOR 
INSERT TO authenticated 
WITH CHECK (
    bucket_id = 'finance-avatars'
);