insert into admins (username, password,admin_img) values ('islom', crypt('12345', gen_salt('bf')),'image-1664898709804-464822619.jpg');



insert into categories(category_name) values
('Shawarma'),('Turk Kebab'),('Hamburger Kebab'),('Doner kebab'),
('Shish kebab'),('French fries Pizza'),('Desserts');



insert into products(product_name,description,price,category_id,product_img) values
('tovuqli shawarma','tarkibi -------------------',18000,1,'https://veenaazmanov.com/wp-content/uploads/2016/09/Easy-Shawarma-Chicken-Recipe22.png'),
('mahmud kabob','mahmud kabobi.............',15000,2,'https://kartinkin.net/uploads/posts/2021-07/thumbs/1626750588_7-kartinkin-com-p-turetskii-kebab-yeda-krasivo-foto-9.jpg'),
('hamburger kebab','tarkibi............',17000,3,'https://static.750g.com/images/600-600/58dd6c8f40629382350edf8b311a2b4f/hamburgers-kebab-a-la-forestiere-et-au-piment-doux.jpg'),
('Doner kebab','ajoyib tamga ega------',20000,4,'https://im.instacook.me/posts/2020-01/1579711084_2103.jpg'),
('shish kebab','shish kabobi......',22000,5,'https://www.mensjournal.com/wp-content/uploads/2011/05/kebabs.jpg?quality=40&strip=all'),
('french pizza','fransuz oshxonasining------',24000,6,'https://metro.co.uk/wp-content/uploads/2014/08/french-fry-pizza.jpg?quality=90&strip=all'),
('napaleon','mazali shirinlikk-----',70000,7,'https://static.1000.menu/img/content/32825/tort-napoleon-s-kremom-plombir_1551355449_1_max.jpg');



insert into news(title,description,news_image) values
('xo`rrandalr uchun yangilik yangi menyu','biz taomnomamizga------','https://miro.medium.com/max/1280/0*eox0f0NwoaA5HNG-.jpg'),
('xo`rrandalr uchun yangilik yangi menyu','biz taomnomamizga------','https://futuretripexperience.com/wp-content/uploads/2022/06/Traditional-Czn-Burak-Main-Dishes.webp');

insert into contact(username,phone,email,message,subject) values
('jasur','+998908765432','jasca@gmail.com','doim shu joyda tushlik qilaman taomlari ajoyib','about the restaurant'),
('javohir','+998908765432','java@gmail.com','doimo shunday xizmat ko`rsatishni davom eting','about the restaurant');