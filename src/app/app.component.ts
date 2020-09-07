import {Component, Inject} from '@angular/core';
import {L10N_LOCALE, L10nLocale, L10nTranslationService} from 'angular-l10n';

@Component({
  selector: 'agd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(@Inject(L10N_LOCALE) public locale: L10nLocale, private translationService: L10nTranslationService) {
    this.translationService.setLocale({language: 'ru'});
  }
}
