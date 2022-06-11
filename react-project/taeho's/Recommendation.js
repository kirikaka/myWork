import React from "react"; //, { useState }
//import * as d3 from "d3";


/*
let lectureData = [
    { point: 3, rating: 5, title: "강의명0" },
    { point: 3, rating: 4, title: "강의명1" },
    { point: 3, rating: 4, title: "강의명2" },
    { point: 3, rating: 3, title: "강의명3" }
];

window.onload = () => {
    Recomend(lectureData);
};

function Recomend(lectureData)
{
    const tableBody = document.getElementById("tableData");
    let dataField = '';

    for(let lecture of lectureData)
    {
        dataField += `<tr><td>${lecture.point}</td><td>${lecture.rating}</td><td>${lecture.title}</td></tr>`
    }

    tableBody.innerHTML = dataField;
};
*/

function Recomend({recommendation})
{
    let stars = '';
    let count = recommendation.rating;
    for (let i = 5; i > 0; i--)
    {
        if(count !== 0)
        {
            stars += '★';
            count -= 1;
        }
        else
        {
            stars += '☆';
        }
    };
    
    return (
        <tr>
            <td>{recommendation.point}</td>
            <td>{stars}</td>
            <td>{recommendation.title}</td>
        </tr>
    )
}

function Recommendation({recommendations})
{
    /*
    return (
        <>
            <table>
                <thead>
                <tr>
                    <th>학점</th>
                    <th>평점</th>
                    <th>강의명</th>
                </tr>
                </thead>
                <tbody id = "tableData">
                {recomendations.map(
                    (recomendation, index) => 
                        (
                            <Recomend recomendation={recomendation} key={index} />
                        )
                    )
                }
                </tbody>
            </table>
        </>
    )
    */
    return (
        <div>
            <table class="center">
                <thead>
                    <th>학점</th>
                    <th>평점</th>
                    <th>강의명</th>
                </thead>
                <tbody>
                    {recommendations.map((recommendation) => 
                        (
                            <Recomend recommendation={recommendation}/>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

export default Recommendation;


/*return (
        <>
            {recomendations.map((recomendation, index) => 
            (
                <Recomend recomendation={recomendation} key={index} />
            ))}
        </>
    )*/