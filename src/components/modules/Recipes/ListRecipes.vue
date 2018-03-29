<template>
    <div class="recipes-wrapper">
        <h1>Recipes List: </h1> <router-link :to="{ name: 'recipes.add'}">ADD</router-link>
        <div v-for="recipe in recipes" :key="recipe.id">
            <recipes-details :recipe="recipe"></recipes-details>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
const RecipesDetails = () => import('@/components/modules/Recipes/RecipesDetails');

export default {
    name: 'ListRecipes',
    components: {
        RecipesDetails
    },
    computed: {
        ...mapGetters({
            recipes: 'getRecipes'
        })
    },
    beforeRouteUpdate (to, from, next) {
        console.log(to);
        console.log(from);
        alert('hhh');
        next();
    },
    beforeRouteLeave (to, from , next) {
        const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
        if (answer) {
            next()
        } else {
            next(false)
        }
    }
}
</script>

<style scoped>
    
</style>

