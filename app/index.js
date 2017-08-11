var React = require('react');
var ReactDOM = require('react-dom');

require('./index.css');


//State, Life cycle event, UI
//My First Component

class App extends React.Component {
    render() {
        return (
            <div>Hello React Training!!</div>          //React.createElement("div", null, "Hello World!");
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("app")
);