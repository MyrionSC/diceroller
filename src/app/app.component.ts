import {Component, ElementRef, HostListener, Renderer, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    @ViewChild('firstInput') firstInput: ElementRef;
    diceField1 = 0;
    diceField2 = 0;
    diceField3 = 0;
    diceField4 = 0;
    diceField5 = 0;
    resultField1 = -1;
    resultField2 = -1;
    resultField3 = -1;
    resultField4 = -1;
    resultField5 = -1;
    total = -1;
    showFive = false;

    @HostListener('window:keydown', ['$event'])
    keyboardInput(event: KeyboardEvent) {
        if (event.code === 'Space' && event.ctrlKey === true) {
            this.rollDice();
        } else if (event.code === 'KeyB' && event.ctrlKey === true) {
            this.reset();
        }
    }

    constructor(private renderer: Renderer) {}

    rollDice () {
        this.resultField1 = this.roll(this.diceField1, 1);
        this.resultField2 = this.roll(this.diceField2, 2);
        this.resultField3 = this.roll(this.diceField3, 3);
        this.resultField4 = this.roll(this.diceField4, 4);
        this.resultField5 = this.roll(this.diceField5, 5);
        this.total = this.resultField1 + this.resultField2 + this.resultField3 + this.resultField4 + this.resultField5;

        this.renderer.invokeElementMethod(this.firstInput.nativeElement, 'select', []);
    }

    roll (amount: number, hitValue: number): number {
        let hits = 0;
        for (let i = 0; i < amount; i++) {
            let roll = Math.floor(Math.random() * 6 + 1);
            if (roll <= hitValue) {
                hits++;
            }
        }
        return hits;
    }

    reset () {
        this.diceField1 = 0;
        this.diceField2 = 0;
        this.diceField3 = 0;
        this.diceField4 = 0;
        this.diceField5 = 0;
        this.resultField1 = -1;
        this.resultField2 = -1;
        this.resultField3 = -1;
        this.resultField4 = -1;
        this.resultField5 = -1;
        this.total = -1;
        this.renderer.invokeElementMethod(this.firstInput.nativeElement, 'select', []);
    }
}
