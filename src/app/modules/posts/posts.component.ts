
import { Component, NgModule, OnInit } from '@angular/core';
import{ Ipost} from './post';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})




export class PostsComponent implements OnInit {


  Iposts:Ipost[]=[
    {
        id:1,
        nom:'Shiba Inu',
        nomp:'Dog Breed',
        description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan . A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
        url:'https://material.angular.io/assets/img/examples/shiba2.jpg',
        urlp:'https://material.angular.io/assets/img/examples/shiba1.jpg',
        toggle_l : true,
        status_l :'Enable',
        enableDisableRule_l() {
          this.toggle_l = !this.toggle_l;
          this.status_l = this.toggle_l ? 'Enable' : 'Disable';      },
          toggle_c : true,
          status_c : 'Enable',

          enableDisableRule_c() {
            this.toggle_c = !this.toggle_c

        }
    },
    {
      id:2,
      nom:'Mercedes-Benz',
      nomp:'Voitures',
      description: "Mercedes-Benz (prononcé en allemand : /mɛʁˈtseːdəsˌbɛnts/) est un constructeur allemand d'automobiles (modèles premium, de sport et de luxe), de camions, d'autocars et d'autobus indépendant fondé en 1926 par trois autres constructeurs : Daimler-Motoren-Gesellschaft, Mercedes et Benz & Cie.",
      url:'assets/1.jpeg',
      urlp:'assets/11.jpg',
      toggle_l : true,
      status_l :'Enable',
      enableDisableRule_l() {
        this.toggle_l = !this.toggle_l;
        this.status_l = this.toggle_l ? 'Enable' : 'Disable';},
        toggle_c : true,
        status_c : 'Enable',

        enableDisableRule_c() {
          this.toggle_c = !this.toggle_c

      }

    },
    {
      id:3,
      nom:'La fraise',
      nomp:'Fruits',
      description: 'La fraise est un fruit rouge issu des fraisiers, espèces de plantes herbacées appartenant au genre Fragaria (famille des Rosacées), dont plusieurs variétés sont cultivées.',
      url:'assets/2.jpg',
      urlp:'assets/22.jpg',
      toggle_l : true,
      status_l :'Enable',
      enableDisableRule_l() {
        this.toggle_l = !this.toggle_l;
        this.status_l = this.toggle_l ? 'Enable' : 'Disable';},
        toggle_c : true,
        status_c : 'Enable',

        enableDisableRule_c() {
          this.toggle_c = !this.toggle_c

      }
    }


  ];




  constructor() { }

  ngOnInit(): void {
  }

}


