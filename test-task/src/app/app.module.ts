import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { TableColumnComponent } from './table/table-column/table-column.component';
import { FilterPanelComponent } from './table/filter-panel/filter-panel.component';
import { FilterButtonComponent } from './table/filter-panel/filter-button/filter-button.component';
import { TooltipComponent } from './table/tooltip/tooltip.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TableColumnComponent,
    FilterPanelComponent,
    FilterButtonComponent,
    TooltipComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
