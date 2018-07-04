
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';


const routes: Routes = [
    { path: '', loadChildren: './reddit/reddit.module#RedditModule' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    providers: []
})

export class APP_ROUTING { }