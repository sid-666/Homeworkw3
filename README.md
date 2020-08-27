# Homeowrk Description
## Problem Statement
The task set to us was to develop a password generator through Javascript. The requirements were that the user
will have the ability to dictate the character diversity within the password (Upper Case, numbers and symbols)
through prompts displayed after the click of the "Generate Password" button. After the selections made by the user, a random password should be formed which includes all of the users requirements in terms of character richness.

## My Solution description
1) Defined character variables seperately (numbers , symbols, uppercase letter)
2) Added prompts in the writepassword() funtion since EventListener was defined where the click of the button would trigger the writepassword() function
3) In the getpassword() function defined a variable 'result' which will be returned after the running of the function
4) If function within the function which ensured the rest of the function actions will only occur if the user correctly selects the lengths of the password between 8 and 128 character length.
5) Variable charSet (within if statement) was equated to the lowercaseletter variable. The lowercase letters are set as default.
6) if statements after which ensured that in the event the user selected true in the prompts, the character variables will be concated to the charSet variable
7) A for loop statement which for the password length defined in prompt, will select random characters from the charSet variable (random variable index was used to achieve this through the Math floor and Math.random operators )
8) charSet random characters are added to the result variable
9) result is returned
## Outcome
### Image
![Website Screenshot]()
### Link