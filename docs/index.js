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
window.onload = function() {
  if(logSection && logList.length > 0) {
    let dateOrder = logList.sort((a, b) => new Date(b.date) - new Date(a.date));
    //let chronilogicalOrder = logList.sort((a, b) => new Date(a.date) - new Date(b.date));
    const injul = document.createElement("ul");
    dateOrder.forEach((l) => {
      const liEle = document.createElement("li");
      const liDate = document.createElement("span");
      liEle.classList.add('log');
      liDate.classList.add('date');
      liEle.innerHTML = l.log;
      const lineBreak = document.createElement('br');
      liDate.innerHTML = l.date;
      liDate.appendChild(lineBreak);
      lnjul.appendChild(liDate);
      injul.appendChild(liEle);
    });
    logSection.append(injul);
  }
};
