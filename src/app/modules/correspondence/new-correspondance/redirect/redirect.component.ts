import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {InstractionComponent} from './instraction/instraction.component';
import {Language} from 'angular-l10n';
import {CoresspondenceService} from '../../../../services/coresspondence/coresspondence.service';


const multipleSendFields: any[] = [
    {name: 'توجيه', type: 'text'},
    {name: 'تاريخ الاستحقاق', type: 'date'},
    {name: 'تعليق', type: 'textArea'},
    {name: 'يحتاج اتخاز قرار', type: 'checkbox'},
    {name: 'instraction', type: 'text', instraction: true},
];
const ORIGINAL_DATA: any[] = [
    {name: 'ديوانالوزارة', departments: [{name:  'إدارة تكنولوجيا المعلومات'}]},
    {name: 'مديريات', departments: [{name:  'ادارة شثون العاملين'}]},
    {name: 'اخري', departments: [{name:  'ادارة الخدمات'}, {name: 'الجودة'}]},
];
@Component({
selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.scss'],
})
export class RedirectComponent  implements OnInit {
    categories: any[];
    multipleSendFields: any[];
    sendGroup = true;
    selectedInstractionOptions: any[];
    visible = true;
    selectable = true;
    otherContacts: any[] = [];
    @Language() lang: string;


    constructor(public dialog: MatDialog, private coresspondenceService: CoresspondenceService) {}
    ngOnInit() {
        this.getCategories();
    }

    /********* get Categories list from api**********/
    getCategories() {
        this.categories = ORIGINAL_DATA;
        this.multipleSendFields = this.coresspondenceService.getInitFields();
    }

    /* ******************** on select category/department ****************/
    toggleCategory(category) {
        category.selected = !category.selected;
        category.departments.filter(department => { department.selected = category.selected; });
    }
    toggleDepartment(category, department) {
        department.selected = !department.selected;
        category.selected = this.isAllDepartmentsSelected(category);
        if ( !this.sendGroup && department.selected) {
            department.multipleSendFields = this.coresspondenceService.getInitFields();
        }
    }
    isAllDepartmentsSelected(category): boolean {
        let allSelected = true;
        for ( const department of category.departments ) {
            if ( !department.selected) {
                allSelected = false;
                break;
            }
        }
        return allSelected;
    }
    updateFieldValue(value, index, categoryIndex, departmentIndex) {
        if ( !this.sendGroup ) {
            this.categories[categoryIndex].departments[departmentIndex].multipleSendFields[index].value = value;
        }
    }
    sendOptionChanged(event) {
        this.sendGroup = event.checked;
        if ( !this.sendGroup ) {
            this.categories.filter(category => {
                category.departments.filter(department => {
                    department.multipleSendFields = this.coresspondenceService.getInitFields();
                });
            });
        }
    }
    openInstractionPopUp(index, categoryIndex, departmentIndex): void {
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
                this.updateFieldValue(value, index, categoryIndex, departmentIndex);
            }
        });
    }


    /********* on delete icon of a department clicked in the preview section **********/
    deleteDepartment(event) {
        if ( !event ) { return; }
        this.toggleDepartment(event.category, event.department);
    }


    /* ******************** add another contacts *********************/
    onSelectedContactsChanged = selectedContacts => this.otherContacts = selectedContacts;

    /* ******************** get selected departments *********************/
    getSelectedCategories(): any[] {
        const selectedCategories: any[] = [];
        for ( const category of this.categories) {
            if ( category.selected ) {
                selectedCategories.push(category);
            } else {
                const selectedDepartments = category.departments.filter(department => {
                    return department.selected;
                });
                if ( selectedDepartments.length > 0) {
                    selectedCategories.push({name: category.name, departments: selectedDepartments});
                }
            }
        }
        return selectedCategories;
    }
}


