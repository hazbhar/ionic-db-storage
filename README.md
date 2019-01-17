# Ionic storage toggle (SQLite – local storage)
This is an example app on ionic, where file has been created in order to make developing process easier and faster. Location of the file:
```
/src/services/dbstorage.service.ts
```
It switches between local storage and SQLite database based on the envirement app is running on. Local storage is used on desktop browser and SQLite on mobile device.
This is an example app on ionic, where XXX file has been created in order to make developing process easier and faster. It switches between local storage and SQLite database based on the envirement app is running on. Local storage is used on desktop browser and SQLite on mobile device.

## Installing

First, install the cordova-sqlite-storage plugin:
```bash

$ ionic cordova plugin add cordova-sqlite-storage
$ npm install --save @ionic-native/sqlite
```
Next, install the package (comes by default for Ionic apps > Ionic V1):
```bash

$ npm install --save @ionic/storage
```
Next, add it to the imports list in your NgModule declaration (for example, in src/app/app.module.ts):
```ts
import { SQLite } from '@ionic-native/sqlite';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    // ...
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    // ...
  ],
  providers: [
    // ...
    SQLite
  ]
})
export class AppModule {}
```
Next add file dbstorage.service.ts to project (for example to folder src/services ) 

Add it to the providers list in your NgModule declaration (for example, in src/app/app.module.ts):
```ts
import {DBStorage} from "../services/dbstorage.service";

@NgModule({
  declarations: [
    // ...
  ],
  imports: [
    // ...
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    // ...
  ],
  providers: [
    // ...
    SQLite, 
    DBStorage
  ]
})
export class AppModule {}
```
## Usage
Finally, inject it into any of your components or pages (for example, in src/pages/home/home.ts):
```ts: 
import {DBStorage} from "../../services/dbstorage.service";

export class HomePage {

  constructor( private dbstorage: DBStorage ) {}

  ...

     // set a key/value
    this.dbstorage.setValue('name', 'Cindy');

    // Or to get a key/value pair
    this.dbstorage.getValue('name').then((val) => {
      console.log('getValue: ' + val);
    });

    // remove key/value
    this.dbstorage.removeKey('name');
```
[Watch installing & using in YouTube - Ionic. SQLite in 12 minutes.](https://youtu.be/EmoPmBPZ1lA)

[Смотреть на YouTube по-русски -  Ionic. SQLite. Использование базы данных.](https://youtu.be/ObyRvm6k5OQ)
