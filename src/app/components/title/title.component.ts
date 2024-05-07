import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource,MatTableModule } from '@angular/material/table';
import { Person } from '../../models';
import { Personas } from '../../data';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
@Component({
  selector: 'app-title',
  standalone: true,
  imports: [MatTableModule,MatFormFieldModule,MatPaginatorModule,MatInputModule,MatSortModule],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss'
})
export class TitleComponent implements OnInit{
  displayedColums: string[] = ['id','name', 'categoria', 'compania', 'felicidad'];
  dataSource: MatTableDataSource<Person>;
  personas = Personas;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) set matSort(sort: MatSort) {
    this.dataSource.sort = sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(){
    this.dataSource = new MatTableDataSource(Personas);
  }

  ngOnInit(){
  }

  
}
