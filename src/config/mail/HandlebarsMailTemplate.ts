import handlebars from 'handlebars';

interface ITemplateVariable {
  [key: string]: string | number;
}

interface IParserMailTamplate {
  template: string;
  variables: ITemplateVariable;
}

export default class HandlebarsMailTemplate {
  public async parser({
    template,
    variables,
  }: IParserMailTamplate): Promise<string> {
    const parserTemplate = handlebars.compile(template);

    return parserTemplate(variables);
  }
}
