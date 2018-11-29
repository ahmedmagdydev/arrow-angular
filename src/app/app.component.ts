import { Component, LOCALE_ID, Inject} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  constructor(
    @Inject(LOCALE_ID) public readonly localeId
  ) {
  }
}
