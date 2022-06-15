import * as d3 from "d3";
import lecture_detail_low_csv from "./data/lecture_data_low.csv";
import lecture_detail_high_csv from "./data/lecture_data_high.csv";


let recommendations = Array(6);

function Recommend({ recommendation }) {
  let stars = "";
  let count = parseInt(recommendation.rating);
  for (let i = 5; i > 0; i--) {
    if (count !== 0) {
      stars += "★";
      count -= 1;
    } else {
      stars += "☆";
    }
  }

  return (
    <tr>
      <td>{recommendation.point}</td>
      <td>{stars}</td>
      <td >{recommendation.title}</td>
    </tr>
  );
}

// const NeedCsv = async () => {
//   let file;
//   let gra = 2;
//   if (gra <= 2) {
//     file = await d3.csv(lecture_detail_low_csv);
//   } else {
//     file = await d3.csv(lecture_detail_high_csv);
//   }
//   let a = file;
//   for (let i = 0; i < a.length; i++) {
//     let tmp = {};
//     tmp.point = a[i].credit;
//     tmp.rating = a[i].rating;
//     tmp.title = a[i].name;
//     recommendations[i] = tmp;
//   }
// };

// NeedCsv();

function Recommendation({ recommendations }) {
    return (
      <div>
        <table className="recotab">
          <thead>
            <th className="point">학점</th>
            <th className="star">평점</th>
            <th className="title">강의명</th>
          </thead>
          <tbody>
            {recommendations.map((recommendation) => (
              <Recommend recommendation={recommendation} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }

export default Recommendation;