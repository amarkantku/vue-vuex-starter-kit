import axios from 'axios';
import Vue from 'vue';
import Auth from './mixins/Auth';

Vue.prototype.$http = axios;

Vue.mixin(Auth); 
