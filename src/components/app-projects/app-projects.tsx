import { Component } from '@stencil/core';


@Component({
  tag: 'app-projects',
  styleUrl: 'app-projects.css',
  shadow: true
})
export class AppProjects {
  
  render() {
    return (
      <section class="projects-section">
        <div class="project">
          <div class="project-img">
            <img src="assets/projects/workout-tracker.png" alt="workout tracker app"></img>
          </div>
          <div class="project-info">
            <h3>Workout Tracker</h3>
            <p>
              A simple workout tracker for tracking weightlifting workouts. Built with Flutter.
            </p>
          </div>
        </div>
      </section>
    );
  }
}