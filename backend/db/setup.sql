USE FinderDB;

-- Employee table
CREATE TABLE IF NOT EXISTS Employee (
    Employee_ID INT PRIMARY KEY,
    FName VARCHAR(255),
    LName VARCHAR(255),
);

-- Item table
CREATE TABLE IF NOT EXISTS Item ( 
    ItemID INT PRIMARY KEY NOT NULL AUTO_INCREMENT, 
    ItemName VARCHAR(255), 
    Status VARCHAR(255), 
    Image VARCHAR(255), 
    Description TEXT, 
    DateFound DATE, 
    Location VARCHAR(255), 
    ClaimsE_ID INT, 
    PostE_ID INT, 
    S_ID INT,
    FOREIGN KEY (ClaimsE_ID) REFERENCES Employee(Employee_ID), 
    FOREIGN KEY (PostE_ID) REFERENCES Employee(Employee_ID)
);

-- Add employees
INSERT INTO Employee (Employee_ID, FName, LName) VALUES (1, 'Eric', 'Intern'), (2, 'Sally', 'Developer'), (3, 'Kendrick', 'Manager');

-- Add items
INSERT INTO Item (ItemName, Status, Image, Description, DateFound, Location, ClaimsE_ID, PostE_ID) VALUES ('Cum', 'Found', 'bruh.jpg', 'A set of keys with a superhero keychain, found in the cafeteria.', '2024-04-10', 'Cafeteria', NULL, 1), ('Lebron', 'James', 'lebron.jpg', 'get cum.', '2024-04-10', 'ma dick', NULL, 1);