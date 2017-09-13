import { concat } from 'rxjs/operator/concat';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GithubServiceProvider } from '../../providers/github.service/github.service';
import { ComponentsModule } from '../../components/components.module';
import { User } from '../../models/user.interface';
import { Repository } from '../../models/repository.interface';
/**
 * Generated class for the ProfileSearchResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  segment: 'profile/results/:username'
})
@Component({
  selector: 'page-profile-search-result',
  templateUrl: 'profile-search-result.html',
})
export class ProfileSearchResultPage {

  username: string;
  user: User;
  repositories: Repository[];

  constructor(private github: GithubServiceProvider,private navCtrl: NavController, private navParams: NavParams) {
  }

  getUserInfo(): void{
    // this.github.mockGetUserInfo(this.username).subscribe((data: User) => this.user = data);
    // this.github.mockGetRepositoryInfo(this.username).subscribe((data: Repository[]) => this.repositories = data);
    this.github.getUserInfo(this.username).subscribe((data: User) => this.user = data);
    this.github.getRepoInfo(this.username).subscribe((data: Repository[]) => this.repositories = data)
  }

  ionViewDidEnter(){
    this.username = this.navParams.get('username');
    if(this.username){
      this.getUserInfo();
    }
  }

}
