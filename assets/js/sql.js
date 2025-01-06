// assets/js/sql.js
const sqlQuestions = [
    {
        question: "What does SQL stand for?",
        options: [
            { text: "A) Structured Query Language", correct: true },
            { text: "B) Simple Query Language", correct: false },
            { text: "C) Standard Query Language", correct: false },
            { text: "D) System Query Language", correct: false }
        ]
    },
    {
        question: "Which SQL statement is used to extract data from a database?",
        options: [
            { text: "A) GET", correct: false },
            { text: "B) EXTRACT", correct: false },
            { text: "C) SELECT", correct: true },
            { text: "D) OPEN", correct: false }
        ]
    },
    {
        question: "Which SQL statement is used to update data in a database?",
        options: [
            { text: "A) SAVE", correct: false },
            { text: "B) MODIFY", correct: false },
            { text: "C) UPDATE", correct: true },
            { text: "D) WRITE", correct: false }
        ]
    },
    {
        question: "Which SQL statement is used to delete data from a database?",
        options: [
            { text: "A) DELETE", correct: true },
            { text: "B) REMOVE", correct: false },
            { text: "C) COLLAPSE", correct: false },
            { text: "D) DROP", correct: false }
        ]
    },
    {
        question: "Which SQL statement is used to insert new data in a database?",
        options: [
            { text: "A) ADD", correct: false },
            { text: "B) INSERT INTO", correct: true },
            { text: "C) CREATE", correct: false },
            { text: "D) NEW", correct: false }
        ]
    },
    {
        question: "How do you select a column named \"FirstName\" from a table named \"Persons\"?",
        options: [
            { text: "A) EXTRACT FirstName FROM Persons", correct: false },
            { text: "B) SELECT FirstName FROM Persons", correct: true },
            { text: "C) SELECT Persons.FirstName", correct: false },
            { text: "D) GET FirstName FROM Persons", correct: false }
        ]
    },
    {
        question: "Which SQL keyword is used to sort the result-set?",
        options: [
            { text: "A) SORT BY", correct: false },
            { text: "B) ORDER BY", correct: true },
            { text: "C) ARRANGE BY", correct: false },
            { text: "D) ORGANIZE BY", correct: false }
        ]
    },
    {
        question: "With SQL, how do you select all the records from a table named \"Persons\" where the value of the column \"FirstName\" starts with \"a\"?",
        options: [
            { text: "A) SELECT * FROM Persons WHERE FirstName='a'", correct: false },
            { text: "B) SELECT * FROM Persons WHERE FirstName LIKE 'a%'", correct: true },
            { text: "C) SELECT * FROM Persons WHERE FirstName='%a%'", correct: false },
            { text: "D) SELECT * FROM Persons WHERE FirstName LIKE '%a'", correct: false }
        ]
    },
    {
        question: "Which SQL keyword is used to combine rows from two or more tables?",
        options: [
            { text: "A) JOIN", correct: true },
            { text: "B) COMBINE", correct: false },
            { text: "C) MERGE", correct: false },
            { text: "D) UNION", correct: false }
        ]
    },
    {
        question: "What is the most common type of join?",
        options: [
            { text: "A) OUTER JOIN", correct: false },
            { text: "B) INNER JOIN", correct: true },
            { text: "C) RIGHT JOIN", correct: false },
            { text: "D) LEFT JOIN", correct: false }
        ]
    },
    {
        question: "Which operator is used to select values within a range?",
        options: [
            { text: "A) WITHIN", correct: false },
            { text: "B) BETWEEN", correct: true },
            { text: "C) RANGE", correct: false },
            { text: "D) IN", correct: false }
        ]
    },
    {
        question: "Which SQL statement is used to create a database?",
        options: [
            { text: "A) CREATE DATABASE", correct: true },
            { text: "B) NEW DATABASE", correct: false },
            { text: "C) GENERATE DATABASE", correct: false },
            { text: "D) BUILD DATABASE", correct: false }
        ]
    },
    {
        question: "Which SQL statement is used to create a table?",
        options: [
            { text: "A) CREATE TABLE", correct: true },
            { text: "B) NEW TABLE", correct: false },
            { text: "C) GENERATE TABLE", correct: false },
            { text: "D) BUILD TABLE", correct: false }
        ]
    },
    {
        question: "Which SQL statement is used to delete a table?",
        options: [
            { text: "A) DELETE TABLE", correct: false },
            { text: "B) REMOVE TABLE", correct: false },
            { text: "C) DROP TABLE", correct: true },
            { text: "D) ERASE TABLE", correct: false }
        ]
    },
    {
        question: "Which SQL statement is used to add a column in a table?",
        options: [
            { text: "A) ADD COLUMN", correct: false },
            { text: "B) ALTER TABLE ADD", correct: true },
            { text: "C) MODIFY TABLE ADD", correct: false },
            { text: "D) UPDATE TABLE ADD", correct: false }
        ]
    },
    {
        question: "What is the keyword to add conditions in SQL?",
        options: [
            { text: "A) WHEN", correct: false },
            { text: "B) WHERE", correct: true },
            { text: "C) WHICH", correct: false },
            { text: "D) WHILE", correct: false }
        ]
    },
    {
        question: "How can you return all the records from a table sorted descending by \"FirstName\"?",
        options: [
            { text: "A) SELECT * FROM Persons SORT 'FirstName' DESC", correct: false },
            { text: "B) SELECT * FROM Persons ORDER BY FirstName DESC", correct: true },
            { text: "C) SELECT * FROM Persons ORDER FirstName DESC", correct: false },
            { text: "D) SELECT * FROM Persons SORT BY FirstName DESC", correct: false }
        ]
    },
    {
        question: "What is the correct SQL syntax to select all records from a table where the \"FirstName\" is \"John\" AND \"LastName\" is \"Doe\"?",
        options: [
            { text: "A) SELECT * FROM Persons WHERE FirstName='John' AND LastName='Doe'", correct: true },
            { text: "B) SELECT * FROM Persons WHERE FirstName<>'John' OR LastName<>'Doe'", correct: false },
            { text: "C) SELECT * FROM Persons WHERE FirstName='John' || LastName='Doe'", correct: false },
            { text: "D) SELECT * FROM Persons WHERE FirstName='John' OR LastName='Doe'", correct: false }
        ]
    },
    {
        question: "Which SQL function returns the number of records in a result set?",
        options: [
            { text: "A) NUM()", correct: false },
            { text: "B) COUNT()", correct: true },
            { text: "C) NUMBER()", correct: false },
            { text: "D) SUM()", correct: false }
        ]
    },
    {
        question: "Which SQL keyword is used to retrieve unique values?",
        options: [
            { text: "A) DISTINCT", correct: true },
            { text: "B) UNIQUE", correct: false },
            { text: "C) DIFFERENT", correct: false },
            { text: "D) SEPARATE", correct: false }
        ]
    },
    {
        question: "What is the default JOIN type in SQL?",
        options: [
            { text: "A) LEFT JOIN", correct: false },
            { text: "B) RIGHT JOIN", correct: false },
            { text: "C) INNER JOIN", correct: true },
            { text: "D) OUTER JOIN", correct: false }
        ]
    },
    {
        question: "Which SQL constraint is used to ensure that all values in a column are different?",
        options: [
            { text: "A) UNIQUE", correct: true },
            { text: "B) DISTINCT", correct: false },
            { text: "C) DIFFERENT", correct: false },
            { text: "D) NOT NULL", correct: false }
        ]
    },
    {
        question: "Which constraint ensures that a column cannot have NULL value?",
        options: [
            { text: "A) NOT EMPTY", correct: false },
            { text: "B) NOT NULL", correct: true },
            { text: "C) NOT BLANK", correct: false },
            { text: "D) REQUIRED", correct: false }
        ]
    },
    {
        question: "Which SQL keyword is used to retrieve the maximum value?",
        options: [
            { text: "A) MAXIMUM", correct: false },
            { text: "B) TOP", correct: false },
            { text: "C) MAX", correct: true },
            { text: "D) UPPER", correct: false }
        ]
    },
    {
        question: "How can you return the first 3 records of a table?",
        options: [
            { text: "A) SELECT * FROM table LIMIT 3", correct: true },
            { text: "B) SELECT FIRST 3 FROM table", correct: false },
            { text: "C) SELECT TOP 3 FROM table", correct: false },
            { text: "D) SELECT * FROM table WHERE ROWNUM <= 3", correct: false }
        ]
    },
    {
        question: "Which operator is used in a WHERE clause to search for a specified pattern?",
        options: [
            { text: "A) MATCH", correct: false },
            { text: "B) LIKE", correct: true },
            { text: "C) FIND", correct: false },
            { text: "D) SEARCH", correct: false }
        ]
    },
    {
        question: "What is the purpose of GROUP BY statement?",
        options: [
            { text: "A) To sort records", correct: false },
            { text: "B) To group rows with same values", correct: true },
            { text: "C) To join tables", correct: false },
            { text: "D) To filter records", correct: false }
        ]
    },
    {
        question: "Which statement is used with GROUP BY to filter groups?",
        options: [
            { text: "A) WHERE", correct: false },
            { text: "B) HAVING", correct: true },
            { text: "C) FILTER", correct: false },
            { text: "D) GROUP FILTER", correct: false }
        ]
    },
    {
        question: "What does UNION do?",
        options: [
            { text: "A) Combines rows from different queries", correct: true },
            { text: "B) Joins tables", correct: false },
            { text: "C) Groups records", correct: false },
            { text: "D) Filters data", correct: false }
        ]
    },
    {
        question: "Which JOIN returns all records when there is a match in either left or right table?",
        options: [
            { text: "A) INNER JOIN", correct: false },
            { text: "B) OUTER JOIN", correct: false },
            { text: "C) FULL JOIN", correct: true },
            { text: "D) LEFT JOIN", correct: false }
        ]
    },
    {
        question: "What is a foreign key?",
        options: [
            { text: "A) Primary key in another table", correct: true },
            { text: "B) Unique key", correct: false },
            { text: "C) First column in table", correct: false },
            { text: "D) Last column in table", correct: false }
        ]
    },
    {
        question: "Which function returns the current date?",
        options: [
            { text: "A) TODAY()", correct: false },
            { text: "B) CURRENT_DATE()", correct: false },
            { text: "C) NOW()", correct: true },
            { text: "D) DATE()", correct: false }
        ]
    },
    {
        question: "What is the purpose of an INDEX?",
        options: [
            { text: "A) To sort data", correct: false },
            { text: "B) To speed up data retrieval", correct: true },
            { text: "C) To organize data", correct: false },
            { text: "D) To store data", correct: false }
        ]
    },
    {
        question: "Which statement modifies the structure of a table?",
        options: [
            { text: "A) MODIFY TABLE", correct: false },
            { text: "B) ALTER TABLE", correct: true },
            { text: "C) CHANGE TABLE", correct: false },
            { text: "D) UPDATE TABLE", correct: false }
        ]
    },
    {
        question: "What does NULL represent in SQL?",
        options: [
            { text: "A) Zero", correct: false },
            { text: "B) Empty string", correct: false },
            { text: "C) Missing or unknown value", correct: true },
            { text: "D) False", correct: false }
        ]
    },
    {
        question: "Which operator tests for existence of any record in a subquery?",
        options: [
            { text: "A) EXISTS", correct: true },
            { text: "B) IN", correct: false },
            { text: "C) HAVING", correct: false },
            { text: "D) BETWEEN", correct: false }
        ]
    },
    {
        question: "What is the purpose of TRUNCATE statement?",
        options: [
            { text: "A) Delete table structure", correct: false },
            { text: "B) Delete all records", correct: true },
            { text: "C) Delete selected records", correct: false },
            { text: "D) Delete database", correct: false }
        ]
    },
    {
        question: "Which function returns the average value of a numeric column?",
        options: [
            { text: "A) MEAN()", correct: false },
            { text: "B) AVG()", correct: true },
            { text: "C) AVERAGE()", correct: false },
            { text: "D) COMPUTE()", correct: false }
        ]
    },
    {
        question: "What is a view in SQL?",
        options: [
            { text: "A) Virtual table based on result set", correct: true },
            { text: "B) Table structure", correct: false },
            { text: "C) Database schema", correct: false },
            { text: "D) Query result", correct: false }
        ]
    },
    {
        question: "Which statement is used to grant user permissions?",
        options: [
            { text: "A) ALLOW", correct: false },
            { text: "B) PERMIT", correct: false },
            { text: "C) GRANT", correct: true },
            { text: "D) GIVE", correct: false }
        ]
    }
];