import React from 'react';
import classes from './BlogCard.module.css';
import { showsmess } from './Utils';
const BlogCard = (props) => {
    showsmess(props);
    return ( <
        div className = { classes.NewBlogCard } >
        <
        h3 > { props.title } < /h3> <
        p > { props.text } < /p>  <
        p > { props.id } < /p>< /
        div >
    )
}
export default BlogCard;