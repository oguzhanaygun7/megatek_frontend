import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

    openPDF() {
        window.open('assets/pdf/genel/MEGATEK-FIRMA-KATALOG-2021.pdf', '_blank')
    }
}
