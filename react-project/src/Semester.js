import * as d3 from "d3";
import { useEffect, useState } from "react";
import score from "./data/score.csv";

function MakeTable(props) {
  const [semInfo,setSemInfo]=useState([]);

  let grade;
  let sem;

    const needCa = async () => {
      let file=await d3.csv(score);;
      let show_sem;
      if(props.sem!=undefined){
        show_sem=parseInt(props.sem);
      }


      if(show_sem==0){
        grade=1;
        sem=1;
      }else if(show_sem==1){
        grade=1;
        sem=2;
      }else if(show_sem==2){
        grade=2;
        sem=1;
      }else if(show_sem==3){
        grade=2;
        sem=2;
      }else if(show_sem==4){
        grade=3;
        sem=1;
      }else if(show_sem==5){
        grade=3;
        sem=2;
      }else if(show_sem==6){
        grade=4;
        sem=1;
      }else if(show_sem==7){
        grade=4;
        sem=2;
      }
      const need_file = file.filter(
        (v) => v["grade"] == grade && v["semester"] == sem
      );
      for(let i=0;i<need_file.length;i++){
        delete need_file[i].grade;
        delete need_file[i].semester;
      }


      console.log(need_file);
      
      setSemInfo([...need_file])

    };
  
    useEffect(() => {
      needCa();

    var tr = d3
      .select("#makeTab tbody")
      .selectAll("tr")
      .data(semInfo)
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
    }, [semInfo]);
  
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