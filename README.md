# TaskTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.23.

You need to install:

* Node JS


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).




## Answers

1. Clean code is code that can be easily understood by other developers. This is the code in which:

- No duplicate code parts
- The names of variables / classes / methods correspond to their purpose
- The principle of Sole Responsibility is preserved - each class / method performs only its own function, performs it fully and nothing more.
- The principle remains: the code is open for extension, closed for modification. This is usually achieved by creating interfaces and using abstract entities.
- The minimum number of entities / methods to solve the problem, while maintaining functionality and optimality

2. Declarative programming is a programming paradigm that describes the problem and the expected result. A clear statement of how to solve this problem.

3. Composition over inheritance - the principle of OOP, in which composition is preferred to inheritance. In my opinion, inheritance should be used when the child class, from a logical point of view, fully implements the parent class, complementing it. Inheritance leads to a strong “concatenation” of classes, since it leads to inheritance of the implementation, therefore it is believed that it is better to prefer a composition where different implementations can be substituted.

4. Functional programming - programming in which there are no such concepts as a class or an object. The whole program is based on writing functions, the need adheres to principles such as: the result of the function for the same input data is the same, the function depends only on the input parameters, functions can take a function as an argument and return a function, data immunity (there is no way to reassign variables).

5. I wrote a project called MailRaider and it is looking for emails by domain. It is written in NestJS. In my opinion, this project has fairly clean code, a minimal amount of duplication, all entities perform only their tasks. The software is also optimized for runtime: many tasks are performed in parallel, there is also logic to cut off part of the solutions. The program copes with its task in optimal time.

6. I like css, for example, of this site: https://www.giampierocruceli.com
Here is a “clean” css with clear class names, comments, a fully responsive site, the presence of relevant animations. Everything works clearly, beautifully, the code is clear.
