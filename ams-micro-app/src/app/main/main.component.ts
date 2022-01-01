import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Browser } from '@syncfusion/ej2-base';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';
import { LoginService } from '../http-services/login/login.service';
import { User } from '../model/login/user';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements AfterViewInit {
  @ViewChild('sideBar')
  public showBackdrop = false;
  public closeOnDocumentClick = false;
  user: User;

  constructor(private loginService: LoginService) {
    document.body.classList.add('main-page');
    if (Browser.isDevice) {
      this.showBackdrop = true;
      this.closeOnDocumentClick = true;
    }
    this.user = this.loginService.userValue;
  }

  ngAfterViewInit(): void {
    if (Browser.isDevice) {
      document.querySelector('.planner-header')?.classList.add('device-header');
      document.querySelector('.planner-wrapper')?.classList.add('device-wrapper');
    }
  }

  btnClick(): void {
  
  }

  onItemClick(args: any): void {
    if (Browser.isDevice) {
    
    }
    const elements: HTMLElement[] = args.currentTarget.parentElement.querySelectorAll('.active-item');
    elements.forEach(element => {
      if (element.classList.contains('active-item')) { element.classList.remove('active-item'); }
    });
    args.currentTarget.classList.add('active-item');
    
  }
  
}
