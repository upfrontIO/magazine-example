# livingdocs-magazine-boilerplate
A Node.js website boilerplate that provides some common magazine requirements.

## Prerequisites
Node v8.x.x

## Getting Started

### First of all
```
npm install
```

### Running the demo magazine
1. Clone the [livingdocs/sdk](https://github.com/upfrontIO/livingdocs-sdk) project

2. Link the livingdocs/sdk project with npm
```
cd livingdocs-sdk
npm link
```

2. Link the livingdocs/sdk project with the magazine boilerplate
```
cd livingdocs-magazine-boilerplate
npm link @livingdocs/sdk
```

3. Start the server
```
npm start
```

### Creating a design build
```
npm run design:build
```

### Publish the design
```
npm run design:publish
```
