import React, { Component } from 'react'

export default class UrlForm extends Component {

    state = {
        URL: ''
    }

    handleChange = (event) => {
        this.setState({
            URL: event.target.value
        })

        console.log(this.state)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submited")
    }

    render() {
        return (
            <div className='UrlForm'>
                <form onSubmit={this.handleSubmit}>
                    <label>Input URL</label>
                    <input type='text' onChange={this.handleChange}></input>
                    <input type='submit'></input>
                </form>
                
            </div>
        )
    }
}