import { Component } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html'
})

export class HeroeComponent {
    public name: string = 'Hugo';
    public edad: number = 40;

    public get nombreCapitalizado(): string {
        return this.name.toUpperCase()
    }

    public obtenerNombre(): string {
        return `${this.name} - ${this.edad}`
    }

    public cambiarNombre(): void {
        this.name = "Spiderman"
    }

    public cambiarEdad(): void {
        this.edad = 60
    }
}