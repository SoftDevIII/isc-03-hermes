CREATE TABLE IF NOT EXISTS test(
  id_test INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  name VARCHAR(100) NOT NULL
);

INSERT INTO test (name) VALUES ('Hello World from MySql!'), ('holas');

-- -- Create the RoutePoints table
-- CREATE TABLE RoutePoints (
--     RoutePointsID SERIAL PRIMARY KEY,
--     destinationPoint GEOMETRY(Point, 4326),
--     DestinationID INT,
--     FOREIGN KEY (DestinationID) REFERENCES YourOtherTable(DestinationID)
-- );


-- CREATE TABLE User
-- (
--     UserID INT NOT NULL AUTO_INCREMENT,
--     UserName VARCHAR(50) NOT NULL,
--     Password VARCHAR(50) NOT NULL,
--     Email VARCHAR(50) NOT NULL,
--     PRIMARY KEY (UserID)
-- );

-- CREATE TABLE Place
-- (
--   PlaceID INT NOT NULL AUTO_INCREMENT,
--   PlaceName VARCHAR(50) NOT NULL,
--   PlaceDescription VARCHAR(50) NOT NULL,
--   Coordinates GEOMETRY(Point, 4326),
--   IsCommonPlace BOOLEAN NOT NULL,
--   Status ENUM('TrafficIncident', 'NaturalDisaster', 'SocialIncident', 'DangerZone') NOT NULL,
--   PRIMARY KEY (PlaceID)
-- );

-- CREATE TABLE CommonPlace
-- (
--   CommonPlaceID INT NOT NULL AUTO_INCREMENT,
--   PlaceID INT NOT NULL,
--   PlaceType VARCHAR(50) NOT NULL,
--   HasReviews BOOLEAN NOT NULL,
--   Raiting DECIMAL(2,1) NOT NULL,
--   CONSTRAINT chk_Raitings CHECK (Raiting >= 0 AND Raiting <= 5),
--   PRIMARY KEY (CommonPlaceID),
--   FOREIGN KEY (PlaceID) REFERENCES Place(PlaceID)
-- )

-- CREATE TABLE ContactInfo
-- (
--   ContactInfoID INT NOT NULL AUTO_INCREMENT,
--   PlaceID INT NOT NULL,
--   PhoneNumber VARCHAR(50) NOT NULL,
--   Email VARCHAR(50) NOT NULL,
--   Website VARCHAR(50) NOT NULL,
--   PRIMARY KEY (ContactInfoID),
--   FOREIGN KEY (PlaceID) REFERENCES Place(PlaceID)
-- )

-- CREATE TABLE Attention
-- (
--   AttentionID INT NOT NULL AUTO_INCREMENT,
--   PlaceID INT NOT NULL,
--   OpenHour TIME NOT NULL,
--   CloseHour TIME NOT NULL,
--   Day enum ('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday') NOT NULL,
--   PRIMARY KEY (AttentionID),
--   FOREIGN KEY (PlaceID) REFERENCES Place(PlaceID)
-- )



-- CREATE TABLE VisitedPlace
-- (
--   UserID INT NOT NULL,
--   PlaceID INT NOT NULL,
--   visitDate DATE NOT NULL,
--   IsFavorite BOOLEAN NOT NULL,
--   PRIMARY KEY (UserID, PlaceID),
--   FOREIGN KEY (UserID) REFERENCES User(UserID),
--   FOREIGN KEY (PlaceID) REFERENCES Place(PlaceID)
-- )

-- CREATE TABLE Review
-- (
--   ReviewID INT NOT NULL AUTO_INCREMENT,
--   UserID INT NOT NULL,
--   PlaceID INT NOT NULL,
--   ReviewDate DATE NOT NULL,
--   ReviewText VARCHAR(50) NOT NULL,
--   Rating DECIMAL(2,1) NOT NULL,
--   CONSTRAINT chk_Ratings CHECK (Rating >= 0 AND Rating <= 5),
--   PRIMARY KEY (ReviewID),
--   FOREIGN KEY (UserID) REFERENCES User(UserID),
--   FOREIGN KEY (PlaceID) REFERENCES Place(PlaceID)
-- )

-- CREATE TABLE Destination
-- (
--   DestinationID INT NOT NULL AUTO_INCREMENT,
--   UserID INT NOT NULL,
--   PlaceID INT NOT NULL,
--   StartPoint GEOMETRY(Point, 4326),
--   EndPoint GEOMETRY(Point, 4326),
--   ArrivalMethod ENUM ('Car', 'Bike', 'Walk') NOT NULL,
--   PRIMARY KEY (DestinationID),
--   FOREIGN KEY (UserID) REFERENCES User(UserID),
--   FOREIGN KEY (PlaceID) REFERENCES Place(PlaceID)
-- )

-- CREATE TABLE Authentication
-- (
--   AuthenticationID INT NOT NULL AUTO_INCREMENT,
--   UserID INT NOT NULL,
--   PRIMARY KEY (AuthenticationID),
--   FOREIGN KEY (UserID) REFERENCES User(UserID)
-- )

-- CREATE TABLE RoutePoints
-- (
--   RoutePointsID INT NOT NULL AUTO_INCREMENT,
--   DestinationID INT NOT NULL,
--   RoutePoint GEOMETRY(Point, 4326),
--   PRIMARY KEY (RoutePointsID),
--   FOREIGN KEY (DestinationID) REFERENCES Destination(DestinationID)
-- )
