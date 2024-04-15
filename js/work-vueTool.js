const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            min: '00',
            sec: '00',
            cs: '00',
            btnText: "Start",
            btnClickStyle: "btnStartStyle",
            records: [],
            timer: null
        };
    },
    methods: {
        BtnCount() {
            if (this.btnText === "Start") {
                this.startTimer();
                this.btnText = "Split";
                this.btnClickStyle = "btnSplitStyle";
            } else if (this.btnText === "Split") {
                this.recordTime();
            }
        },
        startTimer() {
            this.timer = setInterval(() => {
                this.cs = parseInt(this.cs) ++;
                if (this.cs < 10) this.cs = '0' + this.cs;
                if (this.cs == 100) {
                    this.cs = '00';
                    this.sec = parseInt(this.sec) ++;
                    if (this.sec < 10) this.sec = '0' + this.sec;
                }
                if (this.sec == 60) {
                    this.sec = '00';
                    this.min = parseInt(this.min) ++;
                    if (this.min < 10) this.min = '0' + this.min;
                }
            }, 10);
        },
        recordTime() {
            this.records.push({
                min: this.min,
                sec: this.sec,
                cs: this.cs
            });
        },
        stopTimer() {
            clearInterval(this.timer);
            this.btnText = "Start";
            this.btnClickStyle = "btnStartStyle";
        }
    }
});

app.mount('#app');
