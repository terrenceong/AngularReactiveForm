import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/custom-validator/custom-validator';

@Component({
  selector: 'app-assignment-reactive-form',
  templateUrl: './assignment-reactive-form.component.html',
  styleUrls: ['./assignment-reactive-form.component.css']
})
export class AssignmentReactiveFormComponent implements OnInit {
  assignmentForm:FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.assignmentForm = new FormGroup({
      'projectName': new FormControl(null,[Validators.required,CustomValidators.invalidProjectName.bind(this)],CustomValidators.invalidProjectNameAsync),
      // 'projectName': new FormControl(null,Validators.required,this.forbiddenNamesAsync),
      'email': new FormControl(null,[Validators.email,Validators.required]),
      'projectStatus': new FormControl('stable')
    });
  }
  onSubmit(){
    console.log(this.assignmentForm);
  }

}
