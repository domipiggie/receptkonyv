<script setup>
import { defineProps, defineEmits } from 'vue';
import Recipe from '../classes/Recipe';
import { recipes } from '../data/recipes';
import Details from './Details.vue';

const props = defineProps({
    recept: Recipe
});
const emits = defineEmits(['showDetails']);

const difficultyList = ['Könnyű', 'Közepes', 'Nehéz'];

const showDetails = (id) => {
    emits('showDetails', id);
}

const getImgUrl = (img) => {
    return new URL(img, import.meta.url.replace('components', 'assets')).href;
}

</script>

<template>
    <div class="container">
        <div class="row">
            <div v-for="recept in recept" class="col-4 cards">
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" :src="getImgUrl(recept.img)" width="300" height="200">
                    <div class="card-body">
                        <h5 class="card-title">{{ recept.name }}</h5>
                        <p class="card-text">Elkészítési idő: {{ recept.prepTime }} perc</p>
                        <div>
                            <p class="card-text d1" v-if="recept.difficulty == 0">{{ difficultyList[0] }}</p>
                            <p class="card-text d2" v-if="recept.difficulty == 1">{{ difficultyList[1] }}</p>
                            <p class="card-text d3" v-if="recept.difficulty == 2">{{ difficultyList[2] }}</p>
                        </div>
                    </div>
                    <div>
                        <a class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="'#' + recept.id">Részletek</a>
                    </div>
                </div>

                <Details :recept="recept"></Details>
            </div>
        </div>
    </div>
</template>

<style scoped>
.cards {
    display: flex;
    margin: 20px 0px;
}

.card img {
    object-fit: cover;
}

.card-body a {
    display: inline-block;
}

.d1 {
    background-color: #00ff00;
}

.d2 {
    background-color: #ffff00;
}

.d3 {
    background-color: #ff0000;
}

.d1, .d2, .d3{
    border-radius: 7px;
    padding: 2px 4px;
    display: inline;
}

.btn {
    margin: 0px 0px 20px 16px;
}
</style>