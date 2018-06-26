<template>
    <div>
        <div id="timer">
            <div id="minutes" class="inline"> {{ minutes }} </div>
            <div id="sep" class="inline">:</div>
            <div id="seconds" class="inline"> {{ seconds }} </div>
        </div>

        <div id="buttons">
            <button id="start" @click="start_timer">
                <img src="../assets/play.svg" alt="start">
            </button>
            <button id="stop" @click="stop_timer">
                <img src="../assets/pause.svg" alt="stop">
            </button>
            <button id="reset" @click="reset_timer">
                <img src="../assets/redo.svg" alt="reset">
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Timer',

    data: function() {
        return {
            timer: null,
            total_time: (45 * 60),
            reset: false
        }
    },

    methods: {
        start_timer: function() {
            this.timer = setInterval(() => this.countdown(), 1000)
            this.reset = true
        },
        stop_timer: function () {
            clearInterval(this.timer)
            this.timer = null
            this.reset = true
        },
        reset_timer: function () {
            this.total_time = (45 * 60)
            clearInterval(this.timer)
            this.timer = null
            this.reset = false
        },
        pad: function (time) {
            return (time < 10 ? '0' : '') + time;
        },
        countdown: function () {
            this.total_time --
        }
    },

    computed: {
        minutes: function() {
            const minutes = Math.floor(this.total_time / 60)
            return this.pad(minutes);
        },
        seconds: function() {
            const seconds = this.total_time - (this.minutes * 60)
            return this.pad(seconds);
        }
    }
}

</script>

<style lang="css">
.inline {
  font-size: 20px;
  display: inline-block;
  /* margin-bottom: 40px; */
}

button {
    width: 30px;
    height: 30px;
    background: none;
    border: none;
    color: inherit;
    padding: 5px;
    font: inherit;
    outline: inherit;

}

.text {
    /* color: #1abc9c; */
    font-size: 20px;
    /* font-weight: 40; */
    text-align: center;
}

.digit {
    /* color: #ecf0f1; */
    text-align: center;
}
</style>
