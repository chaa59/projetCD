import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  form: FormGroup;
  username: any;
  pwd: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.form = new FormGroup({
      username: new FormControl(null, Validators.required),
      pwd: new FormControl(null, Validators.required),

    }
    );
  }

  redirect() {

    if (this.form.get('username').value === 'admin' && this.form.get('pwd').value === 'admin') {
      this.router.navigate(['/projet/home']);
    } else { this.router.navigate(['/projet/erreur']); }

  }

  inscription() {
    this.router.navigate(['/projet/inscription']);

  }

}
