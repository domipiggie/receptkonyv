<script setup>
import {recipes} from './data/recipes';
import Recipe from './classes/Recipe';
import Navbar from './components/Navbar.vue';
import Card from './components/Card.vue';

import { ref } from 'vue'

var recipeList = ref([]);

recipes.forEach((recipe)=>{
    recipeList.value.push(new Recipe(recipe));
})

console.log(recipeList.value);
</script>

<template>
    <header>

    </header>
    <main>
        <section>
            <Navbar />
        </section>
        <section>
            <Card :recept="recept"/>
        </section>
    </main>
    <footer>

    </footer>
</template>

<style scoped>
</style>