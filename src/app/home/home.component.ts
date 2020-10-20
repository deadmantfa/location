import {Component, OnInit} from '@angular/core';
import {take} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentCity: string;

  constructor(private route: ActivatedRoute, private location: Location) {
  }

  ngOnInit() {
    this.route.data.pipe(take(1))
      .subscribe((data: { path: any }) => {
        this.currentCity = data.path.location.city;
      });
    this.location.replaceState(this.currentCity);
  }

}
