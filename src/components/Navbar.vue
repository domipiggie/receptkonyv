<script setup>
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand">Receptkönyv</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" href="#">Receptek</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Új receptek</a>
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
        background-color: rgb(250, 250, 250);
        margin-left: 20%;
        width: 100px;
    }
    
</style>