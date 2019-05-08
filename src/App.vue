<template>
    <div id="app">
        <Timer/>
        <Settings/>
    </div>
</template>

<script>
import Timer from "./components/Timer.vue";
import Settings from "./components/Settings.vue";

export default {
    name: "app",
    components: {
        Timer,
        Settings
    }
};
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 20px;
}
</style>
