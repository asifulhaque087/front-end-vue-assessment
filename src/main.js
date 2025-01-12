import wrap from '@vue/web-component-wrapper';

import Vue from 'vue';

import App from './App.vue';

const CustomElement = wrap(Vue, App);

window.customElements.define('test-webcomponent', CustomElement);
