import { slideInAnimation } from './animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ slideInAnimation ]
})
export class AppComponent {
  title = 'my-router02';
  getAnimationData(outlet: RouterOutlet): object {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
