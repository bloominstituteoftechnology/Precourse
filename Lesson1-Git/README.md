# Lesson 1: Git Fundamentals
(Attention: These are the class notes for the [Lambda School](http://www.lambdaschool.com) pre-course instruction workshop. This is meant to serve as an accompaniment to the class.)

In this lesson, we will cover: 

* Description of version control and Git.
* Basic terminal commands.
* Forking and cloning an existing Github.com repo.
* Basic Git commands (status, add, commit, push).
* Submitting a Pull Request.

### Prerequisites:
* Create a [Github.com](https://www.github.com/) account.
* If you have applied or are currently applying to Lambda School, then set your account email to "public" in settings. 
* If you are on a Windows computer, you can install the [git-bash command terminal here](https://git-for-windows.github.io/).
* If you are on a Mac, git is preinstalled. You can access it from your terminal by pressing ⌘+space and entering "terminal". (You can make sure that git is installed by typing "which git" and pressing enter; if a file path appears on your screen, you are good to go. In some cases, however, you may be directed to download the Xcode command line developer tools. If that is the case, follow the instructions to do so.)
* If you are on a Linux machine, you may need to install git by accessing your terminal and entering "apt-get install git".
* If you are having trouble installing Git, this resource will help: [https://git-scm.com/book/en/v2/Getting-Started-Installing-Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

## Description of Version Control and Git

Version control is a concept in software engineering that applies to the management of source code. There are many systems for applying version control practices to source code. We will be focusing on one of the most popular: "Git". 

### Git

Git was created in 2005 by Linus Torvalds. Git allows a team to work simultaneously on a single project, or "repository", all while keeping everything current and up to date. This is done through branching, where each member or feature can have a branch from the master branch. That branch can then be edited as needed without interfering with the "master" version. When the time comes to merge the branches back together, git will evaluate where the changes were made and will correct the master to reflect those changes without interfering with other changes. Git also acts as a sort of time machine, allowing a team to revert ANY changes made to the source code throughout the history of that code. 

### Github.com

[Github.com](https://github.com) is a network for storing your repositories, being, essentially, a repository of repositories. Git != Github, although they work very well together. Github is a place for you to store your code or find other projects. It also acts as a portfolio for any code you've worked on. If you plan on being a developer you should have a Github account, as it is one of the most popular resources available on the internet. We will be using Github extensively throughout your time at Lambda School. 

## Basic Terminal Commands:

> We will be using the "terminal" or "command line" throughout your time at Lambda School. If you are on a Mac or Linux machine, you should have the terminal and git installed already. On a Windows machine, however, I recommend installing ["git-bash"](https://git-for-windows.github.io/).

Within our terminal we can: traverse our file structure, add files, remove files, update files, and so much more! The terminal is a very powerful tool for developers, and you will be using it a lot throughout your professional development career. It might look scary at first, but in time you will enjoy using it. It is best to get accustomed to it now. To begin we will learn the "basic" commands:

"List": Allows us to view the contents of the current folder we are in.
```bash
  $ ls
```

"Change Directory": Allows us to move to a new folder or 'directory'.
```bash
  $ cd [folder]
```

"Make Directory": Makes a new folder in the directory we are currently in.
```bash
  $ mkdir [folder name]
```
"Touch": Creates a new file.
```bash
  $ touch [file]
```

"Remove": Permanently deletes a file. (WARNING! This bypasses any "trashcan" or recycling you may have and PERMANENTLY deletes the file) (also of note: This will not remove folders, we need a special command for that, that we will learn later.)
```bash
  $ rm [file]
```

## Exercise

In this exercise, we will create a new folder titled: "LambdaSchool"

To get to your top level folder, type:

```bash
  cd ~
```

and press enter. Once in your top level, type:

```bash
  mkdir LambdaSchool
```

and press enter. Congratulations! You have created a directory!

## Github

As mentioned before, Github is a central place to store, view and download repositories; it is not synonymous with "git". You need to have a Github account in order to complete this exercise. 

### Forking

Github.com allows users to create their own copy of a repository (as long as it is public) and do whatever work they would like to under their own account. This is called "Forking". Essentially, this will create a new branch of the repo, enabling you to later reincorporate ("pull") the changes you made to this branch with the master branch you originally forked from.

In order to fork a repo, you must first visit the Github repo of your choosing (for this exercise, we will be using [this](http://github.com/lambdaschool/precourse) repo). Anywhere you go within that repo, you will see a "Fork" button in the upper right hand corner; click this. Github will take a moment and copy all the data to your account. It will then be available for you to work on. 

### Cloning

In order to work on a project, you must clone (download) it to your local machine. To do this, visit the top level of the forked repo on your own account, and click on the green button in the upper right hand side of the page that says: "Clone or Download". A dropdown should appear. You can then click on the clipboard icon to copy the address. (Note: You can download the entire repo, but this is not advised as cloning will do quite a few "behind-the-scene" steps for you that will make your life much easier.)  

Once you have the address copied, return to your terminal window and enter the following:

```bash
  $ cd LambdaSchool

  $ git clone [copied address]
```

This will download the repo, giving you a local copy of the repo saved to your machine!

## Git Commands:

Throughout these lessons, we will interact with git through our terminal. While in the future you may wish to use a Git GUI interface, during these lessons we will need to use the terminal for all git functions. 

In this exercise, we will add a file to our project and then commit this change to memory in git. 

In your terminal, cd into the LambdaSchool/Precourse folder

Then enter the following in your terminal:
```bash
  $ touch Lesson1-Git/newFile.js
```

This will add a new file your your project titled "newFile.js".

Now we can use the git command "status". Status will read back the status of all changes made to your repo. Use status often; if you are not sure if something worked, using status will tell you. 

```bash
  $ git status
``` 

You should see something along these lines:

```bash
  Changes not staged for commit:
    (use "git add <file>..." to update what will be committed)
    (use "git checkout -- <file>..." to discard changes in working directory)

    modified:   Lesson1-Git/README.md

  Untracked files:
    (use "git add <file>..." to include in what will be committed)

    Lesson1-Git/newFile.js
  
  no changes added to commit (use "git add" and/or "git commit -a")
```

This tells us that we have a file that has been changed, but is not saved into the git history yet.

To save the file into the git history, we will use the 'add' command:

```bash
  git add Lesson1-Git/newFile.js
```

This has added our changes to the history. Now to save that history, we will use "commit". Commit will take all of our added changes and save it to git history. For future reference, you will be able to leave a message about the changes. This will make it easier to go back and find the changes you - or anyone else - are looking for in the future. It is always a good idea to leave a concise description of the changes in your commit. A shorthand way of leaving an inline message is using the '-m' flag and writing your message directly after in quotes.

```bash
  git commit -m 'added new file, newFile.js'
```

Now that we have our changes saved locally, we want to share those changes in our Github. To do this we will "push".

```bash
  git push
```

You will be prompted for your username and password. Enter these. You will then receive a message notifying you if your changes were pushed successfully:

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

  Once you have completed the changes you intend to make, it will be time to merge those changes with the master branch. If you are not making changes directly to your own repository, you will need to submit a "Pull Request" or "PR" as we will refer to it. This allows the owner (or manager/supervisor/lead/senior) of the original repo to look over the changes and decide if they want to include these changes in their master. We will do this through Github.

  In this exercise, we will submit a pull request through github.com


  ## Further Reading and Tutorials:

  * [Git: official site](https://git-scm.com/)
  * [Github: official tutorial](https://try.github.io/levels/1/challenges/1)
  * [Codecademy: Learn Git](https://www.codecademy.com/learn/learn-git)
  * [Git: official tutorial](https://git-scm.com/docs/gittutorial)
  * [Termianl turorial](https://www.davidbaumgold.com/tutorials/command-line/)
 
