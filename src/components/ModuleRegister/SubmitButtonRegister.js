import React from 'react';


class SubmitButtonRegister extends React.Component{

  render(){ 
  return (
        <div className="SubmitButtonRegister">
          <button
            className ='btn-re'
            disabled={this.props.disabled}
            onClick = { () => this.props.onClick() }
          >
            {this.props.text}
          </button>
        </div>
  );

  }
  
}
export default SubmitButtonRegister;
