import { Component, OnInit, ViewChild } from '@angular/core';
import {FormsModule,FormGroup,FormControl} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
class data {
  constructor(public emailid:string = '',
              public password:string = '',
              public firstname:string = '',
              public lastname:string = '',
             
) {
  }
}
interface responseData {
  status: boolean;
  message: string;
  data: {
    firstname:string;
    lastname:string;
    emailid:string;
  }
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: data = new data();
  @ViewChild('f') form: any;
  constructor(private http: HttpClient,
    private router: Router,){
  }
  onSubmit() {
    if (this.form.valid) {
      console.log("Form Submitted!");
      // console.log(this.form.value);
      const req = this.http.post<responseData>('http://localhost:3002/register',this.form.value)
      .subscribe(
        res =>{
          if(res.status == true){
          alert(res.message);
          this.router.navigate(['login']);
          }else{
            alert(res.message);
          } 
        },
        
        error =>{
          console.log("registration failed")
        }
      )
      
    }
  }
  ngOnInit() {
  }

}
