import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { GereFleuristeService } from '../gere-fleuriste.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
interface FleuristObjet {
  id_fleuriste: number;
  nom: string;
  localisation: string;
  avis: number;
  prix: number;
  mail: string;
  num_tel: string;
  service: string[];
}
@Component({
  selector: 'app-modifier-fleurist',
  templateUrl: './modifier-fleurist.component.html',
  styleUrls: ['./modifier-fleurist.component.css'],
  standalone:true,
  imports:[FormsModule,CommonModule]
})
export class ModifierFleuristComponent {
  fleurists: FleuristObjet = {
    id_fleuriste: 0,
    nom: '',
    localisation: '',
    avis: 0,
    prix: 0,
    mail: '',
    num_tel: '',
    service: []
  };

  constructor(private router: Router, private fs: GereFleuristeService) {}

  modifierFleuriste() {
    const fleuristAModifier = {
      id_fleuriste: this.fleurists.id_fleuriste,
      nom: this.fleurists.nom,
      localisation: this.fleurists.localisation,
      avis: this.fleurists.avis,
      prix: this.fleurists.prix,
      mail: this.fleurists.mail,
      num_tel: this.fleurists.num_tel,
      service: this.fleurists.service,
    };

    this.fs.modifierFleuriste(fleuristAModifier).subscribe({
      next: (response) => {
        console.log("Fleuriste modifié avec succès !");
        alert("Fleuriste modifié avec succès !");
      },
      error: (error) => {
        console.error("Erreur lors de la modification du fleuriste :", error);
        alert("Une erreur s'est produite lors de la modification du fleuriste.");
      }
    });
  }
}

