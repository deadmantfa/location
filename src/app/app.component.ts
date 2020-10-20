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
        path: 'mumbai',
        resolve: {
          path: LocationResolverService
        },
        component: HomeComponent
      },
      {
        path: 'bengaluru',
        resolve: {
          path: LocationResolverService
        },
        component: HomeComponent
      }
    );

    this.links.push(
      {text: 'mumbai', path: 'mumbai'},
      {text: 'bengaluru', path: 'bengaluru'},
    );

  }
}
