let React = require('react');

let WeatherMessage = React.createClass({
  render() {
    let {temp, location} = this.props;
    return (
      <div>
          <h2>It's {temp} in {location}</h2>
      </div>
    );
  }
});

module.exports = WeatherMessage;
