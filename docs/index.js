const logSection = document.querySelector("#log");

const logList = [
  {
    date: '9-3-2024',
    log: 'Announce projects'
  },
  {
    date: '9-3-2024',
    log: 'Establish learning streaks'
  },
  {
    date: '9-3-2024',
    log: 'Roadmap'
  },
  {
    date: '9-3-2024',
    log: 'Submit solution, await feedback'
  },
  {
    date: '9-3-2024',
    log: 'Backend Ideas'
  },
  {
    date: '9-3-2024',
    log: 'Redis roadmap'
  },
  {
    date: '9-3-2024',
    log: 'Changelog page for the consumer'
  }
]

window.onload = function() {
  if(logSection && logList.length > 0) {
    logList.forEach((l) => {
      console.log(l.date);
      console.log(l.log);
    });
  } 
};
