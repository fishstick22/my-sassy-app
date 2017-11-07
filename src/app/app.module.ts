import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,
         ReactiveFormsModule }    from '@angular/forms';
import { NgModule }      from '@angular/core';
import { NgbModule }     from '@ng-bootstrap/ng-bootstrap';

import { ClickOutsideModule } from 'ng-click-outside';
import { NgDragDropModule } from 'ng-drag-drop';

import { AppComponent }  from './app.component';
import { TestBootstrapScssComponent } from './components/test-bootstrap-scss/test-bootstrap-scss.component';
import { PopoverTplcontentComponent } from './components/popover-tplcontent/popover-tplcontent.component';
import { TestDragDropComponent } from './components/test-drag-drop/test-drag-drop.component';

@NgModule({
  declarations: [
    AppComponent,
    TestBootstrapScssComponent,
    PopoverTplcontentComponent,
    TestDragDropComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ClickOutsideModule,
    NgbModule.forRoot(),
    NgDragDropModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
