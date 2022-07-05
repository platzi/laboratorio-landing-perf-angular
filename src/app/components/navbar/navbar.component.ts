import { Component, OnInit } from '@angular/core';
import { faCube } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  faCube = faCube;
  showMobileMenu = false;

  constructor() { }

  ngOnInit(): void {
  }

}
