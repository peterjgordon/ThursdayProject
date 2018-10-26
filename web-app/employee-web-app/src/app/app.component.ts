import { Component, ViewChild } from '@angular/core';
import { NgbModule, NgbTabset } from '@ng-bootstrap/ng-bootstrap';
import { Employee } from './employee';
import { Router } from '@angular/router';
import { UpdateCityComponent } from './update-employee/update-employee.component';

@Component({
  selector: 'city-root',
  providers: [UpdateCityComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "My Wonderful City Application";  
  parentRouter: Router;
  update: UpdateCityComponent;

  constructor(parentRouter: Router, update: UpdateCityComponent){
    this.parentRouter = parentRouter;
    this.update = update;
  }

  @ViewChild('tabs')
  private tabs:NgbTabset;

  openForm(city: City): void{
    console.log(this.tabs);
    this.tabs.select("ngb-tab-2");
    this.update.sendData(city);
  }
}
