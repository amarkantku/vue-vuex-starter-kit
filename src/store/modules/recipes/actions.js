
const actions = {
    addRecipes: ({state, commit}, payload) => {
        // context = { commit ,dispatch, getters, state, rootState, rootGetters }
        // console.log(context);
        // context.commit("ADD_RECIPES", payload);
        commit("ADD_RECIPES", payload);
    },
    updateRecipes: ({state, commit}, payload) => {
        commit("UPDATE_RECIPES", payload);
    },
    deleteRecipe: ({state, commit}, payload) => {
        commit("DELETE_RECIPES", payload);
    }
    // fetchBooks: ({ commit }) => {
    //     // do: state.booksStatus = 'pending'
    //     commit('FETCHBOOKS_REQUEST')
    
    //     fetch ('url')
    //     // do: state.booksStatus = 'success', state.books = books
    //     .then(res => { commit('FETCHBOOKS_SUCCESS', res.books)})
    //     // do: state.booksStatus = 'failed'
    //     .catch(err => { commit('FETCHBOOKS_FAILURE') })
    //   }
};
export default actions;