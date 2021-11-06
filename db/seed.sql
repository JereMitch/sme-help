drop table tweets;

create table tweets(
id serial primary key,
tweet text 
);

insert into tweets(tweet) 
values ('Hello World');