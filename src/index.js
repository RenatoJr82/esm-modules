//import connectToDatabase from "./utils/database.js"; //Jeito que importa somente um módulo.
//import * as database from "./utils/database.js"; // Modo que importa todos os módulos. (2)
import { diconnectDatabase, databaseType } from "./utils/database.js"; // Forma de importar somente uma função específica do módulo. (3)

import {getDataFromApi} from "./utils/api.js" //importação diretados módulos/funções

//database.connectToDatabase("my-database"); //(2)
diconnectDatabase(); //(3)
getDataFromApi();

