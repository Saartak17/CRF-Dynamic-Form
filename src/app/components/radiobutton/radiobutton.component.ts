import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "../../field.interface";

@Component({
  selector: "app-radiobutton",
  templateUrl: './radiobutton.component.html',
  styleUrls: ['./radiobutton.component.css'],
})

export class RadiobuttonComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  radioValue:string;

  constructor() {}
  ngOnInit() {}

  radioChange(event:any, fieldName){
    this.radioValue = event.value;
    console.log(event.value);
    console.log(fieldName);
    console.log(this.group.get(fieldName));
    console.log(this.group.value);
    for(let element in this.group.value){
      console.log(element);
    }
    // if(event.value === 'Yes'){
    //   this.group
    // }
  }
}
