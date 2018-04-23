import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormioComponent } from 'angular-formio';
import { } from 'formiojs/formi';
import { FormioModule} from 'angular-formio/formio.module';
import { FormioResource, FormioResourceRoutes, FormioResourceConfig, FormioResourceService } from 'angular-formio/resource';
import { FormsResourceComponent } from './forms-resource/forms-resource.component';
import { FormsViewComponent } from './forms-view/forms-view.component';
import { FormsCreateComponent } from './forms-create/forms-create.component';

const formsResourceRoutes: Routes = FormioResourceRoutes({
view: FormsViewComponent,
new: FormsCreateComponent,
 resource: FormsResourceComponent
});

@NgModule({
  imports: [
    CommonModule,
    FormioModule,
    FormioResource,
    RouterModule.forChild(formsResourceRoutes)
  ],
  declarations: [FormsResourceComponent,FormsViewComponent,FormsCreateComponent],
  providers: [
    
  ]
})
export class SharedModule { }
