import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Route} from "@angular/router";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  gameInfo : any;
  constructor(private httpClient : HttpClient, private route : ActivatedRoute) { }

  ngOnInit(): void {
    const key = "96d9f74aaa43473e8d9033e5dc93a93e";
    const finalUrl = "https://api.rawg.io/api/games/" +this.route.snapshot.params.gameId  +"?key=" + key;
    this.httpClient.get<any>(finalUrl).subscribe(data => {
      this.gameInfo = data;
      let genre = this.gameInfo.genres.map(e => e.name).join(", ");
      this.gameInfo['genre'] = genre;
      console.log(this.gameInfo)
    });

  }
}
