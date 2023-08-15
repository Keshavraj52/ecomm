import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  menuType: string='default';
  constructor(private route:Router){}
  ngOInit(): void {
    this.route.events.subscribe((val:any)=>{
      if(val.url){
        if(localStorage.getItem('seller') && val.url.includes('seller')){
          console.warn("in seller area")
          this.menuType="seller"

        }else{
          console.warn("outside seller")
          this.menuType="default"
        }
      }

    })
  }

}
