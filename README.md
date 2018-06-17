# raindrops
A program that converts a number to a string, the contents of which depends on the number’s prime factors.  

- If the number contains `3` as a prime factor, it outputs `"Pling"`
- If the number contains `5` as a prime factor, it outputs `"Plang"`
- If the number contains `7` as a prime factor, it outputs `"Plong"`
- If the number does not contain `3`, `5`, or `7` as a prime factor, it just passes the number’s digits straight through.

### Examples
- `28's` prime-factorization is `2`, `2`, `7`.  
In raindrop-speak, this would be a simple `"Plong"`.
- `1755` prime-factorization is `3`, `3`, `3`, `5`, `13`.  
In raindrop-speak, this would be a `"PlingPlang"`.
- The prime factors of `34` are `2` and `17`.  
Raindrop-speak doesn’t know what to make of that, so it just going to pass the input digits and the result would be `"34"`.
    
### If you want to play around the program
* clone the repo.
* cd into the projects directory
* run the following commands 
* `npm install` to install the needed packages
* `npm test` to test the program itself 
* `npm start` to see the program in action(with an input of 28).

### How this program came to be?
I like to include this section in most of my personal projects/programs. It reminds me(and inform you) of what made me built the project.  
I was applying to be a part of a Technical Leadership Program at [Andela](https://andela.com/) and this program was part of the technical challenges I needed to complete in the bootcamp phase of the application. It is meant to prove my understanding of basic programming logic with Test Driven Development.   
In case you got curious about what Andela is or what the recruitment was like, you can get more info about that [here](https://andela.com/join/developer).
