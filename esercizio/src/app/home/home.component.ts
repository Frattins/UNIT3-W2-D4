import { Component } from '@angular/core';
import { iPhoto } from '../i-photos';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


    photos: iPhoto[] = [];
    likeCount = 0;

    constructor(private photoService: PhotosService,) {}

    ngOnInit() {
      this.photoService.getPhotos().subscribe(
        photos => this.photos = photos,
        error => console.error(error)
      );

    }
  }
