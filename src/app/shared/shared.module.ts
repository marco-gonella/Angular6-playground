import { NgModule } from '@angular/core';
import { PipesModule } from './pipes/pipes.module';
import { ClickMeDirective } from './directives/clickme.directive';

@NgModule({
    declarations: [
        ClickMeDirective
    ],
    exports: [
        ClickMeDirective,
        PipesModule
    ]
})
export class SharedModule {}
