import { HttpHandlerFn, HttpRequest} from '@angular/common/http';
import { inject } from '@angular/core';
import { StorageService } from '../services/storage.service';
const getRequest: string = 'GET';

export function authInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn){
  const authToken = inject(StorageService).getToken();
  const isLoggedIn = inject(StorageService).isLoggedIn();
  if (req.method !== getRequest ){
    return next(req.clone({
      withCredentials: true
    }));
  }
  else
  return next(req)
}
