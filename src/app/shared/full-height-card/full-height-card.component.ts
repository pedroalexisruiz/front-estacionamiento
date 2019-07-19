import { Component, OnInit, Input, AfterViewInit } from "@angular/core";
import * as M from "materialize-css";
import { FullHeightCardItem } from "../fullHeightCard.model";

@Component({
  selector: "app-full-height-card",
  templateUrl: "./full-height-card.component.html",
  styleUrls: ["./full-height-card.component.scss"]
})
export class FullHeightCardComponent implements OnInit, AfterViewInit {
  carouselItems: FullHeightCardItem[] = [
    {
      backgroundColor: "blue-grey",
      icon: "fas fa-leaf",
      title: "Explore",
      description: "Algo"
    },
    {
      backgroundColor: "orange darken-3",
      icon: "fas fa-carrot",
      title: "Explore 2",
      description: "Algo 2"
    },
    {
      backgroundColor: "green darken-2",
      icon: "far fa-lemon",
      title: "Explore 2",
      description: "Algo 3"
    }
  ];
  currentItem: FullHeightCardItem;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.currentItem = this.carouselItems[0];
    const items = this.carouselItems

    const elems = document.querySelectorAll(".carousel");

    M.Carousel.init(elems, {
      fullWidth: true,
      indicators: true,
      onCycleTo: function(element) {
        const idElement: string = element.getAttribute("id");
        const index = idElement.split("-")[1];
        this.currentItem = items[Number(index)];
      }
    });
  }
}
