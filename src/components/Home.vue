<template>

<div class="container"> 
    <h1> pagina inicial</h1>

    <div class="text-center form" >
 <h1 > pagina inicial</h1> 
        <table class="table-bordered">
                <tr>

                    <td>
                    <card id="cartao">
                        <h4 slot="header">cabeçalho do cartão</h4>
                         <div class="col-xs-12">
                            This is my card content
                        </div>
                        <div class="stats col-xs-12" slot="footer">
                             Card footer text
                        </div>
                    </card>

                    </td>
                    <td>

                            <card>    
                                <h4 slot="header">cabeçalho do cartão</h4>
                                <div class="col-xs-12">
                                    This is my card content
                                </div>
                                <div class="stats col-xs-12" slot="footer">
                                        Card footer text
                                </div>
                            </card>

                    </td>
                    <td>
                        <a class="btn btn-" href="">
                    <card class="cards bg-dark">
                        <h4 slot="header">cabeçalho do cartão</h4>
                         <div class="col-xs-12">
                            This is my card content
                        </div>
                        <div class="stats col-xs-12" slot="footer">
                             Card footer text
                        </div>
                    </card>
</a>
                    </td>
                    <td>

                            <card>    
                                <h4 slot="header">cabeçalho do cartão</h4>
                                <div class="col-xs-12">
                                    This is my card content
                                </div>
                                <div class="stats col-xs-12" slot="footer">
                                        Card footer text
                                </div>
                            </card>

                    </td>


                </tr>

        </table>
        


    
    <!--    <input placeholder="Simple input with v-model binding"  type="text" class="form-control" v-model="inputVal"></input>-->

    </div>







    </div>
</template>

<script>
  export default {
    data() {
      return {
        inputVal: ''
      }
    },



  }
</script>