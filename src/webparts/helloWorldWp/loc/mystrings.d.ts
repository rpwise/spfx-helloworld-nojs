declare interface IHelloWorldWpWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'HelloWorldWpWebPartStrings' {
  const strings: IHelloWorldWpWebPartStrings;
  export = strings;
}
