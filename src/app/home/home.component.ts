import { Component, OnInit } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users: any;
  observable: Observable<string>;
  subject: Subject<string>;
  behaviorSubject: BehaviorSubject<string>;

  constructor() {

    //Esempi Rxjs

    // //Observable
    // this.observable = new Observable((observer) => {
    //   setTimeout(() => {
    //     observer.next("primo")
    //     setTimeout(() => {
    //       observer.next("secondo")
    //       observer.error("errore")
    //     }, 2000);
    //   }, 2000);
    // })

    // this.observable.subscribe((res) => {
    //   console.log("prima sottoscrizione", res)
    // })

    // this.observable.subscribe((res) => {
    //   console.log("seconda sottoscrizione", res)
    // }, () => {
    //   ///la seconda funzione del subscribe 
    //   // è = al catch della promise
    //   //gestisce gli errori dell'osservabile
    //   console.log("Errore")
    // })

    // //Subject
    // this.subject = new Subject();
    // this.subject.next("subscription")
    // this.subject.asObservable().subscribe((res) => {
    //   console.log(res)
    // })

    // //Behavior Subject
    // this.behaviorSubject = new BehaviorSubject("valore default");
    // console.log(this.behaviorSubject.getValue())
    // this.behaviorSubject.asObservable().subscribe((res) => {
    //     console.log(res, this.behaviorSubject.getValue());
    // })
    // this.behaviorSubject.next("valore reimpostato")

  }

  ngOnInit() {}

}
