import get from 'lodash/get';
const getters = {
    getRecipes: state => {
        return get(state, 'recipes', []);
    }
};
export default getters;
