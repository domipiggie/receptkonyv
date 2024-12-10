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
    <div v-for="recept in recept">
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" :src="getImgUrl(recept.img)">
            <div class="card-body">
                <h5 class="card-title">{{ recept.name }}</h5>
                <p class="card-text">Elkészítési idő: {{ recept.prepTime }} perc</p>
                <p class="card-text" v-if="recept.difficulty == 0">{{ difficultyList[0] }}</p>
                <p class="card-text" v-if="recept.difficulty == 1">{{ difficultyList[1] }}</p>
                <p class="card-text" v-if="recept.difficulty == 2">{{ difficultyList[2] }}</p>
                <a href="#" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="'#'+recept.id">Részletek</a>
            </div>
        </div>

        <div class="modal fade" :id="recept.id" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel">{{ recept.name }}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        {{ recept.description }}
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Bezárás</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
