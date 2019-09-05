<template>
    <div>
        <button id="settings">
            <img src="./assets/cog.svg" alt="settings">
        </button>
        <router-view/>
    </div>
</template>

<script>
export default {
    name: "app"
};
</script>

<style>
#app {
}
</style>
