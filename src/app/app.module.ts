import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {SocketIoModule, SocketIoConfig} from 'ngx-socket-io';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {DataCardComponent} from './data-card/data-card.component';
import {ChartsModule} from '@progress/kendo-angular-charts';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import {PopulationChartComponent} from './population-chart/population-chart.component';
import {PopulationGridComponent} from './population-grid/population-grid.component';
import {GridModule} from '@progress/kendo-angular-grid';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';



const socketConfig: SocketIoConfig = {
  url: 'http://localhost:4000',
};

@NgModule({
  declarations: [AppComponent, HeaderComponent, DataCardComponent, PopulationChartComponent, PopulationGridComponent],
  imports: [BrowserModule, SocketIoModule.forRoot(socketConfig), ChartsModule, BrowserAnimationsModule, GridModule, DropDownsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
