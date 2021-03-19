<template>
    <div id="App">
        <h1>I am at friends page {{UserName}}</h1>

        <h1>Age: {{$route.params.age}}</h1>

        <h1>Weight: {{$route.params.weight}}</h1>
    </div>
</template>
<script>
export default {

    name : 'friends' ,
    
    data: function()
    {
        return {
            UserName : 'Simbu'

        };
    },
   beforeCreate:function(){
       this.$appname = 'friends my first application'
         console.log(this.$appname)
         
   },
    created:function()
    {
        console.log('created')
        this.$appname  = 'friends my first applicaiton created'
        console.log(this.$appname)
        
    },
    mounted:function()
    {
        console.log('friends mounted')
    }
}
</script>