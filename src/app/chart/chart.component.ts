import { Component, OnInit } from "@angular/core";
import { Chart } from "chart.js";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";
import { ProductService } from "../product.service";

@Component({
  selector: "app-chart",
  templateUrl: "./chart.component.html",
  styleUrls: ["./chart.component.css"]
})
export class ChartComponent implements OnInit {
  public myChart: Chart;
  public typeOfChart: string;
  public typeArray = ["pie", "bar"];
  public product_list;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {
    this.product_list = this.productService.getProduct();
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.typeOfChart = params.get("typeOfChart");
      this.constructChart(this.typeOfChart);
    });
  }

  constructChart(typeOfChart: string) {
    let ctx = document.getElementById("myChart");
    let parameters = {
      type: typeOfChart,
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "Prices of Products",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)"
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)"
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    };
    parameters.data.labels = [];
    parameters.data.datasets[0].data = [];
    this.product_list.forEach(product => {
      parameters.data.labels.push(product.title);
      parameters.data.datasets[0].data.push(product.price);
    });
    this.myChart = new Chart(ctx, parameters);
  }
}
