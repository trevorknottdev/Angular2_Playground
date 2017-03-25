import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fizzbuzz',
  templateUrl: './fizzbuzz.component.html',
  styleUrls: ['./fizzbuzz.component.scss']
})
export class FizzbuzzComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.fizzBuzz();
  }

  fizzBuzz (): any {
    /* Ternary Op Way to Spice things up */
    for (let i = 1; i < 101; i++) {
      const isFizz = i % 3 == 0;
      const isBuzz = i % 5 == 0;
      let result =
        isFizz && isBuzz
          ? 'FizzBuzz'
          : isFizz
            ? 'Fizz'
            : isBuzz
              ? 'Buzz'
              : i;
      console.log(result);
      document.write(result.toString());
    }
  }

}
