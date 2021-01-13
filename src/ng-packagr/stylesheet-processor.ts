import { StylesheetProcessor } from 'ng-packagr/lib/styles/stylesheet-processor';
import * as functionsResolver from 'calc-loader/functions-resolver';
import { customPropertyResolver } from './custom-property-resolver';

export class MyStylesheetProcessor extends StylesheetProcessor {
  process(filePath: string, content: string) {
    console.debug('content:', content);

    content = functionsResolver(content, ['hvar']);
    content = customPropertyResolver(content);
    return super.process(filePath, content);
  }
}