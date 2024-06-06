import { Injectable } from "@angular/core";
import { Toast } from "../model/toast";

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toasts: Toast[] = [];

  constructor() {}

  addToast(toast: Toast): void {
    this.toasts.push(toast);
    setTimeout(() => {
      this.toasts = this.toasts.filter(t => t !== toast);
    }, toast.duration);
  }
}