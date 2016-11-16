let React = require('react');

let WeatherForm = React.createClass({
  onSearchLocation(e){
    e.preventDefault();
    let location = this.refs.location.value;
    this.props.onSearch(location);
  },
  render() {
    return (
      <div>
          <h2 className="text-center">Get Weather</h2>
          <form onSubmit={this.onSearchLocation}>
            <input type="text" placeholder="Enter city name" ref="location"></input>
            <div>
              <button className="expanded button hollow">Get weather</button>
            </div>
          </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
