import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  ngOnInit(){
    document.body.classList.add('no-scroll');
  }
  
  ngOnDestroy(){
    document.body.classList.remove('no-scroll');
  }
}
