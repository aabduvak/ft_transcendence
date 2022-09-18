import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map, Observable, observable } from 'rxjs';
import { Console } from 'console';

@Injectable()
export class AppService {
  name:any;

  constructor(private readonly httpService: HttpService) {}

  toMain(): string {
    return "welcome to the world where there are no users";
  }

  async serviceGet(code:string) {
    var req = "https://api.intra.42.fr/oauth/token?" +
        "client_id=58f8f67ef171da192d00fd9d5627b16fcbf49d5457a889afa438834bef1978d4" +
        "&client_secret=a93347fd7f8aa889aaaf202de3fd72082da527fb263a32fc38145e07ba051d03&code=" +
        code + "&redirect_uri=https://github.com/aabduvak&grant_type=authorization_code";
    
    var token = await this.httpService.post(req).toPromise().then(response => response.data["access_token"]).catch(err => err.status);
    if (token == undefined)
        return this.toMain();
    var req_to_user = "https://api.intra.42.fr/v2/me?access_token=" + token + "&token_type=bearer";
    var info = await this.httpService.get(req_to_user).toPromise().then(res=>res.data).catch(err=>err.status);
    if (info == undefined)
        return this.toMain();
    return "hello son of a bitch(" + info['login'] + ") i know your name (" + info['usual_full_name'] + ") and email (" + info['email'] + ")";
}
}
