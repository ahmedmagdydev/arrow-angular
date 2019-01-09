
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UtilService } from '../util/util.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private utilService: UtilService) {}
 
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        // const headers = this.createAuthorizationHeader();  
        const updatedRequest = req.clone({ headers: req.headers.set('user-token','token') });
            return next.handle(updatedRequest).pipe(
                tap(
                    event => {
                        // handle success response
                        if (event instanceof HttpResponse) {
                        console.log("api call success :", event);
                        }
                    },
                    error => {
                        //handle error response
                        if (event instanceof HttpResponse) {
                        console.log("api call error :", event);
                        }
                    }
                    )
                );
        }

    // createAuthorizationHeader() {
    //     const userToken = this.utilService.getUserToken();
    //     const language = this.utilService.getLocalStorage('language');
    //     const domain = this.utilService.getLocalStorage('domian');
    //     const headers =  new HttpHeaders({'userToken':  userToken, 'language': language, 'domain': domain});
    //     return headers;     
    // }
}