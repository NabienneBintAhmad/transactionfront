import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent } from './login/login.component';
import {AcceuilComponent } from './acceuil/acceuil.component';
import { RegisterComponent } from './register/register.component';
import { CaissierComponent } from './caissier/caissier.component';
import { TransactionComponent } from './transaction/transaction.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { BlocageComponent } from './blocage/blocage.component';
import { DepotComponent } from './depot/depot.component';
import { AuthentGuard } from './guards/authent.guard';
const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'user', component: UserComponent},
  { path: 'acceuil', component: AcceuilComponent},
  { path: 'caissier', component: CaissierComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'transaction', component: TransactionComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'bloquer', component: BlocageComponent},
  { path: 'depot', component: DepotComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
