import { ConsoleService } from './log-debugger.service';

export class LogDebugger {
  constructor(
    private consoleService: ConsoleService,
    private enabled: boolean){ }

  debug(message) {
    if (this.enabled) {
      this.consoleService.log(`DEBUG: ${message}`);
    }
  }
}
