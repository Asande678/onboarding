# Welcome
First of all, we are happy to welcome you as new developer and consultant at KZN Sports Confederation. The purpose with the following tasks is to get you quickly on-board to be able to contribute to the company code projects.

Read through these tasks and you can skip the tasks that you are already quite familiar with.

# 1. Standard Contribution Workflow

This is an essential part on how the team will operate with our code base.

## 1.1 Create a Github account

If you don't already have a Github account create an account by following the instructions here: https://help.github.com/articles/signing-up-for-a-new-github-account/

Once your account has been created send the username you have chosen to Solomon on Slack or E-mail who will then add you to our organization on Github. If you are totally new to Git or Github we recommend you to take the time and read through the articles here: https://help.github.com/articles/good-resources-for-learning-git-and-github/

## 1.2 Fork this onboarding repository

Now you should be quite comfortable with Git and Github and ready to contribute. Begin with creating a fork of this onboarding repository: https://github.com/KZN-Sports-Confederation/onboarding

Instructions on how to fork a repository can be found here: https://help.github.com/articles/fork-a-repo/

Find something you want to modify with this text. When you have decided what you want to do, continue with next steps.


## 1.3 Create a topic branch

Create a topic branch in your forked repository for the modifications that you decided to do. Instructions on how to create a topic branch can be found here: https://help.github.com/articles/creating-and-deleting-branches-within-your-repository/

## 1.4 Issue a pull request

In your topic branch implement the feature and verify it works. Then issue a pull request, and instructions on how to do that can be found here: https://help.github.com/articles/creating-a-pull-request/

Your pull request will then be reviewed and if everything looks good it will be merged upstream. Congratulations!


# 2. Feature Request

It is common today to work with APIs as part of a micro service architecture style. It is essential to have the basic knowledge on how to work with APIs.

## 2.1 Install PostMan

Install Postman on your computer. Postman is an API platform for building and using APIs. Postman simplifies each step of the API lifecycle and streamlines collaboration so you can create better APIs—faster.

If you are new to the concept of API take the time and read more about it here: 
https://blog.postman.com/rest-api-definition/
https://www.postman.com/webinars/apis-101/
https://medium.com/geekculture/restful-api-101-b61671e5a3ea

Download Postman: https://www.postman.com/downloads/

## 2.2 Setup and Develop a simple List Districts Function

This website https://municipalities.co.za/municipalities/type/2/district lists South African District Municipalities into two columns, Municipality and Province.


This website https://municipalities.co.za/municipalities/type/1/metropolitan lists South African Major Metropolitans into two columns, Municipality and Province.


These websites get their data from a source that is similar to this link: POST https://sfrs-j75dy.ondigitalocean.app/api/listDistricts

Your task is to interact with this API source: POST https://sfrs-j75dy.ondigitalocean.app/api/listDistricts and use the fetched data to either:

1. Create a table showing the Districts and what Province they belong to, OR
2. Create a table showing only the major Municipalities and their Province.

The API source can be best viewed using the PostMan application you downloaded earlier. You will also use git to track changes of the feature you are developing.

When you are ready to make your contribution, you can then:

 1. Fork the repository
 2. Create topic branch
 3. Implement feature
 4. Issue pull request
 
Congratulations! You have now made your (first) contribution to the KZN Sports Confederation repository.
Completed by Asande----
