import { Injectable, Post } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { UsersService } from './users/users.service';
import { Users } from './users/users.entity';


@Injectable()
export class AppService {
  constructor(

    private readonly httpService: HttpService,
    private readonly usersService: UsersService
  ) {}

  getMain() {
    return "welcome to the world where there are no users <a href='https://api.intra.42.fr/oauth/authorize?client_id=58f8f67ef171da192d00fd9d5627b16fcbf49d5457a889afa438834bef1978d4&redirect_uri=http%3A%2F%2Flocalhost%3A8888%2Fsignin&response_type=code'>signin</a>";
  }

  getSigned(user: Users) {
    var html: string = "<form action='/update' method='post'> " +
    "<img src='" + user.image_url + "' alt='user avatar'><br>" + 
    "<label for='login'>Login: </label><input type='text' id=" +
    "'login' name='login' value='" + user.login + "'><br>" +
    "<label for='fullname'>Full name: </label><input type='" +
    "text' id='fullname' name='fullname' value='" + user.fullname +
    "'><br><label for='email'>Email: </label><input type='text'" +
    "id='email' name='email' value='" + user.email +
    "'><br><input type='submit' value='Update'><form>"; 
    return html;
  }

 

  async signIn(code:string) {
    if (!code)
      return this.getMain();
    var req = "https://api.intra.42.fr/oauth/token?" +
        "client_id=58f8f67ef171da192d00fd9d5627b16fcbf49d5457a889afa438834bef1978d4" +
        "&client_secret=a93347fd7f8aa889aaaf202de3fd72082da527fb263a32fc38145e07ba051d03&code=" +
        code + "&redirect_uri=http%3A%2F%2Flocalhost%3A8888%2Fsignin&grant_type=authorization_code";
    var token = await this.httpService.post(req).toPromise().then(response => response.data["access_token"]).catch(err => err.status);
    if (token == undefined)
        return this.getMain();
    var req_to_user = "https://api.intra.42.fr/v2/me?access_token=" + token + "&token_type=bearer";
    var info = await this.httpService.get(req_to_user).toPromise().then(res=>res.data).catch(err=>err.status);
    if (info == undefined)
        return this.getMain();
    var user = await this.usersService.findOne(info['id']);
    if (user == undefined)
    {
      var newuser: Users = new Users();
      newuser.id = info['id'];
      newuser.login = info['login'];
      newuser.firstname = info['first_name'];
      newuser.lastname = info['last_name'];
      newuser.fullname = info['usual_full_name'];
      newuser.email = info['email'];
      newuser.image_url = info['image_url'];
      this.usersService.addUser(newuser);
      user = newuser;
    }
    return this.getSigned(user);
    return "hello son of a bitch(" + info['login'] + ") i know your name (" + info['usual_full_name'] + ") and email (" + info['email'] + ")";
  }
}
