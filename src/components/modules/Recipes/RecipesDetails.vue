<template>
    <div v-if="recipe" class="recipe-info">
        <div class="ele-name">
            <label>Name: </label>{{recipe.name}}<br>
        </div>
        <div class="ele-desc">
            <label>Description: </label>{{recipe.description}}
        </div>
        <div class="ele-action">
            <router-link :to="{ name: 'recipes.edit', params: { uuid: recipe.uuid } }" class="button btn-edit">Edit</router-link>
            <button class="button btn-delete" @click.prevent="deleteRecipe"> Delete </button>
        </div>
    </div>  
</template>

<script>
export default {
    name: 'RecipesDetails',
    props: {
        recipe: {
            required: true,
            type: Object,
            default: () => {}
        }
    },
    methods: {
        deleteRecipe () {
            this.$store.dispatch('deleteRecipe', this.recipe);
        }
    }
}
</script>

<style scoped>
    .recipe-info{
        width: 30%;
        height: auto;
        background: #ccc;
        padding: 10px;
        margin: 5px 10px;
        float: left;
    }
    .ele-action {
        float: right;
        margin-top: 35px;
    }
    .button {
        
        border: none;
        color: white;
        padding: 15px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 12px;
        margin: 4px 2px;
        cursor: pointer;
        border-radius: 4px;
    }
    .btn-delete {
        background-color: #E22616;
    }
    .btn-edit {
        background-color: #20B4F0;
    }
    label {
        float: left;
        margin-right: 10px;
        font-weight: bold;
    }
    .ele-name, .ele-desc {
        margin-top: 10px;
        text-align: left;
    }
</style>

