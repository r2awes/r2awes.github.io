import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './comps/project/project.component';
import { AppComponent } from './app.component';
import { CliComponent } from './comps/cli/cli.component';
import { TextComponent } from './comps/text/text.component';
import { ContactsComponent } from './comps/contacts/contacts.component';

const routes: Routes = [
	{
		path: '',
		component: TextComponent,
	},
	{
		path: 'about',
		component: TextComponent
	},
	{
		path: 'contact',
		component: ContactsComponent
	},
	{
		path: 'projects',
		component: ProjectComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
