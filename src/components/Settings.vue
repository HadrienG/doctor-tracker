<template>
    <div>
    <router-link to="/">
            <button id="back">
                <img src="../assets/arrow-left.svg" alt="settings">
            </button>
    </router-link>
    <button id="q" @click="quit">
        <p>Quit app</p>
    </button>
    </div>
</template>

<script>
// import { remote } from 'electron';
export default {

    name: "Settings",

    methods: {
        quit: function() {
            this.$electron.remote.app.quit()
            // remote.app.quit();
        }
    }
};
</script>

<style lang="css">
#back {
    position: absolute;
    left: 1px;
    right: 1px;
    top: 1px;
}
</style>