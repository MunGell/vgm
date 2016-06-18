# Vagrant Manager

A little command line tool to manage several vagrant boxes without changing working directory.

## Installation

```bash
$ npm install -g vgm
```

## Getting Started

1. Add your vagrant boxes to the manager configuration with the following command:

```bash
$ vgm add <name-of-the-box> <path-to-Vagrantfile-directory>
```

Where `<name-of-the-box>` - is any convenient name that you would like to use for your box 
and `<path-to-Vagrantfile-directory>` is path to where is your Vagrantfile stored.

2. Now you can run vagrant commands like this:

```bash
$ vgm box <name-of-the-box> status
```
This should show you your box's status.

Similarly you can run `vgm box <name-of-the-box> ssh` or `vgm box <name-of-the-box> up` commands without changing to vagrant directory.
