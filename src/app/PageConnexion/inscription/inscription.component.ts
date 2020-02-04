import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  form: FormGroup;
  id: any;
  user: any;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {

    this.form = new FormGroup({
      sexe: new FormControl(null, Validators.required),
      nom: new FormControl(null, Validators.required),
      prenom: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      motdepasse: new FormControl(null, Validators.required),
    });

  }

  envoyer() {
    this.userService.envoyer(this.form.value).subscribe(response => {
      this.userService.users.push(response.body);
      this.form.reset();
      console.log(this.userService.users);
    });

  }

}

