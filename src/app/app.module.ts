import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgDmTableModule } from './components/table.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgDmTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
