import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidenavPage } from './sidenav.page';

const routes: Routes = [
  {
    path: 'nav',
    component: SidenavPage,
    children: [
      {
        path: 'notificaciones',
        loadChildren: () => import('../notificaciones/notificaciones.module').then(m => m.NotificacionesPageModule)
      },
      {
        path: 'membresias',
        loadChildren: () => import('../membresias/membresias.module').then(m => m.MembresiasPageModule)
      },
      {
        path: 'eventos',
        loadChildren: () => import('../eventos/eventos.module').then(m => m.EventosPageModule)
      },
      {
        path: 'favoritos',
        loadChildren: () => import('../favoritos/favoritos.module').then(m => m.FavoritosPageModule)
      },
      {
        path: 'dieta',
        loadChildren: () => import('../dieta/dieta.module').then(m => m.DietaPageModule)
      },
      {
        path: 'entrenamiento',
        loadChildren: () => import('../entrenamiento/entrenamiento.module').then(m => m.EntrenamientoPageModule)
      },
      {
        path: 'ejercicios',
        loadChildren: () => import('../ejercicios/ejercicios.module').then(m => m.EjerciciosPageModule)
      },
      {
        path: 'motivacion',
        loadChildren: () => import('../motivacion/motivacion.module').then(m => m.MotivacionPageModule)
      },
      {
        path: 'notas',
        loadChildren: () => import('../notas/notas.module').then(m => m.NotasPageModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('../perfil/perfil.module').then(m => m.PerfilPageModule)
      },
      {
        path: 'sobre-nosotros',
        loadChildren: () => import('../sobre-nosotros/sobre-nosotros.module').then(m => m.SobreNosotrosPageModule)
      },
      {
        path: 'inicio',
        loadChildren: () => import('../inicio/inicio.module').then(m => m.InicioPageModule)
      },
      {
        path: 'myevents',
        loadChildren: () => import('../myevents/myevents.module').then(m => m.MyeventsPageModule)
      },
      {
        path: 'Welcome',
        loadChildren: () => import('../Welcome/Welcome.module').then(m => m.WelcomePageModule)
      },
      {
        path: 'login',
        loadChildren: () => import('../login/login.module').then(m => m.LoginPageModule)
      }
      ,
      {
        path: 'register',
        loadChildren: () => import('../register/register.module').then(m => m.RegisterPageModule)
      }, 
      {
        path: 'ejercicio-ind',
        loadChildren: () => import('../ejercicio-ind/ejercicio-ind.module').then(m => m.EjercicioIndPageModule)
      },

      {    
        path: '',
        redirectTo: '/sidenav/nav/inicio',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/sidenav/nav/inicio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SidenavPageRoutingModule {}
