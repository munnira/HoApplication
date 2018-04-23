import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { FormioLoader } from 'angular-formio/formio.loader';
import { FormioAppConfig } from 'angular-formio/formio.config';
import { FormioResourceConfig, FormioResourceService, FormioResourceViewComponent } from 'angular-formio/resource';
import * as jsPDF from 'jspdf';
import * as $ from 'jquery';



@Component({
  selector: 'app-forms-view',
  templateUrl: './forms-view.component.html',
  styleUrls: ['./forms-view.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormsViewComponent extends FormioResourceViewComponent implements OnInit {

  constructor(service: FormioResourceService, config: FormioResourceConfig) {
    super(service, config);
  }

  ngOnInit() {
  }

  @ViewChild('content') content: ElementRef;
  public downloadPDF(){
    let doc = new jsPDF();
    let specialElementsHandlers ={
      '#editor': function(element,renderer){
        return true;
      }
    };
    var margin = {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    };
    var tinymceToJSPDFHTML = document.createElement("body");
    //tinymceToJSPDFHTML.innerHTML = $scope.selectedItem.content;

    let content = this.content.nativeElement;
    doc.fromHTML(tinymceToJSPDFHTML,0,0,{
      'width': 100,
      'elementHandlers': specialElementsHandlers
    },function(){
      doc.save('toPDF.pdf');
    },margin);
  }

  downloadPDF12(){
    const doc = new jsPDF();
    doc.text('Text here',10,10);
    doc.save('Test.pdf');
  }
}
