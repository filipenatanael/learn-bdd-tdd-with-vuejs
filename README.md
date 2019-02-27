<p align="center"><a href="https://in.udacity.com/course/react-nanodegree--nd019" target="_blank"><img width="180" src="https://ramiresnascimento.files.wordpress.com/2017/08/tdd.png" alt="Repository logo"></a></p>

<h1 align="center">Unit Testing TDD & BDD</h1>

<p align="justify">
Repositório dedicado ao estudo de Behavior Driven Development (BDD) utilizando Storybook para realizar a devida documentação dos componentes e comportamentos. Para realizar o Test Driven Development (TDD) será utilizado o framework Jest mantido pelo facebook. Utilizaremos corretamente os métodos <b>Describe</b> and <b>it</b> de forma a complementar a BDD das funcionalidade. Em alguns momentos também utilizaremos do Component Driven Development (CDD) no processo de desenvolvimento.
</p>


## Running & StoryBook

If you do not know the [Storybook](https://github.com/storybooks/storybook), is a development environment for UI components. It allows you to browse a component library, view the different states of each component, and interactively develop and test components.

```shell
  git clone git@github.com:filipenatanael/unit-testing-tdd-and-bdd.git
  cd unit-testing-tdd-and-bdd
  npm install
  npm start
 
  /* Run your tests */
  npm run test
  
  /* Check out storybook */
  npm run storybook
  
  /* Compiles and minifies for production */
  npm run build
  
  /* Lints and fixes files */
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



## References

- [Behavior Driven Development (BDD)](https://www.sitepoint.com/bdd-javascript-cucumber-gherkin/)
- [Driven Development (TDD)](https://blog.da2k.com.br/2015/01/06/pensando-tdd-com-javascript/)
- [Component Driven Development (CDD)](https://blog.hichroma.com/component-driven-development-ce1109d56c8e)
- [Storybook Library](https://storybook.js.org/)
- [Jest Framework](https://jestjs.io/)
- [Vue Framework](https://br.vuejs.org)

