import { HttpHandlerFn, HttpRequest} from '@angular/common/http';
const getRequest: string = "GET"

export function authInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn){
  if (req.method !== getRequest){ 
    return next(req.clone({
      headers: req.headers.set('credentials', 'include')
    }));
  }
  else return next(req)
}
