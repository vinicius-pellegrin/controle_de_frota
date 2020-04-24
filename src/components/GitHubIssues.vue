<template>
   <div class="container">
        <h1>Vue.js + Github</h1>
        <p class="lead">
            Página que lista issues de um repositório do Github, usando Vue.js.
        </p>

        <div v-if="response.status === 'error'" class="alert alert-danger">
                    {{response.message }}

        </div>

        <div class="row">
            <div class="col">
                <div class="form-group">
                    <input v-model="username" type="text" class="form-control" placeholder="github username">
                  
                </div>
            </div>

            <div class="col">
                <div class="form-group">
                    <input v-model="repository" type="text" class="form-control" placeholder="github repositório">
               
                </div>
            </div>

            <div class="col-3">
                <div class="form-group">
                    <button @click.prevent.stop="getIssues()" 
                    class="btn btn-success">GO</button>
                    <button @click.prevent.stop="reset"
                    class="btn btn-danger">LIMPAR</button>
                </div>
            </div>
        </div>

        <br><hr><br>
        
        

        <table 
        class="table table-sm table-bordered">
            <thead>
            <tr>
                <th width="100">Número</th>
                <th>Título</th>
            </tr>
            </thead>

            <tbody>
                <tr v-if="loader.getIssues">
                    <td class="text-center" colspan="2"><img src="/static/loading2.svg" alt=""></td>
                </tr>

       
                <tr v-if="showIssues"
                    v-for="issue in issues" 
                    :key = "issue.number">
                    <td>
                        <router-link :to="{ name: 'GitHubIssue', 
                                            params: {
                                                name: username,
                                                repo: repository,
                                                issue: issue.number
                                            }}">
                                {{ issue.number }}
                        </router-link>
                        
                    </td>
                    <td>{{issue.title }}</td>
                </tr>
        

            <tr v-if="noIssues">
                <td class="text-center" colspan="2">Nenhuma issues encontrada!</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name:'GitHubIssues',
    
        created(){
            this.getLocalData();
        },
    
    
    data(){        
        return{
            username: '',
        repository: '',
        issues:[],
        response: {
                status: '',
                message: '',

        },
       // selectedIssue:{},
        loader:{
            getIssues:false,
            //getIssue:false,
        },
        };
    },
    computed:{
        showIssues(){

            return !!this.issues.length && !this.loader.getIssues;
        },

        noIssues(){
            return !this.issues.length && !this.loader.getIssues;
        }
    }, 

methods:{

reset(){

    this.username ='';
    this.repository = '';
    localStorage.removeItem('gitHubissues');
    this.issues = [];

},

resetResponse(){

        this.response.status = '';
        this.response.message = '';

},


getIssues(){
    this.resetResponse();
    this.issues = [];
   //
    if (this.username && this.repository){
        localStorage.setItem('gitHubissues', JSON.stringify({
            username: this.username, 
            repository: this.repository
             }));
        this.loader.getIssues = true;
    const url =`https://api.github.com/repos/${this.username}/${this.repository}/issues`;
    axios.get(url).then((response)=>{
        this.issues = response.data;
//console.log(response);
    }).catch((error) => {
        //eslint-disable-next-line
        console.log(error.response.data);
        this.response.status= 'error';
        this.response.message ='Repositorio não existe';
         
    }).finally(() => {
         this.loader.getIssues = false;
    });
    }
},


getLocalData(){


const localData = JSON.parse(localStorage.getItem('gitHubissues'));
console.log(localData);

if (localData && localData.username && localData.repository){
    this.username = localData.username;
    this.repository = localData.repository;
    this.getIssues();

}

},



},
};
</script>




