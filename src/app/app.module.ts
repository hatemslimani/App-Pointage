import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './service/authentification/token-interceptor.service';
import { ErrorInterceptorService } from './service/authentification/error-interceptor.service';
import { DatePipe } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule,NgxDatatableModule ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi:true
    },
    { provide: HTTP_INTERCEPTORS, 
      useClass: ErrorInterceptorService, 
      multi: true 
    },DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
