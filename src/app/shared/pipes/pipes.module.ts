import { NgModule } from '@angular/core';
import { RoundPipe } from './round.pipe';
import { ExponentialPipe } from './exponential.pipe';

@NgModule({
    declarations: [
        ExponentialPipe,
        RoundPipe
    ],
    exports: [
        RoundPipe,
        ExponentialPipe
    ]
})
export class PipesModule { }
