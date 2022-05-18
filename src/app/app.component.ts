import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./custom.css']
})
export class AppComponent {
  public showAlert() : void {
    let msg = "You caused an event to be fired!";
    console.log(msg);
    alert(msg);
  }
}
