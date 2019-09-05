<template>
     <div class="timer">
        <h3>Doctor Tracker</h3>

        <button id="settings">
            <img src="src/assets/cog.svg" alt="settings">
        </button>

        <div id="timer">
            <div id="minutes" class="inline">{{ minutes }}</div>
            <div id="sep" class="inline">:</div>
            <div id="seconds" class="inline">{{ seconds }}</div>
        </div>

        <div id="buttons">
            <button id="start" @click="start_timer">
                <img src="src/assets/baseline-play_arrow-24px.svg" alt="start">
            </button>
            <button id="stop" @click="stop_timer">
                <img src="src/assets/baseline-pause-24px.svg" alt="pause">
            </button>
            <button id="reset" @click="reset_timer">
                <img src="src/assets/baseline-replay-24px.svg" alt="reset">
            </button>
        </div>
        <router-view/>
    </div>
</template>

<script>
export default {
    name: "app",

    data: function() {
        return {
            timer: null,
            remaining: 45 * 60 * 1000, // in milliseconds
            reset: false
        };
    },

    methods: {
        start_timer: function() {
            this.start = Date.now();
            this.timer = setInterval(() => this.countdown(), 100);
            this.reset = true;
        },
        stop_timer: function() {
            clearInterval(this.timer);
            this.timer = null;
            this.reset = true;
        },
        reset_timer: function() {
            this.remaining = 45 * 60 * 1000;
            clearInterval(this.timer);
            this.timer = null;
            this.reset = false;
        },
        pad: function(time) {
            return (time < 10 ? "0" : "") + time;
        },
        countdown: function() {
            this.delta = Date.now() - this.start; // milliseconds since start
            this.remaining = Math.max(0, this.remaining - this.delta);
            this.start = Date.now(); // update time
            if (this.remaining <= 0) {
                this.stop_timer();
                this.remaining = 0;
                // notification
                new Notification("doctor-tracker", {
                    body: "Timer Done"
                });
            }
        }
    },

    computed: {
        minutes: function() {
            const minutes = Math.floor(this.remaining / 1000 / 60);
            return this.pad(minutes);
        },
        seconds: function() {
            const seconds = Math.round(
                this.remaining / 1000 - this.minutes * 60
            );
            return this.pad(seconds);
        }
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
h3 {
    margin-top: 0;
    margin-bottom: 5px;
}
#settings {
    position: absolute;
    top: 1px;
    right: 1px;
}
.inline {
    font-size: 20px;
    display: inline-block;
    /* margin-bottom: 40px; */
}

#buttons {
    text-align: center;
    margin-right: 10px;
}
button {
    width: 30px;
    height: 30px;
    background: none;
    border: none;
    color: inherit;
    margin-left: 2px;
    margin-right: 2px;
    font: inherit;
    outline: inherit;
}
button:active {
    transform: translateY(2px);
}

#timer {
    color: #1abc9c;
    font-size: 20;
    font-weight: 500;
}

.digit {
    /* color: #ecf0f1; */
    text-align: center;
}
</style>
