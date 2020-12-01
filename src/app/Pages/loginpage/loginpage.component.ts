import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { WebStorageService } from "ngx-web-storage";


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  vendor_details: any = [];

  email_id : string;
  password: string;

  constructor(
    private router: Router,
    private storage: WebStorageService,
    private http: HttpClient,
    private _api: ApiService,
    private routes: ActivatedRoute
    ) {
      if(this.vendor_details.shop_logo == undefined){
        this.vendor_details.shop_logo = '';
      }
    this.routes.params.subscribe(params => {
      let d = params['id']; // (+) converts string 'id' to a number
      console.log('this id: ' + d);
      let a = {
        shop_link_name: d
      }
      this._api.fetchres_details(a).subscribe(
        (response: any) => {
          console.log(response.Data);
          this.vendor_details = response.Data.Vendor_details;
          console.log(this.vendor_details);
          this.storage.local.set('vendor_details',this.vendor_details); // storing in local storage
        }
      );
    });

   }


  ngOnInit(): void {
  }


  login(){

    if(this.email_id == '' || this.password == '' || this.email_id == undefined || this.password == undefined){
      alert('Please enter all the fields');
   }
   else{



    if(this.email_id == this.vendor_details.vendor_email && this.password == this.vendor_details.vendor_password){
      alert("Login Successfully");
      this.router.navigateByUrl('/ordr/Dashboard');
    }else{
      alert("Invalid Account");
    }

  }
  }

}
