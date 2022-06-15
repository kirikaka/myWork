import * as d3 from "d3";
import { useEffect } from "react";
import grade_low_csv from "./data/low.csv";
import grade_high_csv from "./data/high.csv";

function MakeTable() {
    const needCa = async () => {
      let file;
      let gra = 3;
      if (gra <= 2) {
        file = await d3.csv(grade_low_csv);
      } else {
        file = await d3.csv(grade_high_csv);
      }
      var tr = d3
        .select("#makeTab tbody")
        .selectAll("tr")
        .data(file)
        .enter()
        .append("tr");
      var td = tr
        .selectAll("td")
        .data(function (d, i) {
          return Object.values(d);
        })
        .enter()
        .append("td")
        .text(function (d) {
          return d;
        });
    };
  
    useEffect(() => {
      needCa();
    }, []);
  
    return (
      <>
        <table id="makeTab">
          <thead>
            <tr>
              <th>과목명</th>
              <th className="credit_right_below">학점</th>
              <th className="process_right_below">이수구분</th>
              <th className="grade_right_below">성적</th>
              <th className="again_right_below">재수강여부</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </>
    );
  }

export default MakeTable;