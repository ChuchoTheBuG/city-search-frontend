import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { City } from '../Interfaces/responseCity';

import { AppPopupComponent } from './app-popup.component';

@Injectable({
  providedIn: 'root'
})
export class AppPopupService {
  dialogRef?: MatDialogRef<AppPopupComponent>;

  constructor(private dialog: MatDialog) { }

  public open( popupValor: City ): Observable<any> {
    this.dialogRef = this.dialog.open(AppPopupComponent, { width: '500px', disableClose: true })
    this.dialogRef.componentInstance.data = popupValor;
    return this.dialogRef.afterClosed();
  }

  public close() {
    if (this.dialogRef)
      this.dialogRef.close();
  }

}
