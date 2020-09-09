// import { Component } from '@angular/core';
// import { FormGroup, FormBuilder, Validators} from '@angular/forms';
// import {passValidator} from './validator';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'registration';
//   //title = 'app';

//   form: FormGroup;
//   constructor(private fb: FormBuilder){
//     this.form  = this.fb.group({
//       username: ['', [Validators.required,Validators.minLength(4)]],
//       password: '',
//       cnfpass: ['', passValidator],
//       //zip: ['', zipcodeValidator]
//     });
//     this.form.controls.password.valueChanges
//     .subscribe(
//       x => this.form.controls.cnfpass.updateValueAndValidity()
//     )
//   }
//   onSubmit(){
//     // console.log(this.form.controls.zip);
//     this.form.markAsTouched();
//   }
// }
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'app';
  title = 'registration';
}

