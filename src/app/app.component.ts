import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./custom.css']
})
export class AppComponent {
  public val: string = "This is an alert popup message";
}
