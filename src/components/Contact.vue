<template>
    <div id="App">
        <h1>I am at contact page</h1>
        <h2>{{greetings}}</h2><h2>{{name}}</h2>
    </div>
</template>
<script>
export default {

    name : 'contact'  ,
    props:[
        'greetings',
        'name',
    ]  
}
</script>