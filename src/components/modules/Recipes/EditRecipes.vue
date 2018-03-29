<template>
    <div class="recipes-wrapper">
        <h1>Edit Recipes: </h1>
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
            <button @click.prevent="updateRecipes">Update Recipe</button>
        </div>
    </div>
</template>

<script>
import find from 'lodash/find';
import size from 'lodash/size';
import { mapGetters } from 'vuex';
import { recipe } from '@/store/modules/recipes/skeleton';

export default {
    name: 'EditRecipes',
    data () {
        return {
            recipe: {...recipe}
        }
    },
    props: {
        uuid: {required: true, type: String, default: ''}
    },
    computed: {
        ...mapGetters({
            recipes: 'getRecipes'
        })
    },
    mounted () {
        if(size(this.recipes)) {
            this.recipe = find(this.recipes, { 'uuid': this.uuid });
            // this.recipe = find(this.recipes, { 'uuid': this.$route.params.uuid });
        }
    },
    methods: {
        updateRecipesInfo (field, $event) {
            this.recipe[field] = $event.target.value;
        },
        updateRecipes () {
            this.$store.dispatch('updateRecipes', this.recipes).then(() => {
                console.log('recipe updated....');
                this.$router.push({name: 'recipes.list'}); 
            });
        }
    }
}
</script>

<style scoped>

</style>

