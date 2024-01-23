import { Component } from '@angular/core';
import { Alumnos } from '../../models';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-baja-alumnos',
  templateUrl: './baja-alumnos.component.html',
  styleUrl: './baja-alumnos.component.scss'
})
export class BajaAlumnosComponent {
  dataSource = new MatTableDataSource;
  eliminarAlumnos(element: Alumnos): void{
    const alumnoAEliminar = element.firstName
    if(alumnoAEliminar) {
      this.dataSource.data= listaAlumnos.filter((alumno) => alumno.firstName != alumnoAEliminar)
    }
    // const alumnoAEliminar = listaAlumnos.findIndex(obj => obj === element);
    // if (alumnoAEliminar >= 0) {
    //   this.dataSource.data = listaAlumnos.filter((alumnoAEliminar) => alumnoAEliminar.firstName != element.firstName)
    //   console.log(listaAlumnos)
      // listaAlumnos.splice(alumnoAEliminar, 1);
      // this.dataSource.data = [...listaAlumnos]; 
      // alumnoAEliminar = alumnoAEliminar.filter((nombreAlumno) => nombreAlumno.firstName != nombreEmpleadoAEliminar.firstName)
    // }
  }
}
