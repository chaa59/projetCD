import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from 'src/app/user.service';
import { Utilisateur } from 'src/Model/Utilisateur';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-motDePasse',
  templateUrl: './motDePasse.component.html',
  styleUrls: ['./motDePasse.component.css']
})
export class MotDePasseComponent implements OnInit {
  utilisateur = new Utilisateur();
  form: FormGroup;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {

    this.form = new FormGroup({
      email: new FormControl(null, Validators.required),
    });

  }

  demander() {
    this.userService.findByEmail(this.form.get('email').value)
      .subscribe((value) => {
        this.utilisateur = value;
        if (this.form.get('email').value === this.utilisateur.email) {
          console.log(this.utilisateur.motdepasse);
          return 'this.utilisateur.motdepasse';
        } else { this.router.navigate(['/projet/erreur']); }
      }
      );

  }
}
