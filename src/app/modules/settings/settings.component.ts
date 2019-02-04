import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Language} from 'angular-l10n';
import {UtilService} from '../../services/util/util.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  @Language() lang: string;
  settingsForm: FormGroup;
  thems: any[] = ['Blue', 'Green'];

  constructor(private _builder: FormBuilder, private util: UtilService) { }
  ngOnInit() {
    this.createSettingsForm();
  }


  // ---------------- create settings form ----------------
    createSettingsForm() {
    this.settingsForm = this._builder.group({
        ATTACHEMENT_TYPE: new FormControl('', []),
        autoRefresh: new FormControl('', []),
        refreshRate: new FormControl('', []),
        refreshType: new FormControl('', []),
        themeId: new FormControl('', []),
        pageSize: new FormControl('', []),
        searchPageSize: new FormControl('', []),
        maxSearchResult: new FormControl('', []),
        maxSearchResultReport: new FormControl('', []),
        attachementSize: new FormControl('', []),
        attachAllowedTypes: new FormControl('', []),
        ADDRESS_BOOK_VIEW: new FormControl('', []),
        DEFAULT_FILTER: new FormControl('', []),
        confirmDialog: new FormControl('', []),
        DISPLAY_COUNTER: new FormControl('', []),
        DISPLAY_MSGS: new FormControl('', []),
        sendNotificationEmail: new FormControl('', []),
        sendNotificationTaskEmail: new FormControl('', []),
        readReceipt: new FormControl('', []),
        DASHBOARD: new FormControl('', []),
        HOME_PAGE_PREVIEW: new FormControl('', []),
        LANDING_NAME: new FormControl('', []),
        Show_Correspondence_count: new FormControl('', []),
        receiveDelayedTaskEmailAndNotification: new FormControl('', []),
        receiveDelayedCorrEmailAndNotification: new FormControl('', []),
      });
    }

  // ---------------- submit settings ---------------
    submit(settings) {
      /*this.util.postResources('', {}).subscribe( result => {

      }, () => {

      }, (error) => {

          });*/
    }
}
