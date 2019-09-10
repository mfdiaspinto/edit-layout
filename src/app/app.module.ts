import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatNativeDateModule } from '@angular/material/core';
import { DemoMaterialModule } from './test-materials.module';

import { EditLayoutComponent } from './components/edit-layout/edit-layout.component';
import { TestComponentComponent } from './components/test-component/test-component.component';
import { Test2ComponentComponent } from './components/test2-component/test2-component.component';

import { DynamicComponent } from './components/dynamic-component/dynamic-component.component';
import { DynamicComponentDirective } from './directives/dynamic-component.directive';


@NgModule({
  declarations: [
    AppComponent,
    EditLayoutComponent,
    DynamicComponent,
    DynamicComponentDirective,
    TestComponentComponent,
    Test2ComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    DemoMaterialModule,
    AppRoutingModule
  ],
  providers: [],
  entryComponents: [
    TestComponentComponent,
    Test2ComponentComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
