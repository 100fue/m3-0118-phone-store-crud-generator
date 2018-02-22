import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { PhoneDetailsComponent } from './phone-details/phone-details.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PhoneService } from '../services/phone.service';
import { StarsService } from '../services/stars.service';

@NgModule({
  declarations: [
    AppComponent,
    PhoneListComponent,
    PhoneDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule,
  ],
  providers: [PhoneService, StarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
