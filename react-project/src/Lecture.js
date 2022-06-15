import * as d3 from "d3";
import { useEffect } from "react";
import lecture_detail_low_csv from "./data/lecture_data_low.csv";
import lecture_detail_high_csv from "./data/lecture_data_high.csv";

function ShowLecture() {
    const readCsv = async () => {
      let file;
      let gra = 2;
      if (gra <= 2) {
        file = await d3.csv(lecture_detail_low_csv);
      } else {
        file = await d3.csv(lecture_detail_high_csv);
      }
      let need = file[0];
      let val = [];
      val.push(need.name);
      val.push(need.professor);
      val.push(need.process);
      val.push(need.credit);
      val.push(need.contents);
      val.push(need.review);
  
      d3.select("#lecDetailtab")
        .selectAll("td")
        .data(val)
        .html((d, i) => d);
    };
  
    useEffect(() => {
      readCsv();
    }, []);
  
    return (
      <>
        <div id="Detail_lecture">
          <table id="lecDetailtab">
            <tbody>
              <tr>
                <th className="name">강의명</th>
                <td className="name"></td>
              </tr>
              <tr>
                <th className="professor">
                  <a href="https://sites.google.com/view/hcclab" target="_blank">
                    교수
                  </a>
                </th>
                <td className="professor"></td>
              </tr>
              <tr>
                <th className="process">과정</th>
                <td className="process"></td>
              </tr>
              <tr>
                <th className="credit">학점</th>
                <td className="contents"></td>
              </tr>
              <tr>
                <th className="contents">내용</th>
                <td className="credit"></td>
              </tr>
              <tr>
                <th className="Review">Review</th>
                <td className="Review"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  }
  
export default ShowLecture;