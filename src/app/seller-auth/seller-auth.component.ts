import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { signUp } from '../data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {
  constructor(private seller:SellerService, private router:Router){}
  showLogin=false;
  authError:string='';
  
  ngOnInit(): void {
   this.seller.reloadseller()
  }
  signUp(data:signUp): void {
    console.warn(data);
   this.seller.userSignUp(data)
  }
  login(data:signUp): void {
    //console.warn(data);
    this.authError="";

    this.seller.userSignUp(data);
    this.seller.isloginError.subscribe((isError)=>{
      if (isError){
        this.authError="Email or Password is not correct"
      }

  });
     }
  openLogin(){
    this.showLogin=true

  }
  openSignup(){
    this.showLogin=false
  }

}
