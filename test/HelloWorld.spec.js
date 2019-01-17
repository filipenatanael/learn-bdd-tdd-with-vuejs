import Vue from 'vue';
import jsdom from 'jsdom';
import HelloWorld from '../src/components/HelloWorld.vue';

const renderer = require('vue-server-renderer').createRenderer();

describe('Test suite for HelloWorld Component', () => {
  // let errorThrown = false;
  // Vue.config.errorHandler = function (err, vm, info) {
  //   if(info.includes('mounted')) {
  //     errorThrown = true;
  //   }
  // };
  const ClonedComponent = Vue.extend(HelloWorld);
  const ComponentWithProps = new ClonedComponent({
    propsData: {
      msg: 'Hello World People!'
    },
  }).$mount();

  it('should have a <h1> tag when message is passed.', () => {
    renderer.renderToString(ComponentWithProps, (err, str) => {
      let dom = new jsdom.JSDOM(str);
      let element = dom.window.document.querySelectorAll('h1');
      expect(element.length).toBe(1);
    });
  });

  it('should have an <h1> tag when message when title is passed.', () => {
    renderer.renderToString(ComponentWithProps, (err, str) => {
      let dom = new jsdom.JSDOM(str);
      let element = dom.window.document.querySelector('h1');
      expect(element.textContent).toContain('Hello World People!');
    });
  });

  const ComponentWithOutProps = new ClonedComponent({}).$mount();

  it('should not have an a <h1> tag when message is not passed.', () => {
    renderer.renderToString(ComponentWithOutProps, (err, str) => {
      let dom = new jsdom.JSDOM(str);
      let element = dom.window.document.querySelectorAll('h1');
      expect(element.length).toBe(0);
    });
  });

});
