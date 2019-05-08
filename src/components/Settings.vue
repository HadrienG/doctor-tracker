<template>
    <div class="settings">
        <button id="settings" @click="show">
            <img src="../assets/cog.svg" alt="settings">
        </button>
    </div>
</template>

<script>
export default {
    name: "Settings",

    methods: {
        show: function() {
            // not implemented
        }
    }
};
</script>

<style scoped>
#settings {
    position: absolute;
    top: 1px;
    right: 1px;
}
button {
    width: 30px;
    height: 30px;
    background: none;
    border: none;
    margin-left: 2px;
    margin-right: 2px;
    outline: inherit;
}
</style>
