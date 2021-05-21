import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  common = true;
  help = false;
  aboutus = false;
  login = false;
  onHelpPress() {
    this.help = true;
    this.aboutus = false;
    this.login = false;
    this.common = false;
  }
  onAboutPress() {
    this.aboutus = true;
    this.help = false;
    this.login = false;
    this.common = false;
  }
  onLoginPress() {
    this.login = true;
    this.aboutus = false;
    this.help = false;
    this.common = false;
  }

}
