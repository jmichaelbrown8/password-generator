# 🔐 password-generator

A simple random password generator, deployed using github pages: [jmichaelbrown8.github.io/password-generator](https://jmichaelbrown8.github.io/password-generator/)

## Technologies Used
* JavaScript
* HTML
* CSS

## Description

This is a random password generator browser application for making secure passwords on-demand. The page prompts the user for password length (between 8-128 characters), and character types to include (lowercase, uppercase, number, and specials).

## Setup

* Clone the repo
* Run the index.html in your browser

## Notable patterns used
* Constants for character types and regex patterns
* Do...While loops to ensure the correct user input
* Regular Expressions for testing that the random selection meets the user's preferences
* Recursion until the user's preferences have been met with the random generator

## Known Issues / Future Enhancements
* No automated tests. [issue #4](https://github.com/jmichaelbrown8/password-generator/issues/4)
* Window prompts, confirms, and alerts aren't the best user experience. [issue #2](https://github.com/jmichaelbrown8/password-generator/issues/2)
* Click the password to auto-select and copy the contents to your clipboard. [issue #3](https://github.com/jmichaelbrown8/password-generator/issues/3)
