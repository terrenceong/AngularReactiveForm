import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";

export class CustomValidators{
   static invalidProjectName(control:FormControl):{[s:string]:boolean}{
        if('test'==control.value){
          return {'forbiddenName':true};
        }
        return null;
     }

  static invalidProjectNameAsync(control:FormControl): Promise<any> | Observable<any>{
    const promise = new Promise<any>((resolve,reject)=>{
       setTimeout(() => {
         if(control.value==='testproject'){
           resolve({'forbiddenNameAsync':true});
         }
         else{
           resolve(null);
         }
       },2000)
  
       });
       return promise;
  }
}

