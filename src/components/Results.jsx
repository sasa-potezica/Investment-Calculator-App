import React from "react";
import calculateInvestmentResults from "../util/investment";

const Results = ({ userInput }) => {
  return calculateInvestmentResults(userInput);
};

export default Results;
