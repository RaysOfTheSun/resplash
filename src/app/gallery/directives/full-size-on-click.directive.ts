import { Directive, ElementRef } from "@angular/core";
@Directive({
  selector: "[appFullSizeOnClick]",
})
export class FullSizeOnClickDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.addEventListener("click", (e) => {
      const target = e.target as HTMLImageElement;
      target.style.maxHeight = target.style.maxHeight === "100%" ? "520px" : "100%";
      target.style.cursor = target.style.cursor === "zoom-out" ? "zoom-in" : "zoom-out";
    });
  }
}
