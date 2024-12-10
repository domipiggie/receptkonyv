<script setup>
import { defineProps,defineEmits, ref } from 'vue';
import Recipe from '../classes/Recipe';

const props = defineProps({
    receptlist:Recipe
});
const emits = defineEmits(['backToMainPage']);

</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-3">
                <form>
                    <div class="form-row">
                        <div class="col">
                        <input type="text" class="form-control" placeholder="Név">
                        </div>
                        <div class="col">
                        <input type="number" class="form-control" placeholder="Elkészítési idő">
                        </div>
                        <div class="form-group col">
                            <select id="newrecipedifficulty" class="form-control">
                                <option selected>Könnyű</option>
                                <option>Közepes</option>
                                <option>Nehéz</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <textarea class="form-control" id="newrecipedescription" rows="3" placeholder="Leírás...."></textarea>
                        </div>
                        <div class="form-group">
                            <input type="file" class="form-control-file" id="newrecipefile" value="Recept kép">
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
    
<style scoped>
input, select, textarea{
    margin: 10px;
}
</style>