import {  NgModule,Component, OnInit,ViewChild } from '@angular/core';
import {FormsModule,FormGroup,FormControl} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserServiceService } from '../user-service.service';
import { Router, ActivatedRoute } from '@angular/router';



class data {
  constructor(public emailid:string = '',
              public password:string = ''
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
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserServiceService]
})
export class LoginComponent implements OnInit {
//  private item:string;
  model: data = new data();
  @ViewChild('f') form: any;
  constructor(private http: HttpClient,
    private userservice: UserServiceService,
    private router: Router,
    ){
  }

  onSubmit() {
    if (this.form.valid) {
      console.log("Form Submitted!");
      console.log(this.form.value);
      const req = this.http.post<responseData>('http://localhost:3002/login',this.form.value)
      .subscribe(
        res =>{
          if(res.status == true){
            
             
            alert(res.message);
            // localStorage.setItem('userdata', JSON.stringify(res.data));
             this.userservice.setUser('userdata' ,res.data);
             this.router.navigate(['dashboard']); 
           
          }
          else{
            alert(res.message);
          }
        },
        err =>{
          console.log("error OCCOURED")
        }
      )
      
    }
  }
  ngOnInit():void {
    
    
  }

}
