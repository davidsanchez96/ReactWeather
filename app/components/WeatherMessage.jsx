let React = require('react');

let WeatherMessage = React.createClass({
  render() {
    let {temp, location} = this.props;
    return (
      <div>
          <h2 className="text-center">It's {temp}°C in {location}</h2>
      </div>
    );
  }
});

module.exports = WeatherMessage;
