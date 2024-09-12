import { Component, inject } from '@angular/core';
import { ProfileService } from '../../../service/profile/profile.service';
import { AuthService } from '../../../service/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lists',
  standalone: true,
  imports: [],
  templateUrl: './lists.component.html',
  styleUrl: './lists.component.scss'
})
export class ListsComponent {
  profileService = inject(ProfileService);
  authService = inject(AuthService)
  route = inject(Router)

  logOut(): void{
    this.authService.logOut();
    this.route.navigate(['/']);
  }

  isShowHelp(){
    const currentValue = this.profileService.isHelpSubject.getValue()
    console.log(`current ${currentValue} change ${!currentValue}`);
    this.profileService.setHelp(!currentValue)
    
  }
  showSupportComponent(){
    const currentValue = this.profileService.isHelpSubject.getValue()
    console.log(`current ${currentValue} change ${!currentValue}`);
    this.profileService.setHelp(!currentValue)
    
  }
}
