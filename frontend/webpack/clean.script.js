import fsx from 'fs-extra';
import {resolve} from 'path';
import routing from './routing.config';

fsx.emptyDirSync(routing.paths.public.root);
fsx.emptyDirSync(resolve(routing.paths.root, './backend/src/main/resources/public'));
