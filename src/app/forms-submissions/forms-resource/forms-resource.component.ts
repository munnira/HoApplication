import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormioResourceService, FormioResourceComponent } from 'angular-formio/resource';

@Component({
  selector: 'app-forms-resource',
  templateUrl: './forms-resource.component.html',
  styleUrls: ['./forms-resource.component.scss']
})
export class FormsResourceComponent extends FormioResourceComponent implements OnInit {

  constructor(public service: FormioResourceService, public route: ActivatedRoute) {
    super(service, route);
  }

  ngOnInit() {
    super.ngOnInit();
  }

}
