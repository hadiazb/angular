import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
    <h1>{{ title }}</h1>
    <h3>
        La base es: <strong>{{ base }}</strong>
    </h3>

    <button (click)="add(-base)">-{{base}}</button>
    <span>{{ numero }}</span>
    <button (click)="add(base)">+{{base}}</button>
    `,
})

export class ContadorComponent {
    public title: string = 'Contador App'
    public numero: number = 0
    public base: number = 10;


    public add(value: number): number {
        this.numero += value
        return this.numero
    }
}