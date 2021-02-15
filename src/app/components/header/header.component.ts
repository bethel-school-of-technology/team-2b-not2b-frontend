import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  getToken() {
    return localStorage.getItem("ninjaToken");
  }

  logout() {
    localStorage.clear();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
