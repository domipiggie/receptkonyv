<script setup>
import {recipes} from './data/recipes';
import Recipe from './classes/Recipe';
import Navbar from './components/Navbar.vue';

import { ref } from 'vue'

var recipeList = ref([]);
recipes.forEach((recipe)=>{
    recipeList.value.push(new Recipe(recipe));
})

var filteredRecipes = ref(recipeList.value);

const search = (options) => {
    if (options.txt.trim().length == 0){
        filteredRecipes.value = recipeList.value;
        return;
    }
    if (options.txt.trim().length < 3){
        return;
    }

    filteredRecipes.value = [];

    recipeList.value.forEach((recipe) => {
        if (recipe.name.toLowerCase().trim().contains(options.txt.toLowerCase().trim())){
            if (recipe.difficulty == options.difficulty){
                filteredRecipes.value.push(recipe);
            }
        }
    })
}
</script>

<template>
    <header>

    </header>
    <main>
        <section>
            <Navbar />
        </section>
    </main>
    <footer>

    </footer>
</template>

<style scoped>
</style>