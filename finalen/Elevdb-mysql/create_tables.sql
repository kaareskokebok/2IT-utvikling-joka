--@block Lag databasen hvis den mangler
CREATE DATABASE skole;

--@block SLETT HELE DATABASEN
DROP DATABASE skole;
--@block Bruk databasen skole
USE skole;

--@block Slett tabeller
DROP TABLE elever_kurs;
DROP TABLE kurs;
DROP TABLE lærere;
DROP TABLE elever;


--@block Lag tabellene
-- Opprettelse av elever tabellen
CREATE TABLE elever (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fornavn VARCHAR(100),
    etternavn VARCHAR(100),
    klasse VARCHAR(4),
    brukernavn VARCHAR(50),
    passord VARCHAR(255)
);

-- Opprettelse av lærere tabellen
CREATE TABLE lærere (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fornavn VARCHAR(100),
    etternavn VARCHAR(100),
    brukernavn VARCHAR(50) UNIQUE,
    passord VARCHAR(255)
);

-- Opprettelse av kurs tabellen
CREATE TABLE kurs (
    kursid VARCHAR(15) PRIMARY KEY,
    kurskode VARCHAR(10),
    kursnavn VARCHAR(100),
    lærer_id INT,
    instansnummer INT,
    FOREIGN KEY (lærer_id) REFERENCES lærere(id)
);

-- Opprettelse av elever_kurs tabellen
CREATE TABLE elever_kurs (
    elev_id INT,
    kursid VARCHAR(15),
    karakter CHAR(2),
    PRIMARY KEY (elev_id, kursid),
    FOREIGN KEY (elev_id) REFERENCES elever(id),
    FOREIGN KEY (kursid) REFERENCES kurs(kursid)
);

-- Se filen fill_tables_with_data.sql for å fylle db med data