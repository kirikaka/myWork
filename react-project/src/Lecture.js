import * as d3 from "d3";
import { useEffect, useState } from "react";
import lecture_data from "./data/lecture_dataset.csv";


function ShowLecture(props) {
  const [Data,setData]=useState([]);

    const readCsv = async () => {
      let needName=""
      needName=props.name.join('')

      let file =await d3.csv(lecture_data);

      let needFile=file.filter((v)=>v["name"]==needName)


      let val = [];
      
      if(needFile[0]!=undefined){
        val.push(needFile[0].name);
        val.push(needFile[0].professor);
        val.push(needFile[0].process);
        val.push(needFile[0].credit);
        val.push(needFile[0].contents);
        val.push(needFile[0].review);
      

      }
      // console.log(val)


      setData([...val])
      
    };
  
    useEffect(() => {
      readCsv();


      d3.select("#lecDetailtab")
        .selectAll("td")
        .data(Data)
        .html((d, i) => d);

    }, [Data]);
  
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
                <th className="professor">교수</th>
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