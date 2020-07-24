import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  userId;

  quizlist1 = {
    status: 200,
    message: 'OK',
    data: {
      id: 1,
      question: "Inventor of c++?",
      answer: [
        {
          name: 'ABC',
          value: 'A'
        },
        {
          name: 'DEF',
          value: 'B'
        },
        {
          name: 'XYZ',
          value: 'C'
        },
        {
          name: 'PQR',
          value: 'D'
        }
      ]
    }
  }

  quizlist2 = {
    status: 200,
    message: 'OK',
    data: {
      id: 2,
      question: "Inventor of c++?",
      answer: [
        {
          name: 'Item 1',
          value: 'a'
        },
        {
          name: 'Item 2',
          value: 'b'
        },
        {
          name: 'Item 3',
          value: 'c'
        },
        {
          name: 'Item 4',
          value: 'd'
        }
      ]
    }
  }

  quizlist3 = {
    status: 200,
    message: 'OK',
    data: {
      id: 3,
      question: "Inventor of c++?",
      answer: [
        {
          name: 'pop',
          value: 'pop'
        },
        {
          name: 'push',
          value: 'push'
        },
        {
          name: 'RxJS',
          value: 'RxJS'
        },
        {
          name: 'JS',
          value: 'JS'
        }
      ]
    }
  }

  quizlist4 = {
    status: 200,
    message: 'OK',
    data: {
      id: 4,
      question: "Inventor of c++?",
      answer: [
        {
          name: 'Why',
          value: 'Why'
        },
        {
          name: 'When',
          value: 'When'
        },
        {
          name: 'How',
          value: 'How'
        },
        {
          name: 'What',
          value: 'What'
        }
      ]
    }
  }

  quizlist5 = {
    status: 200,
    message: 'OK',
    data: {
      id: 5,
      question: "Inventor of c++?",
      answer: [
        {
          name: 'do',
          value: 'do'
        },
        {
          name: 'does',
          value: 'does'
        },
        {
          name: 'did',
          value: 'did'
        },
        {
          name: 'both',
          value: 'both'
        }
      ]
    }
  }

  scoreData = {
    status: 200,
    message: 'Exam Finished',
    data: {
      score: 500
    }
  }

  constructor() { }

  loginUser(userData) {
    let temp = {
      status: 200,
      message: 'OK',
      data: {
        userId: 1
      }
    }

    return of(temp);
  }

  getQuestionData(questionData?) {
    if(!questionData) {
      return of<any>(this.quizlist1)
    } else if(questionData.id == 1) {
      return of<any>(this.quizlist2)
    } else if(questionData.id == 2) {
      return of<any>(this.quizlist3)
    } else if(questionData.id == 3) {
      return of<any>(this.quizlist4)
    } else if(questionData.id == 4) {
      return of<any>(this.quizlist5)
    } else if(questionData.id == 5) {
      return of<any>(this.scoreData)
    }
  }
}
