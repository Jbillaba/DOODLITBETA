import { HttpEvent, HttpEventType, HttpHandlerFn, HttpRequest} from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { StorageService } from '../services/storage.service';
const doodleEndPoint: string = 'http://localhost:8000/doodles/';
const postMethod: string = 'POST';

export function loggingInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>>{
  return next(req).pipe(tap(event => {
    if (event.type === HttpEventType.Response){
      alert(`${req.url} is a ${req.method} request and returned ${event.status}/${event.statusText}, `)
    }
  }))
};

// switch the function to check if its a post request than to add the auth headers otherwise leave it alone 
export function authInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn){
  const authToken = inject(StorageService).getToken();
  const isLoggedIn = inject(StorageService).isLoggedIn();
  if (req.method === postMethod &&  req.url === doodleEndPoint && isLoggedIn){
    return next(req.clone({setHeaders: {Authorization: `Token ${authToken}`}}));
  }
  else
  return next(req)
}
