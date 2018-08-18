import React, {Component} from "react"

class Conversation extends Component {
  constructor(){
    super();
    this.state = {
      statements : [['yo', 1], ['yo', 2], ['yo', 3]]
    }
  }

  renderStatements(statement){
    return(
      <div>asd
        <div>{statement[0]}: key</div><span>{statement[1]}: value</span>  
      </div>
    );
  }
  render(){

    return(
      <div>asd
      {this.state.statements.map(this.renderStatements)}
      </div>
    );
  }
}

export default Conversation;