CREATE DATABASE dyrepark;
USE dyrepark;

CREATE TABLE art(
id INT AUTO_INCREMENT,
navn VARCHAR(100),
habitat VARCHAR(100),
beskrivelse TEXT,
PRIMARY KEY(id)
);

CREATE TABLE dyr(
id INT AUTO_INCREMENT,
navn VARCHAR(100),
kjonn VARCHAR(20),
fodseldato DATE,
bur_nr INT,
beskrivelse TEXT,
art_id INT,
PRIMARY KEY(id),
FOREIGN KEY(art_id) REFERENCES art(id)
);

-- 7 arter
INSERT INTO art (navn, habitat, beskrivelse) VALUES 
('Afrikansk Elefant', 'Savanner, skoger', 'Den største av alle landlevende dyr, kjent for sine store ører og støttenner.'),
('Blåhval', 'Hav', 'Det største dyret som noen gang har levd, kan bli over 30 meter lang.'),
('Tiger', 'Tropiske skoger', 'En stor katt med en distinkt oransje pels og svarte striper.'),
('Koala', 'Eukalyptusskoger', 'Et trelevende pungdyr fra Australia, kjent for sin diett som nesten utelukkende består av eukalyptusblader.'),
('Struts', 'Åpne landområder som savanner og ørkener', 'Den største og tyngste fuglen, kjent for sin manglende evne til å fly.'),
('Komodovaran', 'Skoger, savanner og gressletter', 'Den største øglearten, finnes på noen få indonesiske øyer.'),
('Axolotl', 'Innsjøer og kanaler', 'En type salamander kjent for sin evne til regenerering, beholder sine larveegenskaper gjennom hele livet.');

-- 25 dyr
INSERT INTO dyr (navn, kjonn, fodseldato, bur_nr, beskrivelse, art_id) VALUES 
('Ella', 'Kvinne', '2010-05-07', 101, 'En eldre elefant med en rolig personlighet.', 1),
('Zara', 'Kvinne', '2012-09-16', 101, 'En ung og leken elefant.', 1),
('Leo', 'Mann', '2015-06-23', 101, 'En ung hann med imponerende støttenner.', 1),
('Whaley', 'Mann', '2008-03-12', 201, 'En majestetisk blåhval.', 2),
('Stripes', 'Mann', '2011-07-19', 301, 'En sterk tiger kjent for sine lange streiftog.', 3),
('Amber', 'Kvinne', '2013-08-22', 301, 'En vakker tigress.', 3),
('Marsupi', 'Mann', '2014-04-17', 401, 'En eldre koala.', 4),
('Leafy', 'Kvinne', '2016-11-29', 401, 'En ung koala som elsker å klatre.', 4),
('Speedy', 'Mann', '2018-02-03', 501, 'En rask struts.', 5),
('BigBird', 'Kvinne', '2019-01-14', 501, 'En dominant hunnstruts.', 5),
('Nina', 'Kvinne', '2017-03-27', 501, 'En ung og rask struts.', 5),
('Dragon', 'Mann', '2010-07-21', 601, 'En stor Komodovaran.', 6),
('LizardKing', 'Mann', '2011-09-11', 601, 'En aggressiv Komodovaran.', 6),
('Salamander', 'Kvinne', '2012-12-02', 701, 'En sjeldent fargerik axolotl.', 7),
('Gilly', 'Mann', '2013-05-18', 701, 'En axolotl kjent for sin nysgjerrighet.', 7),
('Eddy', 'Mann', '2014-07-07', 101, 'En ung og energisk elefant.', 1),
('Blue', 'Kvinne', '2015-10-15', 201, 'En ung blåhval med karakteristisk sang.', 2),
('Tony', 'Mann', '2016-09-23', 301, 'En tiger med distinkte markeringer.', 3),
('Eucaly', 'Kvinne', '2017-11-30', 401, 'En koala med en sterk morsinstinkt.', 4),
('Feather', 'Kvinne', '2018-04-05', 501, 'En struts kjent for sin hurtighet.', 5),
('Izzy', 'Kvinne', '2019-02-17', 601, 'En ung Komodovaran.', 6),
('Water', 'Mann', '2019-06-21', 701, 'En axolotl med en avslappende tilstedeværelse.', 7),
('Sammy', 'Kvinne', '2017-08-12', 101, 'En elefant med et godt temperament.', 1),
('Deep', 'Mann', '2018-11-09', 201, 'En blåhval kjent for sine dype dykk.', 2),
('Tiggy', 'Kvinne', '2019-12-25', 301, 'En leken ung tigress.', 3);


