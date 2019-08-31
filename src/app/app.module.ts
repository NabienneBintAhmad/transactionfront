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
    BlocageComponent
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
