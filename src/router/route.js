
const Home = () => import('@/components/Home');
const PageNotFound = () => import('@/components/PageNotFound');
const RecipesIndex = () => import('@/components/modules/Recipes');
import RecipesRoute from './RecipesRoute';

const Routers = [
  {
    meta: {
      title: 'Home'
    },
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    meta: {
      title: 'Recipes',
      requiresAuth: true
    },
    path: '/recipes',
    name: 'recipes.index',
    // redirect: { name: 'home' },
    // redirect: to => {
    //   // dynamic route re-direct the function receives the target route as the argument
    //   // return redirect path/location here.
    // }
    components: {
      default: RecipesIndex
    },
    children: RecipesRoute,
    beforeEnter: (to, from, next) => {
      // Per-Route Guard 
      const answer = window.confirm('Before enter route, fetching data or route gaurd action...!')
      if (answer) {
        next()
      } else {
        next(false)
      }
    }
  },
  {
    meta: {
      title: 'Page Not Found'
    },
    path: "*",
    name:'page-not-found',
    component: PageNotFound
  }
];
export default Routers;
