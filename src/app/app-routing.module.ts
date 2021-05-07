import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductFormComponent } from './product/product-form/product-form.component';
import { ProductListComponent } from './product/product-list/product-list.component';

const routes: Routes = [
  {path:'',component:ProductListComponent},
  {path:'product/add',component:ProductFormComponent},
  {path:'product/update/:id',component:ProductFormComponent},
  {path:"**",redirectTo:'',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
