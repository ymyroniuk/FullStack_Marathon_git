"use strict"
class Timer {
    time;
    constructor(title, delay, stopCount) {
        this.title = title;
        this.delay = delay;
        this.stopCount = stopCount;
        this.start()
    }
    start() {
        console.log(`Timer ${this.time} started (delay = ${this.delay}, Stop Count = ${this.stopCount})`)
        this.time = setInterval(() => {
            this.tick()
        }, this.delay)
    }
    tick() {
        this.stopCount -- ;
        console.log(`Timer ${this.time} Tick! | cyclees left ${this.stopCount}`);
        if(this.stopCount == 0) {
        this.stop()
    }
};
    stop() {
        clearInterval(this.time);
            console.log(`Timer ${this.title} stopped`)
    }
     }
function runTimer(id, delay, counter) {
    new Timer(id, delay, counter);
}


runTimer("Bleep", 1000, 5);