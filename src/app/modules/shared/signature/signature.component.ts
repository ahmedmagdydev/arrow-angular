import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {SignaturePad} from 'angular2-signaturepad/signature-pad';

@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.scss']
})
export class SignatureComponent implements AfterViewInit {

    @ViewChild(SignaturePad) signaturePad: SignaturePad;
    public signaturePadOptions: Object = {
        'minWidth': 0.5, 'maxWidth': 0.5, 'canvasWidth': 200, 'canvasHeight': 120, 'backgroundColor': '#F5F6FA', 'penColor': 'red'
    };
    constructor() { }

    ngAfterViewInit() {
        // this.signaturePad is now available
        this.signaturePad.set('minWidth', 0.5); // set szimek/signature_pad options at runtime
        this.signaturePad.set('maxWidth', 0.5);
        this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
    }

    // ---------------- digital signature component---------------
    drawComplete() {
        console.log(this.signaturePad.toDataURL());
    }
    drawStart() {
        console.log('begin drawing');
    }
    clearSignature = () => this.signaturePad.clear();
}
