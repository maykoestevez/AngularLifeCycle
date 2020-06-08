import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizCardComponent } from './quiz-card/quiz-card.component';


const routes: Routes = [
    { path: 'table', loadChildren: './table-test/table-test.module#TableTestModule' },
    { path: 'card', component: QuizCardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
