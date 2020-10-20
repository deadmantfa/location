import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class LocationResolverService implements Resolve<any> {

  constructor(private apiService: ApiService) {
  }

  resolve(route: ActivatedRouteSnapshot): any {
    return this.apiService.getCurrentUserCity('https://api.ipregistry.co/?key=upcrg15n4yu7fd&fields=location.city');
  }
}
