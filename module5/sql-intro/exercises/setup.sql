USE sql_intro;

CREATE TABLE Dolphin(
    name VARCHAR(50) PRIMARY KEY,
    color VARCHAR(20),
    height INTEGER(3),
    healthy BIT DEFAULT 1
)

delete from Dolphin

INSERT INTO Dolphin (name,
    color,
    height,
    healthy)
VALUES 
("Daron", "Blue", 3, 1),
("Steve", "Green", 6, 0),
("Amanda", "Pink", 1, 1),
("shortBlue", "Blue", 1, 1);

select * from Dolphin