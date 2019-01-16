import Vue from 'vue';
import { storiesOf } from '@storybook/vue';

import HelloWorld from '../components/HelloWorld.vue';

const props = 'Hello World People!';

storiesOf('Hello World', module)
    .add('when message props is not passed', () => ({
      components: { HelloWorld },
      template: '<hello-world></hello-world>',
      data: () => ({ props }),
    }))
    .add('when message props is passed', () => ({
      components: { HelloWorld },
      template: '<hello-world :msg="props"></hello-world>',
      data: () => ({ props }),
    }))
