import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-start-reactive-form',
  templateUrl: './start-reactive-form.component.html',
  styleUrls: ['./start-reactive-form.component.css']
})
export class StartReactiveFormComponent implements OnInit {

  constructor() { }

  genders = ['male', 'female'];
  signUpForm:FormGroup;
  userNameForbidden:string[] = ['Jaja','Jala'];
  ngOnInit(){
      this.signUpForm = new FormGroup({
        'userData': new FormGroup({
          'username': new FormControl(null,[Validators.required,this.forbiddenNames.bind(this)]),
          'email': new FormControl(null,[Validators.required,Validators.email],this.forbiddenEmails)
        }),
        'gender': new FormControl('male'),
        'hobbies': new FormArray([])
      });
      //react to value changes
      // this.signUpForm.valueChanges.subscribe((value)=>{
      //   console.log(value);
      // });
      //react to status change
      // this.signUpForm.statusChanges.subscribe((value)=>{
      //   console.log(value);
      // });

  }
  setValue(){
    this.signUpForm.setValue({
      'userData':{
        'username':'Terrence',
        'email':'terrenceong2022@gmail.com'
      },
      'gender':'male',
      'hobbies':[]
    });
    this.signUpForm.patchValue({
        'userData':{
          'username':'Terrence Ong'
        }
    });
    const formControl =new FormControl('music',Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).push(formControl);
    const formControl1 =new FormControl('running',Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).push(formControl1);
  }
  onSubmit(){
    console.log(this.signUpForm);
    this.signUpForm.reset();
  }
  addHobby(){
    const formControl =new FormControl(null,Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).push(formControl);
  }
  getHobbies() {
    return (<FormArray>this.signUpForm.get('hobbies')).controls;
  }
  forbiddenNames(control:FormControl):{[s:string]:boolean}{
     if(this.userNameForbidden.indexOf(control.value) !== -1){
       return {'userNameForbidden':true};
     }
     return null;
  }
  forbiddenEmails(control:FormControl): Promise<any> | Observable<any>{
     const promise = new Promise<any>((resolve,reject)=>{
        setTimeout(() => {
          if(control.value==='test@gmail.com'){
            resolve({'emailForbidden':true});
          }
          else{
            resolve(null);
          }
        },1500)

        });
        return promise;
  }

}
