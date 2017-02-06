import React, {Component} from 'react';
import {connect} from 'react-redux';
//import { Sparklines, SparklinesLine} from  'react-sparklines';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {

    renderWeather(cityDate) {
        const name = cityDate.city.name;
        const temps = cityDate.list.map(weather1 => weather1.main.temp);
        const pressures = cityDate.list.map(weather => weather.main.pressure);
        const humidities = cityDate.list.map(weather => weather.main.humidity);
        const lon = cityDate.city.coord.lon;
        const lat = cityDate.city.coord.lat;

console.log(lon);
        console.log(temps);
        return (
            <tr key={name}>
                <td>{name}</td>
                <td><Chart data={temps} color="orange" units="k"/></td>
                  <td><Chart data={pressures} color="red" units="hPa"/></td>
                    <td><Chart data={humidities} color="blue" units="%"/></td>

            </tr>
        );
    }

    render() {

        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>

                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}

                </tbody>
            </table>
        );
    }
}

function mapStateToProps({weather}) {
    return {weather};
}

export default connect(mapStateToProps)(WeatherList);
