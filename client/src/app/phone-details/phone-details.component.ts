import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhoneService } from '../../services/phone.service';
import { StarsService } from '../../services/stars.service';

@Component({
  selector: 'app-phone-details',
  templateUrl: './phone-details.component.html',
  styleUrls: ['./phone-details.component.css']
})
export class PhoneDetailsComponent implements OnInit {

  phone:any;
  num_stars:number;
  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private phoneService:PhoneService,
    private starsSevice:StarsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getPhoneDetails(params['id']);
      this.getPhoneStars(params['id']);
    });
  }

  getPhoneStars(id){
    this.starsSevice.get(id).subscribe(a => {
      this.num_stars = a.length;
    })
  }

  addStar(){
    this.starsSevice.add(this.phone._id).subscribe( () => {
      this.getPhoneStars(this.phone._id)
    })
  }
  
  getPhoneDetails(id) {
    this.phoneService.get(id)
      .subscribe((phone) => {
        this.phone = phone;
      });
  }

  deletePhone(){
    this.phoneService.remove(this.phone._id).subscribe( m => {
      this.router.navigate(['/']);
    });
  }

}
