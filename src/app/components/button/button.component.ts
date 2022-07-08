import { Component, OnInit } from "@angular/core";
import { FormArray, FormGroup } from "@angular/forms";
import { FieldConfig } from "../../field.interface";

@Component({
  selector: "app-button",
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})

export class ButtonComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  controlsValue: [{}];
  constructor() {}
  ngOnInit() {
    
  }

  onClickSaveForm(){
    for(let key of Object.keys(this.group.value)){
      console.log(key);
      console.log(Object.values(this.group.value[key][0]).toString());
      console.log(this.group.controls[key].value);
      // this.controlsValue.push(this.group.controls[key].value[1]);
      // console.log(this.controlsValue);
      if(Object.values(this.group.value[key][0]).toString() === 'No'){
        // this.controlsValue.push(this.group.controls[key].value[1]);
        // console.log(this.controlsValue);
        (<FormArray>this.group.get(key)).removeAt(1);
        // console.log(this.group.controls[key].value);
        // this.group.get(key).reset
      }
      // else if(Object.values(this.group.value[key][0]).toString() === 'Yes'){
      //   this.group.get(key).reset;
      // }
    };
  }
}
