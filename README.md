# sbcli

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/8fc7d598bdf14d59839dcabfacd35642)](https://www.codacy.com/app/navicore/sbcli?utm_source=github.com&utm_medium=referral&utm_content=navicore/sbcli&utm_campaign=badger)

A node commander cli for Azure Service Bus reading and writing

## INSTALLATION

something like:

```console
git clone https://github.com/navicore/sbcli.git && cd sbcli && yarn install && yarn link
```

## USAGE

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
