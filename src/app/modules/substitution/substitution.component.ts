import { Component, OnInit } from '@angular/core';
import {Language} from 'angular-l10n';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {UtilService} from '../../services/util/util.service';

@Component({
  selector: 'app-substitution',
  templateUrl: './substitution.component.html',
  styleUrls: ['./substitution.component.scss']
})
export class SubstitutionComponent implements OnInit {

    @Language() lang: string;
    substitutionForm: FormGroup;
    users: any[]=[];
    constructor(private _builder: FormBuilder, private util: UtilService) { }
    ngOnInit() {
        this.usersList();
        this.createSubstitutionForm();
    }


    // ---------------- create settings form ----------------
    createSubstitutionForm() {
        this.substitutionForm = this._builder.group({
            substituterUser: new FormControl('', []),
            substitutionType: new FormControl('Inactive', []),
            startDate: new FormControl('', []),
            endDate: new FormControl('', []),
            expiryDate: new FormControl('', []),
            loginExpiryDate: new FormControl('', []),
            copyOldCor: new FormControl('', []),
            loginAfter: new FormControl('', []),
        });
    }
    get subForm() { return this.substitutionForm.controls; }

    //---------------- submit substitution ---------------
    usersList() {
        /*this.util.getResources('').subscribe( result => {
             this.users = result;
        }, () => {

        }, (error) => {

            });*/
        this.users = [
            {name: 'Mohamed', id: 0},
            {name: 'ahmed', id: 1},
            {name: 'ali', id: 2},
        ];
    }
    //---------------- submit substitution ---------------
    submit(settings) {
        /*this.util.postResources('', {}).subscribe( result => {

        }, () => {

        }, (error) => {

            });*/
    }

}
