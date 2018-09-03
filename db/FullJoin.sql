SELECT
avatar_url
FROM
avatars
FULL JOIN users u ON u.id = avatars.owner_id 
WHERE u.id = $1