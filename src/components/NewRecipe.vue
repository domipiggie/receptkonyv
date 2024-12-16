<script setup>
import { defineEmits, ref } from 'vue';
import Recipe from '../classes/Recipe';

const name = ref("");
const prepTime = ref("");
const difficulty = ref("0")
const description = ref("");
const newrecipeurl = ref("");

const emits = defineEmits(['addRecipe']);

const addRecipe = () => {
    if (name.value == "" || prepTime.value == "" || description.value == "" || difficulty.value == "" || newrecipeurl.value == ""){
        alert("Töltse ki az összes mezőt!");
        return;
    }
    if (Number(prepTime.value) == NaN){
        alert("Az elkészítési idő csak szám lehet!");
        return;
    }

    var data = {
        id: "",
        name: name.value,
        prepTime: Number(prepTime.value),
        difficulty: Number(difficulty.value),
        description: description.value,
        img: newrecipeurl.value
    }

    name.value = prepTime.value = difficulty.value = description.value = newrecipeurl.value = "";

    emits('addRecipe', data);
}
</script>

<template>
    <div class="modal fade" id="addRecipe" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Recept hozzáadása</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-row">
                            <div class="col">
                                <input type="text" class="form-control" placeholder="Név" v-model="name">
                            </div>
                            <div class="col">
                                <input type="number" class="form-control" placeholder="Elkészítési idő" v-model="prepTime">
                            </div>
                            <div class="form-group col">
                                <select id="newrecipedifficulty" class="form-control" v-model="difficulty">
                                    <option value="" selected>Kérem válasszon...</option>
                                    <option value="0">Könnyű</option>
                                    <option value="1">Közepes</option>
                                    <option value="2">Nehéz</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <textarea class="form-control" id="newrecipedescription" rows="3"
                                    placeholder="Leírás...." v-model="description"></textarea>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Kép link: (https://....)" v-model="newrecipeurl">
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">Bezárás</button>
                    <button type="button" class="btn btn-success" data-bs-dismiss="modal" @click="addRecipe">Hozzáadás</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
input,
select,
textarea {
    margin-top: 10px;
}
</style>