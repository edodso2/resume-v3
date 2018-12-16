import { Component, Element } from '@stencil/core';

interface Skill {
  name: string;
  filename: string;
}

const SKILLS_PATH = 'assets/skills/';

const TOP_SKILLS: Skill[] = [
  {
    name: 'Angular',
    filename: 'angular-o'
  },
  {
    name: 'Design',
    filename: 'design-o'
  },
  {
    name: 'AWS',
    filename: 'aws-o'
  }
];

const SKILLS: Skill[] = [
  {
    name: 'HTML',
    filename: 'html-o'
  },
  {
    name: 'CSS',
    filename: 'css-o'
  },
  {
    name: 'JavaScript',
    filename: 'js-o'
  },
  {
    name: 'Node.JS',
    filename: 'node-o'
  },
  {
    name: 'Sass',
    filename: 'sass'
  },
  {
    name: 'Bootstrap',
    filename: 'bootstrap-o'
  },
  {
    name: 'GraphQL',
    filename: 'graphql-o'
  },
  {
    name: 'Git',
    filename: 'git-o'
  }
]

@Component({
  tag: 'app-skills',
  styleUrl: 'app-skills.css',
  shadow: true
})
export class AppSkills {
  @Element() skillsEl: HTMLElement;

  componentDidLoad() {
    // get the top skills elements
    const topSkillsConatainerDiv = this.skillsEl.shadowRoot.querySelector('.top-skills-container');
    const topSkillsDiv = this.skillsEl.shadowRoot.querySelector('.top-skills');

    // set initial values
    this.setSkillsDivPosition(topSkillsConatainerDiv, topSkillsDiv);
    this.setSkillsDivOpacity(topSkillsConatainerDiv, topSkillsDiv);

    // using this listener instead of watch to avoid unecessary
    // class members
    document.addEventListener('scroll', () => {
      this.setSkillsDivPosition(topSkillsConatainerDiv, topSkillsDiv);
      this.setSkillsDivOpacity(topSkillsConatainerDiv, topSkillsDiv);
    });
  }

  render() {
    return (
      <section class="skills-section">
        <div class="top-skills-container">
          <div class="top-skills">
            {TOP_SKILLS.map(skill =>
              <div class="skill top-skill">
                <img src={SKILLS_PATH + skill.filename + '.svg'} alt={skill.name} />
                <div class="skill-label">{skill.name}</div>
              </div>
            )}
          </div>
        </div>
        <div class="skills">
          {SKILLS.slice(0, SKILLS.length/2).map(skill =>
            <div class="skill">
              <img src={SKILLS_PATH + skill.filename + '.svg'} alt={skill.name} />
              <div class="skill-label">{skill.name}</div>
            </div>
          )}
        </div>
        <div class="skills">
          {SKILLS.slice(SKILLS.length/2, SKILLS.length).map(skill =>
            <div class="skill">
              <img src={SKILLS_PATH + skill.filename + '.svg'} alt={skill.name} />
              <div class="skill-label">{skill.name}</div>
            </div>
          )}
        </div>
      </section>
    );
  }

  /**
   * Sets the position of the fixed div to static if it is
   * on top of its container.
   */
  private setSkillsDivPosition(topSkillsConatainerDiv, topSkillsDiv) {
    const containerTop = this.getTopValue(topSkillsConatainerDiv);
    const elemTop = this.getTopValue(topSkillsDiv);

    const skillsDivs: any = this.skillsEl.shadowRoot.querySelectorAll('.skills .skill');

    if (
      containerTop <= elemTop
    ) {
      topSkillsDiv.style.position = 'static';
      topSkillsDiv.querySelectorAll('.skill-label').forEach(elem => {
        elem.style.opacity = '1';
      });
      skillsDivs.forEach((elem: any) => {
        elem.style.opacity = '1';
      });
    } else {
      topSkillsDiv.style.position = 'fixed';
      topSkillsDiv.querySelectorAll('.skill-label').forEach(elem => {
        elem.style.opacity = '0';
      });
      skillsDivs.forEach((elem: any) => {
        elem.style.opacity = '0';
      });
    }
  }

  /**
   * Increases the opacity of the div as it gets closer to its
   * container.
   */
  private setSkillsDivOpacity(topSkillsConatainerDiv, topSkillsDiv) {
    const containerTop = this.getTopValue(topSkillsConatainerDiv);
    const elemTop = this.getTopValue(topSkillsDiv);

    let offset = (containerTop - elemTop) / 100;
    let opacity = 1 - offset;
    if (opacity < .15) {
      opacity = .15;
    }
    topSkillsDiv.style.opacity = '' + opacity;
  }

  private getTopValue(elem: HTMLElement) {
    return elem.getBoundingClientRect().top;
  }
}