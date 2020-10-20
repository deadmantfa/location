import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LocationResolverService} from './location-resolver.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'location';
  links: Array<{ text: string, path: string }> = [];

  constructor(private router: Router) {

    this.router.config.unshift(
      {
        path: 'Mumbai',
        resolve: {
          path: LocationResolverService
        },
        component: HomeComponent
      },
      {
        path: 'Bengaluru',
        resolve: {
          path: LocationResolverService
        },
        component: HomeComponent
      }
    );

    this.links.push(
      {text: 'Mumbai', path: 'Mumbai'},
      {text: 'Bengaluru', path: 'Bengaluru'},
    );

  }
}
