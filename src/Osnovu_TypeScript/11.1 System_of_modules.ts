
//import helloWorld from './11.0 ExportModule';

// @file main
// import { helloWorld, helloWorldAgain } from './helloWorld';

// @file next
import * as hw from './11.0 ExportModule';
hw.helloWorld1();

// @file main.ts
import type { User } from './11.2 user.types';

import {Company} from './11.0 ExportModule'

Company.isEmployeeEmail('tirion@hexlet.io', 'hexlet.io');
// true

Company.isEmployeeEmail('user@example.com', 'hexlet.io');
// false