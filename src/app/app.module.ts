import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './pages/acceuil/acceuil.component';
import { BreadcrumbComponent } from './index/breadcrumb/breadcrumb.component';
import { FooterComponent } from './index/footer/footer.component';
import { MenuComponent } from './index/menu/menu.component';
import { SidemenuComponent } from './index/sidemenu/sidemenu.component';
import { TopbarComponent } from './index/topbar/topbar.component';
import { SmallboxComponent } from './component/box/smallbox/smallbox.component';
import { AgencesComponent } from './pages/agences/agences.component';
import { AgenceComponent } from './pages/agence/agence.component';
import { FavorisComponent } from './pages/favoris/favoris.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { TicketsComponent } from './pages/tickets/tickets.component';
import { TicketComponent } from './pages/ticket/ticket.component';
import { FulltableComponent } from './component/table/fulltable/fulltable.component';
import { TestComponent } from './component/test/test.component';
import { InfoboxComponent } from './component/box/infobox/infobox.component';
import { Infobox2Component } from './component/box/infobox2/infobox2.component';
import { TodolistComponent } from './component/card/todolist/todolist.component';
import { OrderComponent } from './component/card/order/order.component';
import { ProductsComponent } from './component/card/products/products.component';
import { SimplecardComponent } from './component/card/simplecard/simplecard.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ProjectComponent } from './pages/project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    BreadcrumbComponent,
    FooterComponent,
    MenuComponent,
    SidemenuComponent,
    TopbarComponent,
    SmallboxComponent,
    AgencesComponent,
    AgenceComponent,
    FavorisComponent,
    SettingsComponent,
    LoginComponent,
    RegisterComponent,
    TicketsComponent,
    TicketComponent,
    FulltableComponent,
    TestComponent,
    InfoboxComponent,
    Infobox2Component,
    TodolistComponent,
    OrderComponent,
    ProductsComponent,
    SimplecardComponent,
    AdminComponent,
    ProjectComponent
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
