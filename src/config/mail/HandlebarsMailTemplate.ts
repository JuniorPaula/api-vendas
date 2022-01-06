import handlebars from 'handlebars';
import fs from 'fs';

interface ITemplateVariable {
  [key: string]: string | number;
}

interface IParserMailTamplate {
  file: string;
  variables: ITemplateVariable;
}

export default class HandlebarsMailTemplate {
  public async parser({
    file,
    variables,
  }: IParserMailTamplate): Promise<string> {
    const templatefileContent = await fs.promises.readFile(file, {
      encoding: 'utf-8',
    });
    const parserTemplate = handlebars.compile(templatefileContent);

    return parserTemplate(variables);
  }
}
