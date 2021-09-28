import { getStockList } from "./api.js";

const initLoader = () => {
  getStockList().then((res) => {
    res.map((data) => {
      const stockTable = document.querySelector(".table__stocks");
      const stockItem = document.createElement("tr");
      const title = document.createElement("td");
      const price = document.createElement("td");

      title.innerHTML = `${data.stock.name}`;
      price.innerHTML = `${data.price}`;

      stockItem.classList.add("stock__item");
      stockItem.appendChild(title);
      stockItem.appendChild(price);

      stockTable.appendChild(stockItem);
    });
  });
};

window.addEventListener("DOMContentLoaded", () => initLoader());
