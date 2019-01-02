import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Language} from 'angular-l10n';
import {MatAutocompleteSelectedEvent} from '@angular/material/typings/esm5/autocomplete';
import {FormControl} from '@angular/forms';
import {InstractionComponent} from '../instraction/instraction.component';
import {MatDialog} from '@angular/material';
import {CoresspondenceService} from '../../../../../services/coresspondence/coresspondence.service';
const OTHER_CONTACTS: any[] = [
    {name: 'اداره شئون العاملين', departments: [{name:  'إدارة تكنولوجيا المعلومات'}]},
    {name: 'اداره الاكل', departments: [{name:  'ادارة شثون العاملين'}]},
    {name: 'اداره القهوه', departments: [{name:  'ادارة الخدمات'}, {name: 'الجودة'}]}, {name: 'اداره الجيم', departments: [{name:  'ادارة الخدمات'}, {name: 'الجودة'}]},
];
@Component({
  selector: 'app-redirect-add-other-contacts',
  templateUrl: './redirect-add-other-contacts.component.html',
  styleUrls: ['./redirect-add-other-contacts.component.scss']
})
export class RedirectAddOtherContactsComponent implements OnInit {

    @Input() sendGroup;
    @Output() addContactEvent: EventEmitter<any> = new EventEmitter();
    addAnotherContactCtrl = new FormControl();
    filteredOtherContacts: any[] = [];
    selectedOtherContacts: any[] = [];
    otherContacts: any[] = OTHER_CONTACTS;
    @Language() lang: string;
    selectedContact: any;
    selectedInstractionOptions: any[];


    constructor(public dialog: MatDialog, private coresspondenceService: CoresspondenceService) { }

    ngOnInit() {
        this.filteredOtherContacts = this.otherContacts;
    }


    addAnotherContact(): void {
        if ( this.selectedOtherContacts.indexOf((this.selectedContact)) === -1) {
            this.selectedContact.multipleSendFields = this.coresspondenceService.getInitFields();
            this.selectedOtherContacts.push(this.selectedContact);
        }
        this.selectedContact = null;
        this.addAnotherContactCtrl.setValue('');
        this.addContactEvent.emit(this.selectedOtherContacts);
    }
    removeSelectedContact(index) {
        this.selectedOtherContacts.splice(index, 1);
        this.addContactEvent.emit(this.selectedOtherContacts);
    }
    onSelectOtherContact(event: MatAutocompleteSelectedEvent): void {
        const contactName = event.option.viewValue;
        this.selectedContact = this.getContactBYName(contactName);
        this.addAnotherContactCtrl.setValue(contactName);
    }
     _filter(value: string) {
        this.selectedContact = null;
        const filterValue = value.toLowerCase();
        this.filteredOtherContacts = filterValue ? this.otherContacts.filter(c => c.name.toLowerCase().indexOf(filterValue) === 0) : this.otherContacts;
    }
    private getContactBYName(contactName: string): any {
        let contact = null;
        for ( const c of  this.otherContacts) {
            if ( c.name === contactName ) {
                contact = c; break;
            }
        }
        return contact;
    }
    openInstractionPopUp(contactIndex, fieldIndex): void {
        const instractionOptions: any[] = [
            {option: 'للمتابعه'}, {option: 'للتوقيع'}, {option: 'للحفظ'},
            {option: 'للاطلاع'}, {option: 'لاى حاجه'} , {option: 'لاى حاجه'} , {option: 'لاى حاجه'}
            , {option: 'لاى حاجه'}, {option: 'لاى حاجه'}, {option: 'لاى حاجه'}
        ];
        const dialogRef = this.dialog.open(InstractionComponent, {
            width: '600px',
            data: {instractionOptions: instractionOptions}
        });
        dialogRef.afterClosed().subscribe(result => {
            if(result && result.selectedOptions) {
                this.selectedInstractionOptions = result.selectedOptions;
                const value = result.selectedOptions.map( item => {
                    return item.option;
                });
                this.updateFieldValue(contactIndex, fieldIndex, value);
            }
        });
    }
    updateFieldValue(contactIndex, fieldIndex, value) {
        if ( !this.sendGroup ) {
            this.selectedOtherContacts[contactIndex].multipleSendFields[fieldIndex].value = value;
        }
    }
}
