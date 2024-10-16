import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Component } from 'react';
import BlogItem from './BlogCard';
import { IsArray as isa } from './Utils';

class App extends Component {
    objs = [{
            id: 1,
            title: "Blog Title 1",
            text: "Hey you!"
        },
        {
            id: 2,
            title: "Blog Title 2",
            text: "I am fine"
        },
        {
            id: 3,
            title: "Blog Title 3",
            text: "How are you?"
        },

    ]
    state = {
        showBlogs: true
    }
    blogcards = isa(this.objs) ? [] : this.objs.map((item, pos) => {
        return ( <
            BlogItem key = { pos }
            title = { item.title }
            description = { item.text }
            id = { item.id }
            / >
            //  <
            // div className = 'BlogCard'
            // key = { item.id } >
            // <
            // h3 > { item.title } < /h3> <
            // p > { item.text } < /p>  < /
            // div >
        );
    })
    onHideBtnClick = () => {
            this.setState((PrevState, PropsState) => {
                return { showBlogs: !PrevState.showBlogs }
            });
            console.log(this.state.showBlogs);
        }
        // onShwBtnClick = () => {
        //     this.setState({ showBlogs: true });
        // }
    render() {
        console.log("Render Called");
        return ( <
            div className = "App" >
            <
            button onClick = { this.onHideBtnClick } > { this.state.showBlogs ? 'Hide List' : 'Show List' } < /button>  <br></br > { this.state.showBlogs ? this.blogcards : null } <
            /div> 
        );
    }
}

export default App;