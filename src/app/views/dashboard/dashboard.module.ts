import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import {CardModule,  GridModule, TableModule,} from '@coreui/angular';
import { MatButtonModule } from '@angular/material/button';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {ProgressBarModule} from 'primeng/progressbar';

@NgModule({
  imports: [
    DashboardRoutingModule,
    CardModule,    
    CommonModule,
    GridModule,
    ReactiveFormsModule,
    TableModule,
    AccordionModule,
    MatButtonModule,
    ProgressBarModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule {
}
