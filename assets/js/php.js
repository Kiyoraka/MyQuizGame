// assets/js/php.js
const phpQuestions = [
    {
        question: "What does PHP stand for?",
        options: [
            { text: "A) Personal Home Page", correct: false },
            { text: "B) PHP: Hypertext Preprocessor", correct: true },
            { text: "C) Program Hypertext Processor", correct: false },
            { text: "D) Preprocessed Hypertext Page", correct: false }
        ]
    },
    {
        question: "How do you write \"Hello World\" in PHP?",
        options: [
            { text: "A) \"Hello World\";", correct: false },
            { text: "B) Document.Write(\"Hello World\");", correct: false },
            { text: "C) echo \"Hello World\";", correct: true },
            { text: "D) System.out.println(\"Hello World\");", correct: false }
        ]
    },
    {
        question: "All PHP variables start with which symbol?",
        options: [
            { text: "A) &", correct: false },
            { text: "B) !", correct: false },
            { text: "C) $", correct: true },
            { text: "D) @", correct: false }
        ]
    },
    {
        question: "How do you start a PHP block of code?",
        options: [
            { text: "A) &lt;php&gt;", correct: false },
            { text: "B) &lt;?php", correct: true },
            { text: "C) &lt;script php&gt;", correct: false },
            { text: "D) &lt;p&gt;", correct: false }
        ]
    },
    {
        question: "What is the correct way to end a PHP statement?",
        options: [
            { text: "A) .", correct: false },
            { text: "B) ;", correct: true },
            { text: "C) :", correct: false },
            { text: "D) }", correct: false }
        ]
    },
    {
        question: "How do you get the length of a string in PHP?",
        options: [
            { text: "A) len($str)", correct: false },
            { text: "B) strlen($str)", correct: true },
            { text: "C) length($str)", correct: false },
            { text: "D) string.length($str)", correct: false }
        ]
    },
    {
        question: "Which superglobal variable holds information about headers, paths, and script locations?",
        options: [
            { text: "A) $_SERVER", correct: true },
            { text: "B) $_GLOBALS", correct: false },
            { text: "C) $_FILES", correct: false },
            { text: "D) $_ENV", correct: false }
        ]
    },
    {
        question: "How do you create a function in PHP?",
        options: [
            { text: "A) create myFunction()", correct: false },
            { text: "B) function myFunction()", correct: true },
            { text: "C) new function myFunction()", correct: false },
            { text: "D) def myFunction()", correct: false }
        ]
    },
    {
        question: "How do you create an array in PHP?",
        options: [
            { text: "A) array()", correct: true },
            { text: "B) Array[]", correct: false },
            { text: "C) array[]", correct: false },
            { text: "D) new Array()", correct: false }
        ]
    },
    {
        question: "Which operator is used to check if two values are equal in value and type?",
        options: [
            { text: "A) ==", correct: false },
            { text: "B) ===", correct: true },
            { text: "C) =", correct: false },
            { text: "D) !=", correct: false }
        ]
    },
    {
        question: "How do you connect to a MySQL database using PHP?",
        options: [
            { text: "A) mysql_connect()", correct: false },
            { text: "B) mysqli_connect()", correct: true },
            { text: "C) database_connect()", correct: false },
            { text: "D) db_connect()", correct: false }
        ]
    },
    {
        question: "Which function is used to include a file in PHP?",
        options: [
            { text: "A) include()", correct: false },
            { text: "B) require()", correct: false },
            { text: "C) Both A and B", correct: true },
            { text: "D) import()", correct: false }
        ]
    },
    {
        question: "How do you open a file in PHP?",
        options: [
            { text: "A) open()", correct: false },
            { text: "B) fopen()", correct: true },
            { text: "C) fileopen()", correct: false },
            { text: "D) openfile()", correct: false }
        ]
    },
    {
        question: "Which function outputs one or more strings?",
        options: [
            { text: "A) print()", correct: false },
            { text: "B) echo()", correct: false },
            { text: "C) Both A and B", correct: true },
            { text: "D) write()", correct: false }
        ]
    },
    {
        question: "What is the correct way to create a cookie in PHP?",
        options: [
            { text: "A) createcookie()", correct: false },
            { text: "B) makecookie()", correct: false },
            { text: "C) setcookie()", correct: true },
            { text: "D) cookie()", correct: false }
        ]
    },
    {
        question: "How do you start a session in PHP?",
        options: [
            { text: "A) session_begin()", correct: false },
            { text: "B) session_start()", correct: true },
            { text: "C) start_session()", correct: false },
            { text: "D) begin_session()", correct: false }
        ]
    },
    {
        question: "Which method sends form data invisibly?",
        options: [
            { text: "A) GET", correct: false },
            { text: "B) POST", correct: true },
            { text: "C) REQUEST", correct: false },
            { text: "D) SUBMIT", correct: false }
        ]
    },
    {
        question: "What is the correct way to add 1 to $count?",
        options: [
            { text: "A) $count =+ 1", correct: false },
            { text: "B) $count++", correct: true },
            { text: "C) ++count", correct: false },
            { text: "D) count++", correct: false }
        ]
    },
    {
        question: "How do you check if a file exists in PHP?",
        options: [
            { text: "A) file_exists()", correct: true },
            { text: "B) exists()", correct: false },
            { text: "C) is_file()", correct: false },
            { text: "D) file_is()", correct: false }
        ]
    },
    {
        question: "Which function returns the current date and time?",
        options: [
            { text: "A) getdate()", correct: false },
            { text: "B) now()", correct: false },
            { text: "C) date()", correct: true },
            { text: "D) current_date()", correct: false }
        ]
    },
    {
        question: "How do you define a constant in PHP?",
        options: [
            { text: "A) const NAME = value", correct: false },
            { text: "B) define(NAME, value)", correct: false },
            { text: "C) constant(NAME, value)", correct: false },
            { text: "D) Both A and B", correct: true }
        ]
    },
    {
        question: "Which function removes whitespace from both sides of a string?",
        options: [
            { text: "A) trim()", correct: true },
            { text: "B) strip()", correct: false },
            { text: "C) clean()", correct: false },
            { text: "D) remove_spaces()", correct: false }
        ]
    },
    {
        question: "How do you redirect to another page in PHP?",
        options: [
            { text: "A) redirect()", correct: false },
            { text: "B) header(\"Location: URL\")", correct: true },
            { text: "C) navigate(\"URL\")", correct: false },
            { text: "D) window.location = \"URL\"", correct: false }
        ]
    },
    {
        question: "Which function converts an object to an array?",
        options: [
            { text: "A) obj_array()", correct: false },
            { text: "B) (array)", correct: true },
            { text: "C) to_array()", correct: false },
            { text: "D) convert_array()", correct: false }
        ]
    },
    {
        question: "How do you get the current PHP version?",
        options: [
            { text: "A) version()", correct: false },
            { text: "B) phpversion()", correct: true },
            { text: "C) php_version()", correct: false },
            { text: "D) getversion()", correct: false }
        ]
    },
    {
        question: "Which function is used to check if a variable is an array?",
        options: [
            { text: "A) is_array()", correct: true },
            { text: "B) check_array()", correct: false },
            { text: "C) array_check()", correct: false },
            { text: "D) isarray()", correct: false }
        ]
    },
    {
        question: "How do you sort an array in ascending order?",
        options: [
            { text: "A) sort()", correct: true },
            { text: "B) asort()", correct: false },
            { text: "C) order()", correct: false },
            { text: "D) array_sort()", correct: false }
        ]
    },
    {
        question: "Which function returns the last element of an array?",
        options: [
            { text: "A) end()", correct: true },
            { text: "B) last()", correct: false },
            { text: "C) array_end()", correct: false },
            { text: "D) get_last()", correct: false }
        ]
    },
    {
        question: "How do you check if a variable exists in PHP?",
        options: [
            { text: "A) exists()", correct: false },
            { text: "B) isset()", correct: true },
            { text: "C) defined()", correct: false },
            { text: "D) is_exists()", correct: false }
        ]
    },
    {
        question: "Which function rounds a number to the nearest integer?",
        options: [
            { text: "A) round()", correct: true },
            { text: "B) round_int()", correct: false },
            { text: "C) integer()", correct: false },
            { text: "D) roundup()", correct: false }
        ]
    },
    {
        question: "How do you create a destructor method?",
        options: [
            { text: "A) function __destruct()", correct: true },
            { text: "B) function destruct()", correct: false },
            { text: "C) function ~ClassName()", correct: false },
            { text: "D) function destroy()", correct: false }
        ]
    },
    {
        question: "What is the correct way to create a constructor?",
        options: [
            { text: "A) function __construct()", correct: true },
            { text: "B) function constructor()", correct: false },
            { text: "C) function ClassName()", correct: false },
            { text: "D) function create()", correct: false }
        ]
    },
    {
        question: "Which operator is used for string concatenation?",
        options: [
            { text: "A) +", correct: false },
            { text: "B) .", correct: true },
            { text: "C) &", correct: false },
            { text: "D) ,", correct: false }
        ]
    },
    {
        question: "How do you get the type of a variable in PHP?",
        options: [
            { text: "A) typeOf()", correct: false },
            { text: "B) gettype()", correct: true },
            { text: "C) type()", correct: false },
            { text: "D) vartype()", correct: false }
        ]
    },
    {
        question: "Which function is used to sanitize user input?",
        options: [
            { text: "A) clean_input()", correct: false },
            { text: "B) sanitize()", correct: false },
            { text: "C) htmlspecialchars()", correct: true },
            { text: "D) escape()", correct: false }
        ]
    },
    {
        question: "How do you write a comment in PHP?",
        options: [
            { text: "A) // Comment", correct: false },
            { text: "B) # Comment", correct: false },
            { text: "C) /* Comment */", correct: false },
            { text: "D) All of the above", correct: true }
        ]
    },
    {
        question: "Which function encrypts a password in PHP?",
        options: [
            { text: "A) encrypt()", correct: false },
            { text: "B) password_hash()", correct: true },
            { text: "C) md5()", correct: false },
            { text: "D) hash_password()", correct: false }
        ]
    },
    {
        question: "How do you declare a static method?",
        options: [
            { text: "A) static function methodName()", correct: true },
            { text: "B) function static methodName()", correct: false },
            { text: "C) static methodName()", correct: false },
            { text: "D) function methodName() static", correct: false }
        ]
    },
    {
        question: "Which operator is used for NULL coalescing in PHP 7+?",
        options: [
            { text: "A) ??", correct: true },
            { text: "B) ||", correct: false },
            { text: "C) &&", correct: false },
            { text: "D) !=", correct: false }
        ]
    },
    {
        question: "How do you handle exceptions in PHP?",
        options: [
            { text: "A) try-catch", correct: true },
            { text: "B) try-except", correct: false },
            { text: "C) catch-throw", correct: false },
            { text: "D) handle-exception", correct: false }
        ]
    }
];