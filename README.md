# To-Do-list-app-project.ALU
The purpose of the app is to  enable you to add your own tasks to yout to-do list, delete the task if necessary and also show if the task is complete or not

To run the application here is what you can do;

1.clone the git repository 'To-do-list-application-project.ALU'


2.Navigate to the directory 'docker_tasks' that contains the project
3.Install dependecies
4.Start the application using the npm start command

Build a docker image using the command docker built -t my-node-app .
verify the image creation
5.Run the container using the image
 a. use the command 'docker run -d -p 8080:80 --name my-node-app my-node-app

 b. Access the app in the chrome web browser at 'localhost:8080'

Assumptions and decisions
I assume the application requires a specific node.js version to run
Docker offers a consistent running environment across different machines hence suitable for containerising the machine 
