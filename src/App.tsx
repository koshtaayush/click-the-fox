import React from 'react'
import './App.css'

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import './App.css'

import Welcome from './screens/Welcome'

//Lazy loaded the paths to reduce the bundle size and only fetch if required
//Will optimize app performance
const Play = React.lazy(() => import('./screens/Play'))
const Score = React.lazy(() => import('./screens/Score'))

function App() {
    return (
        <React.Suspense fallback={'Loading...'}>
            <Router>
                <Switch>
                    <Route exact path="/" component={Welcome} />
                    <Route exact path="/play" component={Play} />
                    <Route exact path="/score" component={Score} />
                </Switch>
            </Router>
        </React.Suspense>
    )
}

export default App
