import { of } from 'rxjs';
import { NgModule, Injectable } from '@angular/core';
import { RxStompService } from '@stomp/ng2-stompjs';

@Injectable()
export class RxStompServiceMock {
  watch() {
    return of({ body: '{"ID":1,"Status":1}'});
  }
}

@NgModule({
    providers: [{ provide: RxStompService, useClass: RxStompServiceMock}],
})
export class RxStompServiceTestingModule { }
