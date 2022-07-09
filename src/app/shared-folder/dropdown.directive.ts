import { HostBinding, HostListener } from "@angular/core";
import { OnDestroy, Output } from "@angular/core";
import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";

@Directive({
  selector: '[appDropdown]'
 
})
export class DropdownDirective {

  @HostBinding('class.open') isOpen = false;
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }

  
}
