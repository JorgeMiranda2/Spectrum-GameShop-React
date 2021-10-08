import React from 'react';


class SubmitButtonUserPage extends React.Component{

  render(){ 
  return (
        <div className="SubmitButtonUserPage">
            
          <button
            className ='btn'
            disabled={this.props.disabled}
            onClick = { () => this.props.onClick() }
          >

            {this.props.text}

          </button>

        </div>
  );

  }
  
}
export default SubmitButtonUserPage;