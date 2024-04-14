use FinderDB;

CREATE TABLE IF NOT EXISTS Employee (
    EmployeeID INT PRIMARY KEY,
    Points INT,
    FirstName VARCHAR(50) NOT NULL,
    LastName VARCHAR(50) NOT NULL
);

INSERT INTO Employee (EmployeeID, Points, FirstName, LastName) VALUES
(1, 100, 'John', 'Doe'),
(2, 150, 'Jane', 'Smith');

SELECT FirstName
FROM Employee
WHERE EmployeeID = 1;