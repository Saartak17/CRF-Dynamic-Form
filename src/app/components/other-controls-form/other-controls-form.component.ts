import { Component, ViewChild, OnInit } from "@angular/core";
import { Validators } from "@angular/forms";
import { FieldConfig } from "../../field.interface";
import { DynamicFormComponent } from "../dynamic-form/dynamic-form.component";
import { FormGroup } from "@angular/forms";

@Component({
    selector: 'app-other-controls-form',
    templateUrl: './other-controls-form.component.html',
    styleUrls: ['./other-controls-form.component.css']
})

export class OtherControlsFormComponent implements OnInit {

    field: FieldConfig;
    group: FormGroup;
    radioStatus:boolean;

    constructor() {}
    ngOnInit(){}

    checkRadioButtonStatus(group: FormGroup,name){
       if(Object.values(group.value[name][0]).toString() ==='Yes'){
         this.radioStatus = true;
         return this.radioStatus
       }
       else{
         this.radioStatus = false;
         return this.radioStatus;
       }
      }
}