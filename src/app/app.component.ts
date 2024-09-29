import { NavigationEnd, Router } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';
import * as AOS from 'aos';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})
export class AppComponent {
  close : boolean = true
  title = 'my-portfolio';
  constructor(private router : Router){
  }
  ngOnInit(){


    
    AOS.init();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.close = true;
      }
    });
  }
  
  
    
    
 
}
