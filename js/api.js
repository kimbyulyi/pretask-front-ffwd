const API_URL =
  "https://raw.githubusercontent.com/kimbyulyi/pretask-front-ffwd/main/domino_web_exam.json";

export const getStockList = () => {
  const data = fetch(API_URL).then((res) => res.json());

  return data;
};
