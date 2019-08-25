import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreadcrumbComponent } from './index/breadcrumb/breadcrumb.component';
import { FooterComponent } from './index/footer/footer.component';
import { MenuComponent } from './index/menu/menu.component';
import { SidemenuComponent } from './index/sidemenu/sidemenu.component';
import { TopbarComponent } from './index/topbar/topbar.component';
import { SmallboxComponent } from './component/box/smallbox/smallbox.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { FulltableComponent } from './component/table/fulltable/fulltable.component';
import { InfoboxComponent } from './component/box/infobox/infobox.component';
import { Infobox2Component } from './component/box/infobox2/infobox2.component';
import { TodolistComponent } from './component/card/todolist/todolist.component';
import { OrderComponent } from './component/card/order/order.component';
import { ProductsComponent } from './component/card/products/products.component';
import { SimplecardComponent } from './component/card/simplecard/simplecard.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ProjectComponent } from './pages/project/project.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbComponent,
    FooterComponent,
    MenuComponent,
    SidemenuComponent,
    TopbarComponent,
    SmallboxComponent,
    LoginComponent,
    RegisterComponent,
    FulltableComponent,
    InfoboxComponent,
    Infobox2Component,
    TodolistComponent,
    OrderComponent,
    ProductsComponent,
    SimplecardComponent,
    AdminComponent,
    ProjectComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
