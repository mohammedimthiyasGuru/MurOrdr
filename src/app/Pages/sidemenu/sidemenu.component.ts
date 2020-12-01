import { Component, OnInit } from '@angular/core';
import { WebStorageService } from "ngx-web-storage";
@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {
  vendor_details : any;
  links : any;

   showstatus : boolean = true;

  constructor(
    private storage: WebStorageService,
  ) { }

  ngOnInit(): void {

    this.vendor_details = this.storage.local.get('vendor_details');

    console.log(this.vendor_details.shop_name);

    this.links = '/#/ordr/productadd/' + this.vendor_details._id;

    if(this.vendor_details.shop_name == 'Ordr Admin'){
      this.showstatus  = true;
    }else{
      this.showstatus  = false;
    }


  }

}
