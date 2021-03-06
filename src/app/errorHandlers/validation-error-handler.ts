import {MessageService} from "primeng/api";
import {HttpErrorResponse} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {HttpResponseErrorHandler} from "./http-response-error-handler";
import {TranslateService} from "@ngx-translate/core";

@Injectable()
export class ValidationErrorHandler implements HttpResponseErrorHandler{

  constructor(private messageService: MessageService, private translateService: TranslateService) {}

  matches(error: HttpErrorResponse): boolean {
    return error.status === 400;
  }

  handle(error: HttpErrorResponse) {
    if(error.error.errorMsg){
      this.messageService.add({
        severity: 'error',
        summary: this.translateService.instant('toastMessages.error'),
        detail: this.translateService.instant('errors.' + error.error.errorMsg),
        life: 5000
      });
    }else if (error.error.validationErrors){
      for(const errorMsg of error.error.validationErrors){
        this.messageService.add({
          severity: 'error',
          summary: this.translateService.instant('toastMessages.error'),
          detail: this.translateService.instant('errors.' + errorMsg),
          life: 5000
        });
      }
    }else{
      this.messageService.add({
        severity: 'error',
        summary: this.translateService.instant('toastMessages.error'),
        detail: this.translateService.instant('validationErrorHandler.badRequest'),
        life: 5000
      });
    }
  }


}
