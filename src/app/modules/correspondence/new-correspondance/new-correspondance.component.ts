import {Component, OnInit, ViewChild} from '@angular/core';
import {Language} from 'angular-l10n';
import {FormBuilder, FormGroup} from '@angular/forms';
import {newCorrespondenceTabs} from '../../../config/Lookups';
import {RedirectComponent} from './redirect/redirect.component';
import {RelatedComponent} from './related/related.component';

@Component({
  selector: 'app-new-correspondance',
  templateUrl: './new-correspondance.component.html',
  styleUrls: ['./new-correspondance.component.scss']
})
export class NewCorrespondanceComponent implements OnInit {

  @Language() lang: string;
  @ViewChild(RedirectComponent) redirectComponent: RedirectComponent;
  @ViewChild(RelatedComponent) relatedComponent: RelatedComponent;
  newCorrespondenceForm: FormGroup;
  errors: any;
  newCorrespondenceTabs: any [] = newCorrespondenceTabs;
  currentTab = 'mainInfo';
  constructor(private builder: FormBuilder) {
      this.newCorrespondenceForm = this.builder.group({});
  }
  ngOnInit() {}


  /**************** on tab clicked **************** */
  activeTab(index) {
      this.newCorrespondenceTabs.filter(tab => { tab.active = false;});
      this.newCorrespondenceTabs[index].active = true;
      this.currentTab = this.newCorrespondenceTabs[index].title;
  }

  /**************** on send correspondence clicked **************** */
  send() {
      if (this.newCorrespondenceForm && !this.newCorrespondenceForm.valid) {
          this.errors = {};
        this.errors.corresNumber = 'not valid Number require';
      } else {
          this.errors = null;
      }
      if ( this.redirectComponent ) {
          console.log('collective send selected categories : ');
          console.log(this.redirectComponent.getSelectedCategories());
      }
      if ( this.relatedComponent ) {
          console.log('related correspondences : ');
          console.log(this.relatedComponent.getSelectedCorrespondences());
      }
  }

}
