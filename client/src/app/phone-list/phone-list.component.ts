import { Component, OnInit } from '@angular/core';
import { PhoneService } from '../../services/phone.service';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
})
export class PhoneListComponent implements OnInit {

  phoneList:Array<any>;
  constructor(public pS:PhoneService) { 
    this.pS.getList().subscribe(list => this.phoneList = list);
  }

  ngOnInit() {
  }

}
