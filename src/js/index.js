//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//import your own components
import SecondsCounter from "./component/SecondsCounter.jsx";

let firstDigit = 0
let secondDigit = 0
let thirdDigit = 0
let fourthDigit = 0
let fifthDigit = 0
let sixthDigit = 0

setInterval(function()  {
    firstDigit++;
    if (firstDigit === 10) {
        firstDigit = 0;
        secondDigit++;
        if (secondDigit ===10) {
            secondDigit = 0;
            thirdDigit++;
            if (thirdDigit ===10) {
                thirdDigit = 0;
                fourthDigit++;
                if (fourthDigit ===10) {
                    fourthDigit = 0;
                    fifthDigit++;
                    if (fifthDigit ===10) {
                        fifthDigit = 0 
                        sixthDigit++;
                        if (sixthDigit ===10) {
                            sixthDigit = 0;
                        }

                    }
                }
            }
        }
    }
    console.log(firstDigit)
    console.log(secondDigit)
    console.log(thirdDigit)
    console.log(fourthDigit)
    console.log(fifthDigit)
    console.log(sixthDigit)
    ReactDOM.render(<SecondsCounter firstDigit={firstDigit} secondDigit= {secondDigit} thirdDigit = {thirdDigit} fourthDigit = {fourthDigit} fifthDigit = {fifthDigit} sixthDigit = {sixthDigit} />, document.querySelector("#app"));
},
1000
)

//render your react application

