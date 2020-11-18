import React, { Component } from 'react';
import ReactQuill from 'react-quill';


class Index extends Component {
    constructor(props){
        super(props);
        this.state={
            content:""
        }
    }

    editContent=(e)=>{
        this.setState({
            content:e
        })
    }


    render() {
        const {content}=this.state;
        console.log(content)
        return (
            <div>
                <h1>详情页</h1>
                
                <ReactQuill theme="snow" value={content} onChange={(e)=>this.editContent(e)}/>
            </div>
        );
    }
}

export default Index;