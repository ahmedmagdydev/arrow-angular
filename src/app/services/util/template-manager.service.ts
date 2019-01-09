import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class TemplateManagerService {

  constructor() { }


  /* *************** create <script> ************ */
  createScript(content: string): HTMLElement {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.text = content;
      return script;
  }

  /* *************** create <style> style************ */
  createStyleSheet(content: string): HTMLElement {
      const link = document.createElement('style');
      link.type = 'text/css';
      link.media = 'all';
      link.textContent = content;
      return link;
  }
}
