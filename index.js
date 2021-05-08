const inquirer = require("inquirer");
const fs = require("fs");


const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

let team = [];

const generateHTML = (answers) =>
`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device=width, inital-scale=1.0"/>
    <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
    <title>My Team</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 p-4 bg-danger text-white text-top text bottom row justify-content-center display-2">
            My Team
            </div>
        </div>
    </div>
    <div class="container">
        <div class="col-6">
          <div class="card" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title"> ${answers.name}</h5>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${answers.id}An item</li>
                <li class="list-group-item">Email: ${answers.email}</li>
                <li class="list-group-item">Title: ${answers.title}</li>
                <li class="list-group-item">Office Number: ${answers.office_number}</li> 
              </ul>
              
            </div>
        </div>
    </div>
    <div class="container">
          <div class="col-6">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">${answers.name}</h5>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">An item</li>
                  <li class="list-group-item">A second item</li>
                  <li class="list-group-item">A third item</li>
                </ul>
                
              </div>
          </div>
      </div>

    `


      



function teamMember(){
   inquirer.prompt ([
    {
        type:"input",
        name:"name",
        message:"What is your name? "
    },
    
    {
        type:"input",
        message:"What is the team member's id?",
        name: "id",
    },
    {
        type:"input",
        message: "What is the team member's email?",
        name: "email",
    },
    {
        type: "list",
        message:"What is your title?",
        choices: ["Manager", "Engineer", "Intern"],
        name:"title",
    },
    {
        type:"input",
        name:"school",
        message:"What school do you go to?",
        when: function(answers){
            return answers.title === "Intern";
        }

    },
    {
        type: "input",
        name: "github",
        message:"Enter Github username",
        when: function(answers){
            return answers.title === "Engineer";
        }
    },
    {
        type:"input",
        name: "office_number",
        message: "What is your office number?",
        when: function(answers){
            return answers.title === "Manager";
        }
    }
    

])
.then((answers) => {
  console.log(answers)
 const htmlPageContent = generateHTML(answers);

 fs.writeFile("index.html",htmlPageContent,(err)=>
 err ? console.log(err): console.log("Success")
 );
});
    
}

teamMember();
