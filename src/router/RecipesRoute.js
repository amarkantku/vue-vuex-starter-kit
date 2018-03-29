const AddRecipes = () => import('@/components/modules/Recipes/AddRecipes');
const EditRecipes = () => import('@/components/modules/Recipes/EditRecipes');
const ListRecipes = () => import('@/components/modules/Recipes/ListRecipes');
const ViewRecipes = () => import('@/components/modules/Recipes/ViewRecipes');

const RecipesRoute = [
    {
      meta: {
        title: 'Add Recipes'
      },
      path: 'add',
      name: 'recipes.add',
      component: AddRecipes
    },
    {
      meta: {
        title: 'Recipe Details'
      },
      path: 'view/:uuid',
      name: 'recipes.view',
      component: ViewRecipes,
      props: true
    },
    {
      meta: {
        title: 'Edit Recipe'
      },
      path: 'edit/:uuid',
      name: 'recipes.edit',
      component: EditRecipes,
      props: true
    },
    {
      meta: {
        title: 'Recipes List'
      },
      path: 'list',
      name: 'recipes.list',
      component: ListRecipes
    }
];
export default RecipesRoute;
