import React, { Component } from 'react';

class Timer extends Component {
    state = { 
        timeElapsed: 0,
        workingtime: 25,
        currentMinut: "25",
        currentSecond: "00",
        stop: 0
     }

    totalTime(work , rest) {
        return work + rest
    }

    componentDidMount() {
        this.interval = setInterval(this.elapsedTime.bind(this), 1000);
        this.interval = setInterval(this.minutclock.bind(this), 90);

        this.setState({ start: new Date() });
    }


    elapsedTime() {
        var timeElapsed = Math.floor((new Date() - this.state.start)/ 1000);
        this.setState({ timeElapsed: (timeElapsed + this.state.stop)  });

        if (this.state.elapsedTime >= this.state.workingtime * 60) {
            clearInterval(this.interval);
        }
    }

    minutclock = () => {
            var time = this.state.timeElapsed
            var minut = this.state.workingtime;
            var spendMinut =  Math.floor(time / 60);
            var spendSecond = 60 - (time - 60* spendMinut);
            if(spendSecond === 0 || spendSecond === 60){
                spendSecond = "0"
                }
            if(time > 0) {
                spendMinut = spendMinut +1
                }
            if(spendSecond < 10) {
                spendSecond = "0" + spendSecond;
                }
            if((minut - spendMinut) < 0  ) {
                this.setState({ currentMinut: "0"  });
                this.setState({ currentSecond: "00"  }); 
                } else{
                this.setState({ currentMinut: minut - spendMinut  });
                this.setState({ currentSecond: spendSecond  }); 
                    }
         
    }

    timer = () =>  {
        this.setState({ stop: 0  });
        this.setState({ start: new Date() });
        this.setState({ workingtime: 25  });
    }

    shortBreak = () => {
        this.setState({ stop: 0  });
        this.setState({ start: new Date() });
        this.setState({ workingtime: 10  });
    }

    longBreak = () =>  {
        this.setState({ stop: 0  });
        this.setState({ start: new Date() });
        this.setState({ workingtime: 55  });
    }

    start = () => {
        this.setState({ start: new Date()  });
        this.interval = setInterval(this.minutclock.bind(this), 1000);
        this.minutclock()   
    }

    stop = () => {
        this.setState({stop : this.state.timeElapsed });
        clearInterval(this.interval);
        return this.minutclock()
    }

    reset = () => {
        this.setState({ start: new Date() });
        this.setState({ stop: 0  });
    }

    render() { 
        return ( 
            <div>

                <div className="timer bg-dark">
                    <div className="container">
                        <h1 className="text-center text-secondary font-weight-bold display-3">Timer</h1>
                    </div>
                </div>

                <div className="break-time">
                    <div className="container">
                        <div className="btn-group d-flex justify-content-between align-items-center">
                            <button onClick={this.timer} className="btn btn-primary p-2 m-2 rounded">Timer</button>
                            <button onClick={this.shortBreak} className="btn btn-primary p-2 m-2 rounded">Short break</button>
                            <button onClick={this.longBreak} className="btn btn-primary p-2 m-2 rounded">Long break</button>
                        </div>
                    </div>
                </div>

                <div className="elapsed-time">
                    <div className="container display-1 font-weight-bold text-center mt-2 mb-3">
                        {this.state.currentMinut}:{this.state.currentSecond}
                    </div>
                </div>

                <div className="control-btn">
                    <div className="container d-flex justify-content-center align-items-center ">
                        <div className="btn-group">
                            <button onClick={this.start} className="btn rounded m-2 py-2 px-4 btn-success">Start</button>
                            <button onClick={this.stop} className="btn rounded m-2 py-2 px-4 btn-danger">Stop</button>
                            <button onClick={this.reset} type="reset" className="btn rounded m-2 py-2 px-4 btn-secondary">Reset</button>
                        </div>
                    </div>
                </div>
           </div>
         );
    }
}
 
export default Timer;