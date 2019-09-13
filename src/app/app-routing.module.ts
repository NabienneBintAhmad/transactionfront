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
import { RetraitComponent } from './retrait/retrait.component';
import { CompteComponent } from './compte/compte.component';
import { CaissierlistComponent } from './caissierlist/caissierlist.component';
import { PrestatairelistComponent } from './prestatairelist/prestatairelist.component';
import { BlockusersystemComponent } from './blockusersystem/blockusersystem.component';
import { ComptelistComponent } from './comptelist/comptelist.component';
import { AllcompteComponent } from './allcompte/allcompte.component';
import { UserlistComponent } from './userlist/userlist.component';
import { ComptetravailComponent } from './comptetravail/comptetravail.component';
import { DepothistoriqueComponent } from './depothistorique/depothistorique.component';
import { AuthentGuard } from './guards/authent.guard';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch : 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'user', component: UserComponent},
  { path: 'acceuil', component: AcceuilComponent},
  { path: 'caissier', component: CaissierComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'transaction', component: TransactionComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'bloquer', component: BlocageComponent},
  { path: 'depot', component: DepotComponent},
  { path: 'retrait', component: RetraitComponent},
  { path: 'compte', component: CompteComponent},
  { path: 'caissierlist', component: CaissierlistComponent},
  { path: 'prestatairelist', component: PrestatairelistComponent},
  { path: 'blockusersystem', component: BlockusersystemComponent},
  { path: 'userslist', component: UserlistComponent},
  { path: 'blockuserpresta', component: BlocageComponent},
  { path: 'mycount', component: ComptelistComponent},
  { path: 'listcompte', component: AllcompteComponent},
  { path: 'listdepot', component: DepothistoriqueComponent},
  { path: 'comptetravail', component: ComptetravailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
