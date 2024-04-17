USE FinderDB;

-- Employee table
CREATE TABLE IF NOT EXISTS Employee (Employee_ID VARCHAR(255) PRIMARY KEY, FName VARCHAR(255), LName VARCHAR(255));


-- Item table
CREATE TABLE IF NOT EXISTS Item (ItemID INT PRIMARY KEY NOT NULL AUTO_INCREMENT, ItemName VARCHAR(255), Status VARCHAR(255), Image VARCHAR(255), Description TEXT, DateFound DATE, Location VARCHAR(255), ClaimsE_ID VARCHAR(255), PostE_ID VARCHAR(255), FOREIGN KEY (ClaimsE_ID) REFERENCES Employee(Employee_ID), FOREIGN KEY (PostE_ID) REFERENCES Employee(Employee_ID));


-- Add employees
INSERT INTO Employee (Employee_ID, FName, LName) VALUES ("002828141", 'Eric', 'Intern'), ("002818341", 'Sally', 'Developer'), ("002813213", 'Kendrick', 'Manager');


-- Add items
INSERT INTO Item (ItemName, Status, Image, Description, DateFound, Location, PostE_ID) VALUES ('Keys Set', 'Unclaimed', 'keys.jpg', 'A set of keys with a superhero keychain, found in the cafeteria.', '2024-04-10', 'Cafeteria', "002828141"), ('Basketball', 'Unclaimed', 'basketball.jpg', 'A basketball found in the gym.', '2024-04-10', 'Gym', "002828141"), ('Ocean', 'Unclaimed', 'basketball.jpg', 'Ocean is my son.', '2024-04-10', 'Library', "002828141");

