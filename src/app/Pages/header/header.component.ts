import { Component, OnInit } from '@angular/core';
import { WebStorageService } from "ngx-web-storage";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  vendor_details : any;


  constructor(
    private storage: WebStorageService,
  ) { }

  ngOnInit(): void {
    this.vendor_details = this.storage.local.get('vendor_details');
  }

}
