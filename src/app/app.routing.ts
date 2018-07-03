
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';


const routes: Routes = [
    { path: '', loadChildren: './reddit/reddit.module#RedditModule' }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule,
        CoreModule
    ],
    providers: []
})

export class APP_ROUTING{}