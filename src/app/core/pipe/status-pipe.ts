import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "status"
})
export class StatusPipe implements PipeTransform {
    public transform(value: number, x: string): string {
        let z = status[value]
        return z;
    }
}
const status = {
    '-1': 'Deleted',
    0: 'Pending',
    1: 'Active'
}
