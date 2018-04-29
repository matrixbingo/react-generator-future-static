import React, { Component /*,PropTypes*/} from 'react'
import { Redirect, Router, Route, useRouterHistory } from 'react-router'
//import {View,page} from 'gfs-react-dm'
import {View,page} from '../ea-react-dm/index'
import { createHashHistory } from 'history'
import TestContainer from '../components/test/Test'
import TestControl from '@controller/TestControl'

@View(TestControl)
class Index extends Component {
    constructor(props) {
        super(props)
    }

    render(){
        return (
            <a  href="#test">跳转到测试页面</a>
        )
    }
}

class AppRouter extends Component {

    constructor(props) {
        super(props)
        this.history = useRouterHistory(createHashHistory)({ queryKey: false })
    }

    static defaultProps={

    }

    render() {
        return (
            <div>
                <Router history={this.history}>
                    <Route path="/index" component={Index} />
                    <Route path="/test" component={TestContainer} />
                    <Redirect from="/" to="/index" />
                </Router>
            </div>
        )
    }
}

page(AppRouter).render()