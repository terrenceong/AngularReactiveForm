import { Component , OnInit} from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
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
  }
  onSubmit(){
    console.log(this.signUpForm);
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
