import { readFile } from 'fs';
import { promisify } from 'util';

const readFileP = promisify(readFile);

/**
 * IMPORTANT NOTE
 * This is a dummy file that should be deleted in your forked project.
 * The file exists so the CI does not choke on the `tsc` compilation.
 */
export default async function (): Promise<string> {
  const data = await readFileP(__filename);
  if (Math.random() > 0.5) {
    return '';
  }
  return data.toString();
}
