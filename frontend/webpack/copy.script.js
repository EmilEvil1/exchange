import fsx from 'fs-extra';
import {resolve} from 'path';
import routing from './routing.config';

fsx.copySync(
  routing.paths.public.root,
  resolve(routing.paths.root, './backend/src/main/resources/public')
);
