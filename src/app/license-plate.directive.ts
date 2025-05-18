import { Directive, HostListener, ElementRef } from '@angular/core';
import { NgControl } from '@angular/forms'

@Directive({
  selector: '[appLicensePlate]'
})
export class LicensePlateDirective {
  // Created by ChatGPT

  constructor(private control: NgControl) { }

  @HostListener('input', ['$event.target.value'])
  onInput(value: string) {
    const raw = value.replace(/[^A-Z0-9]/gi, '').toUpperCase();
    const formatted = this.autoFormat(raw);
    this.control.control?.setValue(formatted, { emitEvent: false });
  }

  private autoFormat(input: string): string {
    const patterns = [
      { regex: /^([A-Z]{2})(\d{2})(\d{2})$/, format: '$1-$2-$3' }, // XX9999
      // { regex: /^(\d{2})(\d{2})([A-Z]{2})$/, format: '$1-$2-$3' }, // 9999XX

      // { regex: /^(\d{2})([A-Z]{2})(\d{2})$/, format: '$1-$2-$3' }, // 99XX99
      // { regex: /^([A-Z]{2})(\d{2})([A-Z]{2})$/, format: '$1-$2-$3' }, // XX99XX
      // { regex: /^(\d{2})([A-Z]{4})$/, format: '$1-$2' }, // 99XXXX
      // { regex: /^([A-Z]{4})(\d{2})$/, format: '$1-$2' }, // XXXX99
      // { regex: /^([A-Z]{3})(\d{1})([A-Z]{2})$/, format: '$1-$2-$3' }, // XXX9XX
      // { regex: /^(\d{1})([A-Z]{3})(\d{2})$/, format: '$1-$2-$3' }, // 9XXX99
      // { regex: /^([A-Z]{2})([A-Z]{2})(\d{2})$/, format: '$1-$2-$3' }, // XXXX99
    ];

    for (const pattern of patterns) {
      if (pattern.regex.test(input)) {
        return input.replace(pattern.regex, pattern.format);
      }
    }

    // fallback: chunk into pairs
    return input.match(/.{1,2}/g)?.join('-').substring(0, 8) ?? input;
  }
}
