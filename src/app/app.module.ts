import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {
  HeaderComponent,
  FooterComponent,
  LogoComponent,
  ButtonComponent,
  NavigationComponent,
  SearchFieldComponent,
  ShowItemComponent,
  SpinnerComponent,
  PaginationComponent,
  FilterBlockComponent,
  HomeLinkComponent,
  RangeSelectorComponent,
} from './components';

import {
  HomePageComponent,
  MoviesPageComponent,
  SeriesPageComponent,
} from './pages';

import { SearchPipe, FilterPipe } from './pipes';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    HeaderComponent,
    FooterComponent,
    SearchFieldComponent,
    LogoComponent,
    NavigationComponent,
    ShowItemComponent,
    SpinnerComponent,
    PaginationComponent,
    FilterBlockComponent,
    HomeLinkComponent,
    RangeSelectorComponent,

    HomePageComponent,
    MoviesPageComponent,
    SeriesPageComponent,

    SearchPipe,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
