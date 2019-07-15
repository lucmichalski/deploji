import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SettingsRoutingModule} from './settings-routing.module';
import {SettingsComponent} from './settings.component';
import {ProjectsComponent} from './projects/projects.component';
import {KeysComponent} from './keys/keys.component';
import {SharedModule} from '../shared/shared.module';
import {AddSshKeyComponent} from './add-ssh-key/add-ssh-key.component';


@NgModule({
  declarations: [
    SettingsComponent,
    ProjectsComponent,
    KeysComponent,
    AddSshKeyComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    SharedModule,
  ]
})
export class SettingsModule { }
