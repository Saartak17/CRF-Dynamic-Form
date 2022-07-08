import {Component,EventEmitter,Input,OnChanges,OnInit,Output} from "@angular/core";
import {FormGroup,FormBuilder,Validators,FormControl} from "@angular/forms";
import { FieldConfig, Validator } from "../../field.interface";

@Component({
  exportAs: "dynamicForm",
  selector: "dynamic-form",
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
})

export class DynamicFormComponent implements OnInit {
  @Input() fields: FieldConfig[] = [];
  form: FormGroup;
  @Output() submit: EventEmitter<any> = new EventEmitter<any>();
  @Output() childFG: EventEmitter<any> = new EventEmitter<any>();

  get value() {
    return this.form.value;
  }
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.createControl(this.fields);
    this.form.valueChanges.subscribe(x => {
      
      this.submit.emit(x);
      //this.childFG.emit(this.form);
    });
    this.form.get('anyOtherUniqueExposures').valueChanges.subscribe(value => {
      console.log(value);
    });
  }

  onSubmit(event: Event) {
    // event.preventDefault();
    // event.stopPropagation();
    if (this.form.valid) {
      this.submit.emit(this.form.value);
    } else {
      this.validateAllFormFields(this.form);
    }
  }

  // field.type === "childform"

  createControl(fields) {
    console.log("fields",fields)
    const group = this.fb.group({});
    fields.forEach(field => {
      if (field.type === "button") return;
      // console.log(field);
      // console.log(field.formArrays)
      if(field.formArrays != undefined && field.formArrays.length >0){
        let items = [];
        field.formArrays.forEach(fields => {
          items.push(this.createControl(fields));
        });
        let controlArray = this.fb.array(items);
        group.addControl(field.name, controlArray);
      }else{
        const control = this.fb.control(
        field.value,
        this.bindValidations(field.validations || [])
        );
        group.addControl(field.name, control);
      }
    });
    console.log(group);
    return group;
  }

  bindValidations(validations: any) {
    if (validations.length > 0) {
      const validList = [];
      validations.forEach(valid => {
        validList.push(valid.validator);
      });
      return Validators.compose(validList);
    }
    return null;
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      control.markAsTouched({ onlySelf: true });
    });
  }
}
