// assets/js/erd.js
const erdQuestions = [
    {
        question: "What does ERD stand for?",
        options: [
            { text: "A) Entity Reference Diagram", correct: false },
            { text: "B) Entity-Relationship Diagram", correct: true },
            { text: "C) Entity Relational Database", correct: false },
            { text: "D) Entity Reference Design", correct: false }
        ]
    },
    {
        question: "In an ERD, what does a rectangle represent?",
        options: [
            { text: "A) Relationship", correct: false },
            { text: "B) Attribute", correct: false },
            { text: "C) Entity", correct: true },
            { text: "D) Cardinality", correct: false }
        ]
    },
    {
        question: "What symbol represents a relationship in an ERD?",
        options: [
            { text: "A) Rectangle", correct: false },
            { text: "B) Diamond", correct: true },
            { text: "C) Oval", correct: false },
            { text: "D) Circle", correct: false }
        ]
    },
    {
        question: "Which symbol represents an attribute in an ERD?",
        options: [
            { text: "A) Rectangle", correct: false },
            { text: "B) Diamond", correct: false },
            { text: "C) Oval", correct: true },
            { text: "D) Circle", correct: false }
        ]
    },
    {
        question: "What does a double oval represent in an ERD?",
        options: [
            { text: "A) Primary key", correct: false },
            { text: "B) Foreign key", correct: false },
            { text: "C) Multi-valued attribute", correct: true },
            { text: "D) Composite attribute", correct: false }
        ]
    },
    {
        question: "What is cardinality in an ERD?",
        options: [
            { text: "A) The number of attributes in an entity", correct: false },
            { text: "B) The number of relationships between entities", correct: false },
            { text: "C) The number of possible occurrences in a relationship", correct: true },
            { text: "D) The number of primary keys", correct: false }
        ]
    },
    {
        question: "What does (1,1) represent in cardinality?",
        options: [
            { text: "A) One and only one", correct: true },
            { text: "B) Zero or one", correct: false },
            { text: "C) One or many", correct: false },
            { text: "D) Zero or many", correct: false }
        ]
    },
    {
        question: "What does (0,N) represent in cardinality?",
        options: [
            { text: "A) One and only one", correct: false },
            { text: "B) Zero or one", correct: false },
            { text: "C) One or many", correct: false },
            { text: "D) Zero or many", correct: true }
        ]
    },
    {
        question: "What is a weak entity in ERD?",
        options: [
            { text: "A) An entity with no relationships", correct: false },
            { text: "B) An entity that depends on another entity for identification", correct: true },
            { text: "C) An entity with no attributes", correct: false },
            { text: "D) An entity with only one attribute", correct: false }
        ]
    },
    {
        question: "How is a weak entity represented in an ERD?",
        options: [
            { text: "A) Double rectangle", correct: true },
            { text: "B) Dashed rectangle", correct: false },
            { text: "C) Bold rectangle", correct: false },
            { text: "D) Shaded rectangle", correct: false }
        ]
    },
    {
        question: "What is a composite attribute?",
        options: [
            { text: "A) An attribute that can have multiple values", correct: false },
            { text: "B) An attribute that can be divided into smaller attributes", correct: true },
            { text: "C) An attribute that uniquely identifies an entity", correct: false },
            { text: "D) An attribute that is derived from other attributes", correct: false }
        ]
    },
    {
        question: "How is a derived attribute represented in an ERD?",
        options: [
            { text: "A) Double oval", correct: false },
            { text: "B) Dashed oval", correct: true },
            { text: "C) Bold oval", correct: false },
            { text: "D) Shaded oval", correct: false }
        ]
    },
    {
        question: "What is a multi-valued attribute?",
        options: [
            { text: "A) An attribute that can have multiple values", correct: true },
            { text: "B) An attribute that can be divided into smaller attributes", correct: false },
            { text: "C) An attribute that uniquely identifies an entity", correct: false },
            { text: "D) An attribute that is derived from other attributes", correct: false }
        ]
    },
    {
        question: "What type of relationship exists when one entity can be associated with many instances of another entity?",
        options: [
            { text: "A) One-to-One", correct: false },
            { text: "B) One-to-Many", correct: true },
            { text: "C) Many-to-Many", correct: false },
            { text: "D) Zero-to-Many", correct: false }
        ]
    },
    {
        question: "In a one-to-many relationship, where is the foreign key placed?",
        options: [
            { text: "A) In the \"one\" entity", correct: false },
            { text: "B) In the \"many\" entity", correct: true },
            { text: "C) In both entities", correct: false },
            { text: "D) In neither entity", correct: false }
        ]
    },
    {
        question: "What is an identifying relationship?",
        options: [
            { text: "A) A relationship between two strong entities", correct: false },
            { text: "B) A relationship where the child entity depends on the parent entity", correct: true },
            { text: "C) A relationship with cardinality (1,1)", correct: false },
            { text: "D) A relationship with multiple attributes", correct: false }
        ]
    },
    {
        question: "How is a recursive relationship represented in an ERD?",
        options: [
            { text: "A) A relationship that connects an entity to itself", correct: true },
            { text: "B) A relationship between two weak entities", correct: false },
            { text: "C) A relationship with multiple cardinalities", correct: false },
            { text: "D) A relationship with derived attributes", correct: false }
        ]
    },
    {
        question: "What is normalization in database design?",
        options: [
            { text: "A) The process of creating entities", correct: false },
            { text: "B) The process of organizing data to reduce redundancy", correct: true },
            { text: "C) The process of creating relationships", correct: false },
            { text: "D) The process of adding attributes", correct: false }
        ]
    },
    {
        question: "What is denormalization?",
        options: [
            { text: "A) Removing relationships between entities", correct: false },
            { text: "B) Adding redundant data to improve performance", correct: true },
            { text: "C) Removing attributes from entities", correct: false },
            { text: "D) Breaking down composite attributes", correct: false }
        ]
    },
    {
        question: "What is an associative entity?",
        options: [
            { text: "A) An entity that represents a many-to-many relationship", correct: true },
            { text: "B) An entity with no attributes", correct: false },
            { text: "C) An entity with only primary keys", correct: false },
            { text: "D) An entity with multiple relationships", correct: false }
        ]
    },
    {
        question: "How is a primary key typically represented in an ERD?",
        options: [
            { text: "A) Bold text", correct: false },
            { text: "B) Underlined text", correct: true },
            { text: "C) Italicized text", correct: false },
            { text: "D) Regular text", correct: false }
        ]
    },
    {
        question: "What is the purpose of foreign keys in ERD?",
        options: [
            { text: "A) To identify unique records", correct: false },
            { text: "B) To establish relationships between entities", correct: true },
            { text: "C) To store multiple values", correct: false },
            { text: "D) To derive new attributes", correct: false }
        ]
    },
    {
        question: "Which cardinality notation represents \"exactly one\"?",
        options: [
            { text: "A) (0,1)", correct: false },
            { text: "B) (1,1)", correct: true },
            { text: "C) (1,N)", correct: false },
            { text: "D) (0,N)", correct: false }
        ]
    },
    {
        question: "What is a strong entity?",
        options: [
            { text: "A) An entity with many attributes", correct: false },
            { text: "B) An entity that can exist independently", correct: true },
            { text: "C) An entity with multiple relationships", correct: false },
            { text: "D) An entity with composite attributes", correct: false }
        ]
    },
    {
        question: "How is a many-to-many relationship typically implemented in a database?",
        options: [
            { text: "A) Using a foreign key", correct: false },
            { text: "B) Using a junction table", correct: true },
            { text: "C) Using a composite key", correct: false },
            { text: "D) Using multiple primary keys", correct: false }
        ]
    },
    {
        question: "What is the minimum number of entities required in an ERD?",
        options: [
            { text: "A) One", correct: true },
            { text: "B) Two", correct: false },
            { text: "C) Three", correct: false },
            { text: "D) Four", correct: false }
        ]
    },
    {
        question: "Which is not a valid relationship type?",
        options: [
            { text: "A) One-to-One", correct: false },
            { text: "B) One-to-Many", correct: false },
            { text: "C) Many-to-Many", correct: false },
            { text: "D) Zero-to-Zero", correct: true }
        ]
    },
    {
        question: "What is an attribute in an ERD?",
        options: [
            { text: "A) A property of an entity", correct: true },
            { text: "B) A connection between entities", correct: false },
            { text: "C) A type of entity", correct: false },
            { text: "D) A type of relationship", correct: false }
        ]
    },
    {
        question: "What does participation constraint indicate?",
        options: [
            { text: "A) The number of attributes", correct: false },
            { text: "B) Whether an entity's participation is mandatory or optional", correct: true },
            { text: "C) The type of relationship", correct: false },
            { text: "D) The number of primary keys", correct: false }
        ]
    },
    {
        question: "What is a unary relationship?",
        options: [
            { text: "A) A relationship between one entity and itself", correct: true },
            { text: "B) A relationship between two entities", correct: false },
            { text: "C) A relationship between three entities", correct: false },
            { text: "D) A relationship with one attribute", correct: false }
        ]
    },
    {
        question: "What is a binary relationship?",
        options: [
            { text: "A) A relationship between one entity and itself", correct: false },
            { text: "B) A relationship between two entities", correct: true },
            { text: "C) A relationship between three entities", correct: false },
            { text: "D) A relationship with two attributes", correct: false }
        ]
    },
    {
        question: "What is a ternary relationship?",
        options: [
            { text: "A) A relationship between one entity and itself", correct: false },
            { text: "B) A relationship between two entities", correct: false },
            { text: "C) A relationship between three entities", correct: true },
            { text: "D) A relationship with three attributes", correct: false }
        ]
    },
    {
        question: "How is a total participation constraint shown in an ERD?",
        options: [
            { text: "A) Double line", correct: true },
            { text: "B) Dashed line", correct: false },
            { text: "C) Bold line", correct: false },
            { text: "D) Dotted line", correct: false }
        ]
    },
    {
        question: "What is the purpose of an ERD?",
        options: [
            { text: "A) To show program flow", correct: false },
            { text: "B) To model data organization", correct: true },
            { text: "C) To show system processes", correct: false },
            { text: "D) To display user interface", correct: false }
        ]
    },
    {
        question: "Which notation is used in Chen notation for relationships?",
        options: [
            { text: "A) Rectangle", correct: false },
            { text: "B) Diamond", correct: true },
            { text: "C) Oval", correct: false },
            { text: "D) Circle", correct: false }
        ]
    },
    {
        question: "What represents an optional relationship in Crow's Foot notation?",
        options: [
            { text: "A) Circle", correct: true },
            { text: "B) Line", correct: false },
            { text: "C) Cross", correct: false },
            { text: "D) Crow's foot", correct: false }
        ]
    },
    {
        question: "What does a partial key identify?",
        options: [
            { text: "A) Strong entity", correct: false },
            { text: "B) Weak entity", correct: true },
            { text: "C) Relationship", correct: false },
            { text: "D) Attribute", correct: false }
        ]
    },
    {
        question: "What is the maximum number of relationships an entity can have?",
        options: [
            { text: "A) One", correct: false },
            { text: "B) Two", correct: false },
            { text: "C) Three", correct: false },
            { text: "D) No limit", correct: true }
        ]
    },
    {
        question: "Which is true about attributes?",
        options: [
            { text: "A) They must be unique across all entities", correct: false },
            { text: "B) They must be shared between entities", correct: false },
            { text: "C) They describe entity characteristics", correct: true },
            { text: "D) They must be composite", correct: false }
        ]
    },
    {
        question: "What is a surrogate key?",
        options: [
            { text: "A) A natural identifier", correct: false },
            { text: "B) An artificial identifier", correct: true },
            { text: "C) A foreign key", correct: false },
            { text: "D) A composite key", correct: false }
        ]
    }
];