const lower = 'abcdefghijklmnopqrstuvwxyz';
const upper = lower.toUpperCase();
const numbers = '0123456789';

// https://owasp.org/www-community/password-special-characters
const special = [
    " ",
    "!",
    '"',
    "#",
    "$",
    "%",
    "&",
    "'",
    "(",
    ")",
    "*",
    "+",
    ",",
    "-",
    ".",
    "/",
    ":",
    ";",
    "<",
    "=",
    ">",
    "?",
    "@",
    "[",
    "\\",
    "]",
    "^",
    "_",
    "`",
    "{",
    "|",
    "}",
    "~"
].join(''); // converts this array to a string

const lowerRegex = '[a-z]';
const upperRegex = '[A-Z]';
const numbersRegex = '[0-9]';
const specialRegex = '[^A-Za-z0-9_]';