import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { TableColumnComponent } from './table/table-column/table-column.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TableColumnComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
