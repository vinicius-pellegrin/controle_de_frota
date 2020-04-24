import Vue from 'vue';
import Router from 'vue-router';
import GitHubIssues from '@/components/GitHubIssues';
import GitHubIssue from '@/components/GitHubIssue';
import Home from '@/components/Home';




Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
     // name: 'GitHubIssues',
      //component: GitHubIssues,
    },

    {
      path: '/:name/:repo/:issue',
      name: 'GitHubIssue',
      component: GitHubIssue,
    },
    {
      path: '/Git',
           name: 'GitHubIssues',
     component: GitHubIssues,
    },
    

    {
      path: '/',
      name: 'Home',
      component: Home
    },
  



  ],

  
});
