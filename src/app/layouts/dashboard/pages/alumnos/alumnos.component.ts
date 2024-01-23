import { Component } from '@angular/core';
import { Alumnos } from './models';
import { MatTableDataSource } from '@angular/material/table';


const listaAlumnos: Alumnos[] = [
  {id: 1, firstName: 'Leandro', lastName: 'Ramis', phone: 1138459874, email: 'leandro@gmail.com', password: 'racing2023'},
  {id: 2, firstName: 'Alejandro', lastName: 'Tarutani', phone: 1173959385, email: 'atarutani@gmail.com', password: 'mateo2022'},
  {id: 3, firstName: 'Lucas', lastName: 'Nabarro', phone: 1165290665, email: 'lucas@gmail.com', password: 'juegosonline'}
];



@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.scss'
})
export class AlumnosComponent {
  displayedColumns: string[] = ['id', 'fullName', 'phone', 'email', 'delete'];
  dataSource = new MatTableDataSource<Alumnos>(listaAlumnos);

  onUserSubmitted(ev: Alumnos): void {
    const nuevoAlumno = {...ev, id: listaAlumnos.length +1}
    if(nuevoAlumno) {
      listaAlumnos.push(nuevoAlumno)
    }
    // this.dataSource.data= [...listaAlumnos, {...ev, id: listaAlumnos.length + 1}]
    // listaAlumnos.push(ev)
  }
  // eliminarAlumnos(element: Alumnos): void{
  //   const alumnoAEliminar = element.firstName
  //   if(alumnoAEliminar) {
  //     this.dataSource.data= listaAlumnos.filter((alumno) => alumno.firstName != alumnoAEliminar)
  //   }
  //   // const alumnoAEliminar = listaAlumnos.findIndex(obj => obj === element);
  //   // if (alumnoAEliminar >= 0) {
  //   //   this.dataSource.data = listaAlumnos.filter((alumnoAEliminar) => alumnoAEliminar.firstName != element.firstName)
  //   //   console.log(listaAlumnos)
  //     // listaAlumnos.splice(alumnoAEliminar, 1);
  //     // this.dataSource.data = [...listaAlumnos]; 
  //     // alumnoAEliminar = alumnoAEliminar.filter((nombreAlumno) => nombreAlumno.firstName != nombreEmpleadoAEliminar.firstName)
  //   // }
  // }
}

