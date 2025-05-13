import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Form } from '@angular/forms';

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
  private COMMENT_ENDPOINT=this.BACKEND_URL + '/comments/'
  private SEARCH_COMMENT_ENDPOINT=this.BACKEND_URL + '/comments/?search='
  private LOGOUT_ENDPOINT=this.BACKEND_URL + '/logout/'
  private CURRENT_USER_ENDPOINT=this.BACKEND_URL + '/current_user/'
  private CURRENT_DOODLES_ENDPOINT=this.BACKEND_URL + '/current_doodles/'
  private LIKE_ENDPOINT=this.BACKEND_URL + '/yeahs/'
  private FOLLOW_ENDPOINT=this.BACKEND_URL + '/userFollows/'
  private USER_FOLLOWING_ENDPOINT=this.BACKEND_URL + '/user_following/?search='
  private USER_FOLLOWERS_ENDPOINT=this.BACKEND_URL + '/user_followers/?search='
  private IS_FOLLOWING_ENDPOINT=this.BACKEND_URL + '/is_following/'
  private SEARCH_ENDPOINT=this.BACKEND_URL + '/search/'
  private CHANGE_PASSWORD_ENDPOINT=this.BACKEND_URL + '/change_password/'
  private DELETE_ACCOUNT_ENDPOINT=this.BACKEND_URL + '/delete_account/'
  private OTP_ENDPOINT=this.BACKEND_URL + '/token/'
  private AUTHENTICATE_ENDPOINT=this.BACKEND_URL + '/authenticate/'
  private BOOKMARK_ENDPOINT=this.BACKEND_URL + '/savedDoodles/'

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

  postDoodle(form: any){
    return this.httpClient.post(this.DOODLE_ENDPOINT, form)
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

  patchDoodle(id: string, form: any){
    return this.httpClient.patch(this.DOODLE_ENDPOINT + id + '/',  form)
  }

  deleteDoodle(id: string){
    return this.httpClient.delete(this.DOODLE_ENDPOINT + id)
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

  postFollow(following_user_id: string){
  return this.httpClient.post(this.FOLLOW_ENDPOINT, {following_user_id})
  }

  deleteFollow(id: string){
  return this.httpClient.delete(this.FOLLOW_ENDPOINT + id)
}

  getFollowing(id: string){
  return this.httpClient.get(this.USER_FOLLOWING_ENDPOINT + id)
  }

  getFollowers(id: string){
  return this.httpClient.get(this.USER_FOLLOWERS_ENDPOINT + id)
  }

  isFollowing(id: string){
  return this.httpClient.get(this.IS_FOLLOWING_ENDPOINT + id + '/', {withCredentials: true})
  }

  editAccountDetails(form: any){
    return this.httpClient.patch(this.CURRENT_USER_ENDPOINT, form)
  }

  changePassword(form: any){
    return this.httpClient.put(this.CHANGE_PASSWORD_ENDPOINT, form)
  }

  deleteAccount(form: any){
    return this.httpClient.post(this.DELETE_ACCOUNT_ENDPOINT, form)
  }

  search(query: string){
    return this.httpClient.get(this.SEARCH_ENDPOINT + query)
  }

  grabOTP(){
    return this.httpClient.post(this.OTP_ENDPOINT, {})
  }

  authenticateOTP(form: FormData){
    return this.httpClient.patch(this.AUTHENTICATE_ENDPOINT, form)
  }

  bookmarkDoodle(form: FormData){
    return this.httpClient.post(this.BOOKMARK_ENDPOINT, form)
  }

}
