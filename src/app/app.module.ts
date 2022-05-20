import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChildComponent } from './child.component';
import { MessageComponent } from './message.component';
import { ColorChangeDirective } from './app.directive';

@NgModule({
  declarations: [
    AppComponent, ChildComponent, MessageComponent, ColorChangeDirective
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
