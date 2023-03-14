import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import {  PERFECT_SCROLLBAR_CONFIG,  PerfectScrollbarConfigInterface,  PerfectScrollbarModule,} from 'ngx-perfect-scrollbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DefaultFooterComponent,DefaultHeaderComponent,DefaultLayoutComponent,} from './containers';
import {AvatarModule,BadgeModule,BreadcrumbModule,ButtonGroupModule,ButtonModule,CardModule,DropdownModule,FooterModule,FormModule,GridModule,HeaderModule,ListGroupModule,NavModule,ProgressModule,SharedModule,SidebarModule,TabsModule,UtilitiesModule,} from '@coreui/angular';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { UsersComponent } from './views/users/users.component';
import { ProfileComponent } from './views/profile/profile.component';
import { AddassetsComponent } from './views/Cars/addassets.component';
import { AddinfoComponent } from './views/addinfo/addinfo.component';
import { CustomThemeComponent } from './views/custom-theme/custom-theme.component';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};
import {TokenInterceptor} from "./services/http-interceptor.service"
const APP_CONTAINERS = [DefaultFooterComponent,DefaultHeaderComponent,DefaultLayoutComponent,];
import {AuthGuard} from "./services/auth.guard"
import { NgProgressHttpModule } from "ngx-progressbar/http";
import { NgProgressModule } from "ngx-progressbar";
@NgModule({
  declarations: [AppComponent, ...APP_CONTAINERS, UsersComponent, ProfileComponent, AddassetsComponent, AddinfoComponent, CustomThemeComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AvatarModule,
    BreadcrumbModule,
    FooterModule,
    DropdownModule,
    GridModule,
    HeaderModule,
    SidebarModule,
    IconModule,
    PerfectScrollbarModule,
    NavModule,
    ButtonModule,
    FormModule,
    UtilitiesModule,
    ButtonGroupModule,
    ReactiveFormsModule,
    SidebarModule,
    SharedModule,
    TabsModule,
    ListGroupModule,
    ProgressModule,
    BadgeModule,
    ListGroupModule,
    CardModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatSelectModule,
    MatRadioModule,
    MatButtonModule,
    FileUploadModule,
HttpClientModule,
NgProgressHttpModule,
NgProgressModule
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: TokenInterceptor,
    //   multi: true
    // },
    IconSetService,
    Title,
    AuthGuard
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
