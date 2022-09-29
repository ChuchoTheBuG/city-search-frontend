import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { CitiesService } from '../../services/cities.service';
import { AppPopupService } from '../app-popup/app-popup.service';
import { City } from '../Interfaces/responseCity';
import * as moment from 'moment';
import 'moment/locale/es';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {
  
  formSearchCity :  FormGroup = this.fb.group({
    city : ['', Validators.required]
  })
  displayedColumns = ['id','name', 'temp','weather','timezone','showDataAll'];
  data :any ;
  dataArray : City[] = [];
  @ViewChild(MatPaginator) paginator?: MatPaginator;

  constructor( 
    private fb: FormBuilder,
    private citiesService : CitiesService,
    private popService : AppPopupService,
    private spinner : NgxSpinnerService,
    private snack : MatSnackBar
  ) { }

  ngOnInit(): void {
    this.data = new MatTableDataSource();
  }

  ngAfterViewInit() {
    this.data.paginator = this.paginator;
  }

  showSearch(){
    return !this.formSearchCity.valid
  }

  search(){
    this.spinner.show();
    this.dataArray = [];
    this.citiesService.getCity(this.formSearchCity.controls['city'].value).subscribe({
      next:((value)=> {
        this.dataArray.push(value);
        this.data = new MatTableDataSource(this.dataArray);
        this.data.paginator = this.paginator;
        this.spinner.hide();
      }),
      error:((err)=> {
        this.data = new MatTableDataSource();
        this.spinner.hide();
        this.snack.open(err.error.message,'Ok',{duration:5000})})
    });
  }

  showAll(city : City){
    this.popService.open(city);
  }

  convertToCentigrade(kelvin : number){
    return (kelvin - 272.15 ).toPrecision(4);
  }

  convertToTimeZone(int : number){
    return moment.unix(int).format("Z");
  }

}
