import React from "react";
import axios from 'axios';
import './App.css';

class App extends React.Component{
    state = {id:''}
    state = {advice:''}
    componentDidMount(){
        this.fetchAdvice() 
       } 

       fetchAdvice =() => {
        axios.get('https://api.adviceslip.com/advice')
        .then((response) => {
            const { id } = response.data.slip;
            const { advice } = response.data.slip;
            this.setState({id:id});
            this.setState({advice: advice});
            console.log(response)
        }
        ) 
        .catch(
            (error) => {
                console.log(error);
            });
        
       }
    
 render(){
    const { id } = this.state;
    const { advice } = this.state;
        return(
            <div className="app">
                <div className="card">
                    <h1 className="heading">{id} - 
                    {advice}</h1>
                    <button className="button" onClick={this.fetchAdvice}>
                        <span>Give Me Advice</span>
                    </button>
                </div>
            </div>
        )
    }
}
export default App;