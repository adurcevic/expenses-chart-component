"useStrict";

const data = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
];

const highestAmount = data.reduce((acc, curr, i) => {
  return curr.amount > acc ? curr.amount : acc;
}, 0);

const graphs = document.querySelectorAll(".graph");

graphs.forEach(
  (curr, i) =>
    (curr.innerHTML = ` 
    <div class="graph__tower" style="height: ${
      data[i].amount * 2
    }px; background-color: ${
      highestAmount === data[i].amount ? "#76b5bc" : "#ec775f"
    };"></div>
    <p class="graph__day">${data[i].day}</p>`)
);

graph = document.querySelectorAll(".graph__tower");

graph.forEach((graph, i) => {
  graph.addEventListener("mouseenter", function (e) {
    graph.innerHTML = `
    <p class="graph__amount">${data[i].amount}</p>
    `;
    data[i].amount === highestAmount
      ? (graph.style.backgroundColor = "#add3d7")
      : (graph.style.backgroundColor = "#f4ad9f");
  });
  graph.addEventListener("mouseleave", function (e) {
    const graphAmount = document.querySelector(".graph__amount");
    graphAmount.remove();
    data[i].amount === highestAmount
      ? (graph.style.backgroundColor = "#76b5bc")
      : (graph.style.backgroundColor = "#ec775f");
  });
});
