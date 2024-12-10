<script setup>
import { defineProps, defineEmits } from 'vue';
import Recipe from '../classes/Recipe';

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
    <div v-for="recept in recept" class="col-4 cards">
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" :src="getImgUrl(recept.img)">
            <div class="card-body">
                <h5 class="card-title">{{ recept.name }}</h5>
                <p class="card-text">Elkészítési idő: {{ recept.prepTime }} perc</p>
                <div>
                    <p class="card-text d1" v-if="recept.difficulty == 0">{{ difficultyList[0] }}</p>
                    <p class="card-text d2" v-if="recept.difficulty == 1">{{ difficultyList[1] }}</p>
                    <p class="card-text d3" v-if="recept.difficulty == 2">{{ difficultyList[2] }}</p>
                </div>
                <a href="#" class="btn btn-primary" @click.prevent="showDetails(recept.id)">Részletek</a>
            </div>
        </div>
    </div>
</template>

<style scoped>
.cards {
    display: flex;
}

.card-body a {
    display: inline-block;
}

.d1 {
    background-color: #00ff00;
    border-radius: 7px;
    padding: 2px 4px;
    display: inline;
}

.d2 {
    background-color: #ffff00;
    display: inline;
    border-radius: 7px;
    padding: 2px 4px;
}

.d3 {
    background-color: #ff0000;
    display: inline;
    border-radius: 7px;
    padding: 2px 4px;
}
.btn{
    margin-top: 20px;
}
</style>