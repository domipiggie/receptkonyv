<script setup>
import {recipes} from './data/recipes';
import Recipe from './classes/Recipe';
import Navbar from './components/Navbar.vue';
import Card from './components/Card.vue';
import Search from './components/Search.vue';
import NewRecipe from './components/NewRecipe.vue';

import { ref } from 'vue'

var recipeList = ref([]);
recipes.forEach((recipe)=>{
    recipeList.value.push(new Recipe(recipe));
})

var filteredRecipes = ref(recipeList.value);

var prevSearchOptions = null;
const search = (options) => {
    prevSearchOptions = options;
    filteredRecipes.value = [];

    if (options.txt.trim().length < 3){
        filter("", options.difficulty);
        order(options.sort);
        console.log(filteredRecipes.value)
        return;
    }

    filter(options.txt, options.difficulty);
    order(options.sort);
}

const filter = (txt, difficulty) => {
    recipeList.value.forEach((recipe) => {
        if (recipe.name.toLowerCase().trim().includes(txt.toLowerCase().trim())){
            if (recipe.difficulty == difficulty || difficulty == "-1"){
                filteredRecipes.value.push(recipe);
            }
        }
    })
}

const order = (by) => {
    filteredRecipes.value = filteredRecipes.value.sort((a,b) => {
        if (by == "0"){
            return a.prepTime - b.prepTime;
        } else {
            return a.name.localeCompare(b.name);
        }
    })
}

const addRecipe = (data) => {
    data.id = recipeList.value.length;
    recipeList.value.push(new Recipe(data));

    if (prevSearchOptions != null){
        search(prevSearchOptions);
    }
}
</script>

<template>
    <header>

    </header>
    <main>
        <section>
            <Navbar />
        </section>
        <section>
            <Search @search="search" />
        </section>
        <section>
            <Card :recept="filteredRecipes"/>
        </section>
        <section>
            <NewRecipe @addRecipe="addRecipe"/>
        </section>
    </main>
    <footer>

    </footer>
</template>

<style scoped>
</style>