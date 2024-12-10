<script setup>
import { defineProps, defineEmits } from 'vue';
import Recipe from '../classes/Recipe';

const emits = defineEmits(['search']);
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
                        <select id="inputState" class="form-control">
                            <option selected>Minden nehézség</option>
                            <option>Könnyű</option>
                            <option>Közepes</option>
                            <option>Nehéz</option>
                        </select>
                    </div>
                    <div class="form-group col-3 fe">
                        <select id="inputState" class="form-control">
                            <option selected>Elkészítési idő szerint</option>
                            <option>ABC szerint</option>
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
    }
    .fe{
        margin: 10px 10px;
    }
</style>