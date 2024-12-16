<script setup>
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <h3 class="navbar-brand">Receptkönyv</h3>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" aria-disabled="true">Receptek</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-bs-toggle="modal" data-bs-target='#addRecipe'>Új receptek</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Kedvencek</a>
            </li>
            </ul>
        </div>
    </nav>
</template>

<style scoped>
    nav a{
        cursor: pointer;
    }
    nav a, h3{
        background-color: rgb(250, 250, 250);
        margin-left: 20%;
        width: 100px;
    }
</style>