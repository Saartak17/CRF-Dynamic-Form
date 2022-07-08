import { Component, ViewChild, OnInit } from "@angular/core";
import { Validators } from "@angular/forms";
import { FieldConfig } from "../../field.interface";
import { DynamicFormComponent } from "../dynamic-form/dynamic-form.component";
import { FormGroup,FormArray } from "@angular/forms"; 

@Component({
  selector: 'app-child-form',
  templateUrl: './child-form.component.html',
  styleUrls: ['./child-form.component.css']
})

export class ChildFormComponent implements OnInit {
field: FieldConfig;
group: FormGroup;
@ViewChild(DynamicFormComponent) form: DynamicFormComponent;
radioStatus:boolean;

constructor() {
}
ngOnInit() {
  console.log(this.field.formArrays[0][0].value);
}

checkRadioButtonStatus(group: FormGroup,name){
  // console.log(name);
  // console.log(typeof name);
  // console.log(Object.keys(group.value));
  // for(let key of Object.keys(group.value)){
  //   if(key === name){
  //     console.log('equal');
  //   }
  // }
 console.log(Object.keys(this.group.value));
 console.log("name", name); 
//  console.log(this.group.controls['occupationalDisease'].value[1])
//  console.log(this.group.controls[name].value[1]);
 if(Object.values(group.value[name][0]).toString() ==='Yes'){
   this.radioStatus = true;
  //  console.log((<FormArray>this.group.get(name)).push(this.group.controls[name].value[1]));
   return this.radioStatus
 }
 else{
   this.radioStatus = false;
   return this.radioStatus;
 }
}
// submit(event){
//   console.log(this.group,event);
//   this.group["controls"]["childForm"].patchValue([event]);
// }

// assignForm(event){
//   this.group = event;
//   console.log(event);
// }

}