CREATE DATABASE TravelVan;
USE TravelVan;

CREATE TABLE User_Table (
    Name CHAR(50),
    UserId CHAR(10) NOT NULL, 
    Phone DECIMAL(10) UNIQUE NOT NULL,
    Password CHAR(50) NOT NULL DEFAULT "pwd123",
    PRIMARY KEY (UserId));

CREATE TABLE Tourist (
    UserId CHAR(10)  NOT NULL,
	Age INT(3),
    Pronouns CHAR(10),
    PRIMARY KEY (UserId),
    FOREIGN KEY (UserID) REFERENCES User_Table(UserId) ON UPDATE CASCADE ON DELETE CASCADE);

CREATE TABLE BusinessPerson (
    UserId CHAR(10) NOT NULL,
	Title CHAR(50),
    PRIMARY KEY (UserId),
    FOREIGN KEY (UserID) REFERENCES User_Table(UserId) ON UPDATE CASCADE ON DELETE CASCADE);

CREATE TABLE OwnedPlace (
    Placeid int NOT NULL AUTO_INCREMENT,
    Name CHAR(50) NOT NULL, 
    Address CHAR(100) NOT NULL,
    Phone DECIMAL(50) UNIQUE,
    Category CHAR(20),
    Manager CHAR(50),
    Hours CHAR(50),
    BPID CHAR(10) NOT NULL,
    PRIMARY KEY (Placeid, Name, Address, BPID),
    FOREIGN KEY (BPID) REFERENCES BusinessPerson(UserID) ON UPDATE CASCADE ON DELETE CASCADE);

CREATE TABLE PostedReviews (
    Reviewid int NOT NULL AUTO_INCREMENT UNIQUE,
    Placeid int not null, 
    Reviewerid CHAR(10) NOT NULL,
    Ratings FLOAT(10),
    w_review CHAR(200),
    PRIMARY KEY(Reviewid),
    FOREIGN KEY(Reviewerid) REFERENCES User_Table(UserId) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY(Placeid) REFERENCES OwnedPlace(Placeid) ON UPDATE CASCADE ON DELETE CASCADE);

CREATE TABLE MedicalService(
    medID CHAR(10) NOT NULL, 
    Phone DECIMAL(10) UNIQUE,
    Address CHAR(200), 
    PRIMARY KEY (medID));

CREATE TABLE NonEmergencyMedicalService(
    medID CHAR(10) NOT NULL , 
	Practitioners CHAR(100),
	Hours CHAR(50),
   	PRIMARY KEY (medID),
    FOREIGN KEY (medID) REFERENCES MedicalService(medID) ON UPDATE CASCADE ON DELETE CASCADE);

CREATE TABLE EmergencyMedicalService(
    medID CHAR(10) NOT NULL, 
	24X7 BOOLEAN,
   	PRIMARY KEY (medID),
    FOREIGN KEY (medID) REFERENCES MedicalService(medID) ON UPDATE CASCADE ON DELETE CASCADE);


CREATE TABLE HadPictures (
    PictureID CHAR(255) NOT NULL,
    Reviewid INT NOT NULL,
    PRIMARY KEY(PictureId, Reviewid),
	FOREIGN KEY(Reviewid) REFERENCES PostedReviews(Reviewid) ON UPDATE CASCADE ON DELETE CASCADE);


CREATE TABLE HadPersonalPosts (
    Titleid CHAR(20) NOT NULL,
    UserID CHAR(10) NOT NULL,
	PRIMARY KEY(Titleid, UserID),
    FOREIGN KEY(UserID) REFERENCES User_Table(UserID) ON UPDATE CASCADE ON DELETE CASCADE);


CREATE TABLE Restaurant (
    RestaurantID INT NOT NULL,
    dressCode CHAR(20),
    Cuisine CHAR(100),
    Cost CHAR(5),
    Name CHAR(50) NOT NULL, 
    Address CHAR(100) NOT NULL,
    BPID CHAR(10) NOT NULL,
    PRIMARY KEY (restaurantID),
    FOREIGN KEY (RestaurantId, Name, Address, BPID) REFERENCES OwnedPlace(Placeid, Name, Address, BPID) ON UPDATE CASCADE ON DELETE CASCADE);

CREATE TABLE Transport (
    TransportID CHAR(10) NOT NULL, 
    Cost FLOAT(5),
    PRIMARY KEY(TransportID));

CREATE TABLE PublicTransport(
    TransportID CHAR(10) NOT NULL, 
    Route CHAR(255),
    PRIMARY KEY(TransportID), 
    FOREIGN KEY (TransportID) REFERENCES Transport(TransportID) ON UPDATE CASCADE ON DELETE CASCADE);

CREATE TABLE PrivateTransport(
    TransportID CHAR(10) NOT NULL, 
	Company CHAR(20),
    PRIMARY KEY(TransportID), 
    FOREIGN KEY (TransportID) REFERENCES Transport(TransportID) ON UPDATE CASCADE ON DELETE CASCADE);

CREATE TABLE Park (
    ParkID INT NOT NULL,
    Events CHAR(100),
    Name CHAR(50) NOT NULL, 
    Address CHAR(100) NOT NULL,
    BPID CHAR(10) NOT NULL,
	PRIMARY KEY (ParkID),
    FOREIGN KEY (Parkid, Name, Address, BPID) REFERENCES OwnedPlace(Placeid, Name, Address, BPID) ON UPDATE CASCADE ON DELETE CASCADE);

CREATE TABLE Concert (
    ConcertID INT NOT NULL, 
    Price FLOAT(5), 
    Date CHAR(20),
    Name CHAR(50) NOT NULL, 
    Address CHAR(100) NOT NULL,
    BPID CHAR(10) NOT NULL,
    PRIMARY KEY (ConcertID),
    FOREIGN KEY (Concertid, Name, Address, BPID) REFERENCES OwnedPlace(Placeid, Name, Address, BPID) ON UPDATE CASCADE ON DELETE CASCADE);

CREATE TABLE Club (
    ClubID INT NOT NULL,
    Fee FLOAT(5),
    Name CHAR(50) NOT NULL, 
    Address CHAR(100) NOT NULL,
    BPID CHAR(10) NOT NULL,
    PRIMARY KEY (ClubID),
    FOREIGN KEY (CLubid, Name, Address, BPID) REFERENCES OwnedPlace(Placeid, Name, Address, BPID) ON UPDATE CASCADE ON DELETE CASCADE);

CREATE TABLE Malls (
    MallID INT NOT NULL,
    Directory CHAR(100),
    Name CHAR(50) NOT NULL, 
    Address CHAR(100) NOT NULL,
    BPID CHAR(10) NOT NULL,
    PRIMARY KEY(MallID),
    FOREIGN KEY (Mallid, Name, Address, BPID) REFERENCES OwnedPlace(Placeid, Name, Address, BPID) ON UPDATE CASCADE ON DELETE CASCADE);

CREATE TABLE RecreationCenters (
    RecId INT NOT NULL,
    Events CHAR(100),
    Name CHAR(50) NOT NULL, 
    Address CHAR(100) NOT NULL,
    BPID CHAR(10) NOT NULL,
    PRIMARY KEY(RecId),
    FOREIGN KEY (RecId, Name, Address, BPID) REFERENCES OwnedPlace(Placeid, Name, Address, BPID) ON UPDATE CASCADE ON DELETE CASCADE);

CREATE TABLE Follows (
    Follower_UserID CHAR(10),
	FollowedBy_UserID CHAR(10),
	FOREIGN KEY (Follower_UserID) REFERENCES User_Table(UserID) ON UPDATE CASCADE ON DELETE CASCADE,
	FOREIGN KEY (FollowedBy_UserID) REFERENCES User_Table(UserID) ON UPDATE CASCADE ON DELETE CASCADE);

CREATE TABLE DesiresToGoTo (
    TID CHAR(10) NOT NULL,
    Placeid INT NOT NULL,
    BPID CHAR(10) NOT NULL,
	Name CHAR(50) NOT NULL, 
    Address CHAR(100) NOT NULL,
    PRIMARY KEY (TID, Name, Address),
    FOREIGN KEY (TID) REFERENCES Tourist(UserID) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (Placeid, Name, Address, BPID) REFERENCES OwnedPlace(Placeid, Name, Address, BPID) ON UPDATE CASCADE ON DELETE CASCADE);

CREATE TABLE Requires (
    TID CHAR(10) NOT NULL,
	MedID CHAR(10) NOT NULL,
	PRIMARY KEY (TID, MedID),
	FOREIGN KEY (TID) REFERENCES Tourist(UserID) ON UPDATE CASCADE ON DELETE CASCADE,
	FOREIGN KEY (MedID) REFERENCES MedicalService(MedID) ON UPDATE CASCADE ON DELETE CASCADE);

CREATE TABLE ArriveBy (
    transportID CHAR(10) NOT NULL,
    Placeid INT NOT NULL,
    BPID CHAR(10) NOT NULL,
	Name CHAR(50) NOT NULL, 
    Address CHAR(100) NOT NULL,
    PRIMARY KEY (transportID, Name, Address),
    FOREIGN KEY (transportID) REFERENCES Transport(transportID) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (Placeid, Name, Address, BPID) REFERENCES OwnedPlace(Placeid, Name, Address, BPID) ON UPDATE CASCADE ON DELETE CASCADE);




USE TravelVan;

INSERT INTO User_Table VALUES ('Sirpreet Dhillon','T001', 9999990000,'pwd123');
INSERT INTO User_Table VALUES ('Swagi Desai','T002', 2044357474,'pwd123');
INSERT INTO User_Table VALUES ('Simran Nijjar','T003', 9999990002,'pwd123');
INSERT INTO User_Table VALUES ('Mike Cunningham','T004', 9999990003,'pwd123');
INSERT INTO User_Table VALUES ('Jamie Pete','T005', 9999990004,'pwd123');


INSERT INTO User_Table VALUES ('Cineplex','B001', 6044357474,'pwd123');
INSERT INTO User_Table VALUES ('Simon Fraser University','B002', 7787823111,'pwd123');
INSERT INTO User_Table VALUES ('Ivanhoé Cambridge','B004', 6044384715,'pwd123');


INSERT INTO User_Table VALUES ('James Clark','B003', 6046207410,'pwd123');
INSERT INTO User_Table VALUES ('Kobe Japanese Steakhouse', 'B006', 6046842451,'pwd123');
INSERT INTO User_Table VALUES ('Le Crocodile', 'B007', 6046694298,'pwd123');
INSERT INTO User_Table VALUES ('Earls Kitchen + Bar', 'B008', 6044327329,'pwd123');
INSERT INTO User_Table VALUES ('Tasty Indian Bistro', 'B009', 6045079393,'pwd123');
INSERT INTO User_Table VALUES ('Joe Fortes','JoeFortes',6046691940, 'Fortes');
INSERT INTO User_Table VALUES ("Cardero's Restaurant",'CarRes',6046697666, 'Cardero');
INSERT INTO User_Table VALUES ("Blue Water Cafe",'BlueWater',6046888078, 'WaterBlue');
INSERT INTO User_Table VALUES ("Glowbal",'Glow',6046020835, 'Glow123');
INSERT INTO User_Table VALUES ("The Acorn Restaurant",'Acorn',6045669001, 'Acorn1');


INSERT INTO User_Table VALUES ('Vancouver Park Board','B005', 6046816728,'pwd123');
INSERT INTO User_Table VALUES ('Queen Elizabeth Park', 'B010', 6048737000,'pwd123');
INSERT INTO User_Table VALUES ('Central Park', 'B011', 6042947450,'pwd123');
INSERT INTO User_Table VALUES ('Creekside Park', 'B012', 6046882382,'pwd123');
INSERT INTO User_Table VALUES ('Coopers Park', 'B013', 6042578400,'pwd123');



INSERT INTO User_Table VALUES ('Arts Club Theatre Company', 'B014', 6046871644,'pwd123');
INSERT INTO User_Table VALUES ('Bill Kerasiotis', 'B015', 6046816180,'pwd123');
INSERT INTO User_Table VALUES ('Andrew Kochhar', 'B016', 6043465544,'pwd123');
INSERT INTO User_Table VALUES ('Kyle Muir', 'B017', 7789296625,'pwd123');
INSERT INTO User_Table VALUES ('Bar None', 'B018', 6046897000,'pwd123');



INSERT INTO User_Table VALUES ('Creekside Community Recreation Centre', 'B019', 6042573050,'pwd123');
INSERT INTO User_Table VALUES ('Renfrew Park Community Centre', 'B020', 6042578388,'pwd123');
INSERT INTO User_Table VALUES ('Bonsor Recreation Complex', 'B021', 6042974597,'pwd123');
INSERT INTO User_Table VALUES ('Kensington Community Centre', 'B022', 6047186200,'pwd123');
INSERT INTO User_Table VALUES ('Willingdon Community Centre', 'B023', 6042974526,'pwd123');



INSERT INTO User_Table VALUES ('Shape Property Management Corp.','B055', 6044212882,'pwd123');
INSERT INTO User_Table VALUES ('bcIMC Realty Corporation', 'B058', 6049808561,'pwd123');
INSERT INTO User_Table VALUES ('Cadillac Fairview', 'B059', 6046887235,'pwd123');



INSERT INTO User_Table VALUES ('Shawn Mendes: Wonder, The World Tour','B101',6048997400,'pwd123');
INSERT INTO User_Table VALUES ('WU-TANG CLAN','B052',6042532311,'pwd123');
INSERT INTO User_Table VALUES ('King Princess and Dora Jar','B100',6046653050,'pwd123');
INSERT INTO User_Table VALUES ('The Weeknd','B999',6046692300,'pwd123');
INSERT INTO User_Table VALUES ('Alan Walker','B678',6047632145,'pwd123');



INSERT INTO User_Table VALUES ('Andrew Mai','B701',6045450991,'pwd123');
INSERT INTO User_Table VALUES ('Wil Seto','B702',6042984878,'pwd123');
INSERT INTO User_Table VALUES ('Victoria Cameron','B703',6044211027,'pwd123');
INSERT INTO User_Table VALUES ('Jakov Skarica','B704',6044281363,'pwd123');
INSERT INTO User_Table VALUES ('Heidi Shen','B705',6045221886,'pwd123');

INSERT INTO User_Table VALUES ('Kevin Smith','B706',6046606897,'pwd123');
INSERT INTO User_Table VALUES ('Dr. Jeff Brubacher','B707',6048754111,'pwd123');
INSERT INTO User_Table VALUES ('Dr. Robert Stenstrom','B708',6046822344,'pwd123');
INSERT INTO User_Table VALUES ('Carson Smith','B709',8556602757,'pwd123');
INSERT INTO User_Table VALUES ('Meghan McMenamie','B710',6048741141,'pwd123');




INSERT INTO Tourist VALUES ('T001', 25, 'She/her');
INSERT INTO Tourist VALUES ('T002', 21, 'She/her');
INSERT INTO Tourist VALUES ('T003', 20, 'She/her');
INSERT INTO Tourist VALUES ('T004', 35, 'He/him');
INSERT INTO Tourist VALUES ('T005', 40, 'He/him');



INSERT INTO BusinessPerson VALUES ('B001', 'Owner');
INSERT INTO BusinessPerson VALUES ('B002', 'Owner');


INSERT INTO BusinessPerson VALUES ('B003', 'Manager');
INSERT INTO BusinessPerson VALUES ('B006', 'Manager');
INSERT INTO BusinessPerson VALUES ('B007', 'Owner');
INSERT INTO BusinessPerson VALUES ('B008', 'Manager');
INSERT INTO BusinessPerson VALUES ('B009', 'CEO');
INSERT INTO BusinessPerson VALUES ('JoeFortes','Owner');
INSERT INTO BusinessPerson VALUES ('CarRes','Owner'); 
INSERT INTO BusinessPerson VALUES ('BlueWater','Manager');
INSERT INTO BusinessPerson VALUES ('Glow','Manager'); 
INSERT INTO BusinessPerson VALUES ('Acorn','Manager'); 




INSERT INTO BusinessPerson VALUES ('B005', 'Owner');
INSERT INTO BusinessPerson VALUES ('B010', 'Owner');
INSERT INTO BusinessPerson VALUES ('B011', 'Owner');
INSERT INTO BusinessPerson VALUES ('B012', 'Owner');
INSERT INTO BusinessPerson VALUES ('B013', 'Owner');


 
INSERT INTO BusinessPerson VALUES ('B014', 'Owner');
INSERT INTO BusinessPerson VALUES ('B015', 'Owner');
INSERT INTO BusinessPerson VALUES ('B016', 'VIP Host');
INSERT INTO BusinessPerson VALUES ('B017', 'General Manager');
INSERT INTO BusinessPerson VALUES ('B018', 'Owner');



INSERT INTO BusinessPerson VALUES ('B019', 'Owner');
INSERT INTO BusinessPerson VALUES ('B020', 'Owner');
INSERT INTO BusinessPerson VALUES ('B021', 'Owner');
INSERT INTO BusinessPerson VALUES ('B022', 'Owner');
INSERT INTO BusinessPerson VALUES ('B023', 'Owner');



INSERT INTO BusinessPerson VALUES ('B004', 'Owner');
INSERT INTO BusinessPerson VALUES ('B055', 'Owner');
INSERT INTO BusinessPerson VALUES ('B058', 'Owner');
INSERT INTO BusinessPerson VALUES ('B059', 'Owner');



INSERT INTO BusinessPerson VALUES ('B701','President');
INSERT INTO BusinessPerson VALUES ('B702','Owner');
INSERT INTO BusinessPerson VALUES ('B703','Owner');
INSERT INTO BusinessPerson VALUES ('B704','Manager');
INSERT INTO BusinessPerson VALUES ('B705','Manager');

INSERT INTO BusinessPerson VALUES ('B706','ER Chief');
INSERT INTO BusinessPerson VALUES ('B707','ED Physician');
INSERT INTO BusinessPerson VALUES ('B708','Owner');
INSERT INTO BusinessPerson VALUES ('B709','Manager');
INSERT INTO BusinessPerson VALUES ('B710','Manager');



INSERT INTO BusinessPerson VALUES ('B101','Owner');
INSERT INTO BusinessPerson VALUES ('B052','Owner');
INSERT INTO BusinessPerson VALUES ('B100','Owner');
INSERT INTO BusinessPerson VALUES ('B999','Owner');
INSERT INTO BusinessPerson VALUES ('B678','Owner');



INSERT INTO OwnedPlace (Name, Address, Phone, Category, Manager, Hours, BPID) VALUES ('Cineplex', '4700 Kingsway, Burnaby, BC V5H 4M1', 6044357474, 'Cinema','John Smith', '11am-10:45pm','B001');
INSERT INTO OwnedPlace (Name, Address, Phone, Category, Manager, Hours, BPID) VALUES ('Simon Fraser University', '8888 University Dr, Burnaby, BC V5A 1S6', 7787823111, 'University','Dr.Joy Johnson', '11am-8pm','B002');


INSERT INTO OwnedPlace (Name, Address, Phone, Category, Manager, Hours, BPID) VALUES ('Cactus Club', '1085 Canada Pl, Vancouver, BC V6C 3E1', 6046207410, 'Restaurant','James Clark', '11:30am-12:30am','B003');
INSERT INTO OwnedPlace (Name, Address, Phone, Category, Manager, Hours, BPID) VALUES ('Kobe Japanese Steakhouse', '1042 Alberni St, Vancouver, BC V6E 1A3', 6046842451, 'Restaurant','Michael Martin', '4:40pm-11pm','B006');
INSERT INTO OwnedPlace (Name, Address, Phone, Category, Manager, Hours, BPID) VALUES ('Le Crocodile', '909 Burrard St #100, Vancouver, BC V6Z 2N2', 6046694298, 'Restaurant','Jean Pierre', '5:30pm-10pm','B007');
INSERT INTO OwnedPlace (Name, Address, Phone, Category, Manager, Hours, BPID) VALUES ('Earls Kitchen + Bar', '6070 Silver Dr, Burnaby, BC V5H 0H5', 6044327329, 'Restaurant','Melissa James', '11:30am-12am','B008');
INSERT INTO OwnedPlace (Name, Address, Phone, Category, Manager, Hours, BPID) VALUES ('Tasty Indian Bistro', '8295 120 St, Delta, BC V4C 6R1', 6045079393, 'Restaurant','Inder Saini', '11am-12am','B009');
INSERT INTO OwnedPlace (Name, Address, Phone, Category, Manager, Hours, BPID) VALUES ('Joe Fortes Seafood & Chop House', '777 Thurlow St, Vancouver, BC V6E 3V5', 6046691940, 'Restaurant', 'Joe Fortes', '11am-11pm', 'JoeFortes');
INSERT INTO OwnedPlace (Name, Address, Phone, Category, Manager, Hours, BPID) VALUES ("Cardero's Restaurant", '1583 Coal Harbour Quay, Vancouver, BC V6G 3E7', 6046697666, 'Restaurant', 'Mary Smith', '11:30am-10:45pm', 'CarRes');
INSERT INTO OwnedPlace (Name, Address, Phone, Category, Manager, Hours, BPID) VALUES ("Blue Water Cafe", '1095 Hamilton St, Vancouver, BC V6B 5T4', 6046888078, 'Restaurant', 'Cara Dunlop', '4:30pm-12am', 'BlueWater');
INSERT INTO OwnedPlace (Name, Address, Phone, Category, Manager, Hours, BPID) VALUES ("Glowbal", '590 W Georgia St, Vancouver, BC V6E 1A3', 6046020835, 'Restaurant', 'Mackenzie Williams', '11:30am-11am', 'Glow');
INSERT INTO OwnedPlace (Name, Address, Phone, Category, Manager, Hours, BPID) VALUES ("The Acorn Restaurant", '3995 Main St, Vancouver, BC V5V 3P3', 6045669001, 'Restaurant', 'Shira Blustein', '5:30pm-12am', 'Acorn');




INSERT INTO OwnedPlace (Name, Address, Phone, Category, Manager, Hours, BPID) VALUES ('Stanley Park', '1166 Stanley Park Drive Vancouver, BC V6G Coal Harbour', 6046816728, 'Park','Vancouver Park Board', '9am-5pm','B005');
INSERT INTO OwnedPlace (Name, Address, Phone, Category, Manager, Hours, BPID) VALUES ('Queen Elizabeth Park', '4600 Cambie St, Vancouver, BC V5Z 2Z1', 6048737000, 'Park','City of Vancouver', '6am-10am','B010');
INSERT INTO OwnedPlace (Name, Address, Phone, Category, Manager, Hours, BPID) VALUES ('Central Park', '3883 Imperial St, Burnaby, BC V5S 3R2', 6042947450, 'Park','Burnaby', '24 hours','B011');
INSERT INTO OwnedPlace (Name, Address, Phone, Category, Manager, Hours, BPID) VALUES ('Creekside Park', '1455 Quebec St, Vancouver, BC V6A 3Z7', 6046882382, 'Park','City of Vancouver', '6am-10pm','B012');
INSERT INTO OwnedPlace (Name, Address, Phone, Category, Manager, Hours, BPID) VALUES ('Coopers Park', '1020 Marinaside Crescent, Vancouver, BC V6Z 3A2', 6042578400, 'Park','City of Vancouver', '24 hours','B013');

INSERT INTO OwnedPlace (Name, Address, Phone, Category, Manager, Hours, BPID) VALUES ('Creekside Community Recreation Centre', '1 Athletes Way, Vancouver, BC V5Y 0B1',6042573050, 'Recreation Centre','Vancouver Park Board', '9am-5pm','B019');
INSERT INTO OwnedPlace (Name, Address, Phone, Category, Manager, Hours, BPID) VALUES ('Renfrew Park Community Centre', '2929 E 22nd Ave, Vancouver, BC V5M 2Y3',6042578388, 'Recreation Centre','Vancouver Park Board', '8am-4:30pm','B020');
INSERT INTO OwnedPlace (Name, Address, Phone, Category, Manager, Hours, BPID) VALUES ('Bonsor Recreation Complex', '6550 Bonsor Ave, Burnaby, BC V5H 3G4',6042974597, 'Recreation Centre','Burnaby', '7am-9pm','B021');
INSERT INTO OwnedPlace (Name, Address, Phone, Category, Manager, Hours, BPID) VALUES ('Kensington Community Centre', '5175 Dumfries St, Vancouver, BC V5P 3A2',6047186200, 'Recreation Centre','Vancouver Park Board', '9am-4pm','B022');
INSERT INTO OwnedPlace (Name, Address, Phone, Category, Manager, Hours, BPID) VALUES ('Willingdon Community Centre', '1491 Carleton Ave, Burnaby, BC V5C 4V5',6042974526, 'Recreation Centre','Burnaby', '9am-9pm','B023');

INSERT INTO OwnedPlace (Name, Address, Phone, Category, Manager, Hours, BPID) VALUES ('Arts Club Theatre Company', '203 - 162 West 1st Avenue Vancouver, BC V5Y 0H6', 6046871644, 'Club', 'Arts Club Theatre Company', '10pm-3am', 'B014');
INSERT INTO OwnedPlace (Name, Address, Phone, Category, Manager, Hours, BPID) VALUES ('Celebrities Night Club', '1022 Davie St, Vancouver, BC V6E 1M3', 6046816180,'Club', 'Bill Kerasiotis','10pm-3am','B015');
INSERT INTO OwnedPlace (Name, Address, Phone, Category, Manager, Hours, BPID) VALUES ('Club Mumbai Vancouver', '560 Seymour St, Vancouver, BC V6B 0A8', 6043465544,'Club', 'Andrew Kochhar','10pm-3am','B016');
INSERT INTO OwnedPlace (Name, Address, Phone, Category, Manager, Hours, BPID) VALUES ('Levels Nightclub', '560 Seymour St, Vancouver, BC V6B 0A8', 7789296625, 'Club', 'Kyle Muir','10pm-3am','B017');
INSERT INTO OwnedPlace (Name, Address, Phone, Category, Manager, Hours, BPID) VALUES ('Bar None Nightclub', '1222 Hamilton St, Vancouver, BC V6B 2S8', 6046897000, 'Club', 'Bar None','10pm-3am','B018');

INSERT INTO OwnedPlace (Name, Address, Phone, Category, Manager, Hours, BPID) VALUES ('Lougheed Town Centre','9855 Austin Ave, Burnaby, BC V3J 1N4', 6044212882, 'Mall','Shape Property Management Corp.','10am-7pm','B055');
INSERT INTO OwnedPlace (Name, Address, Phone, Category, Manager, Hours, BPID) VALUES ('The Amazing Brentwood','4567 Lougheed Hwy., Burnaby, BC V5C 3Z6', 6042987314, 'Mall','Shape Property Management Corp.','10am-7pm','B055');
INSERT INTO OwnedPlace (Name, Address, Phone, Category, Manager, Hours, BPID) VALUES ('Metropolis at Metrotown', '4700 Kingsway, Burnaby, BC V5H 4M5', 6044384715, 'Mall',' Ivanhoé Cambridge', '10am-9pm','B004');
INSERT INTO OwnedPlace (Name, Address, Phone, Category, Manager, Hours, BPID) VALUES ('Capilano Mall','935 Marine Dr, North Vancouver, BC V7P 1S3',6049808561 , 'Mall','bcIMC Realty Corporation','10am-6pm','B058');
INSERT INTO OwnedPlace (Name, Address, Phone, Category, Manager, Hours, BPID) VALUES ('Pacific Centre','701 W Georgia St, Vancouver, BC V7Y 1G5',6046887235 , 'Mall','Cadillac Fairview','10am-7pm','B059');

INSERT INTO OwnedPlace (Name, Address, Phone, Category, Manager, Hours, BPID) VALUES ('Shawn Mendes: Wonder, The World Tour','Rogers Arena, 800 Griffiths Way, Vancouver, BC',6048997400, 'Concert','Rogers Arena','9pm','B101');
INSERT INTO OwnedPlace (Name, Address, Phone, Category, Manager, Hours, BPID) VALUES ('WU-TANG CLAN','PNE Amphitheatre, 2901 E Hastings St, Vancouver, BC',6042532311, 'Concert','PNE Amphitheatre','9pm','B052');
INSERT INTO OwnedPlace (Name, Address, Phone, Category, Manager, Hours, BPID) VALUES ('King Princess and Dora Jar','Queen Elizabeth Theatre,630 Hamilton St, Vancouver, BC',6046653050, 'Concert','Queen Elizabeth Theatre','9pm','B100');
INSERT INTO OwnedPlace (Name, Address, Phone, Category, Manager, Hours, BPID) VALUES ('The Weeknd','BC Place. 777 Pacific Blvd, Vancouver, BC',6046692300, 'Concert','BC Place','9pm','B999');
INSERT INTO OwnedPlace (Name, Address, Phone, Category, Manager, Hours, BPID) VALUES ('Alan Walker','Harbour Event Centre, 750 Pacific Blvd, Vancouver, BC',NULL, 'Concert','Harbour Event Centre','9pm','B678');

INSERT INTO OwnedPlace (Name, Address, Phone, Category, Manager, Hours, BPID) VALUES ('PolyCan Health Centre', '9055 University High St 102, #205, Burnaby, BC V5A 0A7', 6045450991, 'Medical Service', 'Simon Fraser University', '8am-6pm','B701');
INSERT INTO OwnedPlace (Name, Address, Phone, Category, Manager, Hours, BPID) VALUES ('INSYNC PHYSIOTHERAPY', '4580 Hastings St #204, Burnaby, BC V5C 2K4', 6042984878, 'Medical Service', 'INSYNC PHYSIOTHERAPY', '7am-7pm','B702');
INSERT INTO OwnedPlace (Name, Address, Phone, Category, Manager, Hours, BPID) VALUES ('Cameron Medical Clinic', '9600 Cameron St Unit 240, Burnaby, BC V3J 7N3', 6044211027, 'Medical Service', 'Cameron Medical Clinic', '9:00 AM TO 4:00 PM', 'B703');
INSERT INTO OwnedPlace (Name, Address, Phone, Category, Manager, Hours, BPID) VALUES ('Spring Medical Centre', '4453 Lougheed Hwy., Burnaby, BC V5C 3Z2', 6044281363, 'Medical Service', 'Spring Medical Centre', '9am-5pm','B704');
INSERT INTO OwnedPlace (Name, Address, Phone, Category, Manager, Hours, BPID) VALUES ('Middlegate Medical Centre', '7018 Kingsway, Burnaby, BC V5E 1E7', 6045221886, 'Medical Service', 'Spring Medical Centre', '9am-5pm','B705');


INSERT INTO OwnedPlace (Name, Address, Phone, Category, Manager, Hours, BPID) VALUES ('BC Emergency Health Services', '2955 Virtual Way, Vancouver, BC V5M 4X6', 6046606897, 'Medical Service', 'Provincial Health Services Authority', '9am-4pm','B706');
INSERT INTO OwnedPlace (Name, Address, Phone, Category, Manager, Hours, BPID) VALUES ('Vancouver General Hospital Emergency Department', '920 W 10th Ave, Vancouver, BC V5Z 1M9', 6048754111, 'Medical Service', 'Vancouver Coastal Health Authority', '24 hours','B707');
INSERT INTO OwnedPlace (Name, Address, Phone, Category, Manager, Hours, BPID) VALUES ('St. Pauls Hospital Emergency', '1081 Burrard St, Vancouver, BC V6Z 1Y6', 6046822344, 'Medical Service', 'Concord Pacific', '24 hours','B708');
INSERT INTO OwnedPlace (Name, Address, Phone, Category, Manager, Hours, BPID) VALUES ('BC Ambulance Service - Station 261', '181 W 7th Ave, Vancouver, BC V5Y 1L8',8556602757, 'Medical Service', 'British Columbia Emergency Health Services', '24 hours','B709');
INSERT INTO OwnedPlace (Name, Address, Phone, Category, Manager, Hours, BPID) VALUES ('Mount Saint Joseph Hospital: Emergency Department', '3080 Prince Edward St, Vancouver, BC V5T 3N4',6048741141, 'Medical Service', 'Providence Health Care', '8am-8pm','B710');

INSERT INTO PostedReviews (Placeid, Reviewerid, Ratings, w_review) VALUES (3,'T004', '5.8', 'Great Place! Decent food.');
INSERT INTO PostedReviews (Placeid, Reviewerid, Ratings, w_review) VALUES (13,'T005', '4.0', 'Meh...');
INSERT INTO PostedReviews (Placeid, Reviewerid, Ratings, w_review) VALUES (23,'T003', '6.7', 'Nice Club...100% would recommend');
INSERT INTO PostedReviews (Placeid, Reviewerid, Ratings, w_review) VALUES (33,'T004', '9.2', 'Best Concert ever!');
INSERT INTO PostedReviews (Placeid, Reviewerid, Ratings, w_review) VALUES (43,'T005', '8.8', '');
INSERT INTO PostedReviews (Placeid, Reviewerid, Ratings, w_review) VALUES (4,'T003', '9.15', '');

INSERT INTO MedicalService VALUES ('M001', 6045450991, 'PolyCan Health Centre, Simon Fraser University, 9055 University High St 102, #205, Burnaby, BC V5A 0A7');
INSERT INTO MedicalService VALUES ('M002', 6042984878, 'INSYNC PHYSIOTHERAPY, 4580 Hastings St #204, Burnaby, BC V5C 2K4');
INSERT INTO MedicalService VALUES ('M003', 6044211027, 'Cameron Medical Clinic, 9600 Cameron St Unit 240, Burnaby, BC V3J 7N3');
INSERT INTO MedicalService VALUES ('M004', 6044281363, 'Spring Medical Centre, 4453 Lougheed Hwy., Burnaby, BC V5C 3Z2');
INSERT INTO MedicalService VALUES ('M005', 6045221886, 'Middlegate Medical Centre, 7018 Kingsway, Burnaby, BC V5E 1E7');

INSERT INTO MedicalService VALUES ('M006', 6046606897, 'BC Emergency Health Services, 2955 Virtual Way, Vancouver, BC V5M 4X6');
INSERT INTO MedicalService VALUES ('M007', 6048754111, 'Vancouver General Hospital Emergency Department, 920 W 10th Ave, Vancouver, BC V5Z 1M9');
INSERT INTO MedicalService VALUES ('M008', 6046822344, 'St. Pauls Hospital Emergency, 1081 Burrard St, Vancouver, BC V6Z 1Y6');
INSERT INTO MedicalService VALUES ('M009', 8556602757, 'BC Ambulance Service - Station 261, 181 W 7th Ave, Vancouver, BC V5Y 1L8');
INSERT INTO MedicalService VALUES ('M010', 6048741141, 'Mount Saint Joseph Hospital: Emergency Department, 3080 Prince Edward St, Vancouver, BC V5T 3N4');

INSERT INTO NonEmergencyMedicalService VALUES ('M001', 'https://www.polycanhealthcentre.com/meet-the-team/', '8:00 AM TO 6:00 PM');
INSERT INTO NonEmergencyMedicalService VALUES ('M002', 'https://insyncphysio.com/burnaby/burnaby-team/', '7:00 AM TO 7:00 PM');
INSERT INTO NonEmergencyMedicalService VALUES ('M003', 'https://www.cameronmedical.net/virtual-appointment-portal', '9:00 AM TO 4:00 PM');
INSERT INTO NonEmergencyMedicalService VALUES ('M004', 'https://springmedicalcentre.com/our-team/', '9:00 AM TO 6:00 PM');
INSERT INTO NonEmergencyMedicalService VALUES ('M005', 'shorturl.at/fltIN', '10:00 AM TO 5:30 PM');


INSERT INTO EmergencyMedicalService VALUES ('M006', FALSE); 
INSERT INTO EmergencyMedicalService VALUES ('M007', TRUE); 
INSERT INTO EmergencyMedicalService VALUES ('M008', TRUE); 
INSERT INTO EmergencyMedicalService VALUES ('M009', TRUE); 
INSERT INTO EmergencyMedicalService VALUES ('M010', TRUE); 


INSERT INTO HadPictures VALUES('Earls.png',1);
INSERT INTO HadPictures VALUES('Metrotown.png',2);
INSERT INTO HadPictures VALUES('Tasty.png',3);
INSERT INTO HadPictures VALUES('Earls.png',4);
INSERT INTO HadPictures VALUES('Tasty.png',5);


INSERT INTO HadPersonalPosts VALUES('PP001','T001');
INSERT INTO HadPersonalPosts VALUES('PP002','T002');
INSERT INTO HadPersonalPosts VALUES('PP003','T003');
INSERT INTO HadPersonalPosts VALUES('PP004','T004');
INSERT INTO HadPersonalPosts VALUES('PP005','T005');


INSERT INTO Restaurant VALUES (3, 'Casual', 'Modern Canadian Cuisine', '$$', 'Cactus Club','1085 Canada Pl, Vancouver, BC V6C 3E1','B003');
INSERT INTO Restaurant VALUES (4, 'Casual', 'Japanese', '$$$$', 'Kobe Japanese Steakhouse','1042 Alberni St, Vancouver, BC V6E 1A3','B006');
INSERT INTO Restaurant VALUES (5, 'Business Casual', 'French', '$$$$', 'Le Crocodile','909 Burrard St #100, Vancouver, BC V6Z 2N2','B007');
INSERT INTO Restaurant VALUES (6, 'Casual', 'Upscale Casual', '$$', 'Earls Kitchen + Bar','6070 Silver Dr, Burnaby, BC V5H 0H5','B008');
INSERT INTO Restaurant VALUES (7, 'Casual', 'Indian', '$$', 'Tasty Indian Bistro','8295 120 St, Delta, BC V4C 6R1','B009');
INSERT INTO Restaurant VALUES (8, 'Casual', 'Classic American', '$$$', 'Joe Fortes Seafood & Chop House', '777 Thurlow St, Vancouver, BC V6E 3V5', 'JoeFortes');
INSERT INTO Restaurant VALUES (9, 'Casual', 'Classic Comfort', '$$$', "Cardero's Restaurant", '1583 Coal Harbour Quay, Vancouver, BC V6G 3E7', 'CarRes');
INSERT INTO Restaurant VALUES (10, 'Formal', 'Seafood', '$$$$', "Blue Water Cafe", '1095 Hamilton St, Vancouver, BC V6B 5T4', 'BlueWater');
INSERT INTO Restaurant VALUES (11, 'Business Casual', 'North American', '$$$', "Glowbal", '590 W Georgia St, Vancouver, BC V6E 1A3', 'Glow');
INSERT INTO Restaurant VALUES (12, 'Casual', 'Vegetarian', '$$$', "The Acorn Restaurant", '3995 Main St, Vancouver, BC V5V 3P3', 'Acorn');


INSERT INTO Transport VALUES ('TP001',3.05);
INSERT INTO Transport VALUES ('TP002',35.20);
INSERT INTO Transport VALUES ('TP003',10.75);
INSERT INTO Transport VALUES ('TP004',20.30);
INSERT INTO Transport VALUES ('TP005',6.10);


INSERT INTO PublicTransport VALUES ('TP001','shorturl.at/achvB'); -- Cactus Club
INSERT INTO PublicTransport VALUES ('TP002','shorturl.at/krtJW'); -- Stanley Park
INSERT INTO PublicTransport VALUES ('TP003','shorturl.at/dkvAY'); -- Cineplex
INSERT INTO PublicTransport VALUES ('TP004','shorturl.at/pDJ04'); -- Cameron Medical Clinic
INSERT INTO PublicTransport VALUES ('TP005','shorturl.at/ovIST'); -- Earls Kitchen + Bar


INSERT INTO PrivateTransport VALUES ('TP001', 'Uber');
INSERT INTO PrivateTransport VALUES ('TP002', 'Lyft');
INSERT INTO PrivateTransport VALUES ('TP003', 'Yellow Cab Vancouver');
INSERT INTO PrivateTransport VALUES ('TP004', 'Uber');
INSERT INTO PrivateTransport VALUES ('TP005', 'Lyft');


INSERT INTO Park VALUES(13,'https://stanleyparkvan.com/stanley-park-van-events-calendar.html', 'Stanley Park', '1166 Stanley Park Drive Vancouver, BC V6G Coal Harbour', 'B005');
INSERT INTO Park VALUES(14,'https://do604.com/venues/queen-elizabeth-park', 'Queen Elizabeth Park', '4600 Cambie St, Vancouver, BC V5Z 2Z1', 'B010');
INSERT INTO Park VALUES(15,'https://www.centralpark.com/search/event/upcoming-events/#page=1', 'Central Park', '3883 Imperial St, Burnaby, BC V5S 3R2', 'B011');
INSERT INTO Park VALUES(16,'https://do604.com/venues/creekside-park', 'Creekside Park', '1455 Quebec St, Vancouver, BC V6A 3Z7', 'B012');
INSERT INTO Park VALUES(17, 'https://do604.com/venues/coopers-park', 'Coopers Park', '1020 Marinaside Crescent, Vancouver, BC V6Z 3A2', 'B013');


INSERT INTO Concert VALUES(33,105, 07-02-2022, 'Shawn Mendes: Wonder, The World Tour', 'Rogers Arena, 800 Griffiths Way, Vancouver, BC', 'B101');
INSERT INTO Concert VALUES(34, 60, 10-04-2022, 'WU-TANG CLAN', 'PNE Amphitheatre, 2901 E Hastings St, Vancouver, BC', 'B052');
INSERT INTO Concert VALUES(35, 40, 07-04-2022, 'King Princess and Dora Jar', 'Queen Elizabeth Theatre,630 Hamilton St, Vancouver, BC', 'B100');
INSERT INTO Concert VALUES(36, 153, 08-23-2022, 'The Weeknd', 'BC Place. 777 Pacific Blvd, Vancouver, BC', 'B999');
INSERT INTO Concert VALUES(37, 36, 11-20-2022, 'Alan Walker', 'Harbour Event Centre, 750 Pacific Blvd, Vancouver, BC', 'B678');


INSERT INTO Club VALUES (23, 50.0,'Arts Club Theatre Company', '203 - 162 West 1st Avenue Vancouver, BC V5Y 0H6', 'B014');
INSERT INTO Club VALUES (24, 0.0, 'Celebrities Night Club', '1022 Davie St, Vancouver, BC V6E 1M3','B015');
INSERT INTO Club VALUES (25, 40.0, 'Club Mumbai Vancouver', '560 Seymour St, Vancouver, BC V6B 0A8', 'B016');
INSERT INTO Club VALUES (26, 0.0, 'Levels Nightclub', '560 Seymour St, Vancouver, BC V6B 0A8','B017');
INSERT INTO Club VALUES (27, 0.0, 'Bar None Nightclub', '1222 Hamilton St, Vancouver, BC V6B 2S8', 'B018');


INSERT INTO Malls VALUES(28, 'https://thecityoflougheed.com/directory/', 'Lougheed Town Centre','9855 Austin Ave, Burnaby, BC V3J 1N4', 'B055');
INSERT INTO Malls VALUES(29, 'https://theamazingbrentwood.com/directory/', 'The Amazing Brentwood', '4567 Lougheed Hwy., Burnaby, BC V5C 3Z6', 'B055');
INSERT INTO Malls VALUES(30, 'https://metropolisatmetrotown.com/en/stores/', 'Metropolis at Metrotown', '4700 Kingsway, Burnaby, BC V5H 4M5', 'B004');
INSERT INTO Malls VALUES(31, 'https://capilanomall.com/directory/', 'Capilano Mall', '935 Marine Dr, North Vancouver, BC V7P 1S3', 'B058');
INSERT INTO Malls VALUES(32, 'https://shops.cadillacfairview.com/property/cf-pacific-centre/store#/', 'Pacific Centre', '701 W Georgia St, Vancouver, BC V7Y 1G5', 'B059');


INSERT INTO RecreationCenters VALUES(18,'https://vancouver.ca/parks-recreation-culture/creekside-community-recreation-centre.aspx', 'Creekside Community Recreation Centre', '1 Athletes Way, Vancouver, BC V5Y 0B1','B019');
INSERT INTO RecreationCenters VALUES(19,'https://vancouver.ca/parks-recreation-culture/renfrew-park-community-centre.aspx', 'Renfrew Park Community Centre', '2929 E 22nd Ave, Vancouver, BC V5M 2Y3','B020');
INSERT INTO RecreationCenters VALUES(20,'shorturl.at/rzM79', 'Bonsor Recreation Complex', '6550 Bonsor Ave, Burnaby, BC V5H 3G4','B021');
INSERT INTO RecreationCenters VALUES(21,'https://vancouver.ca/parks-recreation-culture/kensington-community-centre.aspx', 'Kensington Community Centre', '5175 Dumfries St, Vancouver, BC V5P 3A2','B022');
INSERT INTO RecreationCenters VALUES(22,'shorturl.at/fgtBI', 'Willingdon Community Centre', '1491 Carleton Ave, Burnaby, BC V5C 4V5','B023');


INSERT INTO Follows VALUES ('T001', 'T002');
INSERT INTO Follows VALUES ('T002', 'T001');
INSERT INTO Follows VALUES ('T001', 'T003');
INSERT INTO Follows VALUES ('T003', 'T002');
INSERT INTO Follows VALUES ('T002', 'T003');


INSERT INTO DesiresToGoTo VALUES ('T001',3,'B003','Cactus Club','1085 Canada Pl, Vancouver, BC V6C 3E1');
INSERT INTO DesiresToGoTo VALUES ('T002',33,'B101','Shawn Mendes: Wonder, The World Tour','Rogers Arena, 800 Griffiths Way, Vancouver, BC');
INSERT INTO DesiresToGoTo VALUES ('T003',6,'B008','Earls Kitchen + Bar','6070 Silver Dr, Burnaby, BC V5H 0H5');
INSERT INTO DesiresToGoTo VALUES ('T004',13,'B005','Stanley Park','1166 Stanley Park Drive Vancouver, BC V6G Coal Harbour');
INSERT INTO DesiresToGoTo VALUES ('T005',23,'B014','Arts Club Theatre Company','203 - 162 West 1st Avenue Vancouver, BC V5Y 0H6');


INSERT INTO Requires VALUES ('T001', 'M005');
INSERT INTO Requires VALUES ('T002', 'M004');
INSERT INTO Requires VALUES ('T003', 'M003');
INSERT INTO Requires VALUES ('T004', 'M002');
INSERT INTO Requires VALUES ('T005', 'M001');


INSERT INTO ArriveBy VALUES ('TP001',3,'B003', 'Cactus Club', '1085 Canada Pl, Vancouver, BC V6C 3E1');
INSERT INTO ArriveBy VALUES ('TP002',13,'B005', 'Stanley Park', '1166 Stanley Park Drive Vancouver, BC V6G Coal Harbour');
INSERT INTO ArriveBy VALUES ('TP003',1,'B001', 'Cineplex', '4700 Kingsway, Burnaby, BC V5H 4M1');
INSERT INTO ArriveBy VALUES ('TP004',40,'B703', 'Cameron Medical Clinic', '9600 Cameron St Unit 240, Burnaby, BC V3J 7N3');
INSERT INTO ArriveBy VALUES ('TP005',6,'B008', 'Earls Kitchen + Bar', '6070 Silver Dr, Burnaby, BC V5H 0H5');




