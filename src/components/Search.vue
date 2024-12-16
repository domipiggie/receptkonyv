<script setup>
import { ref,watchEffect,defineEmits, watch } from 'vue';
import Recipe from '../classes/Recipe';

const emits = defineEmits(['search']);
var search = ref("");
var difficulty = ref("-1");
var sort = ref("0")

watchEffect(()=>{
    emits('search',{txt:search.value, difficulty:difficulty.value, sort:sort.value});
    console.log("ok")
})
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <form>
                    <div class="form-group col-6 fe">
                        <input type="search" class="form-control" id="searchRecipe" placeholder="Keress receptet...." v-model="search">
                    </div>
                    <div class="form-group col-3 fe">
                        <select id="inputState" class="form-control" v-model="difficulty">
                            <option selected value="-1">Minden nehézség</option>
                            <option value="0">Könnyű</option>
                            <option value="1">Közepes</option>
                            <option value="2">Nehéz</option>
                        </select>
                    </div>
                    <div class="form-group col-3 fe">
                        <select id="inputState" class="form-control" v-model="sort">
                            <option value="0" selected>Elkészítési idő szerint</option>
                            <option value="1">ABC szerint</option>
                        </select>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
    form{
        display: flex;
        margin-right: 60px;
    }
    .fe{
        margin: 10px 10px;
    }
</style>