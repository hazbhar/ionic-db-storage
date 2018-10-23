# ionic-db-storage
Simple Ionic Storage via Key/Value for devices and browser simultaneously. 

When you run app on device (android or iOS) key/value save to sqlite storage. But you can develop app in browser (for example Chrome). In this case key/value save to easy browser storage. Its helpful. 

## Usage

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
