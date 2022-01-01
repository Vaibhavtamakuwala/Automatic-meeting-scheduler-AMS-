import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'knowyourkidz';
device='';
isMobile:boolean=false;
  constructor(){

    if(this.detectMob()){
      this.isMobile=true;
      this.device='Open from Mobile';
    }else{
      this.isMobile=false;
      this.device='Open from Desktop';
    }
  }

  start(){
    console.log("Fsd")
  }

   detectMob() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];
    
    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
}
}
