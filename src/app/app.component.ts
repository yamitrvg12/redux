import { Component } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from 'app/store';
import { INCREMENT } from 'app/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  counter = 0;

  constructor(private ngRedux: NgRedux<IAppState>) {
  }

  onIncrement() {
    // Dispatch an action
    // action: simple object that has a typ property ex:(INCREMENT)
    this.ngRedux.dispatch({
      type: INCREMENT
    });
  }
}
