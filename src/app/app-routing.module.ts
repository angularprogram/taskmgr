import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    // { path: '', loadChildren: './login/login.module#LoginModule' },
    { path: 'project', redirectTo: '/project', pathMatch: 'full' },
    // { path: 'project', loadChildren: './project/project.module#ProjectModule' }
    { path: 'tasklists', redirectTo: '/tasklists', pathMatch: 'full' }
];

@NgModule({
    imports: [CommonModule, RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
