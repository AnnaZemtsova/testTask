
Requirements
-----------------------------

Minimum requirements:

* Node.js v10.16.0

Installation
------------------------------

Local environment:

1. Set up a project `git clone https://github.com/AnnaZemtsova/testTask.git`
2. Run `cd testTask`
3. Run `npm install --save-dev @angular-devkit/build-angular`

Start project
------------------------------

1. Run `npm start` to start the project. The project will be available at `http://localhost:4200`

## Answers

1. **Clean code** is code that can be easily understood by other developers. This is the code in which:

 -   No duplicate code parts
 -   The names of variables / classes / methods correspond to their purpose
 -   The principle of Single Responsibility is maintained - each class / method performs only its own function,
    performs it fully and nothing more.
 -   The principle is maintained : the code is open for extension, closed for modification. 
    This is usually achieved by creating interfaces and using abstract entities.
 -   The minimum number of entities / methods to solve the problem, while maintaining functionality and optimality

2. **Declarative programming** is a programming paradigm that describes the problem and the expected result.
    A clear statement of how to solve this problem.

3. **Composition over inheritance** - the principle of OOP, in which composition is preferred to inheritance.
    In my opinion, inheritance should be used when the child class, from a logical point of view,
    fully implements the parent class, complementing it. Inheritance leads to a strong “concatenation” of classes,
    since it leads to inheritance of the implementation, therefore it is believed that it is better to prefer a composition where different implementations can be substituted.

4. **Functional programming** - programming in which there are no such concepts as a class or an object.
    The whole program is based on writing functions, the need adheres to principles such as: the result of the function 
    for the same input data is the same, the function depends only on the input parameters, 
    functions can take a function as an argument and return a function,
    data immunity (there is no way to reassign variables).

5. I wrote a project called MailRaider and it is looking for emails by domain.
   It is written in NestJS. In my opinion, this project has fairly clean code, a minimal amount of duplication,
   all entities perform only their tasks. The software is also optimized for runtime: many tasks are performed in parallel,
   there is also logic to cut off part of the solutions. The program copes with its task in optimal time.

6. I like css, for example, of this site: https://www.giampierocruceli.com
  Here is a “clean” css with clear class names, comments, a fully responsive site, the presence of relevant animations. 
  Everything works clearly, beautifully, the code is clear.
