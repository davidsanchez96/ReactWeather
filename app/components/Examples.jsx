let React = require('react');
let {Link} = require('react-router');

let Examples = React.createClass({
  render() {
    return (
      <div>
        <h1 className="text-center">Examples</h1>
        <p>Here are a few locations to try it out</p>
        <ol>
          <li>
            <Link to="/?location=Philadelphia">Philadelphia, PA</Link>
          </li>
          <li>
            <Link to="/?location=Rio">Rio, Brazil</Link>
          </li>
        </ol>
      </div>

    );
  }
});

module.exports = Examples;
