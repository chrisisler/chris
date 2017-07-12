import { h, render } from 'preact'
import { Router } from 'preact-router'
import { css } from 'glamor'
import './normalize.css'
import Header from './Header'
import HomeView from './views/HomeView'
import BlogView from './views/BlogView'
import { headerHeight } from './util'

const WithHeaderCSS = css({
    marginTop: headerHeight
    , height: `calc(100vh - ${headerHeight}px)`
})

const WithHeader = ({ View }) => (
    <div>
        <Header />
        <View {...WithHeaderCSS} />
    </div>
)

const AppCSS = css({
    fontFamily: 'sans-serif'
    , fontWeight: 300
    , fontSize: 18
    , letterSpacing: 1
    , height: '100%'
    , width: '100%'
    , backgroundColor: 'white'
})

const App = () => (
    <main {...AppCSS}>
        <Router>
            <WithHeader path='/' View={HomeView} />
            <WithHeader path='/blog' default View={BlogView} />
        </Router>
    </main>
)

render(<App />, document.body)
