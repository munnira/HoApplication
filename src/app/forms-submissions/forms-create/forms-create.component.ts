//import { Component, OnInit } from '@angular/core';
import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { FormioResourceCreateComponent } from 'angular-formio/resource'
import { FormioResourceService } from 'angular-formio/resource/resource.service';
import { FormioResourceConfig } from 'angular-formio/resource/resource.config';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forms-create',
  templateUrl: './forms-create.component.html',
  styleUrls: ['./forms-create.component.scss'],
  encapsulation: ViewEncapsulation.None
  
})
export class FormsCreateComponent extends FormioResourceCreateComponent implements OnInit {

  constructor(service: FormioResourceService, route:ActivatedRoute, router:Router, config:FormioResourceConfig) {
    super(service,route,router,config);
   }

  ngOnInit() {
  }

}
