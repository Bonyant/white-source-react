import React from "react";
import Timer from "../Components/Timer";
import Stopwatch from "../Components/Stopwatch";
import DigitManager from "../Components/DigitManager";

export default function Numbers() {
  return (
    <>
      <div className="spmar">
        <hr />
        <Timer />
        <hr />
        <DigitManager />
        <hr />
        <Stopwatch />
        <hr />
      </div>
    </>
  );
}
