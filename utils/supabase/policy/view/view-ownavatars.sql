CREATE POLICY "view:ownavatar 1rxe2x3_0" 
ON storage.objects FOR 
SELECT TO authenticated 
USING (
    bucket_id = 'finance-avatars'
);