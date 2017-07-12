import { h } from 'preact'
import { Link } from 'preact-router'
import { css } from 'glamor'
import { capitalize, headerHeight } from './util'

const fullHeight = css({ height: '100%' })

const style = {
    wrapper: css({
        position: 'fixed'
        , width: '100%'
        , top: 0
        , height: headerHeight
        , paddingLeft: 16
    })
    , links: css(fullHeight, {
        display: 'flex'
        , alignItems: 'center'
        , margin: '0 auto'
        , overflow: 'hidden'
        , maxWidth: 1800
        , padding: 0
    })
    , listItem: css(fullHeight, {
        listStyleType: 'none'
    })
    , link: css(fullHeight, {
        color: 'black'
        , margin: '0 .6rem'
        , position: 'relative'
        , display: 'flex'
        , flexDirection: 'column'
        , justifyContent: 'center'
        , textDecoration: 'none'
    })
}


// Not a component, just maps a string to jsx.
const ViewLink = (viewName) => (
    <li {...style.listItem}>
        <Link href={`/${viewName}`} {...style.link}>
            {capitalize(viewName)}
        </Link>
    </li>
)

export default (props) => (
    <nav {...style.wrapper}>
        <ul {...style.links}>
            {[ 'home', 'blog' ].map(ViewLink)}
        </ul>
    </nav>
)
