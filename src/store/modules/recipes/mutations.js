import filter from  'lodash/filter';
import map from  'lodash/filter';
import * as types from './mutation-types';

const mutations = {
    [types.ADD_RECIPES]: (store, payload) => {
        store.recipes = [...store.recipes, {...payload}];
    },
    [types.DELETE_RECIPES]:  (store, payload) => {
        store.recipes = filter(store.recipes, recipe => recipe.uuid !== payload.uuid);
    },
    [types.UPDATE_RECIPES]:  (store, payload) => {
        store.recipes = map(store.recipes, recipe => {
            if (recipe.uuid === payload.uuid) {
                recipe.name = payload.name;
                recipe.description = payload.description;
            }
            return recipe;
        });
    }
};
export default mutations;
