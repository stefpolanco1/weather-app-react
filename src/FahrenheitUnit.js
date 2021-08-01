import React from "react";

export default function FahrenheitUnit(props) {
        return (
            <div className="FahrenheitUnit">
                <span className="temperature">{Math.round(props.fahrenheit)}</span>
                <span className="units"> °F
                </span>
            </div>
         );
}
    