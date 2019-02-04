import { Component, OnInit } from '@angular/core';
import {API_URLS} from '../../config/AppConfig';
import {correspondencesStatusLookup} from '../../config/Lookups';
import {UtilService} from '../../services/util/util.service';
import {addressBookUrls} from '../../config/api-url';

@Component({
  selector: 'app-address-book',
  templateUrl: './address-book.component.html',
  styleUrls: ['./address-book.component.scss']
})
export class AddressBookComponent implements OnInit {

  addressBook: any[] = [];
  loading;
  constructor(private util: UtilService) { }

  ngOnInit() {
   this.addressBook = [
        {"nodeId": 1, "nodeName": "N1", childrenNodes: [
                {"nodeId": 11, "nodeName": "N1.1"},
                {"nodeId": 12, "nodeName": "N1.2", childrenNodes: [
                        {"nodeId": 121, "nodeName": "N1.2.1"},
                        {"nodeId": 122, "nodeName": "N1.2.2"},
                        {"nodeId": 123, "nodeName": "N1.2.3"},
                    ]},
                {"nodeId": 4, "nodeName": "N1.3"},
            ]},
        {"nodeId": 2, "nodeName": "N2"},
        {"nodeId": 3, "nodeName": "N3"},
        {"nodeId": 4, "nodeName": "N4"},
        {"nodeId": 5, "nodeName": "N5", },
        {"nodeId": 6, "nodeName": "N6"},
        {"nodeId": 7, "nodeName": "N7"},
    ];
   // this.getAddressBook();
  }


    // ----------------------- get address book data -----------------------
    getAddressBook() {
        this.loading = true;
        this.util.getResources(addressBookUrls.addressBook).subscribe( result => {
                this.addressBook = result.data;
                this.loading = false;
            },
            (error) => { this.loading = false; } ,
            () => {this.loading = false; }
        );
    }
}
