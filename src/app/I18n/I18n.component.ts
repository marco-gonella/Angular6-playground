import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-I18n',
  templateUrl: './I18n.component.html',
  styleUrls: ['./I18n.component.scss']
})
export class I18nComponent {
  
  constructor(public translate: TranslateService) {
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
  }

}
