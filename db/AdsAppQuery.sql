USE ads_app

CREATE TABLE Users(
UserID INTEGER NOT NULL PRIMARY KEY IDENTITY(1, 1) ,
UserName VARCHAR   (50) NOT NULL,
Email VARCHAR   (50) NOT NULL,
Password VARCHAR   (50) NOT NULL,
    CONSTRAINT uc_UserName UNIQUE (UserName),
    CONSTRAINT uc_Email UNIQUE (Email) 
)

CREATE TABLE Ads(
AdsID INTEGER PRIMARY KEY IDENTITY(1, 1) NOT NULL,
UserID_ INTEGER NOT NULL, 
AdsName VARCHAR(50) NOT NULL,
AdsPrice VARCHAR(50) NOT NULL,
AdsDescription VARCHAR(MAX) ,
AdsPhotoPaths VARCHAR(MAX) NOT NULL,
FOREIGN KEY (UserID_) REFERENCES Users (UserID)
)


ALTER TABLE Ads  
ADD isSelled BIT ;


CREATE TABLE Profils (
ProfilID INTEGER PRIMARY KEY IDENTITY(1, 1) NOT NULL,
Name VARCHAR(20) NOT NULL,
Age INTEGER NOT NULL,
Gender VARCHAR(8) ,
PPurl VARCHAR(MAX) ,
Number INTEGER  NOT NULL,
    CONSTRAINT uc_Number UNIQUE (Number),

)

CREATE TABLE UserAdsFavorite(
FavoriteID INTEGER PRIMARY KEY IDENTITY(1, 1) NOT NULL,
UserID_ INTEGER NOT NULL,
AdsID_ INTEGER NOT NULL,
FOREIGN KEY (UserID_) REFERENCES Users (UserID),
FOREIGN KEY (AdsID_) REFERENCES Ads (AdsID)
)

CREATE TABLE Photos(
PhotoID INTEGER PRIMARY KEY IDENTITY(1, 1) NOT NULL,
Url VARCHAR(MAX) NOT NULL,
AdsID_ INTEGER NOT NULL,
FOREIGN KEY (AdsID_) REFERENCES Ads (AdsID)
)

CREATE TABLE Category (
    CategoryID INT IDENTITY(1, 1) PRIMARY KEY,
    CategoryName VARCHAR(MAX) NOT NULL,
    CategoryPhotoUrl VARCHAR(MAX) NOT NULL
);

ALTER TABLE Ads  
ADD CategoryID_ INTEGER,
FOREIGN KEY (CategoryID_) REFERENCES Category (CategoryID);  

ALTER TABLE Profils 
ADD UserID_ INTEGER,
FOREIGN KEY (UserID_) REFERENCES Users (UserID)

ALTER TABLE Ads 
ADD ProfilID_ INTEGER,
FOREIGN KEY (ProfilID_) REFERENCES Profils (ProfilID)

ALTER TABLE UserAdsFavorite 
ADD isFavorite BIT 


ALTER TABLE Ads
ALTER COLUMN AdsPrice int 

SET IDENTITY_INSERT Users OFF; 
SET IDENTITY_INSERT Ads OFF; 
SET IDENTITY_INSERT Profils OFF;
SET IDENTITY_INSERT UserAdsFavorite OFF;
SET IDENTITY_INSERT Photos OFF;
SET IDENTITY_INSERT Category OFF;

INSERT INTO Users
/*Note the column list is REQUIRED here, not optional*/
            (
             UserName,
             Email,
			 Password)
VALUES      (
             'OGUZ',
             'GMAIL',
			 '1234')



INSERT INTO Users
/*Note the column list is REQUIRED here, not optional*/
            (
             UserName,
             Email,
			 Password)
VALUES      (
             'OGUZ',
             'GMAIL',
			 '1234')

INSERT INTO Ads (UserID_, AdsName, AdsPrice, AdsDescription, AdsPhotoPaths, isSelled, ProfilID_)
VALUES (1, 'ilan1', 10, 'aciklama', 'www.', 0, 1);

 


 DROP TABLE UserAdsFavorite
 DROP TABLE Photos
 DROP TABLE Ads 
 DROP TABLE Profils
 DROP TABLE Users

 SELECT * FROM information_schema.tables WHERE table_name = 'Profils';
