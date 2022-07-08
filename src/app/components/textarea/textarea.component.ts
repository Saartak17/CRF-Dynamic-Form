import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "../../field.interface";

@Component({
    selector: "app-textarea",
    templateUrl: './textarea.component.html',
    styleUrls: ['./textarea.component.css'],
})

export class TextareaComponent implements OnInit {
    field: FieldConfig;
    group: FormGroup;
    displayErrorMessage:boolean = false;
    errorMessage:string;
    saveClicked:boolean = false;
  
    constructor() {}
    ngOnInit() {}

    onClickExpSaveComment(field,textAreaValue){
        console.log(this.group.value);
        console.log(field);
        console.log(textAreaValue)
        for(let validation of field.validations){
            if(this.group.get(field.name).hasError(validation.name)){
                this.displayErrorMessage = true;
                this.errorMessage = validation.message;
            }
            else{
                this.displayErrorMessage = false;
            }
        }

        this.saveClicked = true;
    }
}