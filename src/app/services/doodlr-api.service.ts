import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DoodlrApiService {
  constructor(private httpClient:HttpClient, private authService: AuthService){}

  private REGISTER_ENDPOINT='http://localhost:8000/register/'
  private LOGIN_ENDPOINT='http://localhost:8000/login/'
  private DOODLE_ENDPOINT='http://localhost:8000/doodles/'
  private DOODLE_SEARCH_ENDPOINT='http://localhost:8000/doodles/?search='
  private USER_ENDPOINT='http://localhost:8000/users/'
  private SEARCH_USER_ENDPOINT='http://localhost:8000/users/?search=';
  private COMMENT_ENDPOINT='http://localhost:8000/comments/'
  private SEARCH_COMMENT_ENDPOINT='http://localhost:8000/comments/?search='
  private LOGOUT_ENDPOINT='http://localhost:8000/logout/'
  private CURRENT_USER_ENDPOINT='http://localhost:8000/current_user/'
  private CURRENT_DOODLES_ENDPOINT='http://localhost:8000/current_doodles/'
  private LIKE_ENDPOINT='http://localhost:8000/yeahs/'
  private FOLLOW_ENDPOINT='http://localhost:8000/userFollows/'

  registerUser(email: string, username: string, password: string, password2: string){
    return this.httpClient.post(this.REGISTER_ENDPOINT, {email, username,  password, password2})
  }

  loginUser(username: string, password: string){
    return this.httpClient.post(this.LOGIN_ENDPOINT, {username,password})
  }

  logoutUser(){
    this.authService.isAuthenticated = false;
    return this.httpClient.post(this.LOGOUT_ENDPOINT, {})
  }

  postDoodle(image: any){
    return this.httpClient.post(this.DOODLE_ENDPOINT, image)
  }

  getUser(id: string){
    return this.httpClient.get(this.USER_ENDPOINT + id + '/')
  }

  getUsersDoodles(username:string){
    return this.httpClient.get(this.DOODLE_SEARCH_ENDPOINT + username)
  }

  getDoodles(){
    return this.httpClient.get(this.DOODLE_ENDPOINT)
  }

  getDoodle(id: string){
    return this.httpClient.get(this.DOODLE_ENDPOINT + id)
  }

  getDoodleComments(id: string){
    return this.httpClient.get(this.SEARCH_COMMENT_ENDPOINT + id)
  }

  postComment( text: string, post: string ){
    return this.httpClient.post(this.COMMENT_ENDPOINT, {text, post})
  }

  getCurrentUser(){
    return this.httpClient.get(this.CURRENT_USER_ENDPOINT, {withCredentials: true})
  }

  getCurrentUserDoodles(){
    return this.httpClient.get(this.CURRENT_DOODLES_ENDPOINT, {withCredentials: true})
  }

  postyeahs(post: string, type: string){
    return this.httpClient.post(this.LIKE_ENDPOINT, {post, type})
  }

  postFollow(url: string){
  return this.httpClient.post(this.FOLLOW_ENDPOINT, {url})
  }

}
