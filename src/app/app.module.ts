import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { Group, Project, Folder } from './classes';
import { ProjectComponent } from './comps/project/project.component';
import { DimensionsDirective } from './directives/dimensions.directive';
import { CliComponent } from './comps/cli/cli.component';
import { GuideComponent } from './comps/guide/guide.component';
import { FilterPipe } from './pipes/filter.pipe';
import { TextComponent } from './comps/text/text.component';
import { ContactsComponent } from './comps/contacts/contacts.component';


@NgModule({
  declarations: [
    AppComponent,
    TruncatePipe,
    ProjectComponent,
    DimensionsDirective,
    CliComponent,
    GuideComponent,
    FilterPipe,
    TextComponent,
    ContactsComponent,
  ],
  imports: [
		BrowserModule,
		FormsModule,
    AppRoutingModule
  ],
  providers: [ Folder ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
