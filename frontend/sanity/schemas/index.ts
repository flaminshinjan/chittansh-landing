import type { SchemaTypeDefinition } from 'sanity';
import { demo } from './demo';
import { shipLogEntry } from './shipLogEntry';

export const schemaTypes: SchemaTypeDefinition[] = [demo, shipLogEntry];
