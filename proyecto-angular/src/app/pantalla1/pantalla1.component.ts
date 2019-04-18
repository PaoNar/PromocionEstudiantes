import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pantalla1',
  templateUrl: './pantalla1.component.html',
  styleUrls: ['./pantalla1.component.css']
})
export class Pantalla1Component implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  selected = 'option2';
  displayedColumns = ['Nivel', 'Nombres', 'Aprobados', 'Reprobados'];
  dataSource = ELEMENT_DATA;
}

export interface PeriodicElement {
  Nombres: string;
  Nivel: number;
  Aprobados: number;
  Reprobados: number ;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {Nivel: 1, Nombres: 'Hydrogen', Aprobados: 1.0079, Reprobados: 1},
  {Nivel: 2, Nombres: 'Helium', Aprobados: 4.0026, Reprobados: 2},
  {Nivel: 3, Nombres: 'Lithium', Aprobados: 6.941, Reprobados: 2},
  {Nivel: 4, Nombres: 'Beryllium', Aprobados: 9.0122, Reprobados: 1},
  {Nivel: 5, Nombres: 'Boron', Aprobados: 10.811, Reprobados: 4},
  {Nivel: 6, Nombres: 'Carbon', Aprobados: 12.0107, Reprobados: 4}
]



  


