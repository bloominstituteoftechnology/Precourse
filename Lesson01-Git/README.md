# Lesson 1: Git fundamentals
(Attention: These are the class notes for the [Lambda School](http://www.lambdaschool.com) pre-course instruction workshop. This is meant to serve as an accompaniment to the class)

In this lesson we will cover: 

* Description of version control and Git.
* Basic terminal commands.
* Forking and cloning an existing Github.com repo.
* Basic Git commands (status, add, commit, push).
* Submitting a Pull Request.

### Prerequisites:
* Create a [Github.com](https://www.github.com/) account.
* If you are or have applied to Lambda School then set your account email to public in settings. 
* If you are on a Windows computer you can install the [git-bash command terminal here](https://git-for-windows.github.io/)
* If you are on a Mac, git is preinstalled and you can access it from your terminal. By pressing ⌘+space and entering "terminal". (You can make sure you have git installed by typing "which git" and pressing enter, if a file path appears on your screen you are go to go. In some cases you may be directed to download the Xcode command line developer tools, follow the instructions)
* If you are on a Linux machine, you may need to install git by accessing your terminal and entering "apt-get install git"
* If you are having trouble installing Git, this resource will help: [https://git-scm.com/book/en/v2/Getting-Started-Installing-Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

## Description of version control and Git

Version control is a concept in software engineering which applies to the management of source code. There are many systems for applying version control practices to source code. We will be focusing on one of the most popular, "Git". 

### Git

Git was created in 2005 by Linus Torvalds. Git allows a team to work concurrently on a single project, or "repository", all while staying current and up to date. This is done through branching, each member, or feature, can have a branch from the master branch. That branch can be edited as needed without interfering with the "master". When the time comes to merge the branches back together, git will evaluate where the changes were made and will correct the master to reflect those changes without interfering with other changes. Git also acts as a sort of time machine, allowing a team to revert ANY changes made to the source code throughout the history of the code. 

### Github.com

[Github.com](https://github.com) is a network to store your repositories, essentially it is a repository of repositories. It is one of many available on the internet, and the most popular. Git != Github, although they work very well together. Github is a place for you to store your code or find other projects. It also acts as a portfolio for any code you've worked on. If you plan on being a developer you should have a Github account. We will be using Github extensively throughout your time at Lambda School. 

## Basic terminal commands:

> We will be using the "terminal" or "command line" throughout your time at Lambda school. If you are on a Mac or Linux machine, you should have the terminal and git installed already, if you are on a Windows machine I recommend installing ["git-bash"](https://git-for-windows.github.io/).

Within our terminal we can: traverse our file structure, add files, remove files, update files, and tons more! The terminal is a very powerful tool for developers and you will be using it a lot in your professional development career. It might look scary at first, but in time you will enjoy using it. It is best to get accustomed to it now. To begin we will learn the 'basic' commands:

"List": Allows us to view the contents of the current folder we are in.
```bash
  $ ls
```

"Change Directory": Allows us to move to a new folder or 'directory'.
```bash
  $ cd [folder]
```

"Make Directory": Makes a new folder in the directory you are currently in.
```bash
  $ mkdir [folder name]
```
"Touch" will create a new file.
```bash
  $ touch [file]
```

"Remove": permanently deletes a file. (WARNING! This bypasses any "trashcan" or recycling can you may have and PERMANENTLY deletes the file) (also of note: This will not remove folders, we need a special command for that, that we will learn later.)
```bash
  $ rm [file]
```

## Exercise

In this exercise we will create a new folder titled: "LambdaSchool"

To get to your top level folder type:

```bash
  cd ~
```

and press enter. Once in your top level type:

```bash
  mkdir LambdaSchool
```

and press enter. Congratulations you have created a directory!

## Github

As mentioned before, Github is a central place to store, view, and download repositories, it is not synonymous with "git". You need to have a Github account in order to complete this exercise. 

### Forking

Github.com allows users to create their own copy of an repository (as long as it is public) and do whatever work you would like to that on under your own account. This is called "Forking". Essentially this will create a new branch of the repo, and at a future time you may be able to reincorporate("pull") the changes you have made to this branch with the master branch you forked from.

In order to fork a repo, you will visit the Github repo of your choosing (for this exercise we will be using [this](http://github.com/lambdaschool/precourse) repo). Anywhere within the repo you will see a "Fork" button in the upper right hand corner, click this. Github will take a moment and copy all of the data to your account and it is now available to you to work on. 

### Cloning

In order to work on a project you must clone (download) it to your local machine. To do this, visit the top level of the forked repo on your own account, and click on the green button in the upper right hand side of the page that says: "Clone or Download" a dropdown should appear and will can click on the clipboard icon to copy the address. (Note: you can download the entire repo, but this is not advised as cloning will do quite a few steps for you behind the scenes that will make your life much easier.)  

Once you have the address copied, return to your terminal window and enter the following:

```bash
  $ cd LambdaSchool

  $ git clone [copied address]
```

This will download the repo and you now have a local copy of the repo saved to your machine!

## Git commands:

Throughout these lessons, we will interact with git through our terminal. In the future you may wish to use a Git GUI interface, but during these lessons we will need to use the terminal for all git functions. 

In this exercise, we will add a file to our project and then commit this change to memory in git. 

In your terminal, cd into the LambdaSchool/Precourse folder

Then enter the following in your terminal:
```bash
  $ touch Lesson01-Git/newFile.js
```

This will add a new file your your project titled "newFile.js"

at this time we can use the git command "status". Status will read back the status of all changes made to your repo. Use status often, if you’re not sure if something worked, using status will tell you. 

```bash
  $ git status
``` 

You should see something along these lines:

```bash
  Changes not staged for commit:
    (use "git add <file>..." to update what will be committed)
    (use "git checkout -- <file>..." to discard changes in working directory)

    modified:   Lesson01-Git/README.md

  Untracked files:
    (use "git add <file>..." to include in what will be committed)

    Lesson01-Git/newFile.js
  
  no changes added to commit (use "git add" and/or "git commit -a")
```

This tells us that we have a file that has been changed, but is not saved into the git history yet.

To do this we will use the 'add' command:

```bash
  git add Lesson01-Git/newFile.js
```

This has added our changes to the history, now to save that history, we will use "commit". Commit will take all of our added changes and save it to git history. For future reference you will be able to leave a message about the changes, this will make it easier to go back and find the changes you(or anyone) are looking for in the future ,if you should need to. It is always a good idea to leave a concise description of the changes in your commit. A shorthand way of leaving an inline message is using the '-m' flag and writing your message directly after, in quotes.

```bash
  git commit -m 'added new file, newFile.js'
```

Now that we have our changes saved locally, we want to share those changes in our Github. To do this we will "push"

```bash
  git push
```

You will be prompted for your username and password. Enter these and then you will receive a message if your changes were pushed successfully:

```bash
  Counting objects: 5, done.
  Delta compression using up to 8 threads.
  Compressing objects: 100% (4/4), done.
  Writing objects: 100% (5/5), 2.97 KiB | 0 bytes/s, done.
  Total 5 (delta 1), reused 0 (delta 0)
  remote: Resolving deltas: 100% (1/1), completed with 1 local object.
  To git@github.com:[your username]/Precourse.git
    cccc682..283b9dd  master -> master
```

Congratulations! You just pushed your first git commit!

## Pull Requests

  Once you have completed the changes you intend to make, it will be time to merge those changes with the master branch. If you are not making changes directly to your own repository, you will need to submit a "Pull Request" or "PR" as we will refer to it. This allows to owner(or manager/supervisor/lead/senior) of the original repo to look over the changes and decide if they want to include these changes in their master. We will do this through Github.

  In this exercise, we will submit a pull request through github.com


  ## Further reading and tutorials:

  * [Git: official site](https://git-scm.com/)
  * [Github: official tutorial](https://try.github.io/levels/1/challenges/1)
  * [Codecademy: Learn Git](https://www.codecademy.com/learn/learn-git)
  * [Git: official tutorial](https://git-scm.com/docs/gittutorial)
  * [Termianl turorial](https://www.davidbaumgold.com/tutorials/command-line/)
 