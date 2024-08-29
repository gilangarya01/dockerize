CREATE TABLE IF NOT EXISTS items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL
);

INSERT INTO items (name, description) VALUES
('Item 1', 'Description for Item 1'),
('Item 2', 'Description for Item 2'),
('Item 3', 'Description for Item 3'),
('Item 4', 'Description for Item 4'),
('Item 5', 'Description for Item 5');
