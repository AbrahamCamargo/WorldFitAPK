import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SnosotrosService } from 'src/app/snosotros.service';

@Component({
  selector: 'app-notas-add',
  templateUrl: './notas-add.page.html',
  styleUrls: ['./notas-add.page.scss'],
})
export class NotasAddPage implements OnInit {

  constructor(private snosotrosService: SnosotrosService, private router: Router) { }

  ngOnInit() {
  }

  saveNewNota(title: HTMLInputElement, Comment: HTMLInputElement){
    this.snosotrosService.addNota(title.value, Comment.value);
    this.router.navigate(['/notas']);
  }

}
