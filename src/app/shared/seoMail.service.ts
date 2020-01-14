import { Injectable } from '@angular/core';
import {Meta, Title } from '@angular/platform-browser';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SeoMailService {
  url: string = 'http://localhost:3000/send';
  // headersAuth = new HttpHeaders().set('x-api-key', 'Rmlki3wVW47GRMn55Egvh68GbVXJzGSS5etGVzID');
  // httpOptionsAuth = { headers: this.headersAuth };

  constructor(private meta: Meta, private title: Title, private http: HttpClient) { }
//   generateTags(config) {
//     config = { 
//       title: 'Eurobit', 
//       description: 'Mi Vas razumijemo', 
//       image: "../../../assets/img/logoNovi.png",
//       ...config
//     }

//     this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
//     this.meta.updateTag({ name: 'twitter:site', content: '@Eurobit' });
//     this.meta.updateTag({ name: 'twitter:title', content: config.title });
//     this.meta.updateTag({ name: 'twitter:description', content: config.description });
//     this.meta.updateTag({ name: 'twitter:image', content: config.image });

//     this.meta.updateTag({ property: 'og:type', content: 'summary' });
//     this.meta.updateTag({ property: 'og:site_name', content: 'Eurobit' });
//     this.meta.updateTag({ property: 'og:title', content: config.title });
//     this.meta.updateTag({ property: 'og:description', content: config.description });
//     this.meta.updateTag({ property: 'og:image', content: config.image });
//     this.meta.updateTag({ property: 'og:url', content: `https://www.eurobit.ba` });
//   }
//   setTitle(title: string){
//     this.title.setTitle(title)
// //   }
//   sendMessage(data: object){
//     return this.http.post(this.apiUrl, data, this.httpOptionsAuth)
//   }
  sendMessage(messageContent: any) {
    return this.http.post(this.url,
      JSON.stringify(messageContent),
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' });
  }
  


}