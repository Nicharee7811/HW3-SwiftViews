import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SwNavBarComponent } from './swnavbar.component';
import { SwHeroBannerComponent } from './swherobanner.component';
import { SwSearchBarComponent } from './swsearchbar.component';
import { SwCategoryComponent } from './swcategory.component';

@NgModule({
    declarations: [
     SwNavBarComponent,
     SwHeroBannerComponent,
     SwSearchBarComponent,
     SwCategoryComponent
    ],
    imports: [
      BrowserModule
    ],
    providers: [],
    bootstrap: [SwNavBarComponent]
  })

export class SwHomeComponent {
   
    constructor() {
    }
}