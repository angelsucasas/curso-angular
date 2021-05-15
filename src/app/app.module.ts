import { AppMaterialModule } from './app-material/app-material.module'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { DadoComponent } from './components/dado/dado.component';
import { PipeExampleComponent } from './components/examples/pipe-example/pipe-example.component';
import { PipeExample} from './components/examples/pipe-example/OGPipe-example';
import { PipeMirrorComponent } from './components/examples/pipe-mirror/pipe-mirror.component';
import { NavbarComponent } from './components/invento/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollControlDirective } from './components/scrollControl/scroll-control.directive';
import { HomePageTopModule}  from './components/home-page-top/home-page-top.module';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { ApiViewComponent } from './components/api-view/api-view.component'
import { ClientModule } from './http/client/client.module'
import { LoggerModule } from './logger/logger.module'

@NgModule({
  declarations: [
    AppComponent,
    DadoComponent,
    PipeExampleComponent,
    PipeExample,
    PipeMirrorComponent,
    NavbarComponent,
    ScrollControlDirective,
    ApiViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomePageTopModule,
    AppMaterialModule,
    FormsModule,
    ClientModule,
    ReactiveFormsModule,
    LoggerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
