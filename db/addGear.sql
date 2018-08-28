INSERT INTO gear (owner_id, make, model, serial, condition, categorydisplay, category, category_id, categorySlug, description, photo_url_1, photo_url_2, photo_url_3, photo_url_4)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
RETURNING *;