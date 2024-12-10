<script setup>
import { defineProps,defineEmits } from 'vue';
import Recipe from '../classes/Recipe';

const props = defineProps({
    recept:Recipe
});
const emits = defineEmits(['showDetails']);

const difficultyList = ['Könnyű', 'Közepes', 'Nehéz'];

const showDetails = (id) => {
    emits('showDetails',id);
}

const getImgUrl = (img) => {
    return new URL(img, import.meta.url.replace('components','assets')).href;
}
</script>

<template>
    <div v-for="recept in recept">
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" :src="getImgUrl(recept.img)">
            <div class="card-body">
                <h5 class="card-title">{{ recept.name }}</h5>
                <p class="card-text">Elkészítési idő: {{ recept.prepTime }} perc</p>
                <p class="card-text" v-if="recept.difficulty == 0">{{ difficultyList[0] }}</p>
                <p class="card-text" v-if="recept.difficulty == 1">{{ difficultyList[1] }}</p>
                <p class="card-text" v-if="recept.difficulty == 2">{{ difficultyList[2] }}</p>
                <a href="#" class="btn btn-primary" @click.prevent="showDetails(recept.id)">Részletek</a>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>
