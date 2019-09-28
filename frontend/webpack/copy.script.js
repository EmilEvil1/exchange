import path from 'path';
import fsx from 'fs-extra';
import routing from './routing.config';

fsx.copySync(
  routing.paths.public.root,
  path.resolve(routing.paths.root, './backend/src/main/resources/public')
);
