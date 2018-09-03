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

/* made changes! */

CREATE TABLE gear (
    id SERIAL PRIMARY KEY,
    owner_id INTEGER REFERENCES users (id),
    name VARCHAR (60), /*deleted*/ 
    make VARCHAR (60),
    model VARCHAR (60),
    serial VARCHAR (80),
    condition VARCHAR (60),
    categorydisplay VARCHAR (80), /*added*/
    category VARCHAR (300),
    category_id INTEGER,
    categoryslug VARCHAR (60),
    description VARCHAR (1000),
    photo_url_1 VARCHAR (300),
    photo_url_2 VARCHAR (300),
    photo_url_3 VARCHAR (300),
    photo_url_4 VARCHAR (300)
);


create table avatars (
avatar_id serial primary key,
owner_id integer references users (id),
avatar_url varchar(400)
)

/* the above table is used to render an avatar in the sidedrawer component */

