import { Injectable } from '@angular/core';
import {correspondencesStatusLookup} from '../../config/Lookups';
import {LocaleService} from 'angular-l10n';

@Injectable({
  providedIn: 'root'
})
export class CoresspondenceService {

  constructor(private locale: LocaleService) { }

  // ----------------------- get correspondences types -----------------------
  getCorrespondencesTypes(coresspondences: any[], correspondencesTypes): any[] {
    for ( const c of correspondencesTypes) {c.coresspondences.length = 0;}
    for ( const coresspondence of coresspondences) {
      switch (coresspondence.status) {
        case 'new': {correspondencesTypes[0].coresspondences.push(coresspondence); break;}
        case 'done': {correspondencesTypes[1].coresspondences.push(coresspondence); break;}
        case 'assigned': {correspondencesTypes[2].coresspondences.push(coresspondence); break;}
        case 'waiting': {correspondencesTypes[3].coresspondences.push(coresspondence); break;}
        case 'delayed': {correspondencesTypes[4].coresspondences.push(coresspondence); break;}
      }
      const total = coresspondences.length;
      for ( const c of correspondencesTypes) {
        let sum = c.coresspondences.length;
        c.percent =  (sum / total) * 100;
        c.sum = sum;
      }
    }
    return correspondencesTypes;
  }


  // ----------------------- get correspondences priorities -----------------------
  getCorrespondencesPriorities(coresspondences: any[], priorities: any[]): any[] {
    for ( const p of priorities) { p.y = 25; }
    return priorities;
  }


  // ----------------------- translate labels based on current local -----------------------
  getChartLabels() {
    return this.locale.getDefaultLocale() === 'ar' ? ["ضروري", "مهم", "عادي", "غير مهم"] :
      ["important", "urgant", "normal", "not important"];
  }


    // ----------------------- new correspondence -----------------------
    getInitFields() {
        let fields: Array<any> = new Array<any>();
        fields = [
            {name: 'توجيه', type: 'text'},
            {name: 'تاريخ الاستحقاق', type: 'date'},
            {name: 'تعليق', type: 'textArea'},
            {name: 'يحتاج اتخاز قرار', type: 'checkbox'},
            {name: 'instraction', type: 'text', instraction: true},
        ];
        return fields;
    }

}
