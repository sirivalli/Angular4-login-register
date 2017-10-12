import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [UserServiceService]
})
export class DashboardComponent implements OnInit {
// private res;
private getvalue;
model: any = {};
  constructor(private userservice: UserServiceService,
    private router: Router) { 
   
   

  }

  
  
  ngOnInit() {
    this.getvalue= this.userservice.getUser('userdata');
    console.log(this.getvalue);
}
logout(){
  this.userservice.removeUser('userdata');
  this.router.navigate(['login']); 
}

}