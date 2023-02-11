import {Component, OnInit} from '@angular/core';
import {DOCUMENT} from "@angular/common";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

    closeMenu() {
      let element = document.getElementById('navbarSupportedContent') as HTMLElement;
      element.classList.remove("show");
    }

    openMenu() {
        let element = document.getElementById('navbarSupportedContent') as HTMLElement;
        element.classList.add("show");
    }
}
