import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  isHelpSubject = new BehaviorSubject<boolean>(false);
  showHelp$ = this.isHelpSubject.asObservable(); 
  // isSHowLists:boolean = true
  // isSHowUser :boolean = true
  // IsshowMenu:boolean = true
  // isSHowPromo:boolean = false
  // isShowInvite:boolean = false
  // IsshowSupport:boolean = false
  // IsshowHistory:boolean = false
  setHelp(value:boolean){
    this.isHelpSubject.next(value);
  }
  showSupport(){
   const isSHowLists = true
   const isSHowUser  = true
   const IsshowMenu = true
   const isSHowPromo = false
   const isShowInvite = false
   const IsshowSupport = false
   const IsshowHistory = false
  }
}
