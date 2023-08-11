import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { signUp } from '../data-type';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SellerService {
  isSellerloggedIn= new BehaviorSubject<boolean>(false)
  constructor(private http:HttpClient) { }
  userSignUp(data:signUp){
    this.http
    .post('http://localhost:3000/seller',data,{observe:'response'})
    .subscribe((result)=>{
      this.isSellerloggedIn.next(true);
      console.warn('result',result);

    });
    return false;
  }
}
