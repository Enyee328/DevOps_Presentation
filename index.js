export default class Activity {
  constructor(intensity = 3, duration = 50, ActivityRating = 10) {
    this.intensity = Intensity;
    this.duration = Duration;
    this.maxActivityRating = activityRating;
    this.ActivityRating = activityRating
  }

  getActivityIntensity() {
    return this.Intensity;
  }

  getActivityDuration() {
    return this.Duration;
  }

  getActivityRating() {
    return this.activityRating;
  }

  updateActivityDuration() {
    this.duration -= 1;
  }

  recommend() {
    if (this.duration) {
      this.updateActivityDuration();
      this.ActivityRating = this.maxActivityRating;
    }
  };
