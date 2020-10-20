import {BrowserModule, BrowserTransferStateModule} from '@angular/platform-browser';
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
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
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
    NotfoundComponent,
    AboutComponent
  ],
  imports: [
    TransferHttpCacheModule,
    HttpClientModule,
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    AppRoutingModule,
    RouterModule.forRoot(routes),
    BrowserTransferStateModule
  ],
  providers: [
    ApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
