import React from 'react';


class InputFieldRegister extends React.Component{

  render(){ 
  return (
        <div className="inputfield">
            
            <input
              className = 'input-re'
              type = {this.props.type}
              placeholder = {this.props.placeholder}
              value = {this.props.value}
              onChange = { (e) => this.props.onChange(e.target.value) }
            
            />

        </div>
      );

  }
  
}
export default InputFieldRegister;
