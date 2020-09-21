import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EulaComponent } from "./components/eula/eula.component";
import { EulaPromptComponent } from "./components/eula-prompt/eula-prompt.component";
import { SharedModule } from "../shared/shared.module";
import { SystemRoutingModule } from "./system-routing.module";
import { InactiveModalComponent } from './components/inactive-modal/inactive-modal.component';
import { InactivePromptBasicComponent } from './components/inactive-prompt-basic/inactive-prompt-basic.component';
import { InactivePromptTimedComponent } from './components/inactive-prompt-timed/inactive-prompt-timed.component';
import { InactiveTimedModalComponent } from './components/inactive-timed-modal/inactive-timed-modal.component';

@NgModule({
  declarations: [EulaComponent, EulaPromptComponent, InactiveModalComponent, InactivePromptBasicComponent, InactivePromptTimedComponent, InactiveTimedModalComponent],
  imports: [CommonModule, SystemRoutingModule, SharedModule],
})
export class SystemModule {}
