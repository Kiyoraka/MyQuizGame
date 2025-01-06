// assets/js/dfd.js
const dfdQuestions = [
    {
        question: "What does DFD stand for?",
        options: [
            { text: "A) Digital Flow Design", correct: false },
            { text: "B) Data Flow Diagram", correct: true },
            { text: "C) Database Flow Design", correct: false },
            { text: "D) Data Format Diagram", correct: false }
        ]
    },
    {
        question: "Which symbol represents an external entity in a DFD?",
        options: [
            { text: "A) Circle", correct: false },
            { text: "B) Rectangle", correct: true },
            { text: "C) Arrow", correct: false },
            { text: "D) Open-ended rectangle", correct: false }
        ]
    },
    {
        question: "What does a circle or bubble represent in a DFD?",
        options: [
            { text: "A) External Entity", correct: false },
            { text: "B) Process", correct: true },
            { text: "C) Data Store", correct: false },
            { text: "D) Data Flow", correct: false }
        ]
    },
    {
        question: "Which symbol is used to represent data flow in a DFD?",
        options: [
            { text: "A) Circle", correct: false },
            { text: "B) Rectangle", correct: false },
            { text: "C) Arrow", correct: true },
            { text: "D) Open-ended rectangle", correct: false }
        ]
    },
    {
        question: "What level of DFD shows the highest level of abstraction?",
        options: [
            { text: "A) Level-0", correct: false },
            { text: "B) Level-1", correct: false },
            { text: "C) Context Diagram", correct: true },
            { text: "D) Level-2", correct: false }
        ]
    },
    {
        question: "What is another name for Level-0 DFD?",
        options: [
            { text: "A) Context Diagram", correct: true },
            { text: "B) Fundamental Diagram", correct: false },
            { text: "C) Base Diagram", correct: false },
            { text: "D) Root Diagram", correct: false }
        ]
    },
    {
        question: "Which of these represents a data store in a DFD?",
        options: [
            { text: "A) Circle", correct: false },
            { text: "B) Arrow", correct: false },
            { text: "C) Rectangle with one end open", correct: true },
            { text: "D) Rectangle", correct: false }
        ]
    },
    {
        question: "What is the maximum number of data flows that can connect to a process?",
        options: [
            { text: "A) Two", correct: false },
            { text: "B) Four", correct: false },
            { text: "C) No limit", correct: true },
            { text: "D) One", correct: false }
        ]
    },
    {
        question: "Which level DFD shows more detail than the context diagram?",
        options: [
            { text: "A) Level-0", correct: false },
            { text: "B) Level-2", correct: false },
            { text: "C) Level-3", correct: false },
            { text: "D) All of the above", correct: true }
        ]
    },
    {
        question: "What is balancing in DFD?",
        options: [
            { text: "A) Equal number of inputs and outputs", correct: false },
            { text: "B) Consistency between different levels of DFD", correct: true },
            { text: "C) Equal number of processes and data stores", correct: false },
            { text: "D) Symmetrical arrangement of symbols", correct: false }
        ]
    },
    {
        question: "Which rule must be followed in DFD?",
        options: [
            { text: "A) Data cannot flow directly between two external entities", correct: true },
            { text: "B) Data can flow directly between data stores", correct: false },
            { text: "C) Processes must have multiple inputs", correct: false },
            { text: "D) External entities must connect to data stores", correct: false }
        ]
    },
    {
        question: "What is a context diagram also called?",
        options: [
            { text: "A) Level-0 DFD", correct: false },
            { text: "B) Level-1 DFD", correct: false },
            { text: "C) Top-level DFD", correct: true },
            { text: "D) Base DFD", correct: false }
        ]
    },
    {
        question: "In a DFD, data store is represented by:",
        options: [
            { text: "A) Circle", correct: false },
            { text: "B) Two parallel lines", correct: true },
            { text: "C) Arrow", correct: false },
            { text: "D) Rectangle", correct: false }
        ]
    },
    {
        question: "Which is not a valid component of DFD?",
        options: [
            { text: "A) Process", correct: false },
            { text: "B) Data Flow", correct: false },
            { text: "C) Decision Diamond", correct: true },
            { text: "D) External Entity", correct: false }
        ]
    },
    {
        question: "What does decomposition in DFD mean?",
        options: [
            { text: "A) Breaking down processes into more detail", correct: true },
            { text: "B) Removing unnecessary processes", correct: false },
            { text: "C) Combining multiple processes", correct: false },
            { text: "D) Simplifying data flows", correct: false }
        ]
    },
    {
        question: "Which is true about data stores in DFD?",
        options: [
            { text: "A) They can directly connect to each other", correct: false },
            { text: "B) They must have at least one input and output", correct: false },
            { text: "C) They can only connect to processes", correct: true },
            { text: "D) They can only have one connection", correct: false }
        ]
    },
    {
        question: "What is the purpose of leveling in DFD?",
        options: [
            { text: "A) To show system hierarchy", correct: true },
            { text: "B) To eliminate redundant processes", correct: false },
            { text: "C) To combine similar processes", correct: false },
            { text: "D) To remove external entities", correct: false }
        ]
    },
    {
        question: "A process in DFD must have:",
        options: [
            { text: "A) Only inputs", correct: false },
            { text: "B) Only outputs", correct: false },
            { text: "C) Both inputs and outputs", correct: true },
            { text: "D) Neither inputs nor outputs", correct: false }
        ]
    },
    {
        question: "Which statement is true about data flows?",
        options: [
            { text: "A) They must be bidirectional", correct: false },
            { text: "B) They can only flow between processes", correct: false },
            { text: "C) They represent movement of data", correct: true },
            { text: "D) They must connect to data stores", correct: false }
        ]
    },
    {
        question: "What is the main purpose of a context diagram?",
        options: [
            { text: "A) Show system details", correct: false },
            { text: "B) Show system boundaries", correct: true },
            { text: "C) Show all data stores", correct: false },
            { text: "D) Show all processes", correct: false }
        ]
    },
    {
        question: "How are processes numbered in a level-1 DFD?",
        options: [
            { text: "A) 1.0, 2.0, 3.0", correct: true },
            { text: "B) 1, 2, 3", correct: false },
            { text: "C) A, B, C", correct: false },
            { text: "D) P1, P2, P3", correct: false }
        ]
    },
    {
        question: "Which is not allowed in a DFD?",
        options: [
            { text: "A) Multiple processes", correct: false },
            { text: "B) Multiple data stores", correct: false },
            { text: "C) Data flow loops", correct: false },
            { text: "D) Direct data store connections", correct: true }
        ]
    },
    {
        question: "What should be avoided in DFD?",
        options: [
            { text: "A) Multiple inputs to a process", correct: false },
            { text: "B) Multiple outputs from a process", correct: false },
            { text: "C) Black holes (only inputs)", correct: true },
            { text: "D) Multiple external entities", correct: false }
        ]
    },
    {
        question: "What is a miracle in DFD terms?",
        options: [
            { text: "A) Process with no inputs", correct: false },
            { text: "B) Process with no outputs", correct: false },
            { text: "C) Process with outputs but no inputs", correct: true },
            { text: "D) Process with inputs but no outputs", correct: false }
        ]
    },
    {
        question: "Which naming convention should be used for processes?",
        options: [
            { text: "A) Nouns", correct: false },
            { text: "B) Verbs", correct: true },
            { text: "C) Adjectives", correct: false },
            { text: "D) Numbers only", correct: false }
        ]
    },
    {
        question: "Data stores should be named using:",
        options: [
            { text: "A) Verbs", correct: false },
            { text: "B) Nouns", correct: true },
            { text: "C) Adjectives", correct: false },
            { text: "D) Numbers", correct: false }
        ]
    },
    {
        question: "What is true about external entities?",
        options: [
            { text: "A) They can be duplicated in DFD", correct: true },
            { text: "B) They must connect to data stores", correct: false },
            { text: "C) They must have inputs and outputs", correct: false },
            { text: "D) They cannot connect to processes", correct: false }
        ]
    },
    {
        question: "What does convergence mean in DFD?",
        options: [
            { text: "A) Multiple outputs from one process", correct: false },
            { text: "B) Multiple inputs to one process", correct: true },
            { text: "C) Multiple processes to one data store", correct: false },
            { text: "D) Multiple data stores to one process", correct: false }
        ]
    },
    {
        question: "What does divergence mean in DFD?",
        options: [
            { text: "A) Multiple inputs to one process", correct: false },
            { text: "B) Multiple outputs from one process", correct: true },
            { text: "C) Multiple data stores to one process", correct: false },
            { text: "D) Multiple processes to one data store", correct: false }
        ]
    },
    {
        question: "Which is true about process decomposition?",
        options: [
            { text: "A) It can only be done once", correct: false },
            { text: "B) It must show all data stores", correct: false },
            { text: "C) It must maintain data flow balance", correct: true },
            { text: "D) It eliminates external entities", correct: false }
        ]
    },
    {
        question: "What is a valid process description?",
        options: [
            { text: "A) \"Student Database\"", correct: false },
            { text: "B) \"Calculate Grade\"", correct: true },
            { text: "C) \"Library\"", correct: false },
            { text: "D) \"System Users\"", correct: false }
        ]
    },
    {
        question: "Which level shows the most detail in DFD?",
        options: [
            { text: "A) Context Diagram", correct: false },
            { text: "B) Level-0", correct: false },
            { text: "C) Level-1", correct: false },
            { text: "D) Level-2", correct: true }
        ]
    },
    {
        question: "What does a data dictionary support in DFD?",
        options: [
            { text: "A) Process numbering", correct: false },
            { text: "B) Data flow definitions", correct: true },
            { text: "C) Entity relationships", correct: false },
            { text: "D) System boundaries", correct: false }
        ]
    },
    {
        question: "What is not a characteristic of a good DFD?",
        options: [
            { text: "A) Clarity", correct: false },
            { text: "B) Consistency", correct: false },
            { text: "C) Complexity", correct: true },
            { text: "D) Completeness", correct: false }
        ]
    },
    {
        question: "When should you stop decomposing a DFD?",
        options: [
            { text: "A) After level-1", correct: false },
            { text: "B) After showing all data stores", correct: false },
            { text: "C) When processes are primitive", correct: true },
            { text: "D) After showing all entities", correct: false }
        ]
    },
    {
        question: "What is true about data flow names?",
        options: [
            { text: "A) They must be unique", correct: true },
            { text: "B) They can be numbers only", correct: false },
            { text: "C) They must be verbs", correct: false },
            { text: "D) They must include process numbers", correct: false }
        ]
    },
    {
        question: "Which is a valid data store name?",
        options: [
            { text: "A) \"Process Orders\"", correct: false },
            { text: "B) \"Customer Database\"", correct: true },
            { text: "C) \"Validate Data\"", correct: false },
            { text: "D) \"Check System\"", correct: false }
        ]
    },
    {
        question: "What is the purpose of a data dictionary?",
        options: [
            { text: "A) To list all processes", correct: false },
            { text: "B) To define data elements", correct: true },
            { text: "C) To number external entities", correct: false },
            { text: "D) To draw data flows", correct: false }
        ]
    },
    {
        question: "What should be avoided in process naming?",
        options: [
            { text: "A) Verbs", correct: false },
            { text: "B) Active voice", correct: false },
            { text: "C) Passive voice", correct: true },
            { text: "D) Clear descriptions", correct: false }
        ]
    },
    {
        question: "Which is true about DFD levels?",
        options: [
            { text: "A) They must all show external entities", correct: false },
            { text: "B) They must maintain data flow consistency", correct: true },
            { text: "C) They must have equal processes", correct: false },
            { text: "D) They must show all data stores", correct: false }
        ]
    }
];