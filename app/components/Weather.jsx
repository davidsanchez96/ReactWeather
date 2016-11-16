let React = require('react');
const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
const openWeatherMap = require('openWeatherMap');
const ErrorModal = require('ErrorModal');

let Weather = React.createClass({
    getInitialState() {
        return {isLoading: false, errorMessage: undefined}
    },
    handleSearch(location) {
      let that = this;
        this.setState({isLoading: true});
        openWeatherMap.getWeather(location).then(function(temp) {
            that.setState({location, temp, isLoading: false});
        }, function(e) {
            that.setState({isLoading: false, errorMessage: e.message});
        });

    },
    render() {
        let {isLoading, temp, location, errorMessage} = this.state;

        function renderMessage() {
          if(isLoading){
            return <h3 className="text-center">Fetching weather...</h3>;
          } else if(temp && location){
            return <WeatherMessage location={location} temp={temp}/>;
          }
        }

        function renderError() {
          if(typeof errorMessage === 'string') {
            return (
              <ErrorModal message={errorMessage}/>
            )
          }
        }

        return (
            <div>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
                {renderError()}
            </div>
        );
    }
});

module.exports = Weather;
