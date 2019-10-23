import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { DaftarArtikelService } from '../artikel.service';

@Component({
  selector: 'app-artikel',
  templateUrl: 'artikel.page.html',
  styleUrls: ['artikel.page.scss'],
})
export class ArtikelPage implements OnInit, OnDestroy {

  private artikelSubs: Subscription;
  artikelList: string[];

  constructor(
    private artikelSrv: DaftarArtikelService
  ) {}


  ngOnInit() {

    this.artikelSubs = this.artikelSrv.artikelChange.subscribe((artikel) => {
      this.artikelList = artikel;
    });

    this.artikelSrv.getDaftarArtikel();
    // console.log(this.artikelList);
  }


  ngOnDestroy() {
    this.artikelSubs.unsubscribe();
  }

}
