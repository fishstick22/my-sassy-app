import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { NgbModule }     from '@ng-bootstrap/ng-bootstrap';

import { AppComponent }  from './app.component';
import { TestBootstrapScssComponent } from './components/test-bootstrap-scss/test-bootstrap-scss.component';

@NgModule({
  declarations: [
    AppComponent,
    TestBootstrapScssComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
