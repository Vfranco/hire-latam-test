import { Provider } from "@angular/core";
import { ChatGptService } from "@application/services/chat-gpt.service";

export const ChatGptUseCaseProvider: Provider = {
  provide: 'chatGptUseCaseProvider',
  useClass: ChatGptService
}