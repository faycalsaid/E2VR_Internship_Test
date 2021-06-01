import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {HttpClient} from "@angular/common/http";
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent implements OnInit {
  displayedColumns: string[] = ['image', 'title', 'released', 'genre', 'rating'];

  games : any[] = [];
  dataSource = new MatTableDataSource<any>(this.games);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private httpClient : HttpClient) { }

  ngOnInit(): void {
    const key = "96d9f74aaa43473e8d9033e5dc93a93e";
    const finalUrl = "https://api.rawg.io/api/games?dates=2020-01-01,2020-12-31&ordering=-added&key=" + key;
    this.httpClient.get<any>(finalUrl).subscribe(data => {
      data.results.map(function(game) {
        let genre = game.genres.map(e => e.name).join(", ");
        game['genre'] = genre;
        return game;
      });
      console.log(data.results);
      this.dataSource.data = data.results;
    });
    this.dataSource.data = this.games;
    this.dataSource.paginator = this.paginator;
  }

}
