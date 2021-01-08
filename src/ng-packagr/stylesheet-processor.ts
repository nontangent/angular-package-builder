import { StylesheetProcessor as _StylesheetProcessor } from 'ng-packagr/lib/styles/stylesheet-processor';

export class StylesheetProcessor extends _StylesheetProcessor {
  process(filePath: string, content: string) {
    console.log('YEahhhhhhhhhhhhhh!!!!!!!');
    return super.process(filePath, content);
  }
}