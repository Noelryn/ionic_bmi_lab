import { CalculatorPage } from '../calculator/calculator';
import { EvilPage } from '../evil/evil';
import { Component } from '@angular/core';
import { AboutPage } from '../about/about';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
    calculatorTab = CalculatorPage;
    evilTab = EvilPage;
  aboutTab = AboutPage;

  constructor() {

  }
}
