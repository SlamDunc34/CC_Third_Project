var BarInventoryChart = function (barInventory){
  var container = document.getElementById("bar-inv-chart");

  var chart = new Highcharts.Chart({
    chart: {
      type: "bar",
      renderTo: container,
      backgroundColor: "rgba(69, 53, 53, 0.3)"
    },
    title: {
      text: ""
    },
    series: [
    {
      name: "Bar Inventory",
      data: [barInventory],
      color: "#6600cc"
    }
    ],
    xAxis: {
      categories: [""]
    },
    yAxis: {
      title: {
        text: "Bar Drinks Remaining",
        style: {
          color: "white"
        }
      },
      min: 0,
      max: 30,
      labels: {
          style:{
            color: "white"
        }
      }
    },
    legend: {
      enabled: false
    },
    credits: {
      enabled: false
    }
  });

};

module.exports = BarInventoryChart;