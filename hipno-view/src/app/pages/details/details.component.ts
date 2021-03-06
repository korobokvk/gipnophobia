import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.less']
})
export class DetailsComponent implements OnInit {
  examples: boolean[];
  constructor() { }

  ngOnInit() {
    this.examples = [true];
  }
  addSelect() {
    this.examples.push(true);
  }
  removeSelect() {
    this.examples.pop()
  }
}
