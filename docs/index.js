const logSection = document.querySelector("#log");

const logList = [
  {
    date: '9-3-2024',
    log: 'Announce projects'
  },
  {
    date: '8-28-2024',
    log: 'Establish learning streaks'
  },
  {
    date: '8-1-2024',
    log: 'Roadmap'
  },
  {
    date: '8-22-2024',
    log: 'Submit solution, await feedback'
  },
  {
    date: '8-10-2024',
    log: 'Backend Ideas'
  },
  {
    date: '8-15-2024',
    log: 'Redis roadmap'
  },
  {
    date: '8-25-2024',
    log: 'Changelog page for the consumer'
  }
]
function getOrderedDateList() {
  logList.sort((a, b) => new Date(a.date) - new Date(b.date));
  let output = [];
  logList.forEach((obj) => {
    
  });
  return output;
}
window.onload = function() {
  if(logSection && logList.length > 0) {
    let dateOrder = logList.sort((a, b) => new Date(a.date) - new Date(b.date));
    dateOrder.forEach((l) => {
      console.log(l);
    });
  }
};
