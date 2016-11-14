const React = require('react');
const Nav = require('Nav');

const Main = React.createClass({
  render () {
    return (
      <div>
        <Nav/>
        <h2>Main Component</h2>
        {this.props.children}
      </div>
    )
  }
})

module.exports = Main;
