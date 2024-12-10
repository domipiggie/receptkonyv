<script setup>
import { defineProps,defineEmits } from 'vue';
import Recipe from '../classes/Recipe';

const props = defineProps({
    recept:Recipe
});
const emits = defineEmits(['showDetails']);

const difficultyList = ['Könnyű', 'Közepes', 'Nehéz'];

</script>

<template>
    <div v-for="recept in recept">
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="">
            <div class="card-body">
                <h5 class="card-title">{{ recept.name }}</h5>
                <p class="card-text">Elkészítési idő: {{ recept.prepTime }} perc</p>
                <p class="card-text" v-if="recept.difficulty == 0">{{ difficultyList[0] }}</p>
                <p class="card-text" v-if="recept.difficulty == 1">{{ difficultyList[1] }}</p>
                <p class="card-text" v-if="recept.difficulty == 2">{{ difficultyList[2] }}</p>
                <a href="#" class="btn btn-primary">Részletek</a>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>
