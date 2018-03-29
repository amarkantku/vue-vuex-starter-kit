<template>
    <div class="recipes-wrapper">
        <h1>Add Recipes: </h1>
        <div class="recipes-box">
            <div class="element-div">
                <label>Name:</label>
                <input type="text" :value="recipe.name" @change="updateRecipesInfo('name', $event)"/>
            </div>
             <div class="element-div">
                <label>Description:</label>
                <textarea row="10" col="50" :value="recipe.description" @change="updateRecipesInfo('description', $event)"/> 
            </div>
            <br>
            <button @click.prevent="addRecipes">Add Recipe</button>
        </div>
    </div>
</template>

<script>
import { getShortUUID } from '@/utils/helpers';
import { recipe } from '@/store/modules/recipes/skeleton';

export default {
    name: 'AddRecipes',
    data () {
        return {
            recipe: {...recipe}
        };
    },
    methods: {
        updateRecipesInfo (field, $event) {
            this.recipe[field] = $event.target.value;
        },
        addRecipes () {
            this.recipe.uuid = getShortUUID();
            this.$store.dispatch('addRecipes', this.recipe).then(() => {
                //console.log('recipe added');
                this.$router.push({name: 'recipes.list'}); 
            });
        }
    }
}
</script>

<style scoped>

</style>
