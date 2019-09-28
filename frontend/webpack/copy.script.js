import path from 'path';
import fsx from 'fs-extra';
import routing from './routing.config';

fsx.copySync(routing.paths.public.root, copyTo);
