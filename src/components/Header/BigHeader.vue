<template>
    <div class="header-background">
        <h1 class="text-white">
            Header
        </h1>
    </div>
</template>

<script>
export default {
    name: 'BigHeader'
}
</script>

<style scoped>
.header-background{
    background: url('@/assets/images/cover.jpg');
    background-attachment: fixed;
    background-size: cover;
    background-blend-mode:luminosity;
    height: 100vh;
    width: 100vw;
}
</style>