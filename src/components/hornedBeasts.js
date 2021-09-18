import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import imageCard from 'react-bootstrap/imageCard';
import SubmitButton from 'react-bootstrap/SubmitButton';

class HornedBeasts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            NumberOfHornes: 0
        }
    }
    inceaseNumberOfHorns = () => {
        this.setState({
            numOfHornes: this.state.NumberOfHornes + 1
        })
    }

    showResult = () => {
        this.props.showAllResults(this.props.title);
    }
    render() {
        return ( <
            div >
            <
            imageCard style = {
                { width: '18rem' } } >
            <
            imageCard.Img className = 'cartImg'
            variant = "top"
            src = { this.props.image_url }
            alt = { this.props.keyword }
            /> <
            imageCard.Body >
            <
            imageCard.Title > { this.props.title } < /imageCard.Title> <
            imageCard.Text > { this.props.description } <
            br / >
            Number Of Vote { this.state.NumberOfHornes }❤ <
            /imageCard.Text> <
            SubmitButton onClick = { this.inceaseNumberOfHorns }
            variant = "primary" > Vote < /SubmitButton> <
            /imageCard.Body> <
            /imageCard> <
            /div>
        )
    }
}
export default HornedBeasts;