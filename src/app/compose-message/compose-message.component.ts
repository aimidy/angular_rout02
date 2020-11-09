import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compose-message',
  templateUrl: './compose-message.component.html',
  styleUrls: ['./compose-message.component.css']
})
export class ComposeMessageComponent implements OnInit {
  details: string;
  message: string;
  sending = false;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  send(): void{
    this.sending = true;
    this.details = 'Sending Message...';

    setTimeout(() => {
      this.sending = false;
      this.colsePopup();
    }, 1000);
  }

  cancel(): void{
    this.colsePopup();
  }

  colsePopup(): void{
    this.router.navigate([{outlets: { popup: null } }]);
  }

}
