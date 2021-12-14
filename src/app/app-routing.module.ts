import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NotasPage } from './components/notas/notas.page';


const routes: Routes = [
  /* {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./components/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'notificaciones',
    loadChildren: () => import('./components/notificaciones/notificaciones.module').then( m => m.NotificacionesPageModule)
  },
  {
    path: 'membresias',
    loadChildren: () => import('./components/membresias/membresias.module').then( m => m.MembresiasPageModule)
  },
  {
    path: 'eventos',
    loadChildren: () => import('./components/eventos/eventos.module').then( m => m.EventosPageModule)
  },
  {
    path: 'favoritos',
    loadChildren: () => import('./components/favoritos/favoritos.module').then( m => m.FavoritosPageModule)
  },
  {
    path: 'dieta',
    loadChildren: () => import('./components/dieta/dieta.module').then( m => m.DietaPageModule)
  },
  {
    path: 'entrenamiento',
    loadChildren: () => import('./components/entrenamiento/entrenamiento.module').then( m => m.EntrenamientoPageModule)
  },
  {
    path: 'ejercicios',
    loadChildren: () => import('./components/ejercicios/ejercicios.module').then( m => m.EjerciciosPageModule)
  },
  {
    path: 'motivacion',
    loadChildren: () => import('./components/motivacion/motivacion.module').then( m => m.MotivacionPageModule)
  },
  {
    path: 'notas',
    loadChildren: () => import('./components/notas/notas.module').then( m => m.NotasPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./components/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'sobre-nosotros',
    loadChildren: () => import('./components/sobre-nosotros/sobre-nosotros.module').then( m => m.SobreNosotrosPageModule)
  }, */
 /*  {
    path: '',
    loadChildren: () => import('./components/sidenav/sidenav.module').then( m => m.SidenavPageModule)
  } *//*,
   {
    path: 'welcome',
    loadChildren: () => import('./components/welcome/welcome.module').then( m => m.WelcomePageModule),
   },{
    path: 'login',
    loadChildren: () => import('./components/login/login.module').then( m => m.LoginPageModule)
  },*/ 
  /* ,
  {
    path: 'register',
    loadChildren: () => import('./components/register/register.module').then( m => m.RegisterPageModule)
  } */
  /*
  ,
  {
    path: 'perfil',
    loadChildren: () => import('./components/perfil/perfil.module').then( m => m.PerfilPageModule)
  },*/
  /* {
    path: 'myevents',
    loadChildren: () => import('./components/myevents/myevents.module').then( m => m.MyeventsPageModule)
  }
  , */
  {
    path: '',
    loadChildren: () => import('./components/Welcome/Welcome.module').then( m => m.WelcomePageModule)
  },
  
  {
    path: 'register',
    loadChildren: () => import('./components/register/register.module').then( m => m.RegisterPageModule)
  },
  
  {
    path: 'login',
    loadChildren: () => import('./components/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'sidenav',
    loadChildren: () => import('./components/sidenav/sidenav.module').then( m => m.SidenavPageModule)
  }
  ,
  {
    path: 'inicio',
    loadChildren: () => import('./components/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'ejercicio-ind',
    loadChildren: () => import('./components/ejercicio-ind/ejercicio-ind.module').then( m => m.EjercicioIndPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
