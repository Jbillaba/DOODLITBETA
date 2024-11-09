import { HttpHandlerFn, HttpRequest} from '@angular/common/http';
const getRequest: string = "GET"

export function authInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn){
    return next(req.clone({
      withCredentials: true
    }));
  }
