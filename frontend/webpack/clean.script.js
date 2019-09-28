import path from 'path';
import fsx from 'fs-extra';
import routing from './routing.config';

fsx.emptyDirSync(routing.paths.public.root);
fsx.emptyDirSync(path.resolve(routing.paths.root, './backend/src/main/resources/public'));
