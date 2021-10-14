const createManager = (manager) => {
    return  `
    <div class="row">
        <div class="col s12 m6">
            <div class="card red accent-2">
                <div class="card-content white-text">
                    <span class="card-title">${manager.name}</span>
                    <h3>Manager</h3>
                    <p>ID ${manager.id}</p>
                    <p>Office Number: ${manager.officeNumber}</p>
                </div>
            <div class="card-action">
               <p class="white-text">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
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
          <div class="card deep-purple darken-1">
            <div class="card-content white-text">
              <span class="card-title">${engineer.name}</span>
              <h3>Engineer</h3>
              <p>ID ${engineer.id}</p>
            </div>
            <div class="card-action">
                <p class="white-text"> Git Hub: <a target="_blank" href="https://github.com/${engineer.github}">${engineer.github}</a></p>
                <p class="white-text">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
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
          <div class="card blue lighten-2">
            <div class="card-content white-text">
              <span class="card-title">${intern.name}</span>
              <h3>Intern</h3>
              <p>ID ${intern.id}</p>
              <p>School ${intern.school}</p>
            </div>
            <div class="card-action">
                <p class="white-text"> Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
            </div>
          </div>
        </div>
      </div>
    `
}

templateHTML = (data) => {
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
    const createTeam = createTeamPage(teamMemberCards);
    return createTeam;
}
const createTeamPage = function(teamMemberCards) {
    return`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <link rel="stylesheet" href="./style.css">
    <title>Team Profile Generator</title>
</head>
<body>
    <nav class="blue">
        <div class="nav-wrapper">
            <a href="#" class="brand-logo center">Team Profile </a>
        </div>
    </nav>
    <section class="finalCards">
       ${teamMemberCards}
    </section>
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
</body>
</html>`
}


  module.exports = templateHTML;
 
  