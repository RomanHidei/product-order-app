import { Component } from 'react';
import Carts from './Carts'


export default class Bucket extends Component {
    constructor() {
        super();
        this.state = {
            Carts: [], 
        }
        onIncrease() {
            this.setState ((state) => {
                Carts: this.state.Carts.push({

                })
            })
        }
    }
    render() {
        return() => {
           <Carts carts= {this.state.Carts} />
        }
  
    }
}