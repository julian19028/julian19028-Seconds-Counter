import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

//create your first component
const SecondsCounter = (props) => {
	return (
		<div className="container-floud text-center">
			<div className="row border border-light p-3 mb-2 bg-black text-white grid gap-3" style={{height:120}}>
			     <div class="col shadow-sm mb-3 bg-body-tertiary rounded bg-dark border border border-secondary" style={{fontSize:30, paddingTop:3}}><FontAwesomeIcon icon={faClock} size="2xl" style={{color: "#f7f7f7",}} /></div>
                 <div class="col fs-1 shadow-sm mb-3 bg-body-tertiary rounded bg-dark border border border-secondary">{props.sixthDigit}</div>
                 <div class="col fs-1 shadow-sm mb-3 bg-body-tertiary rounded bg-dark border border border-secondary">{props.fifthDigit}</div>
                 <div class="col fs-1 shadow-sm mb-3 bg-body-tertiary rounded bg-dark border border border-secondary">{props.fourthDigit}</div>
				 <div class="col fs-1 shadow-sm mb-3 bg-body-tertiary rounded bg-dark border border border-secondary">{props.thirdDigit}</div>
				 <div class="col fs-1 shadow-sm mb-3 bg-body-tertiary rounded bg-dark border border border-secondary">{props.secondDigit}</div>
				 <div class="col fs-1 shadow-sm mb-3 bg-body-tertiary rounded bg-dark border border border-secondary">{props.firstDigit}</div>
            </div>
		</div>
	);
};
// {props.sixthDigit}
// {props.fifthDigit}
// {props.fourthDigit}
// {props.thirdDigit}
// {props.secondDigit}
// {props.firstDigit}
export default SecondsCounter;
