import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DoodlrApiService {
  constructor(private httpClient:HttpClient){}

  private BACKEND_URL = 'http://localhost:8000'
  private LOGGED_IN_ENDPOINT=this.BACKEND_URL + '/logged_in/'
  private REGISTER_ENDPOINT=this.BACKEND_URL + '/register/'
  private LOGIN_ENDPOINT=this.BACKEND_URL + '/login/'
  private DOODLE_ENDPOINT=this.BACKEND_URL + '/doodles/'
  private DOODLE_SEARCH_ENDPOINT=this.BACKEND_URL + '/doodles/?search='
  private USER_ENDPOINT=this.BACKEND_URL + '/users/'
  private SEARCH_USER_ENDPOINT=this.BACKEND_URL + '/users/?search=';
  private COMMENT_ENDPOINT=this.BACKEND_URL + '/comments/'
  private SEARCH_COMMENT_ENDPOINT=this.BACKEND_URL + '/comments/?search='
  private LOGOUT_ENDPOINT=this.BACKEND_URL + '/logout/'
  private CURRENT_USER_ENDPOINT=this.BACKEND_URL + '/current_user/'
  private CURRENT_DOODLES_ENDPOINT=this.BACKEND_URL + '/current_doodles/'
  private LIKE_ENDPOINT=this.BACKEND_URL + '/yeahs/'
  private FOLLOW_ENDPOINT=this.BACKEND_URL + '/userFollows/'
  private USER_FOLLOWING_ENDPOINT=this.BACKEND_URL + '/user_following/?search='
  private USER_FOLLOWERS_ENDPOINT=this.BACKEND_URL + '/user_followers/?search='

  loggedIn(){
    return this.httpClient.get(this.LOGGED_IN_ENDPOINT,{withCredentials: true, observe: 'response'})
  }

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

  getFollowing(id: string){
  return this.httpClient.get(this.USER_FOLLOWING_ENDPOINT + id)
  }

  getFollowers(id: string){
  return this.httpClient.get(this.USER_FOLLOWERS_ENDPOINT + id)
  }

}
