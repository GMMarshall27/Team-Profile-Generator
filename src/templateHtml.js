const createManager = (manager) => {
    return  `
    <div class="row">
        <div class="col s12 m6">
            <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                    <span class="card-title">${manager.managerName}</span>
                    <p>ID ${manager.managerId}</p>
                    <p>Office Number: ${manager.managerOfficeNumber}</p>
                </div>
            <div class="card-action">
                <a href="mailto:${manager.managerEmail}">Email Me</a>
            </div>
          </div>
        </div>
      </div>
    `
}

const createEngineer = (engineer) => {
    return `
    <div class="row">
        <div class="col s12 m6">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">${engineer.name}</span>
              <p>ID ${engineer.id}</p>
            </div>
            <div class="card-action">
                <a target="_blank" href="https://github.com/${engineer.github}">${engineer.github}</a>
                <a href="mailto:${engineer.email}">Email Me</a>
            </div>
          </div>
        </div>
      </div>
    `
}

const createIntern = (intern) => {
    return `
    <div class="row">
        <div class="col s12 m6">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">${intern.name}</span>
              <p>ID ${intern.id}</p>
              <p>School ${intern.school}</p>
            </div>
            <div class="card-action">
                <a href="mailto:${intern.email}">Email Me</a>
            </div>
          </div>
        </div>
      </div>
    `
}

createHtml = (data) => {
    cards = [];

    for (let i =0; i<data.length; i++){
        const teamMember = data[i];
        const position = teamMember.getRole();

        if (position === 'Manager'){
            const manCard = createManager(teamMember);

            cards.push(manCard);
        }

        if(position === 'Engineer'){
            const enCard = createEngineer(teamMember);

            cards.push(enCard);
        }

        if(position === 'Intern'){
            const internCard = createIntern(teamMember);

            cards.push(internCard)
        }
    }

    const teamMemberCards = cards.join('')
    
}
const templateHTML = ( => {
    
  
    
  
  module.exports = templateHTML;
 
  