import * as d3 from "d3";
import lecture_data from "./data/lecture_dataset.csv";
import { useState, useRef, useEffect } from "react";

function Recommendation(props) {
  const [NeedData, setNeedData] = useState([]);

  const NeedCa = async () => {
    let gra = props.props.grade;
    let semester = props.props.semester;

    let file = await d3.csv(lecture_data);
    const file_filter = file.filter(
      (v) => v["grade"] == gra && v["semester"] == semester
    );
    const credit_data = file_filter.map((v) => v.credit);
    const rating_data = file_filter.map((v) => v.rating);
    const name_data = file_filter.map((v) => v.name);

    const needData = [];
    for (let i = 0; i < credit_data.length; i++) {
      let temp = {};
      temp.credit = credit_data[i];
      let stars = "";
      let count = parseInt(rating_data[i]);
      for (let i = 5; i > 0; i--) {
        if (count !== 0) {
          stars += "★";
          count -= 1;
        } else {
          stars += "☆";
        }
      }
      temp.rating = stars;
      temp.name = name_data[i];
      needData.push(temp);
    }

    setNeedData([...needData]);
  };

  useEffect(() => {
    NeedCa();

    var tr = d3
      .select(".recotab tbody")
      .selectAll("tr")
      .data(NeedData)
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
  }, [NeedData]);

  return (
    <>
      <div>
        <table className="recotab">
          <thead>
            <th className="point">학점</th>
            <th className="star">평점</th>
            <th className="title">강의명</th>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </>
  );
}

export default Recommendation;
