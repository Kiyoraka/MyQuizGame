// assets/js/html.js
const htmlQuestions = [ 
    {
        question: "Which HTML tag is used for the largest heading?",
        options: [
            { text: "A) &lt;head&gt;", correct: false },
            { text: "B) &lt;header&gt;", correct: false },
            { text: "C) &lt;h1&gt;", correct: true },
            { text: "D) &lt;heading&gt;", correct: false }
        ]
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        options: [
            { text: "A) &lt;lb&gt;", correct: false },
            { text: "B) &lt;break&gt;", correct: false },
            { text: "C) &lt;br&gt;", correct: true },
            { text: "D) &lt;newline&gt;", correct: false }
        ]
    },
    {
        question: "How do you create a hyperlink in HTML?",
        options: [
            { text: "A) &lt;a url=\"http://example.com\"&gt;Link&lt;/a&gt;", correct: false },
            { text: "B) &lt;a href=\"http://example.com\"&gt;Link&lt;/a&gt;", correct: true },
            { text: "C) &lt;link href=\"http://example.com\"&gt;Link&lt;/link&gt;", correct: false },
            { text: "D) &lt;hyperlink&gt;http://example.com&lt;/hyperlink&gt;", correct: false }
        ]
    },
    {
        question: "Which HTML attribute specifies an alternate text for an image?",
        options: [
            { text: "A) title", correct: false },
            { text: "B) alt", correct: true },
            { text: "C) description", correct: false },
            { text: "D) caption", correct: false }
        ]
    },
    {
        question: "What is the correct HTML for creating a checkbox?",
        options: [
            { text: "A) &lt;checkbox&gt;", correct: false },
            { text: "B) &lt;input type=\"check\"&gt;", correct: false },
            { text: "C) &lt;input type=\"checkbox\"&gt;", correct: true },
            { text: "D) &lt;check&gt;", correct: false }
        ]
    },
    {
        question: "Which HTML element defines navigation links?",
        options: [
            { text: "A) &lt;navigation&gt;", correct: false },
            { text: "B) &lt;nav&gt;", correct: true },
            { text: "C) &lt;menu&gt;", correct: false },
            { text: "D) &lt;navigate&gt;", correct: false }
        ]
    },
    {
        question: "How do you make a numbered list in HTML?",
        options: [
            { text: "A) &lt;nl&gt;", correct: false },
            { text: "B) &lt;list type=\"number\"&gt;", correct: false },
            { text: "C) &lt;ol&gt;", correct: true },
            { text: "D) &lt;ul&gt;", correct: false }
        ]
    },
    {
        question: "Which HTML element is used to define important text?",
        options: [
            { text: "A) &lt;important&gt;", correct: false },
            { text: "B) &lt;strong&gt;", correct: true },
            { text: "C) &lt;b&gt;", correct: false },
            { text: "D) &lt;emp&gt;", correct: false }
        ]
    },
    {
        question: "What is the correct HTML for making a text area?",
        options: [
            { text: "A) &lt;input type=\"textbox\"&gt;", correct: false },
            { text: "B) &lt;input type=\"textarea\"&gt;", correct: false },
            { text: "C) &lt;textarea&gt;", correct: true },
            { text: "D) &lt;text&gt;", correct: false }
        ]
    },
    {
        question: "Which HTML attribute specifies the character encoding for the document?",
        options: [
            { text: "A) &lt;meta charset=\"UTF-8\"&gt;", correct: true },
            { text: "B) &lt;meta encoding=\"UTF-8\"&gt;", correct: false },
            { text: "C) &lt;charset&gt;UTF-8&lt;/charset&gt;", correct: false },
            { text: "D) &lt;encoding&gt;UTF-8&lt;/encoding&gt;", correct: false }
        ]
    },
    {
        question: "What is the correct HTML for creating a table?",
        options: [
            { text: "A) &lt;table&gt;&lt;tr&gt;&lt;td&gt;", correct: true },
            { text: "B) &lt;table&gt;&lt;tbody&gt;&lt;tr&gt;", correct: false },
            { text: "C) &lt;table&gt;&lt;thead&gt;&lt;tr&gt;", correct: false },
            { text: "D) &lt;data&gt;&lt;tr&gt;&lt;td&gt;", correct: false }
        ]
    },
    {
        question: "Which HTML element is used for embedding video content?",
        options: [
            { text: "A) &lt;media&gt;", correct: false },
            { text: "B) &lt;video&gt;", correct: true },
            { text: "C) &lt;movie&gt;", correct: false },
            { text: "D) &lt;play&gt;", correct: false }
        ]
    },
    {
        question: "How do you define a section in HTML?",
        options: [
            { text: "A) &lt;part&gt;", correct: false },
            { text: "B) &lt;division&gt;", correct: false },
            { text: "C) &lt;section&gt;", correct: true },
            { text: "D) &lt;area&gt;", correct: false }
        ]
    },
    {
        question: "What is the correct HTML for creating a dropdown list?",
        options: [
            { text: "A) &lt;list&gt;", correct: false },
            { text: "B) &lt;select&gt;", correct: true },
            { text: "C) &lt;dropdown&gt;", correct: false },
            { text: "D) &lt;option&gt;", correct: false }
        ]
    },
    {
        question: "Which HTML element defines a footer for a document?",
        options: [
            { text: "A) &lt;bottom&gt;", correct: false },
            { text: "B) &lt;footer&gt;", correct: true },
            { text: "C) &lt;end&gt;", correct: false },
            { text: "D) &lt;last&gt;", correct: false }
        ]
    },
    {
        question: "How do you emphasize text in HTML?",
        options: [
            { text: "A) &lt;italic&gt;", correct: false },
            { text: "B) &lt;em&gt;", correct: true },
            { text: "C) &lt;i&gt;", correct: false },
            { text: "D) &lt;emphasize&gt;", correct: false }
        ]
    },
    {
        question: "What is the correct HTML for creating a form?",
        options: [
            { text: "A) &lt;form action=\"submit.php\"&gt;", correct: true },
            { text: "B) &lt;input form=\"submit.php\"&gt;", correct: false },
            { text: "C) &lt;form src=\"submit.php\"&gt;", correct: false },
            { text: "D) &lt;form link=\"submit.php\"&gt;", correct: false }
        ]
    },
    {
        question: "Which HTML element creates a definition list?",
        options: [
            { text: "A) &lt;dl&gt;", correct: true },
            { text: "B) &lt;deflist&gt;", correct: false },
            { text: "C) &lt;list type=\"definition\"&gt;", correct: false },
            { text: "D) &lt;def&gt;", correct: false }
        ]
    },
    {
        question: "How do you create a button in HTML?",
        options: [
            { text: "A) &lt;input type=\"button\"&gt;", correct: false },
            { text: "B) &lt;button&gt;", correct: false },
            { text: "C) Both A and B", correct: true },
            { text: "D) &lt;submit&gt;", correct: false }
        ]
    },
    {
        question: "Which HTML element defines the document type?",
        options: [
            { text: "A) &lt;doctype&gt;", correct: false },
            { text: "B) &lt;!DOCTYPE html&gt;", correct: true },
            { text: "C) &lt;type&gt;", correct: false },
            { text: "D) &lt;doc&gt;", correct: false }
        ]
    },
    {
        question: "How do you create a horizontal rule in HTML?",
        options: [
            { text: "A) &lt;line&gt;", correct: false },
            { text: "B) &lt;hr&gt;", correct: true },
            { text: "C) &lt;break type=\"horizontal\"&gt;", correct: false },
            { text: "D) &lt;horizontal&gt;", correct: false }
        ]
    },
    {
        question: "Which HTML element is used for subscript text?",
        options: [
            { text: "A) &lt;sub&gt;", correct: true },
            { text: "B) &lt;down&gt;", correct: false },
            { text: "C) &lt;subscript&gt;", correct: false },
            { text: "D) &lt;lower&gt;", correct: false }
        ]
    },
    {
        question: "How do you create a comment in HTML?",
        options: [
            { text: "A) &lt;!-- comment --&gt;", correct: true },
            { text: "B) // comment", correct: false },
            { text: "C) /* comment */", correct: false },
            { text: "D) &lt;comment&gt;text&lt;/comment&gt;", correct: false }
        ]
    },
    {
        question: "Which HTML element defines the title of a document?",
        options: [
            { text: "A) &lt;meta name=\"title\"&gt;", correct: false },
            { text: "B) &lt;header&gt;", correct: false },
            { text: "C) &lt;title&gt;", correct: true },
            { text: "D) &lt;head&gt;", correct: false }
        ]
    },
    {
        question: "What is the correct HTML for inserting an image?",
        options: [
            { text: "A) &lt;img href=\"image.jpg\" alt=\"image\"&gt;", correct: false },
            { text: "B) &lt;image src=\"image.jpg\" alt=\"image\"&gt;", correct: false },
            { text: "C) &lt;img src=\"image.jpg\" alt=\"image\"&gt;", correct: true },
            { text: "D) &lt;picture src=\"image.jpg\" alt=\"image\"&gt;", correct: false }
        ]
    },
    {
        question: "Which HTML attribute specifies inline styles?",
        options: [
            { text: "A) &lt;div class=\"style\"&gt;", correct: false },
            { text: "B) &lt;div styles=\"\"&gt;", correct: false },
            { text: "C) &lt;div style=\"\"&gt;", correct: true },
            { text: "D) &lt;div css=\"\"&gt;", correct: false }
        ]
    },
    {
        question: "How do you create a paragraph in HTML?",
        options: [
            { text: "A) &lt;paragraph&gt;", correct: false },
            { text: "B) &lt;p&gt;", correct: true },
            { text: "C) &lt;text&gt;", correct: false },
            { text: "D) &lt;para&gt;", correct: false }
        ]
    },
    {
        question: "Which HTML element is used for marking up keyboard input?",
        options: [
            { text: "A) &lt;keyboard&gt;", correct: false },
            { text: "B) &lt;kb&gt;", correct: false },
            { text: "C) &lt;kbd&gt;", correct: true },
            { text: "D) &lt;input&gt;", correct: false }
        ]
    },
    {
        question: "What is the correct HTML for creating a telephone link?",
        options: [
            { text: "A) &lt;a href=\"tel:123456789\"&gt;", correct: true },
            { text: "B) &lt;phone&gt;123456789&lt;/phone&gt;", correct: false },
            { text: "C) &lt;tel&gt;123456789&lt;/tel&gt;", correct: false },
            { text: "D) &lt;link type=\"tel\"&gt;123456789&lt;/link&gt;", correct: false }
        ]
    },
    {
        question: "Which HTML element defines a description list?",
        options: [
            { text: "A) &lt;dl&gt;", correct: true },
            { text: "B) &lt;dd&gt;", correct: false },
            { text: "C) &lt;dt&gt;", correct: false },
            { text: "D) &lt;description&gt;", correct: false }
        ]
    },
    {
        question: "How do you create a radio button in HTML?",
        options: [
            { text: "A) &lt;radio&gt;", correct: false },
            { text: "B) &lt;input type=\"radio\"&gt;", correct: true },
            { text: "C) &lt;button type=\"radio\"&gt;", correct: false },
            { text: "D) &lt;check type=\"radio\"&gt;", correct: false }
        ]
    },
    {
        question: "Which HTML element is used for marking up cited work?",
        options: [
            { text: "A) &lt;quote&gt;", correct: false },
            { text: "B) &lt;cite&gt;", correct: true },
            { text: "C) &lt;reference&gt;", correct: false },
            { text: "D) &lt;citation&gt;", correct: false }
        ]
    },
    {
        question: "What is the correct HTML for creating an email link?",
        options: [
            { text: "A) &lt;a href=\"mailto:example@mail.com\"&gt;", correct: true },
            { text: "B) &lt;mail&gt;example@mail.com&lt;/mail&gt;", correct: false },
            { text: "C) &lt;email&gt;example@mail.com&lt;/email&gt;", correct: false },
            { text: "D) &lt;a email=\"example@mail.com\"&gt;", correct: false }
        ]
    },
    {
        question: "Which HTML element defines an article?",
        options: [
            { text: "A) &lt;content&gt;", correct: false },
            { text: "B) &lt;text&gt;", correct: false },
            { text: "C) &lt;article&gt;", correct: true },
            { text: "D) &lt;section&gt;", correct: false }
        ]
    },
    {
        question: "How do you create a password input field?",
        options: [
            { text: "A) &lt;input secret&gt;", correct: false },
            { text: "B) &lt;password&gt;", correct: false },
            { text: "C) &lt;input type=\"password\"&gt;", correct: true },
            { text: "D) &lt;field type=\"password\"&gt;", correct: false }
        ]
    },
    {
        question: "Which HTML element is used for marking up sample output?",
        options: [
            { text: "A) &lt;code&gt;", correct: false },
            { text: "B) &lt;samp&gt;", correct: true },
            { text: "C) &lt;output&gt;", correct: false },
            { text: "D) &lt;sample&gt;", correct: false }
        ]
    },
    {
        question: "What is the correct HTML for creating a bookmark?",
        options: [
            { text: "A) &lt;bookmark&gt;", correct: false },
            { text: "B) &lt;a name=\"mark\"&gt;", correct: true },
            { text: "C) &lt;marker&gt;", correct: false },
            { text: "D) &lt;link mark=\"bookmark\"&gt;", correct: false }
        ]
    },
    {
        question: "Which HTML element defines the main content of a document?",
        options: [
            { text: "A) &lt;content&gt;", correct: false },
            { text: "B) &lt;main&gt;", correct: true },
            { text: "C) &lt;body&gt;", correct: false },
            { text: "D) &lt;primary&gt;", correct: false }
        ]
    },
    {
        question: "How do you create a date input field?",
        options: [
            { text: "A) &lt;input type=\"date\"&gt;", correct: true },
            { text: "B) &lt;date&gt;", correct: false },
            { text: "C) &lt;input calendar&gt;", correct: false },
            { text: "D) &lt;calendar&gt;", correct: false }
        ]
    },
    {
        question: "Which HTML element is used for marking up time?",
        options: [
            { text: "A) &lt;clock&gt;", correct: false },
            { text: "B) &lt;datetime&gt;", correct: false },
            { text: "C) &lt;time&gt;", correct: true },
            { text: "D) &lt;date&gt;", correct: false }
        ]
    }
];
    

