import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'kykz-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss']
})
export class SplashScreenComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    
    setTimeout(() => {
     this.navigateToLogin();
    }, 5000);
  }

  navigateToLogin() {
    this.router.navigateByUrl('/login');
 }

}
