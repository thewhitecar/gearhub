/* create table to store user information */

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    auth_id VARCHAR(60),
    name VARCHAR (60),
    email VARCHAR(60),
    picture VARCHAR(180)
);

/* create table to store gear data */

CREATE TABLE gear (
    id SERIAL PRIMARY KEY,
    owner_id INTEGER REFERENCES users (id),
    name VARCHAR (60),
    make VARCHAR (60),
    model VARCHAR (60),
    serial VARCHAR (80),
    condition VARCHAR (60),
    category VARCHAR (300),
    category_id INTEGER,
    categorySlug VARCHAR (60),
    description VARCHAR (1000),
    photo_url_1 VARCHAR (300),
    photo_url_2 VARCHAR (300),
    photo_url_3 VARCHAR (300),
    photo_url_4 VARCHAR (300)
);

/*create table to store image urls from amazons3*/
