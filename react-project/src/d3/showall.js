import * as d3 from "d3";
import { useState, useRef, useEffect } from "react";
import dataset_csv from "./data/dataset.csv";

function credLeft(props) {
  const [cred, setCred] = useState([]);
  const svgRef = useRef(null);

  const CredData = async () => {
    let credData = await d3.csv(dataset_csv);
    let newCred = [];
    for (let i = 0; i < 3; i++) {
      newCred;
    }
  };
  useEffect(() => {
    GetData();
  }, []);
}

function showall() {
  return {};
}

export default Barchart;
