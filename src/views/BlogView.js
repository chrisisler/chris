import { h } from 'preact'
import { Link } from 'preact-router'
import { css } from 'glamor'
import { titleCase } from '../util'

//not sure how the object format will be yet.
const mockBlogs = [
    {
        title: 'Why I didnt attend zeit day'
        , creationDate: '2017-5-11' //iso standard format
    }
]

const style = {
    links: css({
        display: 'flex'
        , flexDirection: 'column'
        , alignItems: 'flex-end' //right-align
        , padding: '12px 0 0 0'
    })
    , listItem: css({ listStyleType: 'none' })
    , link: css({
        textDecoration: 'none'
        , display: 'flex'
        , padding: '24px 36px 8px 0'
    })
}

const BlogTitle = ({ title }) => (
    <li {...style.listItem}>
        <Link {...style.link}>
            {titleCase(title)}
        </Link>
    </li>
)

export default (props) => (
    <div {...props}>
        <ul {...style.links}>
            {mockBlogs.map(BlogTitle)}
        </ul>
    </div>
)
