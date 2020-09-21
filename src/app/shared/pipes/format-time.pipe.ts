import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "formatTime",
})
export class FormatTimePipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): unknown {
    var milliseconds: number | string = (value % 1000) / 100;
    let seconds: number | string = Math.floor((value / 1000) % 60);
    let minutes: number | string = Math.floor((value / (1000 * 60)) % 60);
    let hours: number | string = Math.floor((value / (1000 * 60 * 60)) % 24);

    hours = hours < 10 ? "" + hours : hours;
    minutes = minutes < 10 ? "" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return minutes + ":" + seconds;
  }
}
