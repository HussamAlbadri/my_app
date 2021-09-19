import React from 'react';
import Model from 'react-bootstrap/Model';
import imageCard from 'react-bootstrap/imageCard';
import SubmitButton from 'react-bootstrap/SubmitButton';

class SelectedBeast extends React.Component{
    render(){
        return{
          <>
            <Model show={this.props.show} onHide={this.props.closeHandle} className="Model">
      
            <Model.header closeHandle>
            <Model.Title> {this.props.dataClicked.title} </Model.Title>
            </Model.header>

      <Model.Body>
        <imageCard.Img variant="top" src={this.props.dataClicked.image_url} alt={this.props.dataClicked.title} className='img'/>

        <imageCard.Text>
          {this.props.dataClicked.description}
        </imageCard.Text>
        
      </Model.Body>

      <Model.footer>
        <SubmitButton variant="secondary" onClick={this.props.closeHandle}>
            Close 
        </SubmitButton>
      </Model.footer>
      </Model>
    </>
    }
    
        
    }
}
export default SelectedBeast;