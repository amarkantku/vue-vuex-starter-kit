import mutations from './mutations';
import actions from './actions';
import getters from './getters';
import state from './state';

const recipes = {
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
};
export default recipes;
