-- Oppretter databasen (eksempel med MySQL)
CREATE DATABASE datakomponenter;
USE datakomponenter;

-- Oppretter tabellen Kategorier
CREATE TABLE IF NOT EXISTS kategorier (
    id INT AUTO_INCREMENT PRIMARY KEY,
    kategori_navn VARCHAR(255) NOT NULL,
    beskrivelse TEXT
);

-- Oppretter tabellen Produkter
CREATE TABLE IF NOT EXISTS produkter (
    id INT AUTO_INCREMENT PRIMARY KEY,
    navn VARCHAR(255) NOT NULL,
    beskrivelse TEXT,
    pris DECIMAL(10, 2),
    kategori_id INT,
    lagerstatus INT,
    FOREIGN KEY (kategori_id) REFERENCES kategorier(id)
);

-- Oppretter tabellen Bilder
CREATE TABLE IF NOT EXISTS bilder (
    id INT AUTO_INCREMENT PRIMARY KEY,
    produkt_id INT,
    bilde_url VARCHAR(255) NOT NULL,
    alt_tekst VARCHAR(255),
    FOREIGN KEY (produkt_id) REFERENCES produkter(id)
);

-- Oppretter tabellen Videoer (valgfri)
CREATE TABLE IF NOT EXISTS videoer (
    id INT AUTO_INCREMENT PRIMARY KEY,
    produkt_id INT,
    video_url VARCHAR(255) NOT NULL,
    beskrivelse TEXT,
    FOREIGN KEY (produkt_id) REFERENCES produkter(id)
);

INSERT INTO kategorier (kategori_navn, beskrivelse) VALUES 
('Grafikkort', 'Grafikkort forbedrer datamaskinens evne til å generere grafikk.'),
('Prosessor', 'Hjernen i datamaskinen som utfører instruksjoner.'),
('Hovedkort', 'Hovedkortet binder sammen alle datamaskinens komponenter.'),
('RAM', 'Random Access Memory (RAM) er den fysiske maskinvaren inne i en datamaskin som midlertidig lagrer data, og fungerer som datamaskinens "arbeidsminne".'),
('SSD', 'Solid State Drive (SSD) er en type lagermedie som bruker flash-minne for å lagre data, raskere enn en tradisjonell harddisk.'),
('Strømforsyning', 'Strømforsyningen gir strøm til alle komponentene i datamaskinen.'),
('Kabinett', 'Kabinettet husser datamaskinens komponenter og beskytter dem.');

INSERT INTO produkter (navn, beskrivelse, pris, kategori_id, lagerstatus) VALUES 
('NVIDIA RTX 3080', 'High-end grafikkort for gaming og profesjonelt arbeid.', 6999.99, 1, 10),
('AMD Radeon RX 6800 XT', 'Kraftig grafikkort for 4K gaming.', 6499.99, 1, 8),
('Intel Core i9-11900K', 'Top-of-the-line desktop prosessor fra Intel.', 4899.99, 2, 5),
('AMD Ryzen 9 5950X', '16-kjerner prosessor som leverer eksepsjonell ytelse.', 7999.99, 2, 4),
('ASUS ROG Maximus XIII Hero', 'Wi-Fi 6, 2.5Gb LAN, PCIe 4.0, SATA 6Gb/s.', 4599.99, 3, 7),
('MSI MPG B550 Gaming Plus', 'Støtte for 3. generasjon AMD Ryzen prosessorer.', 1599.99, 3, 11),
('Corsair Vengeance LPX 16GB', 'Høy ytelse DDR4 minne.', 899.99, 4, 20),
('G.Skill Trident Z RGB 32GB', 'DDR4 minne med RGB belysning.', 1499.99, 4, 15),
('Samsung 970 EVO Plus 1TB', 'NVMe SSD med eksepsjonelle lese-/skrivehastigheter.', 1999.99, 5, 25),
('Kingston A2000 500GB', 'NVMe SSD tilbud for budsjettbevisste brukere.', 599.99, 5, 30),
('Corsair RM750x', '750W 80 Plus Gold modular strømforsyning.', 1199.99, 6, 12),
('EVGA SuperNOVA 850 G3', '850W 80 Plus Gold, fullmodulær.', 1399.99, 6, 9),
('NZXT H510', 'Mellomstort tårn med enkel kabelstyring.', 799.99, 7, 14),
('Phanteks Eclipse P400A', 'Mellomstort tårn med god luftstrøm.', 899.99, 7, 10);
('NVIDIA GTX 1660 Super', 'Pålitelig grafikkort for mellomklassen gaming.', 2399.99, 1, 12),
('AMD Radeon RX 5700 XT', 'Utmerket ytelse for 1440p gaming.', 3699.99, 1, 7),
('Intel Core i5-11600K', 'Utmerket valg for gaming og arbeid.', 2599.99, 2, 10),
('AMD Ryzen 5 5600X', 'Best ytelse per krone for gaming.', 2999.99, 2, 8),
('Gigabyte B450M DS3H', 'Budsjettvennlig hovedkort for AMD prosessorer.', 699.99, 3, 15),
('ASUS TUF Gaming Z490-Plus', 'Robust hovedkort med god ytelse for Intel CPUer.', 2199.99, 3, 6),
('HyperX Fury 16GB DDR4', 'Pålitelig og raskt minne for gamere.', 749.99, 4, 18),
('Patriot Viper Steel 16GB', 'Høy ytelse DDR4 minne for entusiaster.', 999.99, 4, 16),
('Crucial MX500 1TB', 'Pålitelig SSD med god balanse mellom pris og ytelse.', 1099.99, 5, 22),
('WD Blue SN550 1TB', 'NVMe SSD med høy ytelse for datalagring.', 1149.99, 5, 20),
('Seasonic FOCUS GX-650', '650W 80 Plus Gold strømforsyning, pålitelig og effektiv.', 999.99, 6, 10),
('Be Quiet! Pure Power 11 600W', 'Stille og effektiv strømforsyning.', 849.99, 6, 11),
('Corsair Carbide 275R', 'Stilrent og funksjonelt kabinett.', 999.99, 7, 13),
('Fractal Design Meshify C', 'Høy luftstrøm og stilig design.', 1099.99, 7, 12),
('NVIDIA RTX 3070', 'Kraftig grafikkort for seriøs gaming.', 5199.99, 1, 9),
('AMD Radeon RX 6900 XT', 'Toppmodellen fra AMD for ekstrem gaming.', 9999.99, 1, 5),
('Intel Core i7-10700K', 'Høytytende prosessor for gaming og kreative arbeidsflyter.', 3599.99, 2, 6),
('AMD Ryzen 7 5800X', 'Kraftig 8-kjerner prosessor for kravstore applikasjoner.', 4299.99, 2, 7);

-- Sette inn bilder
-- bilder i ./assets/images og videoer
-- i ./assets/videos. Alle bilder er png
-- og videoer mp4.
INSERT INTO bilder (produkt_id, bilde_url, alt_tekst) VALUES 
(1, './assets/images/nvidia_rtx_3080.png', 'NVIDIA RTX 3080'),
(2, './assets/images/radeon_6800_xt.png', 'AMD Radeon RX 6800 XT'),
(3, './assets/images/intel_core_i9_11900k.png', 'Intel Core i9-11900K');

