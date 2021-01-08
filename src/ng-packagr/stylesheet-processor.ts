import { StylesheetProcessor as _StylesheetProcessor } from 'ng-packagr/lib/styles/stylesheet-processor';
import * as functionsResolver from 'calc-loader/functions-resolver';
import { customPropertyResolver } from './custom-property-resolver';

export class StylesheetProcessor extends _StylesheetProcessor {
  process(filePath: string, content: string) {
    content = functionsResolver(content, ['hvar']);
    content = customPropertyResolver(content);
    return super.process(filePath, content);
  }
}