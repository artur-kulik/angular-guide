import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LocalizationModule} from './localization/localization.module';
import {L10nTranslationModule} from 'angular-l10n';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LocalizationModule,
    L10nTranslationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
