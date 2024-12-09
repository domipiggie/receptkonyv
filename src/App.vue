<script setup>
import {recipes} from './data/recipes';
import Recipe from './classes/Recipe';

import { ref } from 'vue'

var recipeList = ref([]);

recipes.forEach((recipe)=>{
    recipeList.value.push(new Recipe(recipe));
})

console.log(recipeList.value);
</script>

<template>
</template>

<style scoped>
</style>
