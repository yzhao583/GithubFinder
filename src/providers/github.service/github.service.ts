import { REPOSITORY_LIST } from '../../mocks/repository.mock';
import { Repository } from '../../models/repository.interface';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { User } from '../../models/user.interface';
import { USER_LIST } from '../../mocks/user.mocks';
import { Http, Response } from '@angular/http';

/*
  Generated class for the GithubServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GithubServiceProvider {

  private baseUrl: string = "https://api.github.com/users";
  private repoUrl: string = "repos";

  constructor(private http: Http) {
  }

  //get user information from github
  getUserInfo(username: string): Observable<User> {
    return this.http.get(this.baseUrl+'/'+username)
    .do(this.logData)
    .map(this.extractData)
    .do(this.logData)
    .catch(this.handleError)
    
  }  

  //get repository information of the user from github
  getRepoInfo(username: string): Observable<Repository[]> {
    return this.http.get(this.baseUrl+'/'+username+'/'+this.repoUrl)
    .do(this.logData)
    .map(this.extractData)
    .do(this.logData)
    .catch(this.handleError)
  }
  
  // find the username from the USER_LIST
  mockGetUserInfo(username: string): Observable<User> {
    return Observable.of(USER_LIST.filter(user => user.name === username)[0])
  }
  // find the repository info from the REPOSITORY_LIST 
  mockGetRepositoryInfo(username: string): Observable<Repository[]>{
    return Observable.of(REPOSITORY_LIST.filter(repository => repository.owner.name === username));
  }

  private handleError(error: Response | any){
    return Observable.throw(error.json().error || "server error.");
  }

  private extractData(response: Response){
    return response.json();
  }

  private logData(response: Response){
    console.log(response);
  }
}
