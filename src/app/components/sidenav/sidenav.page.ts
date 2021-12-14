import { Component, OnInit } from '@angular/core';
import { CRUDService } from 'src/app/Services/crud.service';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.page.html',
  styleUrls: ['./sidenav.page.scss'],
})

export class SidenavPage implements OnInit {
 
  active = '';

  NAV = [
    /* {
      name: 'inicio',
      link: '/nav/inicio',
      icon: 'home'
    }, */
    {
      name: 'Perfil',
      link: '/sidenav/nav/perfil',
      icon: 'person-circle'
    }
    ,
    {
      name: 'Notificaciones',
      link: '/sidenav/nav/notificaciones',
      icon: 'notifications'
    },
    {
      name: 'Membresias',
      link: '/sidenav/nav/membresias',
      icon: 'card'
    },
    {
      name: 'Eventos',
      link: '/sidenav/nav/eventos',
      icon: 'calendar'
    },
    {
      name: 'Favoritos',
      link: '/sidenav/nav/favoritos',
      icon: 'star'
    }
    ,
    {
      name: 'Dieta',
      link: '/sidenav/nav/dieta',
      icon: 'nutrition'
    }
    ,
    {
      name: 'Entrenamiento',
      link: '/sidenav/nav/entrenamiento',
      icon: 'barbell'
    }
    ,
    {
      name: 'Ejercicios',
      link: '/sidenav/nav/ejercicios',
      icon: 'body'
    }
    ,
    {
      name: 'Motivacion',
      link: '/sidenav/nav/motivacion',
      icon: 'thumbs-up'
    },
    {
      name: 'Notas',
      link: '/sidenav/nav/notas',
      icon: 'create'
    }
    ,
    {
      name: 'Sobre Nosotros',
      link: '/sidenav/nav/sobre-nosotros',
      icon: 'people'
    }
    
  ]
  cantidad:any; 
  constructor(private router: Router, private CRUDService:CRUDService) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.active = event.url
    })
    
  }

  ngOnInit() {
    this.cantidad = CRUDService.cantNot;
   }

}