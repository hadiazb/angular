import { Component } from '@angular/core';

@Component({
    selector: 'app-listado',
    templateUrl: './listado.component.html'
})

export class ListadoComponent {
    public heroes: string[] = ['Spidermen', 'Chavo', 'Superman']
    public heroesBorrado: string[] = [];

    public deleteHeroe() {
        if (this.heroes.length) {
            this.heroesBorrado.push(this.heroes.shift() || '')
        }
    }
}