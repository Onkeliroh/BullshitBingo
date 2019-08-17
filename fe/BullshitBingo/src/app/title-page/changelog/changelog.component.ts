import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-changelog',
  templateUrl: './changelog.component.html'
})
export class ChangelogComponent implements OnInit {

  changelog: string;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.loadChangelog();
  }

  private loadChangelog() {
    this.httpClient.get('../../../assets/changelog.md', { responseType: 'text' }).subscribe(x => this.changelog = x);
  }
}
