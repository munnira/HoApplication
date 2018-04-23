import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormioAppConfig } from 'angular-formio';
import { FormioAuthService, FormioAuthConfig } from 'angular-formio/auth';
import { AuthConfig, AppConfig } from '../config';
import { AuthModule } from './auth/auth.module';
import { EventModule } from './event/event.module';
import {BirthCertificateComponent} from './forms-submissions/birth-certificate/birth-certificate.component'
import { BirthCertificateModule } from './forms-submissions/birth-certificate.module';
import { FmcFormModule } from './forms-submissions/fmc-form.module';
import { ChildNameInclusionModule } from './forms-submissions/child-name-inclusion.module';
import { CdmaBirthCorrectionModule } from './forms-submissions/cdma-birth-correction.module'
import { CdmaDeathCorrectionsModule } from './forms-submissions/cdma-death-corrections.module';
import { DeathCertificateModule } from './forms-submissions/death-certificate.module';
import { RationCardMemberAdditionBirthModule} from './forms-submissions/ration-card-member-addition-birth.module'
import { RationCardModificationsModule } from './forms-submissions/ration-card-modifications.module';
import { IntegratedBcEMuslimsModule } from './forms-submissions/integrated-bc-e-muslims.module';
import { AadhaarDataUpdateFormModule } from './forms-submissions/aadhaar-data-update-form.module'

import { FormioResources } from 'angular-formio/resource';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FormsResourceComponent } from './forms-submissions/forms-resource/forms-resource.component';
import { FormsViewComponent } from './forms-submissions/forms-view/forms-view.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
   
      {
        path: 'auth',
        loadChildren: () => AuthModule
      },
      {
        path: 'event',
        loadChildren: () => EventModule
      },
      {
        path: 'birthcertificate',
        loadChildren: () => BirthCertificateModule
      },     
      {
        path: 'deathcertificate',
        loadChildren: () => DeathCertificateModule
      },
      {
        path: 'childnameinclusioninbirthcert',
        loadChildren: () => ChildNameInclusionModule
      },
      {
        path: 'birthcorrection',
        loadChildren: () => CdmaBirthCorrectionModule
      }, 
      {
        path: 'deathcorrection',
        loadChildren: () => CdmaDeathCorrectionsModule
      },
      
      {
        path: 'familymemcert',
        loadChildren: () => FmcFormModule
      }, 
      {
        path: 'rationcardadditionbirth',
        loadChildren: () => RationCardMemberAdditionBirthModule
      }, 
      {
        path: 'rationcardmodification',
        loadChildren: () => RationCardModificationsModule
      }, 
      {
        path: 'backwardclassesmuslims',
        loadChildren: () => IntegratedBcEMuslimsModule
      },
      {
        path: 'aadhaardataupdated',
        loadChildren: () => AadhaarDataUpdateFormModule
      },

    ])
  ],
  providers: [
    FormioResources,
    FormioAuthService,
    {provide: FormioAuthConfig, useValue: AuthConfig},
    {provide: FormioAppConfig, useValue: AppConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

    authM(){
      return new AuthModule();

  }
 }
