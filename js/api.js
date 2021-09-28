const API_URL = "../domino_web_exam.json";

export const getStockList = () => {
  const response = fetch(API_URL).then((res) => res.json());

  return response;
};
