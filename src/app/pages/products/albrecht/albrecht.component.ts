import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-albrecht',
  templateUrl: './albrecht.component.html',
  styleUrls: ['./albrecht.component.scss']
})
export class AlbrechtComponent implements OnInit {

  images = [
    {
      image: 'csm_APC_585952f5bc1.png',
      name: 'apc'
    },
    {
      image: 'csm_Ultra_4351180962.png',
      name: 'ultra'
    },
    {
      image: 'csm_Micro_702be798b1.png',
      name: 'micro'
    },
    {
      image: 'csm_1---13-mm_73cbd5303f.png',
      name: '1st'
    },
    {
      image: 'csm_CNC_360b1b5f64.png',
      name: 'cnc'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
