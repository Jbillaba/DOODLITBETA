import { HttpHandlerFn, HttpRequest} from '@angular/common/http';

export function authInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn){
  console.log(req)
  const modifiedRequest = req.clone({
    withCredentials: true
  });
  return next(modifiedRequest)
}
