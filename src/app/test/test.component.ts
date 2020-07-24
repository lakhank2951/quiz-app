import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonService } from '../common.service';
import { CountdownComponent } from 'ngx-countdown';
import { Router } from '@angular/router';

declare var jQuery: any;

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  questionData;
  isItemSelected: boolean = true;
  isExamFinished: boolean = false;
  score: number;
  currentQuestion;
  ansObj = {
    id: '',
    value: ''
  }

  @ViewChild('countdown') counter: CountdownComponent;

  constructor(private _service: CommonService, public router: Router) { }
  
  ngOnInit() {
    this._service.getQuestionData(undefined).subscribe(res => {
      if(res.message == 'OK' && res.status == 200) {
        this.questionData = res.data
      }
    })
  }

  timesUp(event) { 
    if (event.action == "done") { 
      jQuery("#notifyModal").modal('show');
    } 
  }


  closelistModal() {
    this.ansObj = {
      id: '',
      value: ''
    }
    
    // if(this.ansObj.value == '') {
    //   this.ansObj['id'] = this.questionData.id;
    //   this.ansObj['value'] = "a"
    // }

    if(this.questionData.id < 5) {
      this.ansObj['id'] = this.questionData.id;
      this.ansObj['value'] = "a"
    } else {
      this.ansObj['id'] = '5';
      this.ansObj['value'] = 'a'
    }
    
    // setTimeout(() => this.counter.restart());
    this.nextQuestion();
    
    setTimeout(() => {
      if(this.questionData.id < 5) {
        jQuery('#notifyModal').modal('hide');
      }
      this.counter.restart()
    }, 1000);
    
  }

  onItemChange(item) {
    if(item) {
      this.ansObj['id'] = this.questionData.id;
      this.ansObj['answer'] = item.value

      this.isItemSelected = false;
    }
  }

  nextQuestion() {
    this._service.getQuestionData(this.ansObj).subscribe(res => {
      if(res.status == 200 && res.message == 'Exam Finished') {
        jQuery("#notifyModal").modal('show');
        this.score = res.data.score;
        this.isExamFinished = true
      } else if(res.status == 200 && res.message == 'OK') {
        this.questionData = ''
        this.questionData = res.data
        setTimeout(() => this.counter.restart());
      }
    })
  }
  ExamFinished() {
    jQuery('#notifyModal').modal('hide');    
  }

  logout() {
    if(this._service.userId) {
      this._service.userId = ''
    }
    jQuery('#notifyModal').modal('hide');

    setTimeout(() => {
      this.router.navigate(['/'])
    }, 100);
  }

}
