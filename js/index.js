const stockTable = document.querySelector(".table__stocks");
const stockSortBtn = document.querySelector(".table__sortBtn");
let sortState = "asc";

const getStockList = () => {
  const API_URL =
    "https://raw.githubusercontent.com/kimbyulyi/pretask-front-ffwd/main/domino_web_exam.json";
  const data = fetch(API_URL).then((res) => res.json());
  return data;
};

const initLoader = () => {
  getStockList().then((stockList) => {
    stockList.map((data) => {
      const stockItem = document.createElement("tr");
      const title = document.createElement("td");
      const price = document.createElement("td");

      title.innerHTML = `${data.stock.name}`;
      price.innerHTML = `${data.price}`;

      stockItem.classList.add("stock__item");
      title.classList.add("stock__item__title");
      price.classList.add("stock__item__price");
      stockItem.appendChild(title);
      stockItem.appendChild(price);

      stockTable.appendChild(stockItem);
    });
  });
};

const handleSortStocks = () => {
  const rows = stockTable.getElementsByTagName("tr");
  let runSort = true;
  sortState = sortState === "asc" ? "desc" : "asc";

  while (runSort) {
    runSort = false;

    for (let i = 0; i < rows.length - 1; i++) {
      const price = Number(rows[i].getElementsByTagName("td")[1].innerText);
      const nextPrice = Number(
        rows[i + 1].getElementsByTagName("td")[1].innerText
      );

      if (
        (sortState === "asc" && price > nextPrice) ||
        (sortState === "desc" && price < nextPrice)
      ) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        runSort = true;
      }
    }
  }
};

stockSortBtn.addEventListener("click", handleSortStocks);
window.addEventListener("DOMContentLoaded", () => initLoader());
