import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { OnInit } from '@angular/core';
@Directive({
    selector: '[MyDirective]', // Selector for the attribute
    standalone:true
  })

export class myDirectiveDirective implements OnInit {

    constructor(private elementRef:ElementRef){

    }
    
    ngOnInit(): void {
        //this.elementRef.nativeElement.style.backgroundColor='pink';
    }

    @HostListener('mouseenter') mouseenter(eventData:Event){
        this.elementRef.nativeElement.style.backgroundColor='pink';
    }

    @HostListener('mouseleave') mouseleave(eventData:Event){
        this.elementRef.nativeElement.style.backgroundColor='orange';
    }
}