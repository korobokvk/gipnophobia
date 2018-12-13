import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { FormGroup, FormControl, Validators} from '@angular/forms';

export interface TimeStamp {
  value: any;
  viewValue: any;
}
@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
  timeForm: FormGroup;
  times: TimeStamp[];
  columnsToDisplay: string[];
  constructor() {
    this.timeForm = new FormGroup({
      "time": new FormControl(),
      "time1": new FormControl(),
      "time2": new FormControl(),
      "price": new FormControl()
    })
  }

  ngOnInit() {
    moment.locale('uk')
    let data = moment().startOf('day')
    this.times = [{
      value: data,
      viewValue: data.format("LTS")
    }]
    for(let i = 0; i <= 15; i++) {
      data.add(1.5, 'h');
      this.times.push({
        value: data,
        viewValue: data.format("LTS")
      });
    };
    this.columnsToDisplay = ["Время"]
  }

}
