import { Component, ChangeDetectorRef } from '@angular/core';

import { NavController } from 'ionic-angular';

import { ITrackConstraint } from 'ionic-audio';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  myTracks: ITrackConstraint[];
  playlist: ITrackConstraint[] = [];

  currentIndex: number = -1;
  currentTrack: ITrackConstraint;

  constructor(public navCtrl: NavController, private _cdRef: ChangeDetectorRef) {
    // plugin won't preload data by default, unless preload property is defined within json object - defaults to 'none'
    this.myTracks = [{
      src: 'http://radios502.radiotouch.net:13201/;',
      artist: 'Radio',
      title: 'K Buena',
      art: 'assets/img/kbuena.jpg',
      preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
    },
    {
      src: 'http://issultra.endavomedia.com:8000/ultraranchito.mp3',
      artist: 'Radio',
      title: 'Ranchito',
      art: 'assets/img/ranchito.jpg',
      preload: 'metadata' // tell the plugin to preload metadata such as duration for this track,  set to 'none' to turn off
    },

    {
      src: 'http://live1.rcnmundo.com/lacarinosacucuta.mp3',
      artist: 'Radio',
      title: 'La Cariñosa',
      art: 'assets/img/cariniosa.jpg',
      preload: 'metadata' // tell the plugin to preload metadata such as duration for this track,  set to 'none' to turn off
    },

    {
      src: 'http://17973.live.streamtheworld.com:3690/QTEJA_CR_SC;',
      artist: 'Radio',
      title: 'Qteja',
      art: 'assets/img/qja.jpg',
      preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
    },




    {
      src: 'http://144.217.67.108:8059/;',
      artist: 'Radio',
      title: 'La Chimalteca',
      art: 'assets/img/chimalteca.jpg',
      preload: 'metadata' // tell the plugin to preload metadata such as duration for this track,  set to 'none' to turn off
    },


    {
      src: 'http://198.15.86.218:9432/;',
      artist: 'Radio',
      title: 'Teziutlan',
      art: 'assets/img/consentida.jpg',
      preload: 'metadata' // tell the plugin to preload metadata such as duration for this track,  set to 'none' to turn off
    },

    {
      src: 'http://192.99.150.42:8312/;',
      artist: 'Radio',
      title: 'TGD',
      art: 'assets/img/tgd.jpg',
      preload: 'metadata' // tell the plugin to preload metadata such as duration for this track,  set to 'none' to turn off
    },

    {
      src: 'http://radio.spiritmedia.mx:8000/xerok;',
      artist: 'Radio',
      title: 'Calibre',
      art: 'assets/img/calibre.jpg',
      preload: 'metadata' // tell the plugin to preload metadata such as duration for this track,  set to 'none' to turn off
    },

    {
      src: 'http://ample-zeno-05.radiojar.com/cqkqta30974tv?rj-ttl=5&rj-token=AAABYciiM46ANGDKwhUqFnQOieRPBqzfqO4gcCaH1QFfkzdTfL_QGA;',
      artist: 'Radio',
      title: 'La Ranchera Cuauhtemoc',
      art: 'assets/img/cuauhtemoc.jpg',
      preload: 'metadata' // tell the plugin to preload metadata such as duration for this track,  set to 'none' to turn off
    }

  ];
  }

  add(track: ITrackConstraint) {
    this.playlist.push(track);
  }

  play(track: ITrackConstraint, index: number) {
      this.currentTrack = track;
      this.currentIndex = index;
  }

  next() {
    // if there is a next track on the list play it
    if (this.playlist.length > 0 && this.currentIndex >= 0 && this.currentIndex < this.playlist.length - 1) {
      let i = this.currentIndex + 1;
      let track = this.playlist[i];
      this.play(track, i);
      this._cdRef.detectChanges();  // needed to ensure UI update
    } else if (this.currentIndex == -1 && this.playlist.length > 0) {
      // if no track is playing then start with the first track on the list
      this.play(this.playlist[0], 0);
    }
  }

  onTrackFinished(track: any) {
    this.next();
  }

  clear() {
    this.playlist = [];
  }

}
