/*eslint-disable no-eval */
import React, { Component } from "react";
import '../styles/styles.css'
class main extends Component {


  	
  	constructor(props) {
  	  super(props);
  	
  	  this.state = {
  	  	inputNumber: [],
  	  	operation: true,
  	  };
  	}

  	clickBtn = (val) => {

  		let a = this.state,
  			input = a.inputNumber,
  			lastInputData = input[input.length - 1],
  			inputLength = input.length,
  			that = this;

  		switch(val) {
  			case "*": case "/":  case "+": case "-":
  				if(typeof lastInputData === 'string' && lastInputData !== '.'){
  					input.splice(-1,1);
  					input.push(val);
  				}else{
  					if(typeof input[0] !== 'undefined'){
  						input.push(val);
  					}
  				}
				this.setState({
					inputNumber: input,
					operation: val
				})
  			break;

  			case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7: case 8: case 9: case '.':
  				if(this.state.operation){
  					input.push(val === "." ? val : parseFloat(val));
  				}else{
  					input = [];
  					input.push(val === "." ? val : parseFloat(val));
  				}
  				
  				this.setState({
  					inputNumber: input,
  					operation: true
  				});
  				
  			break;

  			case "=":
  				if(inputLength > 1){
	  				if(typeof lastInputData === 'string'){
	  					input.splice(-1,1);
	  				}

	  				let total =  eval("'"+eval(input.join(""))+"'")
	  				this.setState({
	  					inputNumber: [parseFloat(total)],
	  					operation: false
	  				})
  				}
  			break;

  			case "AC":
  				that.setState({
  					inputNumber: [],
  					operation: []
  				})
  			break;
  			default: return; 
  		}
  	}

  	render() {
  		const height = window.innerHeight,
  			btnHeight = {
  				height: (height-100) / 5
  			};
	    return (
			<div className="container">
					<div className="row">
						<input type="text" className="txtInput" placeholder="0" value={(this.state.inputNumber).join("")} disabled/>
					</div>
					<div className="row">
						<div className="btn-group">
							<button className="button" style={btnHeight} onClick={() => this.clickBtn(7)}>7</button>
							<button className="button" style={btnHeight} onClick={() => this.clickBtn(8)}>8</button>
							<button className="button" style={btnHeight} onClick={() => this.clickBtn(9)}>9</button>
							<button className="button operator" style={btnHeight} onClick={() => this.clickBtn("/")}>÷</button>
						</div>
						<div className="btn-group">
							<button className="button" style={btnHeight} onClick={() => this.clickBtn(6)}>6</button>
							<button className="button" style={btnHeight} onClick={() => this.clickBtn(5)}>5</button>
							<button className="button" style={btnHeight} onClick={() => this.clickBtn(4)}>4</button>
							<button className="button operator" style={btnHeight} onClick={() => this.clickBtn('*')}>*</button>
						</div>
						<div className="btn-group">
							<button className="button" style={btnHeight} onClick={() => this.clickBtn(3)}>3</button>
							<button className="button" style={btnHeight} onClick={() => this.clickBtn(2)}>2</button>
							<button className="button" style={btnHeight} onClick={() => this.clickBtn(1)}>1</button>
							<button className="button operator" style={btnHeight} onClick={() => this.clickBtn('-')}>-</button>
						</div>
						<div className="btn-group">
							<button className="button" style={btnHeight} onClick={() => this.clickBtn(0)}>0</button>
							<button className="button" style={btnHeight} onClick={() => this.clickBtn('.')}>.</button>
							<button className="button" style={btnHeight} onClick={() => this.clickBtn("=")}>=</button>
							<button className="button operator" style={btnHeight} onClick={() => this.clickBtn('+')}>+</button>
						</div>
						<div className="btn-group">
							<button className="button full-width" style={btnHeight} onClick={() => this.clickBtn("AC")}>RESET</button>
						</div>
					</div>
			</div>    	 
    	);
 	}
}

export default main;