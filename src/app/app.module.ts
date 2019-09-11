import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthentGuard } from './guards/authent.guard';
import { AuthentService } from './services/authent.service';
import { RegisterService } from './services/register.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { CaissierComponent } from './caissier/caissier.component';
import { UserComponent } from './user/user.component';
import { TransactionComponent } from './transaction/transaction.component';
import { AdminComponent } from './admin/admin.component';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { PrestataireComponent } from './prestataire/prestataire.component';
import { BlocageComponent } from './blocage/blocage.component';
import { DepotComponent } from './depot/depot.component';
import { RetraitComponent } from './retrait/retrait.component';
import { CompteComponent } from './compte/compte.component';
import { CaissierlistComponent } from './caissierlist/caissierlist.component';
import { MenuComponent } from './menu/menu.component';
import { PrestatairelistComponent } from './prestatairelist/prestatairelist.component';
import { BlockusersystemComponent } from './blockusersystem/blockusersystem.component';
import { UserlistComponent } from './userlist/userlist.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AcceuilComponent,
    CaissierComponent,
    UserComponent,
    TransactionComponent,
    AdminComponent,
    PrestataireComponent,
    BlocageComponent,
    DepotComponent,
    RetraitComponent,
    CompteComponent,
    CaissierlistComponent,
    MenuComponent,
    PrestatairelistComponent,
    BlockusersystemComponent,
    UserlistComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [AuthentService, AuthentGuard, RegisterService,
   {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi : true

    }
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
