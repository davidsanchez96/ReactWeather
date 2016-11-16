const React = require('react');
const Nav = require('Nav');

const Main = React.createClass({
  render () {
    return (
      <div>
        <Nav/>
        <div className="row">
            <div className="medium-6 medium-centered columns">
                {this.props.children}
            </div>
        </div>
      </div>
    )
  }
})

module.exports = Main;
