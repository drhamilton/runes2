import React from 'react';
import request from 'superagent';

var MainView = React.createClass({
    getInitialState: function() {
        return {
            name: '',
            id: ''
        };
    },
    handleSubmit: function(e) {
        e.preventDefault();

        let url = 'http://localhost:3000/search/' + this.state.name;

        request
          .get(url)
          .end(this.setId);
    },
    setId: function(err, res){
        console.log('called');
        let text = JSON.parse(res.text);
        let id = text.id;

        this.setState({
            id: id
        });

        console.log(this.state);
    },
    onChange: function(e) {
        this.setState({
            name: e.target.value
        })
    },
    render() {
        return (
            <div>
                <h1>Welcome to Rune App {this.state.name}!</h1>
                <h2>Your ID: {this.state.id}</h2>
                <p>Please enter your summoner name below</p>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.onChange} value={this.state.name} />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
});

export default MainView;
