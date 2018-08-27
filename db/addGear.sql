INSERT INTO gear (owner_id, name, make, model, serial, condition, category, category_id, categorySlug, description, photo_url_1, photo_url_2, photo_url_3, photo_url_4)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
RETURNING *;



-- CREATE TABLE gear (
--     id SERIAL PRIMARY KEY,
--     owner_id INTEGER REFERENCES users (id),
--     name VARCHAR (60),
--     make VARCHAR (60),
--     model VARCHAR (60),
--     serial VARCHAR (80),
--     condition VARCHAR (60),
--     category VARCHAR (300),
--     category_id INTEGER,
--     categorySlug VARCHAR (60),
--     description VARCHAR (1000),
--     photo_url_1 VARCHAR (300) REFERENCES images (image_url_1),
--     photo_url_2 VARCHAR (300) REFERENCES images (image_url_2),
--     photo_url_3 VARCHAR (300) REFERENCES images (image_url_3),
--     photo_url_4 VARCHAR (300) REFERENCES images (image_url_4),
-- );


