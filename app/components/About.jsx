let React = require('react');

let About = React.createClass({
  render() {
    return (
      <div className="row">
        <div className="text-center">
          <h1>This is an React Weather App</h1>
          <h4>I used the API of OpenWeatherMap for searching the weather by city name</h4>
          <p>Some of the technologies used to built this project are</p>
        </div>
        <div className="small-up-2 medium-up-2">
          <div className="column">
            <img className="thumbnail" src="http://devicon.fr/devicon.git/icons/react/react-original.svg"></img>
            <h3 className="text-center">ReactJS</h3>
          </div>
          <div className="column">
            <img className="thumbnail" src="http://devicon.fr/devicon.git/icons/nodejs/nodejs-original.svg"></img>
            <h3 className="text-center">NodeJS</h3>
          </div>
          <div className="column">
            <img className="thumbnail" src="http://devicon.fr/devicon.git/icons/foundation/foundation-original.svg" ></img>
            <h3 className="text-center">Foundation</h3>
          </div>
          <div className="column">
            <img className="thumbnail" src="http://devicon.fr/devicon.git/icons/heroku/heroku-original.svg"></img>
            <h3 className="text-center">Heroku</h3>
          </div>
        </div>
      </div>

    );
  }
});

module.exports = About;
