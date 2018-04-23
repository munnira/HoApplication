import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormioResourceCreateComponent } from 'angular-formio/resource'
import { FormioResourceService } from 'angular-formio/resource/resource.service';
import { FormioResourceConfig } from 'angular-formio/resource/resource.config';

@Component({
  selector: 'app-birth-certificate',
  templateUrl: './birth-certificate.component.html',
  styleUrls: ['./birth-certificate.component.scss']
})

export class BirthCertificateComponent extends FormioResourceCreateComponent implements OnInit {

  constructor(service: FormioResourceService, route:ActivatedRoute, router:Router, config:FormioResourceConfig) {
    super(service,route,router,config);
   }

  // export class BirthCertificateComponent implements OnInit{
  // constructor(){

  // }

  ngOnInit() {
   // super.ngOnInit();
  }

}
