import { Component, OnInit } from '@angular/core';
import { WebStorageService } from "ngx-web-storage";



@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  vendor_details : any;

  constructor(
    private storage: WebStorageService,
  ) { }

  ngOnInit(): void {
    this.vendor_details = this.storage.local.get('vendor_details');
  }

}
