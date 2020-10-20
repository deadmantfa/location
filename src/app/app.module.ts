import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {NotfoundComponent} from './notfound/notfound.component';
import {PathresolverService} from './pathresolver.service';
import {LocationResolverService} from './location-resolver.service';
import {ApiService} from './api.service';
import {HttpClientModule} from '@angular/common/http';
import {TransferHttpCacheModule} from '@nguniversal/common';


const routes: Routes = [
  {
    path: '',
    resolve: {
      path: LocationResolverService
    },
    component: HomeComponent
  },
  {
    path: '**',
    resolve: {
      path: PathresolverService
    },
    component: NotfoundComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotfoundComponent
  ],
  imports: [
    TransferHttpCacheModule,
    HttpClientModule,
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
