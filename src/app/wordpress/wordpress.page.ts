import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-wordpress',
  templateUrl: './wordpress.page.html',
  styleUrls: ['./wordpress.page.scss'],
})
export class WordpressPage implements OnInit {
  constructor(private navCtrl: NavController) {}

  ngOnInit() {
    // Este es el método ngOnInit
  }

  visitarEnlace(enlace: string) {
    window.open(enlace, '_blank');
  }
}

