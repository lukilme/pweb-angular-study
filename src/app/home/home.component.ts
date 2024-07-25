import { Component, AfterViewInit, OnDestroy, OnInit } from "@angular/core";
import { count, interval, Subscription } from "rxjs";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements AfterViewInit {
  private subscription: Subscription = new Subscription();
  public seconds: number = 0;
  public gay_emoji: string = "✨";

  painting_text(element: HTMLElement) {
    if (element) {
      const text = element.textContent || "";
      element.innerHTML = "";

      for (let i = 0; i < text.length; i++) {
        const span = document.createElement("span");
        span.textContent = text[i];
        span.className = "gay-letter";
        element.appendChild(span);
      }
    }
  }

  ngAfterViewInit(): void {
    const textElements = document.getElementsByClassName(
      "gay-text"
    ) as HTMLCollectionOf<HTMLElement>;
    Array.from(textElements).forEach((item) => {
      this.painting_text(item);
    });
  }

  ngOnInit(): void {
    const text_to_change: HTMLElement | null = document.getElementById("praticando");
      const timer$ = interval(500);
      let counter = 0;
      this.subscription = timer$.subscribe(() => {
        this.seconds++;
        counter++;
        switch (counter) {
          case 3:
            text_to_change!.textContent="Praticando Angular...";
            break;
          case 2:
            text_to_change!.textContent="Praticando Angular..";
            break;
          case 1:
            text_to_change!.textContent="Praticando Angular.";
            break;
          default:
            counter = 0;
        }
      });
    
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
