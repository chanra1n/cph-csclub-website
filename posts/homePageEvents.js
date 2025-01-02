createCard(
  {
      title: 'Why CS Club?',
      iconClass: 'ri-question-line',
      content: 'The <b>Computer Science Club</b> offers a supportive space for students to collaborate, learn new skills, and explore tech careers, welcoming anyone interested in the diverse world of technology.',
      actions: []
  }
);

createCard(
  {
      title: 'Current Events',
      iconClass: 'ri-calendar-line',
      content: '<ul><li><b>Club Meetings</b> - Thursdays, 6-7:30 PM <span class="li-span left" onclick="window.location.href = \"activities/index.html\"">More Info</span></li></ul>',
      actions: [
          {
              label: 'Club Activities <i style="margin-left:5px" class="ri-external-link-fill"></i>',
              href: 'activities/index.html'
          }
      ]
  }
);

createCard(
  {
      title: 'Join the server',
      iconClass: 'ri-discord-fill',
      content: '<b>Say hello on Discord!</b> Stay tuned for event updates and notifications.',
      actions: [
          {
              label: 'Server Invite <i style="margin-left:5px" class="ri-external-link-fill"></i>',
              href: 'https://csclubhumboldt.org/discordinvite'
          }
      ]
  }
);