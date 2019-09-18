import path from 'path';
import fsx from 'fs-extra';
import routing from 'frontend/webpack/routing.config';

fsx.copySync(
  routing.paths.frontend.public.root,
  path.resolve(routing.paths.root, './backend/src/main/resources/public')
);
