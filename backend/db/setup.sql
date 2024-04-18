USE FinderDB;

-- Employee table
CREATE TABLE IF NOT EXISTS Employee (
    Employee_ID VARCHAR(255) PRIMARY KEY, FName VARCHAR(255), LName VARCHAR(255)
);

-- Item table
CREATE TABLE IF NOT EXISTS Item (
    ItemID VARCHAR(255) PRIMARY KEY, ItemName VARCHAR(255), Status VARCHAR(255), Image VARCHAR(255), Description TEXT, DateFound DATE, Location VARCHAR(255), ClaimsE_ID VARCHAR(255), PostE_ID VARCHAR(255), FOREIGN KEY (ClaimsE_ID) REFERENCES Employee (Employee_ID), FOREIGN KEY (PostE_ID) REFERENCES Employee (Employee_ID)
);

-- LostRequest Table
CREATE TABLE IF NOT EXISTS LostRequest (
    RequestID INT PRIMARY KEY AUTO_INCREMENT, Requester_ID VARCHAR(255), ItemName VARCHAR(255), Description TEXT, DateLost DATE, Location VARCHAR(255), Status VARCHAR(255), FOREIGN KEY (Requester_ID) REFERENCES Employee (Employee_ID)
);

-- Add employees
INSERT INTO
    Employee (Employee_ID, FName, LName)
VALUES ("002828141", 'Eric', 'Intern'),
    (
        "002818341", 'Sally', 'Developer'
    ),
    (
        "002813213", 'Kendrick', 'Manager'
    );

-- Add items
INSERT INTO
    Item (
        ItemID, ItemName, Status, Description, DateFound, Location, PostE_ID
    )
VALUES (
        "1234123412341234", 'Keys Set', 'Unclaimed', 'A set of keys with a superhero keychain, found in the cafeteria.', '2024-04-10', 'Cafeteria', "002818341"
    ),
    (
        "213891238971293874328", 'Basketball', 'Unclaimed', 'A basketball found in the gym.', '2024-04-10', 'Gym', "002818341"
    ),
    (
        "120934891234872438782", 'Ocean', 'Unclaimed', 'Ocean is my son.', '2024-04-10', 'Library', "002818341"
    );

-- Add LostRequst
INSERT INTO
    LostRequest (
        Requester_ID, ItemName, Description, DateLost, Location, Status
    )
VALUES (
        "002828141", 'Keys Set', 'A set of keys with a superhero keychain, found in the cafeteria.', '2024-04-10', 'Cafeteria', 'Unclaimed'
    ),
    (
        "002828141", 'Basketball', 'A basketball found in the gym.', '2024-04-10', 'Gym', 'Unclaimed'
    ),
    (
        "002828141", 'Ocean', 'Ocean is my son.', '2024-04-10', 'Library', 'Unclaimed'
    );