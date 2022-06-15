import * as d3 from "d3";
import { useState, useRef, useEffect } from "react";
import InputEx from "./Profile.js";
import BarLinear from "./Points.js";
import Barchart from "./Progress.js";
import Recommendation from "./Recommend.js";
import ShowLecture from "./Lecture";
import MakeTable from "./Semester.js";

let information = {};

function ShowAll() {
  const getInfo = (x) => {
    console.log(x["name"]);

    information["name"] = x["name"];
    information["major"] = x["major"];
    information["stuNum"] = x["stuNum"];
    information["grade"] = x["grade"];
    information["goal"] = x["goal"];
    information["semester"] = x["semester"];
  };

  return (
    <div className="container">
      <div id="profile">
        <InputEx getProfile={getInfo} />
      </div>
      <div id="points">
        <BarLinear />
      </div>
      <div id="progress">
        <Barchart />
      </div>
      <div id="recommend">
        <Recommendation props={information} />
      </div>
      <div id="lecture">
        <ShowLecture />
      </div>
      <div id="semester">
        <MakeTable />
      </div>
    </div>
  );
}

export default ShowAll;
