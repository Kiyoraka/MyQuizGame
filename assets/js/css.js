// assets/js/css.js
const cssQuestions = [
    {
        question: "What does CSS stand for?",
        options: [
            { text: "A) Creative Style Sheets", correct: false },
            { text: "B) Computer Style Sheets", correct: false },
            { text: "C) Cascading Style Sheets", correct: true },
            { text: "D) Colorful Style Sheets", correct: false }
        ]
    },
    {
        question: "Which is the correct CSS syntax?",
        options: [
            { text: "A) {body:color=black}", correct: false },
            { text: "B) body {color: black;}", correct: true },
            { text: "C) body:color=black", correct: false },
            { text: "D) {body;color:black}", correct: false }
        ]
    },
    {
        question: "How do you add a comment in CSS?",
        options: [
            { text: "A) // this is a comment", correct: false },
            { text: "B) /* this is a comment */", correct: true },
            { text: "C) &lt;!-- this is a comment --&gt;", correct: false },
            { text: "D) ' this is a comment", correct: false }
        ]
    },
    {
        question: "Which property is used to change the background color?",
        options: [
            { text: "A) color", correct: false },
            { text: "B) bgcolor", correct: false },
            { text: "C) background-color", correct: true },
            { text: "D) background", correct: false }
        ]
    },
    {
        question: "How do you select an element with id \"demo\"?",
        options: [
            { text: "A) #demo", correct: true },
            { text: "B) .demo", correct: false },
            { text: "C) *demo", correct: false },
            { text: "D) demo", correct: false }
        ]
    },
    {
        question: "How do you select elements with class name \"test\"?",
        options: [
            { text: "A) #test", correct: false },
            { text: "B) .test", correct: true },
            { text: "C) *test", correct: false },
            { text: "D) test", correct: false }
        ]
    },
    {
        question: "What is the correct way to apply multiple classes to an HTML element?",
        options: [
            { text: "A) class=\"class1; class2\"", correct: false },
            { text: "B) class=\"class1 class2\"", correct: true },
            { text: "C) class=\"class1, class2\"", correct: false },
            { text: "D) class=[class1 class2]", correct: false }
        ]
    },
    {
        question: "Which CSS property controls the text size?",
        options: [
            { text: "A) text-size", correct: false },
            { text: "B) font-style", correct: false },
            { text: "C) font-size", correct: true },
            { text: "D) text-style", correct: false }
        ]
    },
    {
        question: "How do you make each word in a text start with a capital letter?",
        options: [
            { text: "A) text-transform: capitalize", correct: true },
            { text: "B) text-style: capitalize", correct: false },
            { text: "C) transform: capitalize", correct: false },
            { text: "D) text-case: capitalize", correct: false }
        ]
    },
    {
        question: "Which property is used to change the font of an element?",
        options: [
            { text: "A) font-family", correct: true },
            { text: "B) font-style", correct: false },
            { text: "C) font-type", correct: false },
            { text: "D) text-family", correct: false }
        ]
    },
    {
        question: "How do you make text bold in CSS?",
        options: [
            { text: "A) font-weight: bold", correct: true },
            { text: "B) text: bold", correct: false },
            { text: "C) style: bold", correct: false },
            { text: "D) text-style: bold", correct: false }
        ]
    },
    {
        question: "How do you select all p elements inside a div element?",
        options: [
            { text: "A) div + p", correct: false },
            { text: "B) div p", correct: true },
            { text: "C) div.p", correct: false },
            { text: "D) div &gt; p", correct: false }
        ]
    },
    {
        question: "What is the correct CSS syntax for making all &lt;p&gt; elements red?",
        options: [
            { text: "A) p {text-color: red;}", correct: false },
            { text: "B) p {color: red;}", correct: true },
            { text: "C) all.p {color: red;}", correct: false },
            { text: "D) p.all {color: red;}", correct: false }
        ]
    },
    {
        question: "Which property is used to change the left margin of an element?",
        options: [
            { text: "A) margin-left", correct: true },
            { text: "B) padding-left", correct: false },
            { text: "C) left-margin", correct: false },
            { text: "D) indent", correct: false }
        ]
    },
    {
        question: "How do you make a list not display bullet points?",
        options: [
            { text: "A) list-style-type: none", correct: true },
            { text: "B) list: none", correct: false },
            { text: "C) bulletpoints: none", correct: false },
            { text: "D) list-type: no-bullet", correct: false }
        ]
    },
    {
        question: "Which CSS property is used to control the spacing between elements?",
        options: [
            { text: "A) spacing", correct: false },
            { text: "B) margin", correct: true },
            { text: "C) padding", correct: false },
            { text: "D) gap", correct: false }
        ]
    },
    {
        question: "How do you display a border like this: \"Solid red border\"?",
        options: [
            { text: "A) border: solid red", correct: true },
            { text: "B) border-line: solid red", correct: false },
            { text: "C) border-style: solid red", correct: false },
            { text: "D) border-type: solid red", correct: false }
        ]
    },
    {
        question: "Which CSS property controls the transparency of an element?",
        options: [
            { text: "A) opacity", correct: true },
            { text: "B) transparency", correct: false },
            { text: "C) alpha", correct: false },
            { text: "D) visible", correct: false }
        ]
    },
    {
        question: "How do you make a text shadow in CSS?",
        options: [
            { text: "A) text-effect: shadow", correct: false },
            { text: "B) text-shadow: 2px 2px", correct: true },
            { text: "C) font-shadow: 2px 2px", correct: false },
            { text: "D) shadow: text", correct: false }
        ]
    },
    {
        question: "Which CSS property is used to change the order of elements?",
        options: [
            { text: "A) position", correct: false },
            { text: "B) order", correct: false },
            { text: "C) z-index", correct: true },
            { text: "D) arrangement", correct: false }
        ]
    },
    {
        question: "How do you make text uppercase in CSS?",
        options: [
            { text: "A) text-transform: uppercase", correct: true },
            { text: "B) text-style: uppercase", correct: false },
            { text: "C) text-case: upper", correct: false },
            { text: "D) font-case: uppercase", correct: false }
        ]
    },
    {
        question: "Which property is used to create space between the element's border and inner content?",
        options: [
            { text: "A) spacing", correct: false },
            { text: "B) margin", correct: false },
            { text: "C) padding", correct: true },
            { text: "D) border-spacing", correct: false }
        ]
    },
    {
        question: "How do you position an element at the bottom of its container?",
        options: [
            { text: "A) position: bottom", correct: false },
            { text: "B) bottom: 0", correct: false },
            { text: "C) position: absolute; bottom: 0", correct: true },
            { text: "D) align: bottom", correct: false }
        ]
    },
    {
        question: "Which CSS property is used for controlling the layout of stacked elements?",
        options: [
            { text: "A) stack-order", correct: false },
            { text: "B) arrangement", correct: false },
            { text: "C) z-index", correct: true },
            { text: "D) layer", correct: false }
        ]
    },
    {
        question: "How do you make an element's width and height include padding and border?",
        options: [
            { text: "A) size-model: border-box", correct: false },
            { text: "B) box-sizing: border-box", correct: true },
            { text: "C) width-control: include-all", correct: false },
            { text: "D) size: include-border", correct: false }
        ]
    },
    {
        question: "Which value of background-attachment fixes the background image?",
        options: [
            { text: "A) fixed", correct: true },
            { text: "B) scroll", correct: false },
            { text: "C) static", correct: false },
            { text: "D) permanent", correct: false }
        ]
    },
    {
        question: "How do you center align text?",
        options: [
            { text: "A) text-align: center", correct: true },
            { text: "B) align: center", correct: false },
            { text: "C) text: center", correct: false },
            { text: "D) center-text: true", correct: false }
        ]
    },
    {
        question: "Which property is used to specify how an element should float?",
        options: [
            { text: "A) align", correct: false },
            { text: "B) float", correct: true },
            { text: "C) position", correct: false },
            { text: "D) arrange", correct: false }
        ]
    },
    {
        question: "How do you make a background image cover the entire element?",
        options: [
            { text: "A) background-size: cover", correct: true },
            { text: "B) background-fit: cover", correct: false },
            { text: "C) background: full", correct: false },
            { text: "D) background-display: full", correct: false }
        ]
    },
    {
        question: "Which CSS property is used to specify whether or not to wrap text?",
        options: [
            { text: "A) text-wrap", correct: false },
            { text: "B) white-space", correct: true },
            { text: "C) word-wrap", correct: false },
            { text: "D) wrap", correct: false }
        ]
    },
    {
        question: "How do you rotate an element 45 degrees?",
        options: [
            { text: "A) rotate: 45deg", correct: false },
            { text: "B) transform: rotate(45deg)", correct: true },
            { text: "C) rotation: 45deg", correct: false },
            { text: "D) angle: 45", correct: false }
        ]
    },
    {
        question: "Which property is used to create rounded corners?",
        options: [
            { text: "A) corner-radius", correct: false },
            { text: "B) border-round", correct: false },
            { text: "C) border-radius", correct: true },
            { text: "D) rounded-corners", correct: false }
        ]
    },
    {
        question: "How do you create a transition effect?",
        options: [
            { text: "A) transition: width 2s", correct: true },
            { text: "B) transform: transition(2s)", correct: false },
            { text: "C) animate: 2s", correct: false },
            { text: "D) effect: transition 2s", correct: false }
        ]
    },
    {
        question: "Which property specifies the stack order of an element?",
        options: [
            { text: "A) stack", correct: false },
            { text: "B) z-index", correct: true },
            { text: "C) position", correct: false },
            { text: "D) layer", correct: false }
        ]
    },
    {
        question: "How do you make text italicized in CSS?",
        options: [
            { text: "A) font-style: italic", correct: true },
            { text: "B) text: italic", correct: false },
            { text: "C) style: italic", correct: false },
            { text: "D) italic: true", correct: false }
        ]
    },
    {
        question: "Which property is used to set the maximum width of an element?",
        options: [
            { text: "A) width-max", correct: false },
            { text: "B) max-width", correct: true },
            { text: "C) width-limit", correct: false },
            { text: "D) width: max", correct: false }
        ]
    },
    {
        question: "How do you add a cursor pointer on hover?",
        options: [
            { text: "A) cursor: pointer", correct: true },
            { text: "B) mouse: pointer", correct: false },
            { text: "C) cursor: hand", correct: false },
            { text: "D) hover-cursor: pointer", correct: false }
        ]
    },
    {
        question: "Which property is used to control the overflow of content?",
        options: [
            { text: "A) overflow", correct: true },
            { text: "B) flow", correct: false },
            { text: "C) wrap", correct: false },
            { text: "D) scroll", correct: false }
        ]
    },
    {
        question: "How do you specify a descendant selector in CSS?",
        options: [
            { text: "A) parent &gt; child", correct: false },
            { text: "B) parent + child", correct: false },
            { text: "C) parent child", correct: true },
            { text: "D) parent ~ child", correct: false }
        ]
    },
    {
        question: "Which property is used to create a grid layout?",
        options: [
            { text: "A) grid", correct: false },
            { text: "B) display: grid", correct: true },
            { text: "C) layout: grid", correct: false },
            { text: "D) structure: grid", correct: false }
        ]
    }
];