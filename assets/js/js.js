// assets/js/js.js
const jsQuestions = [
    {
        question: "Which is the correct way to declare a JavaScript variable?",
        options: [
            { text: "A) variable name;", correct: false },
            { text: "B) var name;", correct: true },
            { text: "C) v name;", correct: false },
            { text: "D) variable = name;", correct: false }
        ]
    },
    {
        question: "How do you write \"Hello World\" in an alert box?",
        options: [
            { text: "A) alertBox(\"Hello World\");", correct: false },
            { text: "B) msg(\"Hello World\");", correct: false },
            { text: "C) alert(\"Hello World\");", correct: true },
            { text: "D) msgBox(\"Hello World\");", correct: false }
        ]
    },
    {
        question: "How do you create a function in JavaScript?",
        options: [
            { text: "A) function = myFunction()", correct: false },
            { text: "B) function myFunction()", correct: true },
            { text: "C) function:myFunction()", correct: false },
            { text: "D) create myFunction()", correct: false }
        ]
    },
    {
        question: "How do you call a function named \"myFunction\"?",
        options: [
            { text: "A) call myFunction()", correct: false },
            { text: "B) myFunction()", correct: true },
            { text: "C) call function myFunction()", correct: false },
            { text: "D) execute myFunction()", correct: false }
        ]
    },
    {
        question: "How do you write an IF statement in JavaScript?",
        options: [
            { text: "A) if i = 5 then", correct: false },
            { text: "B) if i == 5 then", correct: false },
            { text: "C) if (i == 5)", correct: true },
            { text: "D) if i = 5", correct: false }
        ]
    },
    {
        question: "How do you write an IF statement for executing some code if \"i\" is NOT equal to 5?",
        options: [
            { text: "A) if (i != 5)", correct: true },
            { text: "B) if i &lt;&gt; 5", correct: false },
            { text: "C) if (i &lt;&gt; 5)", correct: false },
            { text: "D) if i != 5 then", correct: false }
        ]
    },
    {
        question: "How does a WHILE loop start?",
        options: [
            { text: "A) while (i &lt;= 10; i++)", correct: false },
            { text: "B) while i = 1 to 10", correct: false },
            { text: "C) while (i &lt;= 10)", correct: true },
            { text: "D) while (i &lt;= 10 then)", correct: false }
        ]
    },
    {
        question: "How does a FOR loop start?",
        options: [
            { text: "A) for i = 1 to 5", correct: false },
            { text: "B) for (i = 0; i &lt;= 5)", correct: false },
            { text: "C) for (i = 0; i &lt;= 5; i++)", correct: true },
            { text: "D) for (i &lt;= 5; i++)", correct: false }
        ]
    },
    {
        question: "How do you add a comment in JavaScript?",
        options: [
            { text: "A) &lt;!--This is a comment--&gt;", correct: false },
            { text: "B) //This is a comment", correct: true },
            { text: "C) 'This is a comment", correct: false },
            { text: "D) *This is a comment*", correct: false }
        ]
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        options: [
            { text: "A) var colors = [\"red\", \"green\", \"blue\"]", correct: true },
            { text: "B) var colors = \"red\", \"green\", \"blue\"", correct: false },
            { text: "C) var colors = (1:\"red\", 2:\"green\", 3:\"blue\")", correct: false },
            { text: "D) var colors = 1 = (\"red\"), 2 = (\"green\"), 3 = (\"blue\")", correct: false }
        ]
    },
    {
        question: "How do you round the number 7.25 to the nearest integer?",
        options: [
            { text: "A) round(7.25)", correct: false },
            { text: "B) Math.round(7.25)", correct: true },
            { text: "C) Math.rnd(7.25)", correct: false },
            { text: "D) rnd(7.25)", correct: false }
        ]
    },
    {
        question: "How do you find the highest value of x and y?",
        options: [
            { text: "A) Math.ceil(x, y)", correct: false },
            { text: "B) Math.max(x, y)", correct: true },
            { text: "C) top(x, y)", correct: false },
            { text: "D) ceil(x, y)", correct: false }
        ]
    },
    {
        question: "What is the correct JavaScript syntax to change the content of the HTML element with id=\"demo\"?",
        options: [
            { text: "A) document.getElementById(\"demo\").innerHTML = \"Hello World!\";", correct: true },
            { text: "B) #demo.innerHTML = \"Hello World!\";", correct: false },
            { text: "C) document.getElement(\"demo\").innerHTML = \"Hello World!\";", correct: false },
            { text: "D) document.getElementByName(\"demo\").innerHTML = \"Hello World!\";", correct: false }
        ]
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        options: [
            { text: "A) onmouseclick", correct: false },
            { text: "B) onchange", correct: false },
            { text: "C) onclick", correct: true },
            { text: "D) onmouseover", correct: false }
        ]
    },
    {
        question: "How do you declare a JavaScript variable?",
        options: [
            { text: "A) v carName;", correct: false },
            { text: "B) variable carName;", correct: false },
            { text: "C) let carName;", correct: false },
            { text: "D) var carName;", correct: true }
        ]
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        options: [
            { text: "A) x", correct: false },
            { text: "B) *", correct: false },
            { text: "C) -", correct: false },
            { text: "D) =", correct: true }
        ]
    },
    {
        question: "What will the following code return: Boolean(10 > 9)",
        options: [
            { text: "A) NaN", correct: false },
            { text: "B) false", correct: false },
            { text: "C) true", correct: true },
            { text: "D) undefined", correct: false }
        ]
    },
    {
        question: "How do you find the length of a string?",
        options: [
            { text: "A) str.length()", correct: false },
            { text: "B) str.size()", correct: false },
            { text: "C) str.length", correct: true },
            { text: "D) str.size", correct: false }
        ]
    },
    {
        question: "How do you convert a string to lowercase in JavaScript?",
        options: [
            { text: "A) str.toLower()", correct: false },
            { text: "B) str.toLowerCase()", correct: true },
            { text: "C) str.lowerCase()", correct: false },
            { text: "D) str.caseLower()", correct: false }
        ]
    },
    {
        question: "What is the correct way to write a JavaScript object?",
        options: [
            { text: "A) var person = {name:\"John\", age:50};", correct: true },
            { text: "B) var person = (name:\"John\", age:50);", correct: false },
            { text: "C) var person = [name:\"John\", age:50];", correct: false },
            { text: "D) var person = \"name:John, age:50\";", correct: false }
        ]
    },
    {
        question: "How do you access the first element of an array?",
        options: [
            { text: "A) array[first]", correct: false },
            { text: "B) array[1]", correct: false },
            { text: "C) array[0]", correct: true },
            { text: "D) array.first()", correct: false }
        ]
    },
    {
        question: "Which method adds new elements to the end of an array?",
        options: [
            { text: "A) push()", correct: true },
            { text: "B) add()", correct: false },
            { text: "C) append()", correct: false },
            { text: "D) insert()", correct: false }
        ]
    },
    {
        question: "How do you remove the last element of an array?",
        options: [
            { text: "A) array.deleteLast()", correct: false },
            { text: "B) array.removeLast()", correct: false },
            { text: "C) array.pop()", correct: true },
            { text: "D) array.last()", correct: false }
        ]
    },
    {
        question: "What is the correct syntax for referring to an external script called \"xxx.js\"?",
        options: [
            { text: "A) &lt;script href=\"xxx.js\"&gt;", correct: false },
            { text: "B) &lt;script name=\"xxx.js\"&gt;", correct: false },
            { text: "C) &lt;script link=\"xxx.js\"&gt;", correct: false },
            { text: "D) &lt;script src=\"xxx.js\"&gt;", correct: true }
        ]
    },
    {
        question: "How do you write an error message to the console?",
        options: [
            { text: "A) console.error(\"Error message\")", correct: true },
            { text: "B) console.log(\"Error message\")", correct: false },
            { text: "C) console.write(\"Error message\")", correct: false },
            { text: "D) console.output(\"Error message\")", correct: false }
        ]
    },
    {
        question: "How do you check if a variable is undefined?",
        options: [
            { text: "A) if (variable === undefined)", correct: false },
            { text: "B) if (typeof variable === \"undefined\")", correct: true },
            { text: "C) if (variable.type === undefined)", correct: false },
            { text: "D) if (variable.isUndefined())", correct: false }
        ]
    },
    {
        question: "What is the correct way to check if a variable is an array?",
        options: [
            { text: "A) variable.isArray()", correct: false },
            { text: "B) Array.isArray(variable)", correct: true },
            { text: "C) typeof variable === \"array\"", correct: false },
            { text: "D) variable instanceof Array", correct: false }
        ]
    },
    {
        question: "How do you convert a string to an integer in JavaScript?",
        options: [
            { text: "A) Integer.parse(\"123\")", correct: false },
            { text: "B) Parse.Int(\"123\")", correct: false },
            { text: "C) parseInt(\"123\")", correct: true },
            { text: "D) String.toInteger(\"123\")", correct: false }
        ]
    },
    {
        question: "What is the correct way to write a ternary operator?",
        options: [
            { text: "A) condition ? expr1 : expr2", correct: true },
            { text: "B) condition ? expr1", correct: false },
            { text: "C) condition : expr1 : expr2", correct: false },
            { text: "D) if ? expr1 : expr2", correct: false }
        ]
    },
    {
        question: "How do you get a random number between 0 and 1?",
        options: [
            { text: "A) Math.random()", correct: true },
            { text: "B) random()", correct: false },
            { text: "C) Math.getRandom()", correct: false },
            { text: "D) Math.random(0,1)", correct: false }
        ]
    },
    {
        question: "Which method concatenates two arrays?",
        options: [
            { text: "A) arr1.concat(arr2)", correct: true },
            { text: "B) arr1.join(arr2)", correct: false },
            { text: "C) arr1.combine(arr2)", correct: false },
            { text: "D) arr1.merge(arr2)", correct: false }
        ]
    },
    {
        question: "How do you create a new Date object?",
        options: [
            { text: "A) var date = Date()", correct: false },
            { text: "B) var date = new Date()", correct: true },
            { text: "C) var date = new Date.now()", correct: false },
            { text: "D) var date = Date.new()", correct: false }
        ]
    },
    {
        question: "What will typeof null return?",
        options: [
            { text: "A) \"null\"", correct: false },
            { text: "B) \"undefined\"", correct: false },
            { text: "C) \"object\"", correct: true },
            { text: "D) \"number\"", correct: false }
        ]
    },
    {
        question: "How do you check if a number is finite?",
        options: [
            { text: "A) isFinite(123)", correct: true },
            { text: "B) Finite.check(123)", correct: false },
            { text: "C) number.isFinite(123)", correct: false },
            { text: "D) 123.isFinite()", correct: false }
        ]
    },
    {
        question: "What is the correct way to write a promise?",
        options: [
            { text: "A) new Promise((resolve, reject) =&gt; {})", correct: true },
            { text: "B) Promise((resolve, reject) =&gt; {})", correct: false },
            { text: "C) new Promise{resolve, reject}", correct: false },
            { text: "D) Promise{(resolve, reject) =&gt; {}}", correct: false }
        ]
    },
    {
        question: "How do you use async/await?",
        options: [
            { text: "A) async function name() { await ... }", correct: true },
            { text: "B) async =&gt; function() { await ... }", correct: false },
            { text: "C) function async() { await ... }", correct: false },
            { text: "D) function name() { async await ... }", correct: false }
        ]
    },
    {
        question: "What is the correct way to export a module?",
        options: [
            { text: "A) export default function", correct: true },
            { text: "B) exports = function", correct: false },
            { text: "C) module.export = function", correct: false },
            { text: "D) export = function", correct: false }
        ]
    },
    {
        question: "How do you import a named export from a module?",
        options: [
            { text: "A) import { name } from './module'", correct: true },
            { text: "B) import name from './module'", correct: false },
            { text: "C) require { name } from './module'", correct: false },
            { text: "D) import './module'.name", correct: false }
        ]
    },
    {
        question: "What is the correct way to handle errors in async functions?",
        options: [
            { text: "A) try { await ... } catch (error) { }", correct: true },
            { text: "B) await { ... } catch (error) { }", correct: false },
            { text: "C) try { ... } catch await (error) { }", correct: false },
            { text: "D) async { try ... } catch (error) { }", correct: false }
        ]
    },
    {
        question: "How do you create a class in JavaScript?",
        options: [
            { text: "A) class ClassName { }", correct: true },
            { text: "B) function ClassName() { }", correct: false },
            { text: "C) new class ClassName { }", correct: false },
            { text: "D) create class ClassName { }", correct: false }
        ]
    }
];