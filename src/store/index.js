import Vuex from 'vuex';
import recipes from './modules/recipes';

const store = new Vuex.Store({
    modules: {
        recipes: recipes
    }
});
export default store;
