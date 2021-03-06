import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  public title = "Art is Resistance";

  ngOnInit() {}

  public glitch(): void {
    setTimeout(() => document.body.classList.add("render"), 60);
    const navdemos = Array.from(document.querySelectorAll("nav.demos > .demo"));
    const total = navdemos.length;
    const current = navdemos.findIndex((el) =>
      el.classList.contains("demo--current")
    );
    const navigate = (linkEl) => {
      document.body.classList.remove("render");
      document.body.addEventListener(
        "transitionend",
        () => (window.location = linkEl.href)
      );
    };
    navdemos.forEach((link) =>
      link.addEventListener("click", (ev) => {
        ev.preventDefault();
        navigate(ev.target);
      })
    );
    document.addEventListener("keydown", (ev) => {
      const keyCode = ev.keyCode || ev.which;
      let linkEl;
      if (keyCode === 37) {
        linkEl = current > 0 ? navdemos[current - 1] : navdemos[total - 1];
      } else if (keyCode === 39) {
        linkEl = current < total - 1 ? navdemos[current + 1] : navdemos[0];
      } else {
        return false;
      }
      navigate(linkEl);
    });
  }

  public loaded(): void {
    document.body.classList.remove("loading");
    document.body.classList.add("imgloaded");
  }

  public out(): void {
    window.location.href =
      "https://twitter.com/rob_sheridan/status/1247205153914019846";
  }
}
