<p align="center"><a href="#" target="_blank"><img width="180" src="https://ramiresnascimento.files.wordpress.com/2017/08/tdd.png" alt="Repository logo"></a></p>

<h1 align="center">Unit Testing TDD & BDD</h1>

<p align="justify">
Repositório dedicado ao estudo de <b>Behavior Driven Development (BDD)</b> e <b>Test Driven Development (TDD)</b> utilizado o framework <b>Jest</b> mantido pelo facebook, também será utilizado o dependências <b>storybook</b> para criar teste interativos de componentes. Em alguns momentos também utilizaremos do <b>Component Driven Development (CDD)</b> no processo de desenvolvimento.
</p>


## Running & StoryBook

If you do not know the [Storybook](https://github.com/storybooks/storybook), is a development environment for UI components. It allows you to browse a component library, view the different states of each component, and interactively develop and test components.

```shell
  git clone git@github.com:filipenatanael/unit-testing-tdd-and-bdd.git
  cd unit-testing-tdd-and-bdd
  npm install
  npm start
 
  ## Run your tests
  npm run test
  
  ## Check out storybook
  npm run storybook
  
  ## Compiles and minifies for production
  npm run build
  
  ## Lints and fixes files
  npm run lint
```

## Dependencies

|  Dependencies | Versions | Description |
|---|---|---|
|  [jsdom](https://github.com/jsdom/jsdom) | ^13.1.0 | JSDOM is a JavaScript based headless browser that can be used to create a realistic testing environment. |
|  [jest](https://jestjs.io/) | 21.2.1 | Jest is a framework which have a task runner, assertion library, and good mocking support that means it could execute different unit test cases, write its result in console or log files, could create mocks or verify all the assertions in short it will execute the test. | 
|  [jest-vue-preprocessor](https://www.npmjs.com/package/jest-vue-preprocessor) | 1.3.1 | A locoslab/vue-typescript-jest JavaScript port to allow Jest load **.vue files** in tests. |
|  [babel-jest](https://www.npmjs.com/package/babel-jest) | ^23.4.0 | Babel Integration |
|  [vue-server-renderer](https://www.npmjs.com/package/vue-server-renderer) | ^2.5.21 | Vue.js Server-Side Rendering |
|  [@babel/core](https://babeljs.io/docs/en/next/babel-core.html) | ^7.2.2 | Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments |
|  [babel-preset-env](https://babeljs.io/docs/en/babel-preset-env) | ^2.0.2 | Is a smart preset that allows you to use the latest JavaScript without needing to micromanage which syntax transforms (and optionally, browser polyfills) are needed by your target environment(s). |
|  [babel-loader](https://github.com/babel/babel-loader) | ^8.0.5 | This package allows transpiling JavaScript files using Babel and webpack. |
|  [@storybook/vue](https://github.com/storybooks/storybook) | ^4.1.6 | This allows you to develop UI components in isolation, which can improve component reuse, testability, and development speed. |


## What's the difference between assertion library, testing framework and testing environment in javascript?

**Assertion libraries** are tools to verify that things are correct.
This makes it a lot easier to test your code, so you don't have to do thousands of **if** statements.

**Testing frameworks** are used to organize and execute tests. This project we are using **Jest**, but you can use another like [Mocha](https://mochajs.org/), [Jasmine](https://jasmine.github.io/), [kurma](https://github.com/karma-runner/karma) these are most popular choices, you can searching others by [click here.](https://medium.com/welldone-software/an-overview-of-javascript-testing-in-2018-f68950900bc3)

**Testing Environments** are the places where you run your tests.

Karma is a bit of an edge case, in the sense that it's kind of a one off tool, not many like it. Karma works by running your unit tests inside of browsers (defaulting to PhantomJS, a headless WebKit browser), to allow you to test browser-based JavaScript code.

Frameworks like Mocha and Jasmine work both in the browser and with Node.js, and usually default to Node.

## References

- [An Overview of JavaScript Testing in 2018](https://medium.com/welldone-software/an-overview-of-javascript-testing-in-2018-f68950900bc3)
- [Behavior Driven Development (BDD)](https://www.sitepoint.com/bdd-javascript-cucumber-gherkin/)
- [Component Driven Development (CDD)](https://blog.hichroma.com/component-driven-development-ce1109d56c8e)
- [Driven Development (TDD)](https://blog.da2k.com.br/2015/01/06/pensando-tdd-com-javascript/)
- [Storybook Library](https://storybook.js.org/)
- [Jest Framework](https://jestjs.io/)
- [Vue Framework](https://br.vuejs.org)
- [Assertion Libraries ](https://stackoverflow.com/questions/25678063/whats-the-difference-between-assertion-library-testing-framework-and-testing-ekurma)
- [BDD para iniciantes com Node.JS, Mocha e Chai](https://medium.com/@hbarcelos/bdd-para-iniciantes-com-node-js-mocha-and-chai-649d13f9564)

