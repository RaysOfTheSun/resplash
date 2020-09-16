import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EulaComponent } from "./components/eula/eula.component";
import { EulaPromptComponent } from "./components/eula-prompt/eula-prompt.component";
import { SharedModule } from "../shared/shared.module";
import { SystemRoutingModule } from "./system-routing.module";

@NgModule({
  declarations: [EulaComponent, EulaPromptComponent],
  imports: [CommonModule, SystemRoutingModule, SharedModule],
})
export class SystemModule {}
