# sbcli

A node commander cli for Azure Service Bus reading and writing

## INSTALL

something like:

```console
git clone https://github.com/navicore/sbcli.git && cd sbcli && yarn install && yarn link
```

```console
  Usage: sbcli [options] [command]

  IMPORTANT: set env var CONNSTR= to a Service Bus Connection String. See Shared access policies.


  Options:

    -V, --version  output the version number
    -h, --help     output usage information


  Commands:

    publish|p <topic> <message>  write a message
    write|w <queue> <message>    write a message
    read|r <queue>               read a message
```
