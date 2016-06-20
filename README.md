# Vagrant Manager

A little command line tool to manage many vagrant boxes without changing working directory.

## Installation

```bash
$ npm install -g vgm
```

## Getting Started

1. Add your vagrant boxes to the manager with the following command:

```bash
$ vgm add <name-of-the-box> <path-to-Vagrantfile-directory>
```

Where `<name-of-the-box>` - is any convenient name that you would like to use for your box 
and `<path-to-Vagrantfile-directory>` is path to where your `Vagrantfile` is stored.

2. Run vagrant commands like this:

```bash
$ vgm <name-of-the-box> status
```

This should show you your box's status.

## Commands

### `vgm add <name> [path]`

Adds virtual machine to the manager

#### Arguments:

- `name` - any convenient name for your virtual machine
- `path` _(optional)_ - path to Vagrantfile directory, if not present `vgm` will use path to current directory

### `vgm remove <name>`

Removes virtual machine from the manager configuration

#### Arguments:

- `name` - name of the machine that you want to remove

### `vgm list`

Outputs list of all registered vitrual machines.

### `vgm <name> [cmd]`

Runs vagrant command on a machine

#### Arguments:

- `name` - name of the machine that you want to run the command on
- `cmd` _(optional)_ - vagrant command, if not present `vgm` will assume `status` command
