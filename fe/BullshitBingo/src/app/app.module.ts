import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GameScoreComponent } from './game/game-score/game-score.component';
import { TitlePageComponent } from './title-page/title-page.component';
import { GameFieldComponent } from './game/game-field/game-field.component';
import { GameItemComponent } from './game/game-item/game-item.component';
import { ChangelogComponent } from './title-page/changelog/changelog.component';
import { HttpClientModule } from '@angular/common/http';
import { MarkedPipe } from './pipes/marked.pipe';


const appRoutes: Routes = [
  { path: '', component: TitlePageComponent },
  { path: 'game', component: GameFieldComponent },
  { path: 'score', component: GameScoreComponent },
  { path: 'changelog', component: ChangelogComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    GameScoreComponent,
    TitlePageComponent,
    GameFieldComponent,
    GameItemComponent,
    ChangelogComponent,
    MarkedPipe
  ],
  imports: [
    RouterModule.forRoot(appRoutes, { enableTracing: false }),
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
