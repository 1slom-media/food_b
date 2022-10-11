CREATE DATABASE food_b;
\c food_b;

CREATE TABLE IF NOT EXISTS admins(
    admin_id serial primary key,
    username varchar(32) not null,
    password varchar(60) not null,
    admin_img text not null
);


CREATE TABLE IF NOT EXISTS categories(
    category_id serial primary key,
    category_name varchar(30) not null,
    status varchar(15) default 'active',
    created_at timestamp default current_timestamp
);

CREATE TABLE IF NOT EXISTS products(
    product_id serial primary key,
    product_name varchar(90) not null,
    product_img text not null,
    description text not null,
    price decimal(8,2) not null,
    category_id int references categories(category_id),
    status varchar(15) default 'active',
    created_at timestamp default current_timestamp
);

CREATE TABLE IF NOT EXISTS news(
    news_id serial primary key,
    title varchar(200) not null,
    news_image text not null,
    description text not null,
    status varchar(15) default 'active',
    created_at timestamp default current_timestamp
);

CREATE TABLE IF NOT EXISTS contact(
    user_id serial primary key,
    username varchar(32) not null,
    phone varchar(15) not null,
    email varchar(50) not null,
    message text not null,
    subject varchar(30) not null,
    status varchar(15) default 'new',
    created_at timestamp default current_timestamp
);

CREATE TABLE IF NOT EXISTS followers(
    id serial primary key,
    email varchar(50) not null,
    status varchar(15) default 'active',
    created_at timestamp default current_timestamp
);

