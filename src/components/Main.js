import React, {Component} from 'react';
import SatSetting from './SatSetting';

//Add comments on Main: 
// Get setting values from SatSettings
// Call API then get data 
// Show data to SatelliteList

class Main extends Component {
    render() {
        return (
            <div className='main'>
            <div className="left-side">
                <SatSetting />
            </div>
            <div className="right-side">
                right
            </div>
        </div>
        );
    }
}
export default Main;