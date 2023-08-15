import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
export const authGuard: CanActivateFn = (route, state) => {

  let _router = inject(Router);
  let isSellerloggedIn = localStorage.getItem('isSellerlogedin');
  if (isSellerloggedIn == 'false') {
    alert("not Authenticated user !!");
    _router.navigate(['seller-home']);
    return false;
  }

  return true;


};
