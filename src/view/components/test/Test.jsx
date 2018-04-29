import React, { Component } from 'react'
import TestControl from '../../../controller/TestControl'
import Books from './Books'
import {View} from '../../ea-react-dm/view'

@View(TestControl)
export default class Test extends Component{

    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.testSave()
        //this.props.queryBookTypes()
    }
    
    render(){
        let books = this.props.testmodel.get('books').toJS()
        return (
            <Books {...this.props} books ={books} />
        )
    }
}