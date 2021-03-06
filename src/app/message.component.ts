import { Component, Input } from '@angular/core';

@Component({
  selector: 'message-info',
  templateUrl: './message.component.html',
  styleUrls: ['./custom.css']
})
export class MessageComponent {
  @Input() public message: string = "";
  @Input("alert-pop") public message1: string = "";

  public showAlert(): void {
    alert(this.message1);
  }
}