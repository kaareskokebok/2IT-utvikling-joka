DROP DATABASE IF EXISTS bruker_db;
CREATE DATABASE bruker_db;
USE bruker_db;

CREATE TABLE users(
id INT AUTO_INCREMENT PRIMARY KEY,
brukernavn VARCHAR(100),
fornavn VARCHAR(100),
etternavn VARCHAR(100),
epost VARCHAR(100),
passord VARCHAR(100),
bruker_info TEXT,
er_admin BOOLEAN DEFAULT false
);
ALTER TABLE users AUTO_INCREMENT=101;

-- Legger til tre vanlige brukere med fornavn og etternavn
INSERT INTO users (brukernavn, fornavn, etternavn, epost, passord, bruker_info) VALUES
('janne', 'Janne', 'Johansen', 'janne@example.com', 'p123', 'Janne er en frontend-utvikler med en lidenskap for brukervennlig design. Arbeider primært med React og JavaScript.'),
('ola', 'Ola', 'Nordmann', 'ola@example.com', 'p123', 'Ola er en backend-utvikler som spesialiserer seg på Java og Spring Boot. Ansvarlig for server-side logikk og databasehåndtering.'),
('kari', 'Kari', 'Normann', 'kari@example.com', 'p123', 'Kari er en prosjektleder med over 5 års erfaring. Sørger for at prosjekter leveres til tiden og innenfor budsjett.');

-- Legger til to administratorer med fornavn og etternavn
INSERT INTO users (brukernavn, fornavn, etternavn, epost, passord, bruker_info, er_admin) VALUES
('admin1', 'Admin', 'Ett', 'admin1@example.com', 'sp123', 'Administrator 1 er hovedansvarlig for nettverkssikkerhet og infrastruktur.', true),
('admin2', 'Admin', 'To', 'admin2@example.com', 'sp123', 'Administrator 2 fokuserer på systemintegrasjon og automatisering av arbeidsflyter.', true);

