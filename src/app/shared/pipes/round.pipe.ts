import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'round', pure: false })
export class RoundPipe implements PipeTransform {
    transform(value: number): number {
        console.error("pipe fn")
        return Math.round(value);
    }
}