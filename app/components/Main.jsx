const React = require('react');
const Nav = require('Nav');

const Main = React.createClass({
  render () {
    return (
      <div>
        <Nav/>
        <div className="row">
            <div className="small-centered large-4 medium-6 columns">
                {this.props.children}
            </div>
        </div>
      </div>
    )
  }
})

module.exports = Main;
