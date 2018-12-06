# MongoDB

## Setup

Update brew:
```
brew update
```

Download and install MongoDB:
```
brew install mongodb
```

Create the data and db directories for MongoDB:
```
sudo mkdir -p /data/db
```

Change ownership of the db directory
```
sudo chown -R $USER /data/db
```

## Running

```
mongod
```

# Robo 3T (aka RoboMongo)
A very helpful app to interact with the DB in a visual manner

## Download and install
https://robomongo.org/

## Running
- Launch the app
- A window titled "MongoDB Connections" will open. Click "Create" at the top left
- Another window - "Connection Settings" - will open. Name your connection. Everything else can be left as is.
- Click "Save".
- Now back in the "MongoDB Connections" window, click "Connect"
- This will open the app's main windows, showing "Localhost -> System" on the left panel
