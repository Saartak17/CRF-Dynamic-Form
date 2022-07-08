import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "../../field.interface";

@Component({
    selector: "app-comment-box",
    templateUrl: './comment-box.component.html',
    styleUrls: ['./comment-box.component.css'],
})

export class CommentboxComponent implements OnInit {
    field: FieldConfig;
    group: FormGroup;
  
    constructor() {}
    ngOnInit() {}
}