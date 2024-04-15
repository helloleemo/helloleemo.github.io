const { createApp } = Vue;

const app = createApp({
    data(){
        return{
            min:"25",
            sec:"00",
            
            btnStyle:"btnStartStyle btn",
            btnText:"Start",
            
            timer:null,
            secondsLeft:1500,
            breakSecondLeft:300,
            period:25,
            break:5,

            tmts:[],

            showPopup: false,

            inputWorkTime: 25,
            inputBreakTime: 5,


        }
    },
    methods:{
        btnTimer(){
            if (this.btnText == "Start"){
                this.startTimer();
                this.btnText = "Pause";
                this.btnStyle = "btnPauseStyle btn";
                this.skip = false;
            } else if (this.btnText ==="Pause"){
                this.pauseTimer();
                this.btnText = "Start";
                this.btnStyle = "btnStartStyle btn";
                this.skip = ture;

            }
        },
        startTimer(){
            this.secondsLeft = this.period * 60;
            this.timer = setInterval(()=>{
                if (this.secondsLeft > 0) {
                    this.secondsLeft--;
                    this.updateTime();
                } else {
                    alert("You've had Tomato!");
                    this.tmts.push({icon:"fa-circle"})
                    this.breakTimer();
                }
            },1000);
        },
        breakTimer() {
            this.breakSecondLeft = this.break * 60;
            clearInterval(this.timer);
            this.timer = setInterval(()=>{
                if (this.breakSecondLeft > 0) {
                    this.secondsLeft--;
                    this.updateTime();

                } else {
                    alert("Keep going!");
                    this.startTimer();
                }
            },1000)            
        },
        pauseTimer(){
            clearInterval(this.timer); 
        },
        skipTimer() {
            clearInterval(this.timer);
            if (this.btnText === "Start" && this.skip) {
                this.startTimer();
            } else {
                this.breakTimer();
            }
            this.skip = false;
        },

        updateTime() {
            if (this.btnText === "Pause") { // In a work session
                this.min = Math.floor(this.secondsLeft / 60);
                this.sec = this.secondsLeft % 60;
            } else { // In a break session
                this.min = Math.floor(this.breakSecondLeft / 60);
                this.sec = this.breakSecondLeft % 60;
            }
            this.min = this.min < 10 ? `0${this.min}` : this.min;
            this.sec = this.sec < 10 ? `0${this.sec}` : this.sec;
        },
        applyNewTimes() {
            this.period = this.inputWorkTime;
            this.break = this.inputBreakTime;
            this.startTimer();
        },
        togglePopup() {
        this.showPopup = !this.showPopup;
        },
        closePopup() {
        this.showPopup = false;
    },



    }
})
app.mount("#app")