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
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { FulltableComponent } from './component/table/fulltable/fulltable.component';
import { TodolistComponent } from './component/card/todolist/todolist.component';
import { OrderComponent } from './component/card/order/order.component';
import { ProductsComponent } from './component/card/products/products.component';
import { SimplecardComponent } from './component/card/simplecard/simplecard.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ProjectComponent } from './pages/project/project.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Socialwidget1Component } from './component/card/socialwidget1/socialwidget1.component';
import { Socialwidget2Component } from './component/card/socialwidget2/socialwidget2.component';
import { Socialwidget3Component } from './component/card/socialwidget3/socialwidget3.component';
import { ChatComponent } from './component/card/chat/chat.component';
import { AreaComponent } from './component/chart/area/area.component';
import { LineComponent } from './component/chart/line/line.component';
import { DonutComponent } from './component/chart/donut/donut.component';
import { BarComponent } from './component/chart/bar/bar.component';
import { PieComponent } from './component/chart/pie/pie.component';
import { StackedbarComponent } from './component/chart/stackedbar/stackedbar.component';
import { TabComponent } from './component/tab/tab/tab.component';
import { ResponsiveHoverTableComponent } from './component/table/responsive-hover-table/responsive-hover-table.component';
import { BorderedTableComponent } from './component/table/bordered-table/bordered-table.component';
import { LeftSidedTabComponent } from './component/tab/left-sided-tab/left-sided-tab.component';
import { MailFoldersComponent } from './component/mail/mail-folders/mail-folders.component';
import { MailInboxComponent } from './component/mail/mail-inbox/mail-inbox.component';
import { MailComposeComponent } from './component/mail/mail-compose/mail-compose.component';
import { MailReadComponent } from './component/mail/mail-read/mail-read.component';
import { ProfileInfoComponent } from './component/profile/profile-info/profile-info.component';
import { ProfileAboutComponent } from './component/profile/profile-about/profile-about.component';
import { ProfileActivityComponent } from './component/profile/profile-activity/profile-activity.component';
import { ProfileTimelineComponent } from './component/profile/profile-timeline/profile-timeline.component';
import { ProfileSettingsComponent } from './component/profile/profile-settings/profile-settings.component';
import { ProjetListComponent } from './component/projet/projet-list/projet-list.component';
import { ProjetAddComponent } from './component/projet/projet-add/projet-add.component';
import { ProjetEditGeneralComponent } from './component/projet/projet-edit-general/projet-edit-general.component';
import { ProjetEditBudgetComponent } from './component/projet/projet-edit-budget/projet-edit-budget.component';
import { ProjetEditFilesComponent } from './component/projet/projet-edit-files/projet-edit-files.component';
import { ProjetDetailComponent } from './component/projet/projet-detail/projet-detail.component';
import { ContactComponent } from './component/contact/contact/contact.component';
import { ContactEditComponent } from './component/contact/contact-edit/contact-edit.component';
import { ContactAddComponent } from './component/contact/contact-add/contact-add.component';
import { BoxesComponent } from './pages/boxes/boxes.component';
import { TabSetupComponent } from './setup/tab-setup/tab-setup.component';

import { ProjectsComponent } from './pages/projects/projects.component';
import { MailsComponent } from './pages/mails/mails.component';
import { CardsComponent } from './pages/cards/cards.component';
import { TablesComponent } from './pages/tables/tables.component';

// AdminLTE3 import Modules ===================================================================

// Infoboxes
import { InfoboxComponent } from './adminlte3/box/infobox.component';
import { Infobox2Component } from './adminlte3/box/infobox2.component';
import { SmallboxComponent } from './adminlte3/box/smallbox.component';

// Cards
import { CardComponent } from './adminlte3/cards/card.component';


// Tables
// Mail
// Project



// ============================================================================================


@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbComponent,
    FooterComponent,
    MenuComponent,
    SidemenuComponent,
    TopbarComponent,
    LoginComponent,
    RegisterComponent,
    FulltableComponent,
    TodolistComponent,
    OrderComponent,
    ProductsComponent,
    SimplecardComponent,
    AdminComponent,
    ProjectComponent,
    DashboardComponent,
    Socialwidget1Component,
    Socialwidget2Component,
    Socialwidget3Component,
    ChatComponent,
    AreaComponent,
    LineComponent,
    DonutComponent,
    BarComponent,
    PieComponent,
    StackedbarComponent,
    TabComponent,
    ResponsiveHoverTableComponent,
    BorderedTableComponent,
    LeftSidedTabComponent,
    MailFoldersComponent,
    MailInboxComponent,
    MailComposeComponent,
    MailReadComponent,
    ProfileInfoComponent,
    ProfileAboutComponent,
    ProfileActivityComponent,
    ProfileTimelineComponent,
    ProfileSettingsComponent,
    ProjetListComponent,
    ProjetAddComponent,
    ProjetEditGeneralComponent,
    ProjetEditBudgetComponent,
    ProjetEditFilesComponent,
    ProjetDetailComponent,
    ContactComponent,
    ContactEditComponent,
    ContactAddComponent,
    BoxesComponent,
    TabSetupComponent,
    CardsComponent,
    TablesComponent,
    MailsComponent,
    ProjectsComponent,
    // AdminLTE3 =========================
      // InfoBoxes
        InfoboxComponent,
        Infobox2Component,
        SmallboxComponent,

      // Cards
        CardComponent,

    // ===================================
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
