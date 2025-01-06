// assets/js/html.js
const htmlQuestions = [
    {
        question: "Which HTML tag is used for the largest heading?",
        options: [
            { text: "A) <head>", correct: false },
            { text: "B) <header>", correct: false },
            { text: "C) <h1>", correct: true },
            { text: "D) <heading>", correct: false }
        ]
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        options: [
            { text: "A) <lb>", correct: false },
            { text: "B) <break>", correct: false },
            { text: "C) <br>", correct: true },
            { text: "D) <newline>", correct: false }
        ]
    },
    {
        question: "How do you create a hyperlink in HTML?",
        options: [
            { text: "A) <a url=\"http://example.com\">Link</a>", correct: false },
            { text: "B) <a href=\"http://example.com\">Link</a>", correct: true },
            { text: "C) <link href=\"http://example.com\">Link</link>", correct: false },
            { text: "D) <hyperlink>http://example.com</hyperlink>", correct: false }
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
            { text: "A) <checkbox>", correct: false },
            { text: "B) <input type=\"check\">", correct: false },
            { text: "C) <input type=\"checkbox\">", correct: true },
            { text: "D) <check>", correct: false }
        ]
    },
    {
        question: "Which HTML element defines navigation links?",
        options: [
            { text: "A) <navigation>", correct: false },
            { text: "B) <nav>", correct: true },
            { text: "C) <menu>", correct: false },
            { text: "D) <navigate>", correct: false }
        ]
    },
    {
        question: "How do you make a numbered list in HTML?",
        options: [
            { text: "A) <nl>", correct: false },
            { text: "B) <list type=\"number\">", correct: false },
            { text: "C) <ol>", correct: true },
            { text: "D) <ul>", correct: false }
        ]
    },
    {
        question: "Which HTML element is used to define important text?",
        options: [
            { text: "A) <important>", correct: false },
            { text: "B) <strong>", correct: true },
            { text: "C) <b>", correct: false },
            { text: "D) <emp>", correct: false }
        ]
    },
    {
        question: "What is the correct HTML for making a text area?",
        options: [
            { text: "A) <input type=\"textbox\">", correct: false },
            { text: "B) <input type=\"textarea\">", correct: false },
            { text: "C) <textarea>", correct: true },
            { text: "D) <text>", correct: false }
        ]
    },
    {
        question: "Which HTML attribute specifies the character encoding for the document?",
        options: [
            { text: "A) <meta charset=\"UTF-8\">", correct: true },
            { text: "B) <meta encoding=\"UTF-8\">", correct: false },
            { text: "C) <charset>UTF-8</charset>", correct: false },
            { text: "D) <encoding>UTF-8</encoding>", correct: false }
        ]
    },
    {
        question: "What is the correct HTML for creating a table?",
        options: [
            { text: "A) <table><tr><td>", correct: true },
            { text: "B) <table><tbody><tr>", correct: false },
            { text: "C) <table><thead><tr>", correct: false },
            { text: "D) <data><tr><td>", correct: false }
        ]
    },
    {
        question: "Which HTML element is used for embedding video content?",
        options: [
            { text: "A) <media>", correct: false },
            { text: "B) <video>", correct: true },
            { text: "C) <movie>", correct: false },
            { text: "D) <play>", correct: false }
        ]
    },
    {
        question: "How do you define a section in HTML?",
        options: [
            { text: "A) <part>", correct: false },
            { text: "B) <division>", correct: false },
            { text: "C) <section>", correct: true },
            { text: "D) <area>", correct: false }
        ]
    },
    {
        question: "What is the correct HTML for creating a dropdown list?",
        options: [
            { text: "A) <list>", correct: false },
            { text: "B) <select>", correct: true },
            { text: "C) <dropdown>", correct: false },
            { text: "D) <option>", correct: false }
        ]
    },
    {
        question: "Which HTML element defines a footer for a document?",
        options: [
            { text: "A) <bottom>", correct: false },
            { text: "B) <footer>", correct: true },
            { text: "C) <end>", correct: false },
            { text: "D) <last>", correct: false }
        ]
    },
    {
        question: "How do you emphasize text in HTML?",
        options: [
            { text: "A) <italic>", correct: false },
            { text: "B) <em>", correct: true },
            { text: "C) <i>", correct: false },
            { text: "D) <emphasize>", correct: false }
        ]
    },
    {
        question: "What is the correct HTML for creating a form?",
        options: [
            { text: "A) <form action=\"submit.php\">", correct: true },
            { text: "B) <input form=\"submit.php\">", correct: false },
            { text: "C) <form src=\"submit.php\">", correct: false },
            { text: "D) <form link=\"submit.php\">", correct: false }
        ]
    },
    {
        question: "Which HTML element creates a definition list?",
        options: [
            { text: "A) <dl>", correct: true },
            { text: "B) <deflist>", correct: false },
            { text: "C) <list type=\"definition\">", correct: false },
            { text: "D) <def>", correct: false }
        ]
    },
    {
        question: "How do you create a button in HTML?",
        options: [
            { text: "A) <input type=\"button\">", correct: false },
            { text: "B) <button>", correct: false },
            { text: "C) Both A and B", correct: true },
            { text: "D) <submit>", correct: false }
        ]
    },
    {
        question: "Which HTML element defines the document type?",
        options: [
            { text: "A) <doctype>", correct: false },
            { text: "B) <!DOCTYPE html>", correct: true },
            { text: "C) <type>", correct: false },
            { text: "D) <doc>", correct: false }
        ]
    },
    {
        question: "How do you create a horizontal rule in HTML?",
        options: [
            { text: "A) <line>", correct: false },
            { text: "B) <hr>", correct: true },
            { text: "C) <break type=\"horizontal\">", correct: false },
            { text: "D) <horizontal>", correct: false }
        ]
    },
    {
        question: "Which HTML element is used for subscript text?",
        options: [
            { text: "A) <sub>", correct: true },
            { text: "B) <down>", correct: false },
            { text: "C) <subscript>", correct: false },
            { text: "D) <lower>", correct: false }
        ]
    },
    {
        question: "How do you create a comment in HTML?",
        options: [
            { text: "A) <!-- comment -->", correct: true },
            { text: "B) // comment", correct: false },
            { text: "C) /* comment */", correct: false },
            { text: "D) <comment>text</comment>", correct: false }
        ]
    },
    {
        question: "Which HTML element defines the title of a document?",
        options: [
            { text: "A) <meta name=\"title\">", correct: false },
            { text: "B) <header>", correct: false },
            { text: "C) <title>", correct: true },
            { text: "D) <head>", correct: false }
        ]
    },
    {
        question: "What is the correct HTML for inserting an image?",
        options: [
            { text: "A) <img href=\"image.jpg\" alt=\"image\">", correct: false },
            { text: "B) <image src=\"image.jpg\" alt=\"image\">", correct: false },
            { text: "C) <img src=\"image.jpg\" alt=\"image\">", correct: true },
            { text: "D) <picture src=\"image.jpg\" alt=\"image\">", correct: false }
        ]
    },
    {
        question: "Which HTML attribute specifies inline styles?",
        options: [
            { text: "A) <div class=\"style\">", correct: false },
            { text: "B) <div styles=\"\">", correct: false },
            { text: "C) <div style=\"\">", correct: true },
            { text: "D) <div css=\"\">", correct: false }
        ]
    },
    {
        question: "How do you create a paragraph in HTML?",
        options: [
            { text: "A) <paragraph>", correct: false },
            { text: "B) <p>", correct: true },
            { text: "C) <text>", correct: false },
            { text: "D) <para>", correct: false }
        ]
    },
    {
        question: "Which HTML element is used for marking up keyboard input?",
        options: [
            { text: "A) <keyboard>", correct: false },
            { text: "B) <kb>", correct: false },
            { text: "C) <kbd>", correct: true },
            { text: "D) <input>", correct: false }
        ]
    },
    {
        question: "What is the correct HTML for creating a telephone link?",
        options: [
            { text: "A) <a href=\"tel:123456789\">", correct: true },
            { text: "B) <phone>123456789</phone>", correct: false },
            { text: "C) <tel>123456789</tel>", correct: false },
            { text: "D) <link type=\"tel\">123456789</link>", correct: false }
        ]
    },
    {
        question: "Which HTML element defines a description list?",
        options: [
            { text: "A) <dl>", correct: true },
            { text: "B) <dd>", correct: false },
            { text: "C) <dt>", correct: false },
            { text: "D) <description>", correct: false }
        ]
    },
    {
        question: "How do you create a radio button in HTML?",
        options: [
            { text: "A) <radio>", correct: false },
            { text: "B) <input type=\"radio\">", correct: true },
            { text: "C) <button type=\"radio\">", correct: false },
            { text: "D) <check type=\"radio\">", correct: false }
        ]
    },
    {
        question: "Which HTML element is used for marking up cited work?",
        options: [
            { text: "A) <quote>", correct: false },
            { text: "B) <cite>", correct: true },
            { text: "C) <reference>", correct: false },
            { text: "D) <citation>", correct: false }
        ]
    },
    {
        question: "What is the correct HTML for creating an email link?",
        options: [
            { text: "A) <a href=\"mailto:example@mail.com\">", correct: true },
            { text: "B) <mail>example@mail.com</mail>", correct: false },
            { text: "C) <email>example@mail.com</email>", correct: false },
            { text: "D) <a email=\"example@mail.com\">", correct: false }
        ]
    },
    {
        question: "Which HTML element defines an article?",
        options: [
            { text: "A) <content>", correct: false },
            { text: "B) <text>", correct: false },
            { text: "C) <article>", correct: true },
            { text: "D) <section>", correct: false }
        ]
    },
    {
        question: "How do you create a password input field?",
        options: [
            { text: "A) <input secret>", correct: false },
            { text: "B) <password>", correct: false },
            { text: "C) <input type=\"password\">", correct: true },
            { text: "D) <field type=\"password\">", correct: false }
        ]
    },
    {
        question: "Which HTML element is used for marking up sample output?",
        options: [
            { text: "A) <code>", correct: false },
            { text: "B) <samp>", correct: true },
            { text: "C) <output>", correct: false },
            { text: "D) <sample>", correct: false }
        ]
    },
    {
        question: "What is the correct HTML for creating a bookmark?",
        options: [
            { text: "A) <bookmark>", correct: false },
            { text: "B) <a name=\"mark\">", correct: true },
            { text: "C) <marker>", correct: false },
            { text: "D) <link mark=\"bookmark\">", correct: false }
        ]
    },
    {
        question: "Which HTML element defines the main content of a document?",
        options: [
            { text: "A) <content>", correct: false },
            { text: "B) <main>", correct: true },
            { text: "C) <body>", correct: false },
            { text: "D) <primary>", correct: false }
        ]
    },
    {
        question: "How do you create a date input field?",
        options: [
            { text: "A) <input type=\"date\">", correct: true },
            { text: "B) <date>", correct: false },
            { text: "C) <input calendar>", correct: false },
            { text: "D) <calendar>", correct: false }
        ]
    },
    {
        question: "Which HTML element is used for marking up time?",
        options: [
            { text: "A) <clock>", correct: false },
            { text: "B) <datetime>", correct: false },
            { text: "C) <time>", correct: true },
            { text: "D) <date>", correct: false }
        ]
    }
];