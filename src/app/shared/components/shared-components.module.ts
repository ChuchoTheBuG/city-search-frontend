import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SearchComponent } from './search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AppPopupComponent } from './app-popup/app-popup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { NgxSpinnerModule } from "ngx-spinner";
import { MatSnackBarModule } from '@angular/material/snack-bar';



const components = [
  LayoutComponent,
  HeaderComponent,
  SidenavComponent,
  SearchComponent,
  AppPopupComponent
]

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    BreadcrumbModule,
    NgxSpinnerModule,
    MatSnackBarModule
  ]
})
export class SharedComponentsModule { }
