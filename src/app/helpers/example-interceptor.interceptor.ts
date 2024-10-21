import { HttpHandlerFn, HttpRequest} from '@angular/common/http';
import { inject } from '@angular/core';
import { StorageService } from '../services/storage.service';
const postMethod: string = 'POST';

export function authInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn){
  const authToken = inject(StorageService).getToken();
  const isLoggedIn = inject(StorageService).isLoggedIn();
  if (req.method === postMethod && isLoggedIn){
    alert("post request successful")
    return next(req.clone({setHeaders: {Authorization: `Token ${authToken}`}}));
  }
  else
  return next(req)
}
