DROP DATABASE IF EXISTS api_development;
CREATE DATABASE api_development;

\c api_development;

CREATE TABLE models (
  ID SERIAL PRIMARY KEY,
  name VARCHAR,
  attribute INTEGER,
  current_day TIMESTAMP without time zone default (now() at time zone 'utc')
);


INSERT INTO models ( name, attribute )
VALUES ( 'test1', 1 );
INSERT INTO models ( name, attribute )
VALUES ( 'test2', 2 );
INSERT INTO models ( name, attribute )
VALUES ( 'test3', 3 );
INSERT INTO models ( name, attribute )
VALUES ( 'test4', 4 );
INSERT INTO models ( name, attribute )
VALUES ( 'test5', 5 );
INSERT INTO models ( name, attribute )
VALUES ( 'test6', 6 );
INSERT INTO models ( name, attribute )
VALUES ( 'test7', 7 );
INSERT INTO models ( name, attribute )
VALUES ( 'test8', 8 );
INSERT INTO models ( name, attribute )
VALUES ( 'test9', 9 );
INSERT INTO models ( name, attribute )
VALUES ( 'test10', 10 );
INSERT INTO models ( name, attribute )
VALUES ( 'test11', 11 );
INSERT INTO models ( name, attribute )
VALUES ( 'test12', 12 );
INSERT INTO models ( name, attribute )
VALUES ( 'test13', 13 );
INSERT INTO models ( name, attribute )
VALUES ( 'test14', 14 );
INSERT INTO models ( name, attribute )
VALUES ( 'test15', 15 );
INSERT INTO models ( name, attribute )
VALUES ( 'test16', 16 );
INSERT INTO models ( name, attribute )
VALUES ( 'test17', 17 );
INSERT INTO models ( name, attribute )
VALUES ( 'test18', 18 );
INSERT INTO models ( name, attribute )
VALUES ( 'test19', 19 );
INSERT INTO models ( name, attribute )
VALUES ( 'test20', 20 );

DROP DATABASE IF EXISTS api_test;
CREATE DATABASE api_test;

\c api_test;

CREATE TABLE models (
  ID SERIAL PRIMARY KEY,
  name VARCHAR,
  attribute INTEGER,
  current_day TIMESTAMP without time zone default (now() at time zone 'utc')
);

DROP DATABASE IF EXISTS api_production;
CREATE DATABASE api_production;

\c api_production;

CREATE TABLE models (
  ID SERIAL PRIMARY KEY,
  name VARCHAR,
  attribute INTEGER,
  current_day TIMESTAMP without time zone default (now() at time zone 'utc')
);