<script setup>
import { defineProps,defineEmits } from 'vue';
import Recipe from '../classes/Recipe';

const props = defineProps({
    recept:Recipe
});
const emits = defineEmits(['backToMainPage']);
</script>

<template>
</template>

<style scoped>
</style>
