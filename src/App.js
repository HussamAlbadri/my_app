import logo from './logo.svg';
import './App.css';
import data from './data.json';
import React from 'react';
import header from './components/header';
import main from './components/main';
import footer from './components/Footer';
import SelectedBeast from './components/SelectBeast';
import Form from 'react-bootstrap/Form';


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: data,
            show: false,
            clickedData: {},
            numberOfHorns: 0,
            sendedBeasts: data
        }
    }

    showHandle = (title) => {
        let clickedData = data.find(value => {
            if (value.title === title) {
                return value;
            }
        })
        this.setState({
            show: true,
            clickedData: clickedData
        })
    }
    closeHandle = () => {
        this.setState({
            show: false
        })
    }
    arrFilter = (number) => {
        let array = data.filter(index => {
            if (number === 0) {
                return index;
            } else {
                if (index.numberOfHorns === number) {
                    return true;
                } else {
                    return false;
                }
            }

        });
        return array;
    }

    eventHandler = async(event) => {
      event.reventDefault();
      await this.setState({
        numberOfHorns: event.target.value,
        sendedBeasts: this.arrFilter(Number(event.target.value))
      });
      console.log(this.state.sendedBeasts);
    };

    render() {
      return(
        <>
        <header/>
        <Form.Select name="hor" aria-label="Default select example" onChange={this.eventhandler}>
          <option>Open this select menu</option>
          <option value="0">all</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="100">wow...</option>
        </Form.Select>

        <main data = {this.state.data} showHandle = {this.showHandle} data = {this.state.sendedBeasts} />
        <SelectedBeast clickedData = {this.state.clickedData} show = {this.state.show} closeHandle = {this.closeHandle} />
        <footer/>
      </>
    )  
    }
}

export default App;