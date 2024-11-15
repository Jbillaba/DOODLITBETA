import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DoodlrApiService {
  constructor(private httpClient:HttpClient,){}

  private REGISTER_ENDPOINT='http://localhost:8000/api/register/'
  private LOGIN_ENDPOINT='http://localhost:8000/login/'
  private DOODLE_ENDPOINT='http://localhost:8000/doodles/'
  private USER_ENDPOINT='http://localhost:8000/users/'
  private COMMENT_ENDPOINT='http://localhost:8000/comments/'
  private SEARCH_COMMENT_ENDPOINT='http://localhost:8000/comments/?search='
  private LOGOUT_ENDPOINT='http://localhost:8000/logout/'
  private WHOAMI_ENDPOINT='http://localhost:8000/whoami/'


  registerUser(email: string, username: string, password: string, password2: string){
    return this.httpClient.post(this.REGISTER_ENDPOINT, {email, username,  password, password2})
  }

  loginUser(username: string, password: string){
    return this.httpClient.post(this.LOGIN_ENDPOINT, {username,password})
  }

  logoutUser(){
    return this.httpClient.post(this.LOGOUT_ENDPOINT, {})
  }

  postDoodle(image: any){
    return this.httpClient.post(this.DOODLE_ENDPOINT, image)
  }

  getUser(username: string){
    return this.httpClient.get(this.USER_ENDPOINT+ username +'/')
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

  // find a way to use the cookie to grab the username of the person from the backend, this should be possible
  updateProfilePicture( username:string, profile_picture: any){
    return this.httpClient.patch(this.USER_ENDPOINT + username + '/', profile_picture)
  }

  getCurrentUser(){
    return this.httpClient.get(this.WHOAMI_ENDPOINT, {withCredentials: true})
  }

}
