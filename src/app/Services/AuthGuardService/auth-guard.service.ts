import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthencationService } from '../AuthencationService/authencation.service';
import { OpenModelService } from '../OpenModelService/open-model.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private authService: AuthencationService, private router: Router,private openModel:OpenModelService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log("MENTOR");
      console.log(this.authService.isAuthenticated());
    if (this.authService.isAuthenticated()===true) {
      console.log("MENTOR");
      return true;
    } else {
    
      this.openModel.openLoginModal();
     // this.router.navigate(['/login']);
      return false;
    }
  }
}