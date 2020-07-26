drop table post;

CREATE TABLE post (
	id serial not null,
    title varchar(255) not null,
	is_owned boolean not null,
	release_date varchar(255),
	console varchar(255) not null,
    price int not null,
    page_link varchar(255),
	video_link varchar(255),
	tag varchar(255)
);

select * from post;

INSERT INTO post (title, is_owned, release_date, console, price, pagelink, videolink, tag)
VALUES 	('Tales of Vesperia', false, 'released', 'Nintendo Switch', 50, 'https://www.nintendo.com/games/detail/tales-of-vesperia-definitive-edition-switch/', null, 'jrpg'),
		('Xenoblade Chronicles Definitive Edition', true, 'released', 'Nintendo Switch', 60, null, null, 'jrpg'),
		('Xenoblade Chronicles 2', false, 'released', 'Nintendo Switch', 60, null, null, 'jrpg'),
		('Ni No Kuni', false, 'released', 'Nintendo Switch', 60, null, null, 'jrpg');

select * from post;
