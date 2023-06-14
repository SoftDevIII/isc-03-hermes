CREATE TYPE arrival_enum AS ENUM ('Car', 'Bike', 'Walk');
CREATE TYPE incident_enum AS ENUM ('TrafficIncident', 'NaturalDisaster', 'SocialIncident', 'DangerZone');
CREATE TYPE week_day_enum AS ENUM ('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');

CREATE TABLE IF NOT EXISTS Test
(
  id_test SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS Customer
(
    CustomerID SERIAL,
    CustomerName VARCHAR(50) NOT NULL,
    Password VARCHAR(50) NOT NULL,
    Email VARCHAR(50) NOT NULL,
    PRIMARY KEY (CustomerID)
);

CREATE TABLE IF NOT EXISTS Place
(
  PlaceID SERIAL,
  PlaceName VARCHAR(50) NOT NULL,
  PlaceDescription VARCHAR(50) NOT NULL,
  Coordinates GEOMETRY(Point, 4326),
  IsCommonPlace BOOLEAN NOT NULL,
  Status incident_enum NOT NULL,
  PRIMARY KEY (PlaceID)
);

CREATE TABLE IF NOT EXISTS CommonPlace
(
  CommonPlaceID SERIAL,
  PlaceID INT NOT NULL,
  PlaceType VARCHAR(50) NOT NULL,
  HasReviews BOOLEAN NOT NULL,
  Rating DECIMAL(2,1) NOT NULL,
  CONSTRAINT chk_Ratings CHECK (Rating >= 0 AND Rating <= 5),
  PRIMARY KEY (CommonPlaceID),
  FOREIGN KEY (PlaceID) REFERENCES Place(PlaceID)
);

CREATE TABLE IF NOT EXISTS ContactInfo
(
  ContactInfoID SERIAL,
  PlaceID INT NOT NULL,
  PhoneNumber VARCHAR(50) NOT NULL,
  Email VARCHAR(50) NOT NULL,
  Website VARCHAR(50) NOT NULL,
  PRIMARY KEY (ContactInfoID),
  FOREIGN KEY (PlaceID) REFERENCES Place(PlaceID)
);

CREATE TABLE IF NOT EXISTS Attention
(
  AttentionID SERIAL,
  PlaceID INT NOT NULL,
  OpenHour TIME NOT NULL,
  CloseHour TIME NOT NULL,
  Day week_day_enum NOT NULL,
  PRIMARY KEY (AttentionID),
  FOREIGN KEY (PlaceID) REFERENCES Place(PlaceID)
);

CREATE TABLE IF NOT EXISTS VisitedPlace
(
  CustomerID INT NOT NULL,
  PlaceID INT NOT NULL,
  visitDate DATE NOT NULL,
  IsFavorite BOOLEAN NOT NULL,
  PRIMARY KEY (CustomerID, PlaceID),
  FOREIGN KEY (CustomerID) REFERENCES Customer(CustomerID),
  FOREIGN KEY (PlaceID) REFERENCES Place(PlaceID)
);

CREATE TABLE IF NOT EXISTS Review
(
  ReviewID SERIAL,
  CustomerID INT NOT NULL,
  PlaceID INT NOT NULL,
  ReviewDate DATE NOT NULL,
  ReviewText VARCHAR(50) NOT NULL,
  Rating DECIMAL(2,1) NOT NULL,
  CONSTRAINT chk_Ratings CHECK (Rating >= 0 AND Rating <= 5),
  PRIMARY KEY (ReviewID),
  FOREIGN KEY (CustomerID) REFERENCES Customer(CustomerID),
  FOREIGN KEY (PlaceID) REFERENCES Place(PlaceID)
);

CREATE TABLE IF NOT EXISTS Destination
(
  DestinationID SERIAL,
  CustomerID INT NOT NULL,
  PlaceID INT NOT NULL,
  StartPoint GEOMETRY(Point, 4326),
  EndPoint GEOMETRY(Point, 4326),
  ArrivalMethod arrival_enum NOT NULL,
  PRIMARY KEY (DestinationID),
  FOREIGN KEY (CustomerID) REFERENCES Customer(CustomerID),
  FOREIGN KEY (PlaceID) REFERENCES Place(PlaceID)
);

CREATE TABLE IF NOT EXISTS Authentication
(
  AuthenticationID SERIAL,
  CustomerID INT NOT NULL,
  PRIMARY KEY (AuthenticationID),
  FOREIGN KEY (CustomerID) REFERENCES Customer(CustomerID)
);

CREATE TABLE IF NOT EXISTS RoutePoints
(
  RoutePointsID SERIAL,
  DestinationID INT NOT NULL,
  RoutePoint GEOMETRY(Point, 4326),
  PRIMARY KEY (RoutePointsID),
  FOREIGN KEY (DestinationID) REFERENCES Destination(DestinationID)
);
