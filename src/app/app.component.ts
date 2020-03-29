import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'course-project';

  today = this.setCurrentDateTime().processedFullDate;

  loadedFeature = 'recipe';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

  setCurrentDateTime() {
    let today = new Date();

    let todayDate = today.getDate();
    let todayMonth = today.getMonth() + 1; // January is 0!
    let todayYear = today.getFullYear();
    let todayHour = today.getHours();
    let todayMinute = today.getMinutes();

    let roundupDay;
    let roundupMonth;
    let roundupHour;
    let roundupMinute;

    let processedMinute;
    let processedHour;
    let processedNextHour;

    let processedCurrentDate;
    let processedFullDate;
    let processedFullTime;
    let processedFullNextTime;

    let processedTodayCurrent;
    let processedTodayNext;

    if (todayDate < 10) {
      roundupDay = '0' + todayDate;
    } else {
      roundupDay = todayDate;
    }

    if (todayMonth < 10) {
      roundupMonth = '0' + todayMonth;
    } else {
      roundupMonth = todayMonth;
    }

    if (todayHour < 10) {
      roundupHour = '0' + todayHour;
    } else {
      roundupHour = todayHour;
    }

    if (todayMinute < 10) {
      roundupMinute = '0' + todayMinute;
    } else {
      roundupMinute = todayMinute;
    }

    if (roundupMinute <= 30) {
      processedMinute = 30;
      processedHour = roundupHour;
    } else if (roundupMinute <= 59) {
      processedMinute = '00';
      processedHour = (parseInt(roundupHour) + 1).toString();
    }

    if (processedHour < 23) {
      processedNextHour = (parseInt(processedHour) + 1).toString();
    } else {
      processedNextHour = processedHour;
    }

    processedCurrentDate = todayYear + '-' + roundupMonth + '-' + roundupDay;
    processedFullDate = todayYear + '-' + roundupMonth + '-' + roundupDay;
    processedFullTime = processedHour + ':' + processedMinute;
    processedFullNextTime = processedNextHour + ':' + processedMinute;

    processedTodayCurrent = new Date(todayYear, roundupMonth - 1, roundupDay, processedHour, processedMinute, 0o0);
    processedTodayNext = new Date(todayYear, roundupMonth - 1, roundupDay, processedNextHour, processedMinute, 0o0);


    const dateJson = {
      'todayDate': todayDate,
      'todayMonth': todayMonth,
      'todayYear': todayYear,
      'todayHour': todayHour,
      'todayMinute': todayMinute,
      'roundupDay': roundupDay,
      'roundupMonth': roundupMonth,
      'roundupHour': roundupHour,
      'roundupMinute': roundupMinute,
      'processedMinute': processedMinute,
      'processedHour': processedHour,
      'processedNextHour': processedNextHour,
      'processedCurrentDate': processedCurrentDate,
      'processedFullDate': processedFullDate,
      'processedFullTime': processedFullTime,
      'processedFullNextTime': processedFullNextTime,
      'processedTodayCurrent': processedTodayCurrent,
      'processedTodayNext': processedTodayNext,
    };

    return dateJson;
  }

}
