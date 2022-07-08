import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "../../field.interface";

@Component({
  selector: "app-input",
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})

export class InputComponent implements OnInit {
  className: string = "box1";
  field: FieldConfig;
  group: FormGroup;
  constructor() {}
  ngOnInit() { }
}
