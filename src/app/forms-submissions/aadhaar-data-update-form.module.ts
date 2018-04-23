import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormioComponent } from 'angular-formio';
import { FormioModule} from 'angular-formio/formio.module'
import { FormioResource, FormioResourceRoutes, FormioResourceConfig, FormioResourceService } from 'angular-formio/resource';
import { FormsResourceComponent } from './forms-resource/forms-resource.component';
import { FormsViewComponent } from './forms-view/forms-view.component';
import { ChildNameInclusionModule } from './child-name-inclusion.module';
import { SharedModule } from './shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormioModule,
    FormioResource,
    SharedModule,
    RouterModule.forChild(FormioResourceRoutes())
  ],
  declarations: [],
  providers: [
    FormioResourceService,
    {provide: FormioResourceConfig, useValue: {
      name: 'aadhaardataupdated',
      form: 'aadhaardataupdated'
    }}
  ]
})
export class AadhaarDataUpdateFormModule { }

