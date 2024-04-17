const { createApp } = Vue;


const app = createApp({
    data() {
        return {
            bgc:"focusColor",
            bgcBtn:"bgcBtnFocus",
            isHovered:false,

            workTime: 25,  
            breakTime: 5,  
            tempWorkTime: 25,
            tempBreakTime: 5,

            secondsLeft: 0,
            timerRunning: false,
            onBreak: false,

            settings:false,

            intervalId: null,


        };
    },
    mounted(){
        this.secondsLeft = this.workTime * 60;
    },
    computed: {
        formattedTime() {
            let minutes = Math.floor(this.secondsLeft / 60);
            let seconds = this.secondsLeft % 60;
            return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }
    },
    methods: {
        startTimer() {
            
            if (this.bgc === "focusColor"){
                this.bgcBtn = "bgcBtnFocus";
                this.bgc = "focusColor";
            } else{
                this.bgc = "breakColor";
                this.bgcBtn = "bgcBtnBreak";
            };

            if (!this.timerRunning) {
                if (this.secondsLeft === 0) {
                    this.secondsLeft = this.onBreak ? this.breakTime * 60 : this.workTime * 60;
                }
                this.timerRunning = true;
                this.countDown();
            }
        },
        countDown() {
            clearInterval(this.intervalId); 
            this.intervalId = setInterval(() => {
                if (this.secondsLeft > 0) {
                    this.secondsLeft--;
                } else {
                    clearInterval(this.intervalId);
                    if (!this.onBreak) {
                        alert("You've had a tomato!");
                        this.startBreak();
                    } else {
                        alert("Keep Going!");
                        this.startTimer();
                    }
                }
            }, 1000);
        },
        startBreak() {
            this.bgc = "breakColor";
            this.bgcBtn = "bgcBtnBreak";
            this.onBreak = true;
            this.secondsLeft = this.breakTime * 60;
            this.timerRunning = true;
            this.countDown();
        },
        stopTimer() {
            this.bgc = "stopColor";
            this.bgcBtn = "bgcBtnStop";


            this.timerRunning = false;
            clearInterval(this.intervalId); 
        },
        toggle(){
            this.settings = !this.settings;
        },
        settingTime(){
            this.workTime = this.tempWorkTime;
            this.breakTime = this.tempBreakTime;
            this.settings = false;
            clearInterval(this.intervalId); 
            this.secondsLeft = this.onBreak ? this.breakTime * 60 : this.workTime * 60;
            this.timerRunning = false; 
        },
        skipCurrentPhase() {
            this.stopTimer();
            if (!this.onBreak) {
                
                this.onBreak = true;
                this.secondsLeft = this.breakTime * 60;
                this.bgc = "breakColor";
                this.bgcBtn = "bgcBtnBreak";

            } else {
                this.bgc = "focusColor";
                this.bgcBtn = "bgcBtnFocus";

    
                this.onBreak = false;
                this.secondsLeft = this.workTime * 60;
            }
        }
    }
}).mount('#app');