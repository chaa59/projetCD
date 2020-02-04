import { Utilisateur } from './../../../Model/Utilisateur';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, RouterEvent } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  form: FormGroup;
  // email: any;
  motdepasse: any;
  utilisateur = new Utilisateur();
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {

    this.form = new FormGroup({
      email: new FormControl(null, Validators.required),
      motdepasse: new FormControl(null, Validators.required),

    }
    );
  }

  redirect() {

    this.userService.findByEmail(this.form.get('email').value)
      .subscribe((value) => {
        this.utilisateur = value;
        if (this.form.get('email').value === this.utilisateur.email && this.form.get('motdepasse').value === this.utilisateur.motdepasse) {
          this.router.navigate(['/projet/home']);
        } else if (this.form.get('email').value === 'null' && this.form.get('motdepasse').value === 'null') {
          this.router.navigate(['/projet/connexion']);
        } else { this.router.navigate(['/projet/erreur']); }
      }
      );
  }
  inscription() {
    this.router.navigate(['/projet/inscription']);

  }

}
