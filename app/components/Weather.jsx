let React = require('react');
const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
const openWeatherMap = require('openWeatherMap');

let Weather = React.createClass({
    getInitialState() {
        return {isLoading: false}
    },
    handleSearch(location) {
      this.setState({isLoading:true});
        openWeatherMap.getWeather(location).then(temp => {
            this.setState({location, temp, isLoading: false});
        }, err => console.log(err));

    },
    render() {
        let {isLoading, temp, location} = this.state;

        function renderMessage() {
          if(isLoading){
            return <h3>Fetching weather...</h3>;
          } else if(temp && location){
            return <WeatherMessage location={location} temp={temp}/>;
          }
        }


        return (
            <div>
                <h2>Weather Component</h2>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>

        );
    }
});

module.exports = Weather;
