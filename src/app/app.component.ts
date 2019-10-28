import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  
  constructor(
  public translate: TranslateService,
) {
  // NGX Translate
  
  translate.setDefaultLang('it');
  translate.use('it');
}
}
