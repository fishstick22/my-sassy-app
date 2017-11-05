import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { NgbModule }     from '@ng-bootstrap/ng-bootstrap';

import { ClickOutsideModule } from 'ng-click-outside';

import { AppComponent }  from './app.component';
import { TestBootstrapScssComponent } from './components/test-bootstrap-scss/test-bootstrap-scss.component';
import { PopoverTplcontentComponent } from './components/popover-tplcontent/popover-tplcontent.component';

@NgModule({
  declarations: [
    AppComponent,
    TestBootstrapScssComponent,
    PopoverTplcontentComponent
  ],
  imports: [
    BrowserModule,
    ClickOutsideModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
