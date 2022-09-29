import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { City } from '../Interfaces/responseCity';
import * as moment from 'moment';
import 'moment/locale/es';

@Component({
  selector: 'app-app-popup',
  templateUrl: './app-popup.component.html',
  styleUrls: ['./app-popup.component.sass']
})
export class AppPopupComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: City,
    public dialogRef: MatDialogRef<AppPopupComponent>
  ) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close(false);
  }

  convertToDate(int : number){
    return moment.unix(int).format("L");
  }

  convertToCentigrade(kelvin : number){
    return (kelvin - 272.15 ).toPrecision(4)
  }

  convertToTimeZone(int : number){
    return moment.unix(int).format("ZZ");
  }

  convertToHours(int : number){
    return moment.unix(int).format("LTS");
  }

  convertToKH(mtrs : number){
    return (mtrs * 3.6).toPrecision(4)
  }

  convertToDirection(direction : number){
    if(direction >= 0 && direction <45) return "Norte (viento Norte)";
    if(direction > 45 && direction <90) return "Noreste (viento Noreste)";
    if(direction > 90 && direction <135) return "Leste (viento Leste)";
    if(direction > 135 && direction <180) return "Norte";
    if(direction > 180 && direction <225) return "Norte";
    if(direction > 225 && direction <270) return "Norte";
    if(direction > 270 && direction <315) return "Norte";
    if(direction > 315 && direction <=360) return "Norte";
    else return "None";
  }

}

